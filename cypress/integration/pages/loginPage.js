export const loginPageUrl = 'account/login';


export default class LoginPage {
    static getEmailField() {
        return cy.get('[name="customer[email]"]');
    }

    static getPasswordField() {
        return cy.get('[name="customer[password]"]');
    }

    static getLoginButton() {
        return cy.get('[type="submit"]').contains('LOGIN');
    }

    static submitLogin({email, password}) {
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
}

