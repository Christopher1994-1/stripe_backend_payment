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





// = Code for the messages pop up

let messages_msg:any = document.getElementById('messagesID');

function show_message(message:string, seconds:number) {
    messages_msg.style.display = 'block';
    messages_msg.innerHTML = `<div style="
    color: white; 
    font-size: 18px; 
    padding: 10px; 
    font-family:Arial, Helvetica, sans-serif;
    ">${message}</div>`;

    setTimeout(function() {
        messages_msg.style.display = 'none';
    }, seconds);
};






// .
// !
// =
// ,
// *
// TODO 
// BUG 













// = ///////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// //////////
// ! code section to process when user clicks the next button



// . code for changing between user info input section and payment info input

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
    let firstSlide_info:any = document.getElementById('infoSlide1ID');
    let secondlide_info:any = document.getElementById('infoSlide2ID');

    let first_slide_verf = verify_slide_one();


    if (level == '1' && first_slide_verf == true) {
        oneONE.style.display = 'none';
        checkONE.style.display = 'block';
        checkONE.style.display = 'flex';
        checkONE.style.flexDirection = 'column';
        checkINFO.style.color = productColor;
        line1.style.border = '2px solid ' + productColor;
        level = '2';
        firstlevel.style.display = 'none';
        secondlevel.style.display = 'block';

        firstSlide_info.style.display = 'none';
        secondlide_info.style.display = 'block';
    }
    else {
        checking_first_nameNXTBTN()
        checking_last_nameNXTBTN()
        checking_street_nameNXTBTN()
        checking_zip_nameNXTBTN()
        checking_country_nameNXTBTN()
        checking_phone_nameNXTBTN()
        checking_town_nameNXTBTN()
        show_message("Error: Incomplete data detected. Please complete all inputs or utilize the 'Auto Fill' option.", 6000)
    }
    // }
    // else if (level == '2') {
    //     twoTWO.style.display = 'none';
    //     checkTWO.style.display = 'block';
    //     checkTWO.style.display = 'flex';
    //     checkTWO.style.flexDirection = 'column';
    //     checkBILL.style.color = productColor;
    //     line2.style.border = '2px solid ' + productColor;
    //     level = '3';
    // }
    // else {
    //     threeTHREE.style.display = 'none';
    //     checkTHREE.style.display = 'block';
    //     checkTHREE.style.display = 'flex';
    //     checkTHREE.style.flexDirection = 'column';
    //     reCHECK.style.color = productColor;
    // }

};


// = ///////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// //////////























// = ///////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// //////////
// ! Miscellaneous functions 



// . function that calculates the tax // 
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


// . function to calculate the discount
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


// . function that updates the prices when page is loaded
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


// . function that updates the user info inputs with stuff
function auto_fill() {
    let firstname_input:any = document.getElementById('firstNameID1');
    let lastname_input:any = document.getElementById('lastNameID2');
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
    phone.value = '702000000';


    firstName_pass = true;
    lastName_pass = true;
    street_pass = true;
    zipper_pass = true;
    townCity_pass = true;
    country_pass = true;
    phone_pass = true;
};




// = ///////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// //////////


















// ! checking each input
// = ///////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// //////////

// . input status varibles

let firstName_pass:boolean = false;
let lastName_pass:boolean = false;
let street_pass:boolean = false;
let zipper_pass:boolean = false;
let townCity_pass:boolean = false;
let country_pass:boolean = false;
let phone_pass:boolean = false;



function verify_slide_one() {
    if (firstName_pass == true && lastName_pass == true && street_pass == true && zipper_pass == true && townCity_pass == true && country_pass == true && phone_pass == true ) {
        return true;
    } else {
        return false; 
    }
};


//. function to check first name inputs
function check_first_name() {
    // element itself
    let firstname_input1:any = document.getElementById('firstNameID1');
    // element's string value
    let first_name_value:string = firstname_input1.value;
    // element's string value's length
    let first_name_length:number = first_name_value.length;


    // border colors and other scss
    let redBorder:string = '2px solid red';
    let normalBorder:string = '1px solid #1c5c9c'


    // if input isn't empty and input length > 2
    if (first_name_length > 2) {
        firstName_pass = true;
        firstname_input1.style.border = normalBorder;
    } 
    
    else if (first_name_length < 2) {
        firstname_input1.style.border = redBorder;
        firstName_pass = false;
    }

};

//. function to check last name inputs
function check_last_name() {
    // element itself
    let firstname_input1:any = document.getElementById("lastNameID2");
    // element's string value
    let first_name_value:string = firstname_input1.value;
    // element's string value's length
    let first_name_length:number = first_name_value.length;


    // border colors and other scss
    let redBorder:string = '2px solid red';
    let normalBorder:string = '1px solid #1c5c9c'


    // if input isn't empty and input length > 2
    if (first_name_length > 2) {
        lastName_pass = true;
        firstname_input1.style.border = normalBorder;
    } 
    
    else if (first_name_length < 2) {
        firstname_input1.style.border = redBorder;
        lastName_pass = false;
    }

};


//. function to check street inputs
function check_address_name() {
    // element itself
    let firstname_input1:any = document.getElementById("streetID");
    // element's string value
    let first_name_value:string = firstname_input1.value;
    // element's string value's length
    let first_name_length:number = first_name_value.length;


    // border colors and other scss
    let redBorder:string = '2px solid red';
    let normalBorder:string = '1px solid #1c5c9c'


    // if input isn't empty and input length > 2
    if (first_name_length > 6) {
        street_pass = true;
        firstname_input1.style.border = normalBorder;
    } 
    
    else if (first_name_length < 6) {
        firstname_input1.style.border = redBorder;
        street_pass = false;
    }

};



//. function to check zip inputs
function check_zipper_name() {
    // element itself
    let firstname_input1:any = document.getElementById("zipcodeID");
    // element's string value
    let first_name_value:string = firstname_input1.value;
    // element's string value's length
    let first_name_length:number = first_name_value.length;
    // if element has only nums
    let zipperBOOL:boolean = isNumeric(first_name_value);


    // border colors and other scss
    let redBorder:string = '2px solid red';
    let normalBorder:string = '1px solid #1c5c9c'

    if (zipperBOOL == false && first_name_length == 0) {
        firstname_input1.value = ''
        firstname_input1.style.border = redBorder;
        show_message('Error: Please enter only numerical values', 4000)
    }

    else if (first_name_length > 0 && !zipperBOOL) {
        let non_num_value:number = first_name_length - 1; 
        let new_value:string = first_name_value.slice(0, non_num_value)
        firstname_input1.value = new_value;
        firstname_input1.style.border = redBorder;
        show_message('Error: Please enter only numerical values', 4000)
    }

    else if (first_name_length == 5 && zipperBOOL) {
        firstname_input1.style.border = normalBorder;
        zipper_pass = true;
    }

    else if (first_name_length > 5) {
        let non_num_value:number = first_name_length - 1; 
        let new_value:string = first_name_value.slice(0, non_num_value)
        firstname_input1.value = new_value;
    }
    

};


//. function to check town or city inputs
function check_townCity() {
    // element itself
    let firstname_input1:any = document.getElementById('townID');
    // element's string value
    let first_name_value:string = firstname_input1.value;
    // element's string value's length
    let first_name_length:number = first_name_value.length;


    // border colors and other scss
    let redBorder:string = '2px solid red';
    let normalBorder:string = '1px solid #1c5c9c'


    // if input isn't empty and input length > 2
    if (first_name_length > 2) {
        townCity_pass = true;
        firstname_input1.style.border = normalBorder;
    } 
    
    else if (first_name_length < 2) {
        firstname_input1.style.border = redBorder;
        townCity_pass = false;
    }

};


//. function to check country inputs
function check_country() {
    // element itself
    let firstname_input1:any = document.getElementById('countryID');
    // element's string value
    let first_name_value:string = firstname_input1.value;
    // element's string value's length
    let first_name_length:number = first_name_value.length;


    // border colors and other scss
    let redBorder:string = '2px solid red';
    let normalBorder:string = '1px solid #1c5c9c'


    // if input isn't empty and input length > 2
    if (first_name_length > 2) {
        country_pass = true;
        firstname_input1.style.border = normalBorder;
    } 
    
    else if (first_name_length < 2) {
        firstname_input1.style.border = redBorder;
        country_pass = false;
    }

};


//. function to check zip inputs
function check_phone_number() {
    // element itself
    let firstname_input1:any = document.getElementById("phoneID");
    // element's string value
    let first_name_value:string = firstname_input1.value;
    // element's string value's length
    let first_name_length:number = first_name_value.length;
    // if element has only nums
    let zipperBOOL:boolean = isNumeric(first_name_value);


    // border colors and other scss
    let redBorder:string = '2px solid red';
    let normalBorder:string = '1px solid #1c5c9c'

    if (zipperBOOL == false && first_name_length == 0) {
        firstname_input1.value = ''
        firstname_input1.style.border = redBorder;
        show_message('Error: Please enter only numerical values', 4000)
    }

    else if (first_name_length > 0 && !zipperBOOL) {
        let non_num_value:number = first_name_length - 1; 
        let new_value:string = first_name_value.slice(0, non_num_value)
        firstname_input1.value = new_value;
        firstname_input1.style.border = redBorder;
        show_message('Error: Please enter only numerical values', 4000)
    }

    else if (first_name_length == 10 && zipperBOOL) {
        firstname_input1.style.border = normalBorder;
        phone_pass = true;
    }

    else if (first_name_length > 10) {
        let non_num_value:number = first_name_length - 1; 
        let new_value:string = first_name_value.slice(0, non_num_value)
        firstname_input1.value = new_value;
    }
    

};


//. function that checks if input is numbers, simpler to Python's .isNumeric()
function isNumeric(value:string) {
    return /^\d+$/.test(value) || /^-\d+$/.test(value) || /^\d+\.\d+$/.test(value) || /^-\d+\.\d+$/.test(value);
};


// = ///////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// //////////

















// = ///////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// //////////
//. checking the inputs for when the next button is clicked

function checking_first_nameNXTBTN() {
    let firstname_input:any = document.getElementById('firstNameID1');

    // border colors and other scss
    let redBorder:string = '2px solid red';

    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder
    }

};

function checking_last_nameNXTBTN() {
    let firstname_input:any = document.getElementById('lastNameID2');

    // border colors and other scss
    let redBorder:string = '2px solid red';

    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder
    }

};


function checking_street_nameNXTBTN() {
    let firstname_input:any = document.getElementById('streetID');

    // border colors and other scss
    let redBorder:string = '2px solid red';

    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder
    }

};


function checking_zip_nameNXTBTN() {
    let firstname_input:any = document.getElementById('zipcodeID');

    // border colors and other scss
    let redBorder:string = '2px solid red';

    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder
    }

};

function checking_town_nameNXTBTN() {
    let firstname_input:any = document.getElementById('townID');

    // border colors and other scss
    let redBorder:string = '2px solid red';

    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder
    }

};


function checking_country_nameNXTBTN() {
    let firstname_input:any = document.getElementById('countryID');

    // border colors and other scss
    let redBorder:string = '2px solid red';

    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder
    }

};


function checking_phone_nameNXTBTN() {
    let firstname_input:any = document.getElementById('phoneID');

    // border colors and other scss
    let redBorder:string = '2px solid red';

    if (firstname_input.value == '') {
        firstname_input.style.border = redBorder
    }

};

// = ///////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// //////////




















//= //////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// ///////////
// ! code section for payment area








//= //////////////////////////////////////////////// //////////////////////////////////////////////////////////////////// ///////////