//VAT 1 base price and return price including vat
//base price
const price = function (number) {
    console.log("Entering price..");
    return Math.abs(number * 1);
};

// vat
const vat = function (number) {
    console.log("Entering vat..");
    if (number = number * 1.21) {
        return number;
    }
    return number;
};

//base price incl. vat
const multiplication = function (number) {
    console.log("Entering multiplication..");
    return number;
};

const doComplexCalculation = function (number) {
    console.log("Entering doComplexCalculation..");
    console.log(number);
    const price1 = price(number);
    const vat1 = vat(price1);
    const squarednumber = multiplication(vat1);
    return squarednumber;
};

console.log(doComplexCalculation(5));




