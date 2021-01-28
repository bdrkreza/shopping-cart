// document.getElementById("case-increase").addEventListener('click', function() {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value)
//         // console.log(caseCount);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// });
// document.getElementById("case-decrease").addEventListener('click', function() {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;


// });


// Case Handle Button Js Code
// function handleProduct(isIncrease) {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount + 1;
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
//     const subTotal = caseTotal;
//     document.getElementById('subtotal').innerText = subTotal;
// };



// document.getElementById('phone-decrease').addEventListener('click', function() {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1259;
//     document.getElementById('phone-price').innerText = phoneTotal;
// });

// document.getElementById('phone-increase').addEventListener('click', function() {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1259;
//     document.getElementById('phone-price').innerText = phoneTotal;
// });


// Phone Handle Button Js Code 
// function handlePhone(Increase) {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if (Increase == true) {
//         phoneNewCount = phoneCount + 1;
//     } else if (phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1259;
//     document.getElementById('phone-price').innerText = phoneTotal;
//     const subTotal = phoneTotal;
//     document.getElementById('subtotal').innerText = subTotal;
// };

function handleProduct(product, isIncrease) {
    const productInput = document.getElementById(product + "count");
    const productCount = parseInt(productInput.value);
    // const caseNewCount = caseCount + 1;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    // const productTotal = productNewCount * 59;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1259;
    } else if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + "total").innerText = productTotal;
    calculatorTotal();
};

// Total Price count js Code
function getInputvalue(product) {
    const productInput = document.getElementById(product + 'count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

function calculatorTotal() {
    const phoneCount = getInputvalue('phone');
    const caseCount = getInputvalue('case');
    // Subtotal Price Count js Code
    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subtotal').innerText = totalPrice;
    //  tax Count js code
    const tax = totalPrice * 0.1;
    document.getElementById('tax-amount').innerText = tax;
    // Total Price Count js code
    const gradPrice = totalPrice + tax;
    document.getElementById('gradprice').innerText = gradPrice;

}