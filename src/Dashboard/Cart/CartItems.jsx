import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const CartItems = ({ i, index }) => {

    const { image, name, price, _id } = i?.ite;

    const { setMyCartItem, setAmount } = useContext(AuthContext);

    const setForPayment = () => {
        setMyCartItem(i);
        setAmount(price);
    }

    const deletecart = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    // axios.delete(`https://assignment12-3fp9d56r0-alam425.vercel.app/cart/${id}`)
                    axios.delete(`http://localhost:3000/cart/${id}`)
                        .then(data => {
                            if (data?.data?.deletedCount > 0) {
                                axios.put(`http://localhost:3000/class/availableSeatsIncrease/${_id}`)
                                    .then(response => {
                                        console.log(response.data);
                                        if (response.data.modifiedCount > 0) {
                                            window.location.reload();
                                            Swal.fire(`${name} has been removed successfully...`)
                                        }
                                    })
                                    .catch((error) => {
                                        console.error(error.message);
                                    });
                            }
                        })
                        .catch(r => console.log(r.message))
                }
            })
    }


    return (
        <div className="me-5 my-5">
            <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center justify-center text-md md:text-xl">

                <div className="text-gray-700 font-semibold text-center">{index + 1}.</div>

                <div className="col-span-2 hidden sm:block">
                    <img src={image} alt={name} className="md:w-32 md:h-24 sm:w-20 sm:h-16 mx-auto rounded-md" />
                </div>

                <div className="col-span-6 sm:col-span-5 text-slate-700 font-bold">{name}</div>

                <div className="text-violet-700 col-span-3 sm:col-span-2 font-semibold">Price : <span className="text-green-600">{price}</span> ৳</div>

                <div className="col-span-2">
                    <div className="grid grid-cols-1">
                        <Link to='/page/payment' disabled={price == 0} onClick={setForPayment} className="btn-accent btn">Pay</Link>
                        <button onClick={() => deletecart(_id)} className="btn-error text-white btn p-0">Remove</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartItems;