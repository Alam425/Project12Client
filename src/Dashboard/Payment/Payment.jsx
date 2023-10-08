import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Payment = () => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { amount, user, carrt, addToPurchasedCourses } = useContext(AuthContext);
    const navigate = useNavigate();
    const price = amount;
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        if (price > 0) {
            fetch("http://localhost:3000/intentToPayment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [price]);


    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Annonymous',
                        name: user?.displayName || 'Annonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);


        if (paymentIntent.status === "succeeded") {
            const transanctionId = paymentIntent.id;
            const payment = {
                email: user.email,
                transanctionId: transanctionId,
                price: price,
                date: new Date(),
                quantity: carrt.length,
                itemNames: carrt.map(item => item.name),
                items: carrt.map(item => item._id)
            }

            axios.post('http://localhost:3000/payments', payment)
                .then(res => {
                    if (res.data.insertedId && res.data.deletedCount > 0) {
                            Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successful',
                            showConfirmButton: false,
                            timer: 3000
                        })
                    }
                })
                .catch(r => console.log(r))
        }
        addToPurchasedCourses();
        navigate('/page/success');
    }


    return (
        <div>
            <form className="w-3/4 mx-auto" onSubmit={handlePayment}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn-sm btn btn-success m-5" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                <p className="mx-auto w-11/12 text-2xl text-red-600">{cardError}</p>
            </form>
        </div>
    );

};

export default Payment;