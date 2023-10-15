import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CartItems from "./CartItems";


const AllItemInCart = () => {

    const { myCart, oho } = useContext(AuthContext);

    // const a1 = myCart.map(i => i?.ite?.price);
    // const sum = a1.reduce((accu, curtVal) => accu + curtVal, 0).toFixed(2);
    return (
        <div>
            {
                oho &&
                <>
                    <div className="flex justify-center gap-10 items-center">
                        {/* <div className="text-violet-700 text-xl text-center font-bold">Total Price : <span className="text-green-600">{sum} ৳</span></div>     */}
                        <p className="text-center text-4xl underline font-bold">My Cart</p>
                    </div>
                    <div>
                        {
                            myCart.map((i, index) => <CartItems index={index} i={i} key={i?._id} ></CartItems>)
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default AllItemInCart;