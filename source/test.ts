//= ==/////===================================================================================================================
//! Function that fires on load and gets the client secret before page loads

document.addEventListener('DOMContentLoaded', function () {




    //= ===================================================================================================================================
    //* Code for setting up the stripe elements
    var stripe:any = Stripe('pk_test_51OF1EMH12wPbXhJ68EXbZb8FX8jjVv5JyuHndUyjiBj8bSnpWd5LvrfYy1WLLCuQkKkjDBGx3ZVPXcrZYVgznJ66002dk659Z8');

    // Create an instance of Elements
    var elements:any = stripe.elements();

    // Create an instance of the card number Element.
    var cardNumber = elements.create('cardNumber');
    cardNumber.update({placeholder: 'Vaild Card Number'});



    // Create an instance of the expiration date Element.
    var cardExpiry = elements.create('cardExpiry');

    // Create an instance of the CVC Element.
    var cardCvc = elements.create('cardCvc');

    // Add the card elements into their respective containers
    cardNumber.mount('#card-number-element');
    cardExpiry.mount('#card-expiry-element');
    cardCvc.mount('#card-cvc-element');

    let items:any = ''
    //===========================================================================================================================================




    // Call initialize function
    initialize();
    checkStatus();



    //! Stripe functions below
    //===========================================================================================================================================
    //* Fetches a payment intent and captures the client secret
    async function initialize() {
        const csrfToken:any = document.querySelector('[name=csrfmiddlewaretoken]');
        const csrfValue = csrfToken.value;
        const response = await fetch("/stripeIntentView", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                'X-CSRFToken': csrfValue
            },
            body: JSON.stringify({ items }),
        });
        const { clientSecret } = await response.json();
    
        const appearance = {
        theme: 'stripe',
        };
        elements = stripe.elements({ appearance, clientSecret });
    
        const paymentElementOptions = {
        layout: "tabs",
        };
    
        const paymentElement = elements.create("payment", paymentElementOptions);
        paymentElement.mount("#payment-element");
    };


    const form:any = document.querySelector("#payment-form");

    form.addEventListener("submit", handleSubmit);

    //* function that handles the submit button
    async function handleSubmit(e:any) {
        e.preventDefault();
        setLoading(true);
      
        let emailAddress:any = ''
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://localhost:4242/checkout.html",
            receipt_email: emailAddress,
          },
        });
      
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
          showMessage(error.message);
        } else {
          showMessage("An unexpected error occurred.");
        }
      
        setLoading(false);
    };


    // Fetches the payment intent status after payment submission
    async function checkStatus() {
        const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
        );
    
        if (!clientSecret) {
        return;
        }
    
        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
    
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
    };


    //* function that shows messages 
    function showMessage(messageText:any) {
    const messageContainer:any = document.querySelector("#payment-message");
    
    messageContainer.classList.remove("hidden");
    messageContainer.textContent = messageText;
    
    setTimeout(function () {
        messageContainer.classList.add("hidden");
        messageContainer.textContent = "";
    }, 4000);
    };



    // Show a spinner on payment submission
    function setLoading(isLoading:any) {
        let sumbit_btn:any = document.querySelector('#submit');
        let spinner:any = document.querySelector('#spinner');
        let buttonText:any = document.querySelector("#button-text");

        if (isLoading) {
            // Disable the button and show a spinner
            sumbit_btn.disabled = true;

            spinner.classList.remove("hidden");

            buttonText.classList.add("hidden");

        } else {
            sumbit_btn.disabled = false;
            spinner.classList.add('hidden');
            buttonText.classList.remove('hidden')
        }
    };

    //================================================================================================================================
    //! end of stripe functions







    //================================================================================================================================

    let retrievedValue:any = localStorage.getItem('clipOff2');
    let total:any = localStorage.getItem('total');


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
    };

      
});
