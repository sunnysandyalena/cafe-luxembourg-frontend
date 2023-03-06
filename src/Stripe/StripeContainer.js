import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";


const PUBLIC_KEY = "pk_test_51MgBhAEhDUv9nxhw7zUWZzCXgk8WrtALG6OTWG98mpqqYF9IWkB2E14QZBI90VNywCLQQvvwsw1ydFSnlZqSqpm800Zz4xG84J";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm/>
    </Elements>
  );
};
export default StripeContainer;