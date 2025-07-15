// all function that deal with product
//function get Name
async function getFullName(codeId, productName) {
    console.log("Product: " + codeId + " -- " + productName);
    await doBreakLine();
}

// Hidden function(no export)
async function doBreakLine() {
    console.log("\n");
}

//function get Label
async function getProductLabel(productName) {
    console.log("Product " + productName);
}

//exports for aplication
module.exports = {
    getFullName,
    getProductLabel
}