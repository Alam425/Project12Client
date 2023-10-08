import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TEST_TOKEN);


const PaymentGateway = () => {

    return (
        <div className="my-20">
            <Elements stripe={stripePromise}><Payment/></Elements>
        </div>
    );
};

export default PaymentGateway;