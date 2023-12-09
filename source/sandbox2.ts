document.addEventListener('DOMContentLoaded', function () {

    function addProductRow(product:string, price:string, quantity:string) {
        var table = document.getElementById("tableee");
    
        if (table !== null) {
            var tbody = table.getElementsByTagName('tbody')[0];
        
            var newRow = tbody.insertRow(tbody.rows.length);
        
            // Add cells to the new row
            var productCell = newRow.insertCell(0);
            var priceCell = newRow.insertCell(1);
            var quantityCell = newRow.insertCell(2);
            var totalCell = newRow.insertCell(3);
        
            // Populate cells with data
            productCell.innerHTML = product;


            
            priceCell.innerHTML = '$' + price;
            quantityCell.innerHTML = quantity;
            totalCell.innerHTML = '$';
        }
        
    }



    const dataString = localStorage.getItem('data');
    if (dataString) {
        const data = dataString.toString().split(':');
        let cart: any = document.getElementById('cartNum');
        let l: any = data.length.toString();
        let l2:any = data.length
        let char = data[0];

        cart.innerHTML = l;

        for (let i = 0; i < l2; i++ ) {
            let trElement = document.createElement('tr');
            addProductRow('one', 'two', 'three')
        }
    } 

    else {
        console.log('cart is empty')
    }
});



