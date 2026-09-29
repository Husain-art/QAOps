export class CartPage{

    constructor(page){
        this.page = page;
        // this.productHeading = page.locator("h3",{hasText:"ZARA COAT 3"});
        this.checkout = page.locator("text=checkout");
        this.countryInpField = page.locator("input[placeholder='Select Country']");
        this.countryList = page.locator("button.ng-star-inserted");
        this.submitbutton = page.locator("a.ng-star-inserted");
        this.thankyouText = page.locator("h1.hero-primary");
        this.orderIdText = page.locator("label.ng-star-inserted");
    }


    prductNameheading(productname) {
        return this.page.locator("h3",{hasText:productname});
    }

    async checkoutNdEnterAddrNdSubmit(CountryName){
            await this.checkout.click();
            await this.countryInpField.pressSequentially(CountryName, { delay: 100 });
            await this.countryList.nth(0).waitFor();
            this.page.getByText("India", {exact:true}).click();
            await this.submitbutton.click();
        }

        thankyouTxt(){
            return this.thankyouText;
        }

        async getOrderId(){
            const orderId = await this.orderIdText.textContent();
            // console.log(orderId);
            const atlOrderId = orderId.split(" ");
            // console.log(atlOrderId[2]);
            return atlOrderId[2];
        }
}