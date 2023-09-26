import axios from "axios";
import { useEffect, useState } from "react";
import CartItems from './CartItems';

const UserCart = () => {

    const [ cart, setCart ] = useState([]);

    useEffect(()=>{
        axios.get('https://assignment12-3fp9d56r0-alam425.vercel.app/cart')
        .then(data => {
            setCart(data?.data);
        })
    },[])
    
    return (
        <div className="mt-20">
            {
                cart.map((cartItem, index) => <CartItems index={index} key={cartItem._id} cartItem={cartItem}></CartItems> )
            }
        </div>
    );
};

export default UserCart;