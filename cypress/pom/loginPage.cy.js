export default class loginPage {
    
    static getUsernameField() {
        return cy.get('#user-name');
    }

    static getPasswordField() {
        return cy.get('#password');
    }

    static getButtonLogin() {
        return cy.get('#login-button');
    }

    static getErrorLogin(){
        return cy.get('h3');
    }

    static visitHome(){
        return cy.visit('https://www.saucedemo.com/');
    }

    static login (username, password){

        this.getUsernameField().type(username);
        this.getPasswordField().type(password);
        this.getButtonLogin().click();
    }
}