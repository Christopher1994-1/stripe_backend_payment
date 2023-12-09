from django.shortcuts import render
from . import products

# Create your views here.



def index(request):
    return render(request, 'index1.html', {})


from django.http import JsonResponse
import json

def cart(request):
    if request.method == 'POST':
        # Assuming the data is sent as JSON in the request body
        data = json.loads(request.body)
        cart_item_count = data.get('cartItemCount')
        data = products.products(cart_item_count)
        
        
        
        
        # Return a JSON response (you can customize this based on your needs)
        return JsonResponse({'status': 'success', 'message': 'Cart updated successfully'})
    
    return render(request, 'pages/cart.html', {})


