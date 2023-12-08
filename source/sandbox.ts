///////////////////////////////////////////////////////////////////////////////////////////
// navbar stuffs
let linksTAB:any = document.getElementById('links2openID');
let homeTAB:any = document.getElementById('home2openID');
let aboutTAB:any = document.getElementById('about2openID');
let tab_open:boolean = false


// opening tabs
function open_menu() {
    if(tab_open == false) {
        linksTAB.style.display = 'block';
        linksTAB.style.display = 'flex';
        linksTAB.style.flexDirection = 'column';
        tab_open = true;
    } 
    else {
        linksTAB.style.display = 'none';
        tab_open = false;
    }

};

function openHome() {
    linksTAB.style.display = 'none';
    homeTAB.style.display = 'block';
    homeTAB.style.display = 'flex';
    homeTAB.style.flexDirection = 'column';
};


function openAbout() {
    linksTAB.style.display = 'none';
    aboutTAB.style.display = 'block';
    aboutTAB.style.display = 'flex';
    aboutTAB.style.flexDirection = 'column';

};



// closing tabs
function closeTab() {
    linksTAB.style.display = 'none';
    tab_open = false;
};

function closeTab2() {
    homeTAB.style.display = 'none';
    tab_open = false;
};

function closeTab3() {
    aboutTAB.style.display = 'none';
    tab_open = false;
};




// back buttons
function back_tab() {
    homeTAB.style.display = 'none';
    linksTAB.style.display = 'block';
    linksTAB.style.display = 'flex';
    linksTAB.style.flexDirection = 'column';

};

function back_tab2() {
    aboutTAB.style.display = 'none';
    linksTAB.style.display = 'block';
    linksTAB.style.display = 'flex';
    linksTAB.style.flexDirection = 'column';
};




// normal screen logic
let isHomeHovering = false;
let isAboutHovering = false;
let isOtherHovering = false;


let nav_normal_home = document.getElementById('homeDrops1') as HTMLElement;

function showHome() {
    let dropdown1 = document.getElementById('dropdownID1') as HTMLElement;
    dropdown1.style.display = 'block';
    dropdown1.style.display = 'flex';
    dropdown1.style.flexDirection = 'column';
    isHomeHovering = true;
};

function hideHome() {
    let dropdown1 = document.getElementById('dropdownID1') as HTMLElement;
    dropdown1.style.display = 'none';
    isHomeHovering = false;

}

nav_normal_home.addEventListener('mouseover', function () {
    showHome()
});

nav_normal_home.addEventListener('mouseout', function () {
    hideHome()
});








let nav_normal_about = document.getElementById('aboutDrops1') as HTMLElement;

function showHome1() {
    let dropdown1 = document.getElementById('dropdownID2') as HTMLElement;
    dropdown1.style.display = 'block';
    dropdown1.style.display = 'flex';
    dropdown1.style.flexDirection = 'column';
    isHomeHovering = true;
};

function hideHome1() {
    let dropdown1 = document.getElementById('dropdownID2') as HTMLElement;
    dropdown1.style.display = 'none';
    isHomeHovering = false;

}

nav_normal_about.addEventListener('mouseover', function () {
    showHome1()
});

nav_normal_about.addEventListener('mouseout', function () {
    hideHome1()
});



///////////////////////////////////////////////////////////////////////////////////////////
// end navbar stuffs


//
//

//
//

//
//

//
//




////////////////////////////////////////////////////////////////////////////////////////////
// product stuff

let product1:number = 19.99;
let product2:number = 9.99;
let product3:number = 59.99;
let product4:number = 39.99;
let product5:number = 79.99;
let product6:number = 199.99;

let cart_num:any = document.getElementById('cartNum');

let total:number = 0;
let items:any = [];


function add_product(product:string) {
    items.push(product);
    let number_of_items = items.length.toString();
    cart_num.innerHTML = number_of_items;
}

document.getElementById('cartbutton')?.addEventListener('click', function () {
    let string_items = items.join(':')
    localStorage.setItem('data', string_items);
})







////////////////////////////////////////////////////////////////////////////////////////////
// end product stuff


