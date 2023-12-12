"use strict";
var _a, _b;
let linksTAB = document.getElementById('links2openID');
let homeTAB = document.getElementById('home2openID');
let aboutTAB = document.getElementById('about2openID');
let tab_open = false;
function open_menu() {
    if (tab_open == false) {
        linksTAB.style.display = 'block';
        linksTAB.style.display = 'flex';
        linksTAB.style.flexDirection = 'column';
        tab_open = true;
    }
    else {
        linksTAB.style.display = 'none';
        tab_open = false;
    }
}
;
function openHome() {
    linksTAB.style.display = 'none';
    homeTAB.style.display = 'block';
    homeTAB.style.display = 'flex';
    homeTAB.style.flexDirection = 'column';
}
;
function openAbout() {
    linksTAB.style.display = 'none';
    aboutTAB.style.display = 'block';
    aboutTAB.style.display = 'flex';
    aboutTAB.style.flexDirection = 'column';
}
;
function closeTab() {
    linksTAB.style.display = 'none';
    tab_open = false;
}
;
function closeTab2() {
    homeTAB.style.display = 'none';
    tab_open = false;
}
;
function closeTab3() {
    aboutTAB.style.display = 'none';
    tab_open = false;
}
;
function back_tab() {
    homeTAB.style.display = 'none';
    linksTAB.style.display = 'block';
    linksTAB.style.display = 'flex';
    linksTAB.style.flexDirection = 'column';
}
;
function back_tab2() {
    aboutTAB.style.display = 'none';
    linksTAB.style.display = 'block';
    linksTAB.style.display = 'flex';
    linksTAB.style.flexDirection = 'column';
}
;
let isHomeHovering = false;
let isAboutHovering = false;
let isOtherHovering = false;
let nav_normal_home = document.getElementById('homeDrops1');
function showHome() {
    let dropdown1 = document.getElementById('dropdownID1');
    dropdown1.style.display = 'block';
    dropdown1.style.display = 'flex';
    dropdown1.style.flexDirection = 'column';
    isHomeHovering = true;
}
;
function hideHome() {
    let dropdown1 = document.getElementById('dropdownID1');
    dropdown1.style.display = 'none';
    isHomeHovering = false;
}
nav_normal_home.addEventListener('mouseover', function () {
    showHome();
});
nav_normal_home.addEventListener('mouseout', function () {
    hideHome();
});
let nav_normal_about = document.getElementById('aboutDrops1');
function showHome1() {
    let dropdown1 = document.getElementById('dropdownID2');
    dropdown1.style.display = 'block';
    dropdown1.style.display = 'flex';
    dropdown1.style.flexDirection = 'column';
    isHomeHovering = true;
}
;
function hideHome1() {
    let dropdown1 = document.getElementById('dropdownID2');
    dropdown1.style.display = 'none';
    isHomeHovering = false;
}
nav_normal_about.addEventListener('mouseover', function () {
    showHome1();
});
nav_normal_about.addEventListener('mouseout', function () {
    hideHome1();
});
let product1 = 19.99;
let product2 = 9.99;
let product3 = 59.99;
let product4 = 39.99;
let product5 = 79.99;
let product6 = 199.99;
let cart_num = document.getElementById('cartNum');
let cart_num2 = document.getElementById('cartNum2');
let navbar2 = document.getElementById('navbar2');
let total = 0;
let items = [];
function remove_cartBtn(num) {
    let numBtn = "btn" + num;
    let addBtn = 'added' + num;
    let cartBTN = document.getElementById(numBtn);
    let addedBTN = document.getElementById(addBtn);
    cartBTN.style.display = 'none';
    addedBTN.style.display = 'block';
}
function add_product(product) {
    items.push(product);
    let number_of_items = items.length.toString();
    cart_num.innerHTML = number_of_items;
    cart_num2.innerHTML = number_of_items;
    remove_cartBtn(product);
}
function getCookie(name) {
    var _a;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return ((_a = parts.pop()) === null || _a === void 0 ? void 0 : _a.split(';').shift()) || null;
    }
    return null;
}
function lanm(stuff) {
    const cartItemCount = stuff;
    const csrfToken = getCookie('csrftoken');
    const headers = {
        'Content-Type': 'application/json',
    };
    if (csrfToken !== null) {
        headers['X-CSRFToken'] = csrfToken;
    }
    ;
    fetch('/update_cart', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ cartItemCount: cartItemCount }),
    });
}
let cartID = '';
(_a = document.getElementById('cartbutton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    let string_items = items.join(':');
    localStorage.setItem('data', string_items);
    lanm(string_items);
});
(_b = document.getElementById('cartbutton1')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (event) {
    let string_items = items.join(':');
    localStorage.setItem('data', string_items);
    lanm(string_items);
});
