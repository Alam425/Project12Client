import axios from "axios";
import { useEffect, useState } from "react";
import CartItems from './CartItems';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const UserCart = () => {

    const [cart, setCart] = useState([]);
    const { setPayAmount } = useContext(AuthContext);

    const array1 = cart.map(price => price.price);
    const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setPayAmount(sumWithInitial);

    useEffect(() => {
        axios.get('https://assignment12-3fp9d56r0-alam425.vercel.app/cart')
            .then(data => {
                setCart(data?.data);
            })
    }, [])



    return (
        <div className="mt-20">
            <div className="flex justify-evenly">
                <div className="text-purple-500 text-xl text-center font-semibold">Total Price : <span className="text-green-600">{sumWithInitial}</span>৳</div>
                <Link to='/page/payment' className="btn-success btn">CheckOut</Link>
            </div>
            <div className="">
                {
                    cart.map((cartItem, index) => <CartItems index={index} key={cartItem._id} cartItem={cartItem}></CartItems>)
                }
            </div>
        </div>
    );
};

export default UserCart;