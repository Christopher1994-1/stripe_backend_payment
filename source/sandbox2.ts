document.addEventListener('DOMContentLoaded', function () {




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
});


function clipOff(num:string) {
    let indexPlace = num.indexOf('.');
    let finalTotal:string = '';

    if (indexPlace == 2) {
        finalTotal = num.slice(0, 5);
    }
    else if (indexPlace == 3) {
        finalTotal = num.slice(0, 6);
    }

    to2.innerHTML = "$" + finalTotal
    to2.style.color = 'green';
    // Wait for 1 second (1000 milliseconds)
    setTimeout(function() {
        to2.style.color = 'black';
    }, 2000);
};


let applycode:any = document.getElementById('applycode');
let undercut:any = document.getElementById('undercut');
let totalcut:any = document.getElementById('this');
let to2:any = document.getElementById('totalcut');
let clickButton:boolean = false;

function applyBtn() {
    let applycodeVALUE = applycode.value;
    let toValue = totalcut.value
    let valueFloat = parseFloat(toValue)

    if (applycodeVALUE == 'JAJ439') {
        undercut.style.color = 'red';
        undercut.style.textDecoration = 'line-through';
        // Step 1: Calculate 15% of the original number
        let subtractionAmount = (15 / 100) * valueFloat;

        // Step 2: Subtract the result from step 1 from the original number
        let result = valueFloat - subtractionAmount;

        let newValue = result.toString()
        clipOff(newValue)
    }
    clickButton = true

};


function processBtn() {
    if (clickButton == false ) {
        localStorage.setItem('clipOff2', 'false');
    } else {
        localStorage.setItem('clipOff2', 'true');
    }

    localStorage.setItem('total', totalcut.value)
}




