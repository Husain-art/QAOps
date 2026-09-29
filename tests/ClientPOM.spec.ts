import {test, expect} from '@playwright/test';
import {LoginPage} from '../pagObjects_ts/LoginPage';
import {NavBar} from '../pagObjects_ts/NavBar';
import dataSet from "./Utils/PlaceOrderTestData.json"
import {customTest} from "./Utils/test_Base_ts";
// const dataSet = JSON.parse(JSON.stringify(require("./Utils/PlaceOrderTestData.json")));
// const { verify } = require('node:crypto');

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
 
customTest(`Client app Login`, async({page, testDataforPlaceOrder})=>
    {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        const productPage = await loginPage.validlogin(testDataforPlaceOrder.username, testDataforPlaceOrder.password);

        await productPage.stable();
        await productPage.addToCart(testDataforPlaceOrder.productname);
        
        const navBar = new NavBar(page);
        const cartPage = await navBar.gotoCart();

        await expect(cartPage.prductNameheading(testDataforPlaceOrder.productname)).toBeVisible();
        await cartPage.checkoutNdEnterAddrNdSubmit(testDataforPlaceOrder.CountryName)
        await expect(cartPage.thankyouTxt()).toHaveText("Thankyou for the order. ");
        const orderId = await cartPage.getOrderId();
        console.log(orderId);

        const orderPage = await navBar.gotoOrdrPage();

        const orderIdDetail = await orderPage.verifyOrderId(orderId);
        expect(orderId.includes(orderIdDetail)).toBeTruthy();
        await page.pause();
})