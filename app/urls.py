from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cart', views.cart, name='cart'),
    path('update_cart', views.update_card, name='update_cart'),
    path('process_checkout', views.process_checkout, name='process_checkout')

]