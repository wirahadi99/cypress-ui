export default class NavbarFilter {
    static getNavbarFilterCheckbox(filterName) {
        return cy.get('.boost-pfs-filter-option-value').contains(filterName);
    }

    static getFilterMinimumAmount() {
        return cy.get('.boost-pfs-filter-option-range-amount-min');
    }

    static getFilterMaximumAmount() {
        return cy.get('.boost-pfs-filter-option-range-amount-max');
    }

    static typeFilterMinimumAmount(minAmount) {
        this.getFilterMinimumAmount().scrollIntoView();
        his.getFilterMaximumAmount().click();
        this.getFilterMinimumAmount().clear();
        this.getFilterMinimumAmount().type(`${minAmount}{enter}`);
    }

    static typeFilterMaximumAmount(maxAmount) {
        this.getFilterMaximumAmount().scrollIntoView();
        this.getFilterMaximumAmount().click();
        this.getFilterMaximumAmount().clear();
        this.getFilterMaximumAmount().type(`${maxAmount}{enter}`);

    }
}