const base = require("@playwright/test");

exports.customTest = base.test.extend({
    TestDataforPlaceOrder: {
        username: "husaincycle5@gmail.com",
        password: "Husain@hero",
        productname: "Laptop",
        CountryName: "India"
    }
})