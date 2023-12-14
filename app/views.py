from django.shortcuts import render
from . import products
from django.http import JsonResponse
import json
from django.http import HttpResponse
import stripe
import json
import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

# Create your views here.
# .
# !
# =
# ,
# *
# TODO 
# BUG 



#= stripe api keys
STRIPE_SECRET_KEY = os.getenv('stripe_secret_key')
STRIPE_PUBLISH_KEY = os.getenv('stripe_publish_key')



dd = []
subtotal = []

#. function for home page
def index(request):
    dd.clear()
    subtotal.clear()
    return render(request, 'index1.html', {})



#. function for cart
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




#! watch the video from yesterday and intergate it


def process_payment(request):
    # = Your processing logic for checkout

    # Assuming you have a user_token that you want to set as a cookie
    user_token = "abc123"
    
    stripe.api_key = STRIPE_SECRET_KEY

    intent = stripe.PaymentIntent.create(
        amount=100,
        currency="usd",
        payment_method="pm_card_visa",
    )


    # Create a response object
    response = render(request, 'pages/process_checkout.html', {"data": dd, 'total': subtotal, 'secret':intent.client_secret})

    # Set a cookie named 'user_token' with SameSite=None and Secure (for HTTPS)
    response.set_cookie('user_token', user_token, samesite='None', secure=True)

    return response

