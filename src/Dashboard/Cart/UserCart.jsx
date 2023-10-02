import axios from "axios";
import { useEffect, useState } from "react";
import CartItems from './CartItems';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const UserCart = () => {

    const { setPayAmount, carrt } = useContext(AuthContext);

    const a1 = carrt.map(price => price.price);
    const sum = a1.reduce((accu, curtVal) => accu + curtVal, 0);

    setPayAmount(sum.toFixed(2));

    return (
        <div className="mt-20">
            <div className="flex justify-center gap-10 items-center">
                <div className="text-violet-700 text-xl text-center font-bold">Total Price : <span className="text-green-600">{sum} ৳</span></div>
                <Link to='/page/payment' className="btn-success btn text-amber-50">CheckOut</Link>
            </div>
            <div className="">
                {
                    carrt.map((cartItem, index) => <CartItems index={index} key={cartItem._id} cartItem={cartItem}></CartItems>)
                }
            </div>
        </div>
    );
};

export default UserCart;