import { Locator, Page } from "@playwright/test";

export class OrderPage{
    orderTable: Locator;
    orderList: Locator;
    orderViewId: Locator;

    constructor(page:Page){
        this.orderTable = page.locator("tbody")
        this.orderList = page.locator("tr.ng-star-inserted");
        this.orderViewId = page.locator("div.col-text");
    }
    
    async verifyOrderId(orderId:string){
                await this.orderTable.waitFor();
        for(let i=0; i<await this.orderList.count(); i++){
            if(await this.orderList.nth(i).locator("th").textContent()===orderId){
                await this.orderList.nth(i).locator("button[class='btn btn-primary']").click();
            }
        }
        const orderIdDetail = await this.orderViewId.textContent();
        return orderIdDetail;
    }
}