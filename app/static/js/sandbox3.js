"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let returnURL = 'http://127.0.0.1:8000/successful_pay';
document.addEventListener('DOMContentLoaded', function () {
    var stripe = Stripe('pk_test_51OF1EMH12wPbXhJ68EXbZb8FX8jjVv5JyuHndUyjiBj8bSnpWd5LvrfYy1WLLCuQkKkjDBGx3ZVPXcrZYVgznJ66002dk659Z8');
    var elements = stripe.elements();
    var cardNumber = elements.create('cardNumber');
    cardNumber.update({ placeholder: 'Vaild Card Number' });
    var cardExpiry = elements.create('cardExpiry');
    var cardCvc = elements.create('cardCvc');
    cardNumber.mount('#card-number-element');
    cardExpiry.mount('#card-expiry-element');
    cardCvc.mount('#card-cvc-element');
    let items = '';
    initialize();
    checkStatus();
    function initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
            const csrfValue = csrfToken.value;
            const response = yield fetch("/stripeIntentView", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrfValue
                },
                body: JSON.stringify({ items }),
            });
            const { clientSecret } = yield response.json();
            const appearance = {
                theme: 'stripe',
            };
            elements = stripe.elements({ appearance, clientSecret });
            const paymentElementOptions = {
                layout: "tabs",
            };
            const paymentElement = elements.create("payment", paymentElementOptions);
            paymentElement.mount("#payment-element");
        });
    }
    ;
    const form = document.querySelector("#payment-form");
    form.addEventListener("submit", handleSubmit);
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            setLoading(true);
            let emailAddress = 'kirko190255@gmail.com';
            const { error } = yield stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: returnURL,
                    receipt_email: emailAddress,
                },
            });
            if (error.type === "card_error" || error.type === "validation_error") {
                showMessage(error.message);
            }
            else {
                showMessage("An unexpected error occurred.");
            }
            setLoading(false);
        });
    }
    ;
    function checkStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
            if (!clientSecret) {
                return;
            }
            const { paymentIntent } = yield stripe.retrievePaymentIntent(clientSecret);
            switch (paymentIntent.status) {
                case "succeeded":
                    showMessage("Payment succeeded!");
                    break;
                case "processing":
                    showMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    showMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    showMessage("Something went wrong.");
                    break;
            }
        });
    }
    ;
    function showMessage(messageText) {
        const messageContainer = document.querySelector("#payment-message");
        messageContainer.classList.remove("hidden");
        messageContainer.textContent = messageText;
        setTimeout(function () {
            messageContainer.classList.add("hidden");
            messageContainer.textContent = "";
        }, 4000);
    }
    ;
    function setLoading(isLoading) {
        let sumbit_btn = document.querySelector('#submit');
        let spinner = document.querySelector('#button-text2');
        let buttonText = document.querySelector("#button-text");
        if (isLoading) {
            sumbit_btn.disabled = true;
            buttonText.style.display = 'none';
            spinner.style.display = 'block';
        }
        else {
            sumbit_btn.disabled = false;
            buttonText.style.display = 'block';
            spinner.style.display = 'none';
        }
    }
    ;
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
    ;
    update_tt_prices(retrievedValue, total);
});
let messages_msg = document.getElementById('messagesID');
function show_message(message, seconds) {
    messages_msg.style.display = 'block';
    messages_msg.innerHTML = `<div style="
    color: white; 
    font-size: 18px; 
    padding: 10px; 
    font-family:Arial, Helvetica, sans-serif;
    ">${message}</div>`;
    setTimeout(function () {
        messages_msg.style.display = 'none';
    }, seconds);
}
;
const addMessage = (message) => {
    const messagesDiv = document.querySelector('#messages');
    messagesDiv.style.display = 'block';
    console.log(`Debug: ${message}`);
};
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
    let firstSlide_info = document.getElementById('infoSlide1ID');
    let secondlide_info = document.getElementById('infoSlide2ID');
    let first_slide_verf = verify_slide_one();
    if (level == '1' && first_slide_verf == true) {
        oneONE.style.display = 'none';
        checkONE.style.display = 'block';
        checkONE.style.display = 'flex';
        checkONE.style.flexDirection = 'column';
        checkINFO.style.color = productColor;
        line1.style.border = '2px solid ' + productColor;
        level = '2';
        firstlevel.style.opacity = 0;
        setTimeout(function () {
            firstlevel.style.display = 'none';
            secondlevel.style.display = 'block';
        }, 1000);
        firstSlide_info.style.display = 'none';
        secondlide_info.style.display = 'block';
    }
    else {
        checking_first_nameNXTBTN();
        checking_last_nameNXTBTN();
        checking_street_nameNXTBTN();
        checking_zip_nameNXTBTN();
        checking_country_nameNXTBTN();
        checking_phone_nameNXTBTN();
        checking_town_nameNXTBTN();
        show_message("Error: Incomplete data detected. Please complete all inputs or utilize the 'Auto Fill' option.", 6000);
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
    let firstname_input = document.getElementById('firstNameID1');
    let lastname_input = document.getElementById('lastNameID2');
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
    phone.value = '702000000';
    firstName_pass = true;
    lastName_pass = true;
    street_pass = true;
    zipper_pass = true;
    townCity_pass = true;
    country_pass = true;
    phone_pass = true;
}
;
let firstName_pass = false;
let lastName_pass = false;
let street_pass = false;
let zipper_pass = false;
let townCity_pass = false;
let country_pass = false;
let phone_pass = false;
function verify_slide_one() {
    if (firstName_pass == true && lastName_pass == true && street_pass == true && zipper_pass == true && townCity_pass == true && country_pass == true && phone_pass == true) {
        return true;
    }
    else {
        return false;
    }
}
;
function check_first_name() {
    let firstname_input1 = document.getElementById('firstNameID1');
    let first_name_value = firstname_input1.value;
    let first_name_length = first_name_value.length;
    let redBorder = '2px solid red';
    let normalBorder = '1px solid #1c5c9c';
    if (first_name_length > 2) {
        firstName_pass = true;
        firstname_input1.style.border = normalBorder;
    }
    else if (first_name_length < 2) {
        firstname_input1.style.border = redBorder;
        firstName_pass = false;
    }
}
;
function check_last_name() {
    let firstname_input1 = document.getElementById("lastNameID2");
    let first_name_value = firstname_input1.value;
    let first_name_length = first_name_value.length;
    let redBorder = '2px solid red';
    let normalBorder = '1px solid #1c5c9c';
    if (first_name_length > 2) {
        lastName_pass = true;
        firstname_input1.style.border = normalBorder;
    }
    else if (first_name_length < 2) {
        firstname_input1.style.border = redBorder;
        lastName_pass = false;
    }
}
;
function check_address_name() {
    let firstname_input1 = document.getElementById("streetID");
    let first_name_value = firstname_input1.value;
    let first_name_length = first_name_value.length;
    let redBorder = '2px solid red';
    let normalBorder = '1px solid #1c5c9c';
    if (first_name_length > 6) {
        street_pass = true;
        firstname_input1.style.border = normalBorder;
    }
    else if (first_name_length < 6) {
        firstname_input1.style.border = redBorder;
        street_pass = false;
    }
}
;
function check_zipper_name() {
    let firstname_input1 = document.getElementById("zipcodeID");
    let first_name_value = firstname_input1.value;
    let first_name_length = first_name_value.length;
    let zipperBOOL = isNumeric(first_name_value);
    let redBorder = '2px solid red';
    let normalBorder = '1px solid #1c5c9c';
    if (zipperBOOL == false && first_name_length == 0) {
        firstname_input1.value = '';
        firstname_input1.style.border = redBorder;
        show_message('Error: Please enter only numerical values', 4000);
    }
    else if (first_name_length > 0 && !zipperBOOL) {
        let non_num_value = first_name_length - 1;
        let new_value = first_name_value.slice(0, non_num_value);
        firstname_input1.value = new_value;
        firstname_input1.style.border = redBorder;
        show_message('Error: Please enter only numerical values', 4000);
    }
    else if (first_name_length == 5 && zipperBOOL) {
        firstname_input1.style.border = normalBorder;
        zipper_pass = true;
    }
    else if (first_name_length > 5) {
        let non_num_value = first_name_length - 1;
        let new_value = first_name_value.slice(0, non_num_value);
        firstname_input1.value = new_value;
    }
}
;
function check_townCity() {
    let firstname_input1 = document.getElementById('townID');
    let first_name_value = firstname_input1.value;
    let first_name_length = first_name_value.length;
    let redBorder = '2px solid red';
    let normalBorder = '1px solid #1c5c9c';
    if (first_name_length > 2) {
        townCity_pass = true;
        firstname_input1.style.border = normalBorder;
    }
    else if (first_name_length < 2) {
        firstname_input1.style.border = redBorder;
        townCity_pass = false;
    }
}
;
function check_country() {
    let firstname_input1 = document.getElementById('countryID');
    let first_name_value = firstname_input1.value;
    let first_name_length = first_name_value.length;
    let redBorder = '2px solid red';
    let normalBorder = '1px solid #1c5c9c';
    if (first_name_length > 2) {
        country_pass = true;
        firstname_input1.style.border = normalBorder;
    }
    else if (first_name_length < 2) {
        firstname_input1.style.border = redBorder;
        country_pass = false;
    }
}
;
function check_phone_number() {
    let firstname_input1 = document.getElementById("phoneID");
    let first_name_value = firstname_input1.value;
    let first_name_length = first_name_value.length;
    let zipperBOOL = isNumeric(first_name_value);
    let redBorder = '2px solid red';
    let normalBorder = '1px solid #1c5c9c';
    if (zipperBOOL == false && first_name_length == 0) {
        firstname_input1.value = '';
        firstname_input1.style.border = redBorder;
        show_message('Error: Please enter only numerical values', 4000);
    }
    else if (first_name_length > 0 && !zipperBOOL) {
        let non_num_value = first_name_length - 1;
        let new_value = first_name_value.slice(0, non_num_value);
        firstname_input1.value = new_value;
        firstname_input1.style.border = redBorder;
        show_message('Error: Please enter only numerical values', 4000);
    }
    else if (first_name_length == 10 && zipperBOOL) {
        firstname_input1.style.border = normalBorder;
        phone_pass = true;
    }
    else if (first_name_length > 10) {
        let non_num_value = first_name_length - 1;
        let new_value = first_name_value.slice(0, non_num_value);
        firstname_input1.value = new_value;
    }
}
;
function isNumeric(value) {
    return /^\d+$/.test(value) || /^-\d+$/.test(value) || /^\d+\.\d+$/.test(value) || /^-\d+\.\d+$/.test(value);
}
;
function checking_first_nameNXTBTN() {
    let firstname_input = document.getElementById('firstNameID1');
    let redBorder = '2px solid red';
    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder;
    }
}
;
function checking_last_nameNXTBTN() {
    let firstname_input = document.getElementById('lastNameID2');
    let redBorder = '2px solid red';
    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder;
    }
}
;
function checking_street_nameNXTBTN() {
    let firstname_input = document.getElementById('streetID');
    let redBorder = '2px solid red';
    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder;
    }
}
;
function checking_zip_nameNXTBTN() {
    let firstname_input = document.getElementById('zipcodeID');
    let redBorder = '2px solid red';
    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder;
    }
}
;
function checking_town_nameNXTBTN() {
    let firstname_input = document.getElementById('townID');
    let redBorder = '2px solid red';
    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder;
    }
}
;
function checking_country_nameNXTBTN() {
    let firstname_input = document.getElementById('countryID');
    let redBorder = '2px solid red';
    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder;
    }
}
;
function checking_phone_nameNXTBTN() {
    let firstname_input = document.getElementById('phoneID');
    let redBorder = '2px solid red';
    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder;
    }
}
;
const myDictionary = {
    Generic_Decline: '4000000000000002',
    Insufficient_Funds: '4000000000009995',
    Expired_Card: '4000000000000069',
    Incorrect_CVC: '4000000000000127',
    Incorrect_Number: '4242424242424241',
    Normal_Scenario: '4242424242424242'
};
function update_card_details() {
    let infoBox = document.getElementById('inBox');
    let innerID = document.getElementById('user_option_choice');
    let user_cardHolder = document.getElementById('card_numbersss');
    let selected = document.getElementById('scenario_selectorID');
    let selectedValue = selected.value;
    let selectedValue_split = selectedValue.toString().split('_').join(' ');
    let copy_icon = document.getElementById('non_copy');
    let card_choice = myDictionary[selectedValue];
    if (selectedValue == 'Pick_Scenario') {
        show_message('Must choose a valid card option', 4000);
        infoBox.style.display = 'none';
    }
    else {
        infoBox.style.display = 'block';
        innerID.innerHTML = selectedValue_split;
        user_cardHolder.innerHTML = card_choice;
        copy_icon.style.display = 'block';
    }
}
;
function copy_number() {
    let check_icon = document.getElementById('number_copied');
    let copy_icon = document.getElementById('non_copy');
    let selected = document.getElementById('scenario_selectorID');
    let selectedValue = selected.value;
    let joined = myDictionary[selectedValue].toString();
    copyToClipboard(joined);
    copy_icon.style.display = 'none';
    check_icon.style.display = 'block';
    setTimeout(function () {
        let infoboxend = document.getElementById('inBox');
        infoboxend.style.display = 'none';
        copy_icon.style.diplay = 'block';
        check_icon.style.display = 'none';
    }, 6000);
}
;
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => {
        })
            .catch((err) => {
        });
    }
    else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}
;
