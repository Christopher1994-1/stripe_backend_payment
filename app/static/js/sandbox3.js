"use strict";
document.addEventListener('DOMContentLoaded', function () {
    let retrievedValue = localStorage.getItem('clipOff2');
    let total = localStorage.getItem('total');
    const dataString = localStorage.getItem('data');
    if (dataString) {
        const data = dataString.toString().split(':');
        let cart = document.getElementById('cartNum');
        let cart2 = document.getElementById('cartNum2');
        let l = data.length.toString();
        let l2 = data.length;
        let char = data[0];
        cart.innerHTML = l;
        cart2.innerHTML = l;
    }
    else {
        console.log('cart is empty');
    }
    update_tt_prices(retrievedValue, total);
    let thing = false;
    var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    var elements = stripe.elements();
    var cardNumber = elements.create('cardNumber');
    var cardExpiry = elements.create('cardExpiry');
    var cardCvc = elements.create('cardCvc');
    cardNumber.mount('#card-number-element');
    cardExpiry.mount('#card-expiry-element');
    cardCvc.mount('#card-cvc-element');
});
let productColor = '#1c5c9c';
let checkONE = document.getElementById('check1');
let oneONE = document.getElementById('ball1');
let checkINFO = document.getElementById('infoCHECK');
let checkTWO = document.getElementById('check2');
let twoTWO = document.getElementById('ball2');
let checkBILL = document.getElementById('billCHECK');
let checkTHREE = document.getElementById('check3');
let threeTHREE = document.getElementById('ball3');
let reCHECK = document.getElementById('rere');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let level = '1';
function nextProcess() {
    let firstlevel = document.getElementById('first_slideID');
    let secondlevel = document.getElementById('second_slideID');
    if (level == '1') {
        oneONE.style.display = 'none';
        checkONE.style.display = 'block';
        checkONE.style.display = 'flex';
        checkONE.style.flexDirection = 'column';
        checkINFO.style.color = productColor;
        line1.style.border = '2px solid ' + productColor;
        level = '2';
        firstlevel.style.display = 'none';
        secondlevel.style.display = 'block';
    }
    else if (level == '2') {
        twoTWO.style.display = 'none';
        checkTWO.style.display = 'block';
        checkTWO.style.display = 'flex';
        checkTWO.style.flexDirection = 'column';
        checkBILL.style.color = productColor;
        line2.style.border = '2px solid ' + productColor;
        level = '3';
    }
    else {
        threeTHREE.style.display = 'none';
        checkTHREE.style.display = 'block';
        checkTHREE.style.display = 'flex';
        checkTHREE.style.flexDirection = 'column';
        reCHECK.style.color = productColor;
    }
}
;
function cal_tax(total) {
    let washington_tax = 6.5;
    let new1 = (washington_tax / 100) * total;
    let newSTR = new1.toString();
    let dotIndex = newSTR.indexOf('.');
    let finalL = '';
    if (dotIndex == 1) {
        finalL = newSTR.slice(0, 4);
    }
    else {
        finalL = newSTR.slice(0, 5);
    }
    return finalL;
}
;
function cal_discount(total) {
    let discount = (15 / 100) * total;
    let new_total = total - discount;
    let new_totalSTR = new_total.toString();
    let dot_index = new_totalSTR.indexOf('.');
    let discounted_total = '';
    if (dot_index == 1) {
        discounted_total = new_totalSTR.slice(0, 4);
    }
    else {
        discounted_total = new_totalSTR.slice(0, 5);
    }
    return discounted_total;
}
;
function update_tt_prices(coupon, total) {
    let merchandise = document.getElementById('mer');
    let shipping = document.getElementById('ship');
    let tax = document.getElementById('tax');
    let discountp1 = document.getElementById('discount');
    let discountp2 = document.getElementById('dis');
    let totalNUM = parseFloat(total);
    let taxx = cal_tax(totalNUM);
    let subtotal = document.getElementById('orderTotal');
    let discountPrice = cal_discount(totalNUM);
    if (coupon == 'true') {
        merchandise.innerHTML = ` $${total}`;
        merchandise.style.color = 'red';
        merchandise.style.textDecoration = 'line-through';
        shipping.innerHTML = "$4.99";
        tax.innerHTML = `$${taxx}`;
        discountp1.style.display = 'block';
        discountp2.style.display = 'block';
        discountp2.innerHTML = `$${discountPrice}`;
        let addTAX = parseFloat(taxx);
        let shippingNUM2 = 4.99;
        let toal2 = parseFloat(discountPrice);
        let subtotal11 = addTAX + shippingNUM2 + toal2;
        let formatted1 = subtotal11.toFixed(2);
        subtotal.innerHTML = `$${formatted1}`;
    }
    else {
        merchandise.innerHTML = ` $${total}`;
        shipping.innerHTML = "$4.99";
        tax.innerHTML = `$${taxx}`;
        let taxNUM = parseFloat(taxx);
        let shippingNUM = 4.99;
        let toal = parseFloat(total);
        let subtotal1 = taxNUM + shippingNUM + toal;
        let formatted = subtotal1.toFixed(2);
        subtotal.innerHTML = `$${formatted.toString()}`;
    }
}
;
function auto_fill() {
    let firstname_input = document.getElementById('firstNameID');
    let lastname_input = document.getElementById('lastNameID');
    let street_address = document.getElementById('streetID');
    let zipCode_ = document.getElementById('zipcodeID');
    let townCIty = document.getElementById('townID');
    let countryID = document.getElementById('countryID');
    let phone = document.getElementById('phoneID');
    firstname_input.value = "John";
    lastname_input.value = "Doe";
    street_address.value = "1234 South Skinwalker Ranch";
    zipCode_.value = '98650';
    townCIty.value = 'Vancouver';
    countryID.value = 'United States';
    phone.value = '702-000-000';
}
