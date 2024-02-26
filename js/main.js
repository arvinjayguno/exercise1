 
const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("Sum");
const difference = document.getElementById("Difference");
const product = document.getElementById("Product");
const quotient = document.getElementById("Quotient");
let sum = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        Sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        Difference = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        Product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        Quotient = parseInt(num1Txt.value) / parseInt(num2Txt.value);

        sumTxt.innerHTML = Sum;
        difference.innerHTML = Difference;
        product.innerHTML = Product;
        quotient.innerHTML = Quotient;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    sumTxt.innerHTML = "";
    product.innerHTML = "";
    difference.innerHTML = "";
    quotient.innerHTML = "";
    sum = 0;
}