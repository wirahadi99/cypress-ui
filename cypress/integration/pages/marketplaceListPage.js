export const menCollectionMarketplace = '/collections/men';

export default class MarketplaceListPage {
    static getProductItemTitleByPosition(position) {
        return cy.get('.boost-pfs-filter-product-item-title').eq(position-1);
    }

    static getProductItemPriceByPosition(position) {
        return cy.get('.boost-pfs-filter-product-item-regular-price').eq(position-1);
    }

    static getProductItemByPosition(position) {
        return cy.get('.boost-pfs-filter-product-bottom-inner').eq(position-1);
    }
}