import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import CartItems from "./CartItems";


const AllItemInCart = () => {

    const { myCart, oho } = useContext(AuthContext);

    // const a1 = myCart.map(i => i?.ite?.price);
    // const sum = a1.reduce((accu, curtVal) => accu + curtVal, 0).toFixed(2);
    return (
        <div>
            {
                oho?.phoneNumber === null &&
                <div>
                    {
                        myCart.map((i, index) => <CartItems index={index} i={i} key={i?._id} ></CartItems>)
                    }
                </div>
            }
        </div>
    );
};

export default AllItemInCart;