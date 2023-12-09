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



