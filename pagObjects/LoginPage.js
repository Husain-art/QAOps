const {ProductPage} = require("./ProductPage");
export class LoginPage{

    constructor(page){
        this.page = page;
        this.userEmail = page.locator("#userEmail");
        this.userPassword = page.locator("#userPassword");
        this.login = page.locator("#login");
    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
    async validlogin(username, password){
        await this.userEmail .fill(username);
        await this.userPassword.fill(password);
        await this.login.click();
        const productPage = new ProductPage(this.page);
        return productPage;
}
}
