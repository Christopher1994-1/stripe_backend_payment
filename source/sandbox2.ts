document.addEventListener('DOMContentLoaded', function () {
    const data = localStorage.getItem('data')?.toString().split(':');
    let cart:any = document.getElementById('cartNum');
    let l:any = data?.length.toString();

    cart.innerHTML = l;


    
});