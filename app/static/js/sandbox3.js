"use strict";
document.addEventListener('DOMContentLoaded', function () {
    let retrievedValue = localStorage.getItem('clipOff2');
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
    if (level == '1') {
        oneONE.style.display = 'none';
        checkONE.style.display = 'block';
        checkONE.style.display = 'flex';
        checkONE.style.flexDirection = 'column';
        checkINFO.style.color = productColor;
        line1.style.border = '2px solid ' + productColor;
        level = '2';
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
