import { Page, Locator } from "@playwright/test";
import {CartPage} from "./CartPage"
import {OrderPage} from "./OrderPage"


export class NavBar{
    page: Page
    cartButton: Locator;
    orderPageButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.cartButton = page.locator("button[routerlink='/dashboard/cart']");
        this.orderPageButton = page.locator("button[routerlink='/dashboard/myorders']")
    }

    async gotoCart(){
        await this.cartButton.click();
        const cartPage = new CartPage(this.page);
        return cartPage;
    }

    async gotoOrdrPage(){
        await this.orderPageButton.click();
        const orderPage = new OrderPage(this.page);
        return orderPage;
    }
}