"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', function () {
    var stripe = Stripe('pk_test_51OF1EMH12wPbXhJ68EXbZb8FX8jjVv5JyuHndUyjiBj8bSnpWd5LvrfYy1WLLCuQkKkjDBGx3ZVPXcrZYVgznJ66002dk659Z8');
    var elements = stripe.elements();
    var cardNumber = elements.create('cardNumber');
    cardNumber.update({ placeholder: 'Vaild Card Number' });
    var cardExpiry = elements.create('cardExpiry');
    var cardCvc = elements.create('cardCvc');
    cardNumber.mount('#card-number-element');
    cardExpiry.mount('#card-expiry-element');
    cardCvc.mount('#card-cvc-element');
    let items = '';
    initialize();
    checkStatus();
    function initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
            const csrfValue = csrfToken.value;
            const response = yield fetch("/stripeIntentView", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': csrfValue
                },
                body: JSON.stringify({ items }),
            });
            const { clientSecret } = yield response.json();
            const appearance = {
                theme: 'stripe',
            };
            elements = stripe.elements({ appearance, clientSecret });
            const paymentElementOptions = {
                layout: "tabs",
            };
            const paymentElement = elements.create("payment", paymentElementOptions);
            paymentElement.mount("#payment-element");
        });
    }
    ;
    const form = document.querySelector("#payment-form");
    form.addEventListener("submit", handleSubmit);
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            setLoading(true);
            let emailAddress = '';
            const { error } = yield stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: "http://localhost:4242/checkout.html",
                    receipt_email: emailAddress,
                },
            });
            if (error.type === "card_error" || error.type === "validation_error") {
                showMessage(error.message);
            }
            else {
                showMessage("An unexpected error occurred.");
            }
            setLoading(false);
        });
    }
    ;
    function checkStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
            if (!clientSecret) {
                return;
            }
            const { paymentIntent } = yield stripe.retrievePaymentIntent(clientSecret);
            switch (paymentIntent.status) {
                case "succeeded":
                    showMessage("Payment succeeded!");
                    break;
                case "processing":
                    showMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    showMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    showMessage("Something went wrong.");
                    break;
            }
        });
    }
    ;
    function showMessage(messageText) {
        const messageContainer = document.querySelector("#payment-message");
        messageContainer.classList.remove("hidden");
        messageContainer.textContent = messageText;
        setTimeout(function () {
            messageContainer.classList.add("hidden");
            messageContainer.textContent = "";
        }, 4000);
    }
    ;
    function setLoading(isLoading) {
        let sumbit_btn = document.querySelector('#submit');
        let spinner = document.querySelector('#spinner');
        let buttonText = document.querySelector("#button-text");
        if (isLoading) {
            sumbit_btn.disabled = true;
            spinner.classList.remove("hidden");
            buttonText.classList.add("hidden");
        }
        else {
            sumbit_btn.disabled = false;
            spinner.classList.add('hidden');
            buttonText.classList.remove('hidden');
        }
    }
    ;
    let retrievedValue = localStorage.getItem('clipOff2');
    let total = localStorage.getItem('total');
    const dataString = localStorage.getItem('data');
    if (dataString) {
        const data = dataString.toString().split(':');
        let cart = document.getElementById('cartNum');
        let cart2 = document.getElementById('cartNum2');
        let l = data.length.toString();
        let l2 = data.length;
        let char = data[0];
        cart.innerHTML = l;
        cart2.innerHTML = l;
    }
    else {
        console.log('cart is empty');
    }
    ;
});
