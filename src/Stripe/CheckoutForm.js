import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../redux/cartSlice";
import { useState } from "react";


export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = useSelector(getTotalPrice);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const Swal = require('sweetalert2');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://cafe-luxembourg-stripe-6dt9.onrender.com/stripe/charge",
          {
            amount: totalPrice*100,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true)
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Your payment didn't go through!",
      })
    }
  };

  return (
    <div>
      {!messageSuccess ?
      <form className="checkout-form" onSubmit={handleSubmit}>
        <CardElement/>
        <button className="pay-btn">PAY</button>
      </form>
      :
      <div className="payment-success">
        <h2>Your payment went through!</h2>
      </div>
     }
    </div>
  );
};