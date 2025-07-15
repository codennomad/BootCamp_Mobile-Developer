const {getFullName, getProductLabel} = require("./services/products");
const config = require("./services/config");
const database = require("./services/database")

async function main() {
    console.log("Carrinho Compras:");

    getFullName("408", "mousepad");
    getFullName("508", "mouse");
    getProductLabel("mousepad");

    console.log(config.production);
    console.log(config.version);

    database.connectToDatabase("Mobile");
    database.disconnectToDatabase();
}

main();