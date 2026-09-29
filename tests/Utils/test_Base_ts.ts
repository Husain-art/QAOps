// const base = require("@playwright/test");
import {test as baseTest} from "@playwright/test";
interface TestDataforPlaceOrder {
    username: string;
    password: string;
    productname: string;
    CountryName: string;
}

export const customTest = baseTest.extend<{testDataforPlaceOrder: TestDataforPlaceOrder}>({

    testDataforPlaceOrder: {
        username: "husaincycle5@gmail.com",
        password: "Husain@hero",
        productname: "Laptop",
        CountryName: "India"
    }
})