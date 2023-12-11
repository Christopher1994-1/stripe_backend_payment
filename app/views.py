from django.shortcuts import render
from . import products
from django.http import JsonResponse
import json

# Create your views here.

dd = []
subtotal = []

def index(request):
    dd.clear()
    subtotal.clear()
    return render(request, 'index1.html', {})


def cart(request):
    return render(request, 'pages/cart.html', {'data':dd, 'total':subtotal[0]})


def update_card(request):
    if request.method == 'POST':
        # Assuming the data is sent as JSON in the request body
        data = json.loads(request.body)
        cart_item_count = data.get('cartItemCount')
        data191 = products.products(cart_item_count)[0]
        total = products.products(cart_item_count)[1]
        
        for i in data191:
            dd.append(i)
        subtotal.append(total)
        return JsonResponse({'status': 'success', 'message': 'Cart updated successfully'})

    
def process_checkout(request):
    return render(request, 'pages/process_checkout.html', {"data":dd, 'total':subtotal})