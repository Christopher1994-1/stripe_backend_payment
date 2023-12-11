document.addEventListener('DOMContentLoaded', function () {


    let retrievedValue = localStorage.getItem('clipOff2');


    const dataString = localStorage.getItem('data');
    if (dataString) {
        const data = dataString.toString().split(':');
        let cart: any = document.getElementById('cartNum');
        let cart2: any = document.getElementById('cartNum2');
        let l: any = data.length.toString();
        let l2:any = data.length
        let char = data[0];

        cart.innerHTML = l;
        cart2.innerHTML = l;

    } 
    else {
        console.log('cart is empty')
    }

    let thing:boolean = false;

    var stripe:any = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    // Create an instance of Elements
    var elements = stripe.elements();

    // Create an instance of the card number Element.
    var cardNumber = elements.create('cardNumber');

    // Create an instance of the expiration date Element.
    var cardExpiry = elements.create('cardExpiry');

    // Create an instance of the CVC Element.
    var cardCvc = elements.create('cardCvc');

    // Add the card elements into their respective containers
    cardNumber.mount('#card-number-element');
    cardExpiry.mount('#card-expiry-element');
    cardCvc.mount('#card-cvc-element');


});

let productColor:string = '#1c5c9c'



let checkONE:any = document.getElementById('check1');
let oneONE:any = document.getElementById('ball1');
let checkINFO:any = document.getElementById('infoCHECK');


let checkTWO:any = document.getElementById('check2');
let twoTWO:any = document.getElementById('ball2');
let checkBILL:any = document.getElementById('billCHECK');


let checkTHREE:any = document.getElementById('check3');
let threeTHREE:any = document.getElementById('ball3');
let reCHECK:any = document.getElementById('rere');



let line1:any = document.getElementById('line1');
let line2:any = document.getElementById('line2');


let level:string = '1';

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