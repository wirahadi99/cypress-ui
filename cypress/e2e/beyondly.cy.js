import { faker } from '@faker-js/faker';

describe('E2E Test Flow', () => {
  it('Performs user registration, address entry, product purchase, and order placement', () => {
    // Visit the website
    cy.visit('https://recruitment-staging-queenbee.paradev.io/');
    
    // Click on the modal image and proceed to register
    cy.get('#chakra-modal--header-1 > svg').click();
    cy.contains('button', 'Daftar Jadi Member').click();

    // Select "Daftar" button and proceed
    cy.get('#__next > div > div > div > div:nth-child(2) > div > div.style_overview-page__right__veiOW.col-xl-7 > div > div > div.chakra-radio-group.css-14bs28v > label:nth-child(2) > span.chakra-radio__control.css-rcjwey').click(); 
    cy.contains('button', 'Lanjut').click();

    // Fill out the registration form
    cy.get('input[placeholder="Isi dengan nama lengkap Anda"]').type(faker.person.fullName());
    cy.get('input[placeholder="Contoh: 81234567890"]').type(`8${faker.string.numeric(9)}`);
    cy.get('input[placeholder="Isi dengan email Anda"]').type(faker.internet.email());
    cy.get('input[placeholder="Tulis password Anda di sini"]').type('Brandal17!');
    cy.contains('button', 'Daftar').click();

    // Complete WhatsApp verification
    cy.contains('button', 'Whatsapp').click();
    const otp = ['1', '2', '3', '4', '5', '6'];
    otp.forEach((digit, index) => {
      cy.get(`#pin-input-13-${index}`).type(digit);
    });
    cy.contains('button', 'Kirim').click();
    cy.contains('button', 'Lanjutkan').click();

    // Enter address details
    cy.contains('Isi Alamat').click();
    cy.contains('button', 'Alamat Baru').click();
    cy.get('input[placeholder="Contoh: Rumah saya"]').type('rumah contoh');
    cy.get('#add-address__receiver-name').type(faker.person.fullName());
    cy.get('#add-address__receiver-number').type(`8${faker.string.numeric(9)}`);

    // Select dropdowns for location
    cy.get('.css-19bb58m').click();
    cy.contains('Banten').click();
    cy.get('.css-p9tl2f-control').first().click();
    cy.contains('Kab. Serang').click();
    cy.get('#add-address__receiver-districts .css-p9tl2f-control').click();
    cy.contains('Binuang').click();
    cy.get('#add-address__receiver-urban .css-p9tl2f-control').click();
    cy.contains('Cakung').click();

    // Enter detailed address and save it
    cy.get('input[placeholder="Isikan dengan detail alamat"]').type('alamat lengkap');
    cy.contains('label', 'Jadikan alamat utama Alamat').find('span').first().click();
    cy.contains('button', 'Simpan Alamat').click();

    // Interact with cookies and add products to cart
    cy.contains('button', 'Izinkan semua cookies').click();
    const productSelectors = [
      'Fitclair Collagen DrinkRp324.000PROMO10%',
      'Peppermint Single Essential Oil 10 mlRp180.000',
      'Lemon Single Essential Oil 10 mlRp145.000',
      'Lavender Single Essential Oil 10 mlRp250.000',
    ];
    productSelectors.forEach((selector) => {
      cy.contains('div', new RegExp(`^${selector}$`)).find('#add-to-cart-recomendation').click();
    });

    // Proceed to checkout
    cy.get('li').contains('3').find('img').click();
    cy.get('.css-1ilyui9 > button').eq(2).click();
    cy.contains('button', 'Beli sekarang').click();
    cy.contains('button', 'Selanjutnya').click().click();
    cy.contains('button', 'Selesai').click();

    // Select shipping method
    cy.contains('heading', 'Pilih layanan pengiriman').click();
    cy.contains('label', 'Regular TERMURAH').click();
    cy.contains('label', 'jne').click();
    cy.contains('button', 'Pilih Pembayaran').click();

    // Assert success message
    cy.get('#chakra-toast-manager-top').contains('Pesanan berhasil dipesan.').should('be.visible');
  });
});
