export class ProductPage{

    constructor(page){
        this.firstProduct = page.locator("div.card-body b").nth(0);
        this.product = page.locator("div.card-body");
    }

    async stable(){
        await this.firstProduct.waitFor();
    }

    async addToCart(productname){
                for(let i=0; i< await this.product.count(); i++){
            if(await this.product.nth(i).locator("b").textContent()===productname){
                await this.product.nth(i).locator("text=Add To Cart").click();
                console.log(await this.product.nth(i).locator("b").textContent());
                break;
            }
        }
    }
}