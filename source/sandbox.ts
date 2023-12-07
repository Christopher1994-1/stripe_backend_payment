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

///////////////////////////////////////////////////////////////////////////////////////////
// end navbar stuffs