document.addEventListener('DOMContentLoaded', function () {

    let retrievedValue:any = localStorage.getItem('clipOff2');
    let total:any = localStorage.getItem('total');


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

    update_tt_prices(retrievedValue, total)

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
    let firstlevel:any = document.getElementById('first_slideID');
    let secondlevel:any = document.getElementById('second_slideID');


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

};


function cal_tax(total:number) {
    let washington_tax = 6.5

    let new1:any = (washington_tax / 100) * total
    let newSTR = new1.toString()
    let dotIndex = newSTR.indexOf('.')

    let finalL:string = ''

    if (dotIndex == 1) {
        finalL = newSTR.slice(0, 4)
    } else {
        finalL = newSTR.slice(0, 5)
    }

    return finalL

};


function cal_discount(total:number) {
    let discount = (15/100) * total;
    let new_total = total - discount;
    let new_totalSTR = new_total.toString();

    let dot_index = new_totalSTR.indexOf('.');

    let discounted_total:string = '';

    if (dot_index == 1) {
        discounted_total = new_totalSTR.slice(0, 4);
    } else {
        discounted_total = new_totalSTR.slice(0, 5);
    }

    return discounted_total

};



function update_tt_prices(coupon:string, total:string) {
    // HTML Elements
    let merchandise:any = document.getElementById('mer');
    let shipping:any = document.getElementById('ship');
    let tax:any = document.getElementById('tax')

    let discountp1:any = document.getElementById('discount');
    let discountp2:any = document.getElementById('dis');

    let totalNUM = parseFloat(total);
    let taxx:string = cal_tax(totalNUM);

    let subtotal:any = document.getElementById('orderTotal');

    let discountPrice:any = cal_discount(totalNUM);

    if (coupon == 'true') {
        merchandise.innerHTML = ` $${total}`;
        merchandise.style.color = 'red';
        merchandise.style.textDecoration = 'line-through';
        shipping.innerHTML = "$4.99";
        tax.innerHTML = `$${taxx}`;


        discountp1.style.display = 'block';
        discountp2.style.display = 'block';
        discountp2.innerHTML = `$${discountPrice}`;

        let addTAX:any = parseFloat(taxx);
        let shippingNUM2:any = 4.99;
        let toal2:any = parseFloat(discountPrice);


        let subtotal11:any = addTAX + shippingNUM2 + toal2
        let formatted1:any = subtotal11.toFixed(2)

        subtotal.innerHTML = `$${formatted1}`
    } 
    else {
        merchandise.innerHTML = ` $${total}`;
        shipping.innerHTML = "$4.99";
        tax.innerHTML = `$${taxx}`;

        let taxNUM:any = parseFloat(taxx);
        let shippingNUM:any = 4.99;
        let toal:any = parseFloat(total);


        let subtotal1:any = taxNUM + shippingNUM + toal
        let formatted:any = subtotal1.toFixed(2)

        subtotal.innerHTML = `$${formatted.toString()}`

    }
};




function auto_fill() {
    let firstname_input:any = document.getElementById('firstNameID');
    let lastname_input:any = document.getElementById('lastNameID');
    let street_address:any = document.getElementById('streetID');
    let zipCode_:any = document.getElementById('zipcodeID');
    let townCIty:any = document.getElementById('townID');
    let countryID:any = document.getElementById('countryID');
    let phone:any = document.getElementById('phoneID');


    firstname_input.value = "John";
    lastname_input.value = "Doe";
    street_address.value = "1234 South Skinwalker Ranch";
    zipCode_.value = '98650';
    townCIty.value = 'Vancouver';
    countryID.value = 'United States';
    phone.value = '702-000-000';



}