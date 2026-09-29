// const {ProductPage} = require("./ProductPage");
import {ProductPage} from "./ProductPage";
import {Locator, Page} from "@playwright/test";

export class LoginPage{
    page: Page;
    userEmail: Locator;
    userPassword: Locator;
    login: Locator;

    constructor(page:Page){
        this.page = page;
        this.userEmail = page.locator("#userEmail");
        this.userPassword = page.locator("#userPassword");
        this.login = page.locator("#login");
    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
    async validlogin(username: string, password: string){
        await this.userEmail .fill(username);
        await this.userPassword.fill(password);
        await this.login.click();
        const productPage = new ProductPage(this.page);
        return productPage;
}
}
