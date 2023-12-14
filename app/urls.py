from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cart', views.cart, name='cart'),
    path('update_cart', views.update_card, name='update_cart'),
    path('process_payment', views.process_payment, name='process_payment'),
    # path('return_payment_intent', views.return_payment_intent, name='return_payment_intent')

]