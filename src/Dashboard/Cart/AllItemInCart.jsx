import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UserCart from "./UserCart";
import { Link } from "react-router-dom";


const AllItemInCart = () => {

    const { myCart, setAmount } = useContext(AuthContext);

    const a1 = myCart.map(i => i?.ite?.price);
    const sum = a1.reduce((accu, curtVal) => accu + curtVal, 0).toFixed(2);
    setAmount( sum || 0 );
    
    return (
        <div>
            <div className="flex justify-center gap-10 items-center mt-20 my-10">
                <div className="text-violet-700 text-xl text-center font-bold">Total Price : <span className="text-green-600">{sum} ৳</span></div>
                <Link to='/page/payment' disabled={sum == 0} className="btn-success btn text-amber-50">CheckOut</Link>
            </div>
            <div>
                {
                    myCart.map(( i, index ) => <UserCart index={index} key={i?._id} i={i} />)
                }
            </div>
        </div>
    );
};

export default AllItemInCart;