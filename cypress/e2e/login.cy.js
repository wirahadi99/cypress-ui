import loginPage from "../pom/loginPage.cy";
describe('Login', function () {
  
  it(
    'login', function () {

      const user = [
      {
        username: 'standard_user',
        password: 'secret_sauce',
        account: 'valid'
      },
      {
        username: 'standard_user',
        password: 'error ',
        account: 'invalid'
      }
    ];

      loginPage.visitHome();
      for (let index = 0; index < user.length; index++) {
        loginPage.login(user[index].username,user[index].password);
        
        if (user[index].account === 'valid'){
          cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
          loginPage.visitHome();
        }else{
        loginPage.getErrorLogin().should('be.visible');
        }
      }
    }
  );
});
