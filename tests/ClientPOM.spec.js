const{test, expect} = require('@playwright/test');
const{LoginPage} = require("../pagObjects/LoginPage");
const{NavBar} = require("../pagObjects/NavBar.js");
const dataSet = require("./Utils/PlaceOrderTestData.json");
// const dataSet = JSON.parse(JSON.stringify(require("./Utils/PlaceOrderTestData.json")));
const{customTest} = require("./Utils/test_Base.js")
const { verify } = require('node:crypto');

for(const data of dataSet){
test.only(`Client app Login for ${data.productname}`, async({page})=>
    {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        const productPage = await loginPage.validlogin(data.username, data.password);

        await productPage.stable();
        await productPage.addToCart(data.productname);
        
        const navBar = new NavBar(page);
        const cartPage = await navBar.gotoCart();

        await expect(cartPage.prductNameheading(data.productname)).toBeVisible();
        await cartPage.checkoutNdEnterAddrNdSubmit(data.CountryName)
        await expect(cartPage.thankyouTxt()).toHaveText("Thankyou for the order. ");
        const orderId = await cartPage.getOrderId();
        console.log(orderId);

        const orderPage = await navBar.gotoOrdrPage();

        const orderIdDetail = await orderPage.verifyOrderId(orderId);
        expect(orderId.includes(orderIdDetail)).toBeTruthy();
        await page.pause();
})
}

customTest(`Client app Login`, async({page, TestDataforPlaceOrder})=>
    {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        const productPage = await loginPage.validlogin(TestDataforPlaceOrder.username, TestDataforPlaceOrder.password);

        await productPage.stable();
        await productPage.addToCart(TestDataforPlaceOrder.productname);
        
        const navBar = new NavBar(page);
        const cartPage = await navBar.gotoCart();

        await expect(cartPage.prductNameheading(TestDataforPlaceOrder.productname)).toBeVisible();
        await cartPage.checkoutNdEnterAddrNdSubmit(TestDataforPlaceOrder.CountryName)
        await expect(cartPage.thankyouTxt()).toHaveText("Thankyou for the order. ");
        const orderId = await cartPage.getOrderId();
        console.log(orderId);

        const orderPage = await navBar.gotoOrdrPage();

        const orderIdDetail = await orderPage.verifyOrderId(orderId);
        expect(orderId.includes(orderIdDetail)).toBeTruthy();
        await page.pause();
})