const {CartPage} = require("./CartPage");
const {OrderPage} = require("./OrderPage");

export class NavBar{
    constructor(page){
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