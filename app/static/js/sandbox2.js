"use strict";
document.addEventListener('DOMContentLoaded', function () {
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
});
function clipOff(num) {
    let indexPlace = num.indexOf('.');
    let finalTotal = '';
    if (indexPlace == 2) {
        finalTotal = num.slice(0, 5);
    }
    else if (indexPlace == 3) {
        finalTotal = num.slice(0, 6);
    }
    to2.innerHTML = "$" + finalTotal;
    to2.style.color = 'green';
    setTimeout(function () {
        to2.style.color = 'black';
    }, 2000);
}
;
let applycode = document.getElementById('applycode');
let undercut = document.getElementById('undercut');
let totalcut = document.getElementById('this');
let to2 = document.getElementById('totalcut');
let clickButton = false;
function applyBtn() {
    let applycodeVALUE = applycode.value;
    let toValue = totalcut.value;
    let valueFloat = parseFloat(toValue);
    if (applycodeVALUE == 'JAJ439') {
        undercut.style.color = 'red';
        undercut.style.textDecoration = 'line-through';
        let subtractionAmount = (15 / 100) * valueFloat;
        let result = valueFloat - subtractionAmount;
        let newValue = result.toString();
        clipOff(newValue);
    }
    clickButton = true;
}
;
function processBtn() {
    if (clickButton == false) {
        localStorage.setItem('clipOff2', 'false');
    }
    else {
        localStorage.setItem('clipOff2', 'true');
    }
    localStorage.setItem('total', totalcut.value);
}
