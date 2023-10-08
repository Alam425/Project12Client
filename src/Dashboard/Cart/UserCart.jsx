import CartItems from './CartItems';
import Swal from "sweetalert2";

const UserCart = ({ i, index }) => {

    
    if (i.length = 0) {
        Swal.fire("You have no items in the cart");
        return;
    }

    return (
        <div className="">
                <CartItems index={index} i={i} key={i?._id} ></CartItems>
        </div>
    );
};

export default UserCart;