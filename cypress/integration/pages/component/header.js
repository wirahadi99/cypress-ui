export default class header {
    static getMyAccountButton() {
        return cy.get('[data-tooltip="Akun Saya"]');
    }

    static getLoginButton() {
        return cy.get('li > a[href="/account/login"]');
    }

    static getMenCategory() {
        return cy.get('a[href="/collections/men"]').first();
    }
}