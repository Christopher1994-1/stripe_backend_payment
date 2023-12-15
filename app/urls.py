from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cart', views.cart, name='cart'),
    path('update_cart', views.update_card, name='update_cart'),
    path('process_payment', views.process_payment, name='process_payment'),
    path('stripeIntentView', views.stripeIntentView, name='stripeIntentView'),
    path('successful_pay', views.successful_pay, name="successful_pay"),
    path('about_project', views.about_project, name='about_project'),
    path('how_it_works', views.how_it_works, name="how_it_works")

]