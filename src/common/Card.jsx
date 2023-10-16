import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Card = ({ it }) => {

    const { addToCart, noSeat, setNoSeat, user, oho } = useContext(AuthContext);
    
    let { name, image, instructorName, availableSeats, status, price } = it;
    
    if(status === 'denied' || status === "pending"){
        return;
    }

    if (availableSeats < 1) {
        setNoSeat(false);
    }
    
    const addCart = ite => {
        if(!user){
            Swal.fire("Login first");
            return;
        }

        if(oho?.phoneNumber !== null ){
            Swal.fire('You are not an student...!')
            return;
        }
        
        addToCart(ite);
    }

    const dynamicClassName = `grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 items-center p-2 gap-5 m-5 rounded-lg ${!noSeat && "bg-red-500"} bg-gray-200`;
    
    return (
        <div className={dynamicClassName}>
            <div className="w-3/4 mx-auto">
                <img className="w-60 h-40 rounded-md" src={image} alt={name} />
            </div>
            <div className="col-span-2 text-slate-700">
                {name && <h2 className="text-md font-semibold">Name: <span className="text-md font-bold text-xl"> {name} </span></h2>}
                {instructorName && <p className="text-md font-semibold">Instructor's Name : <span className="text-md font-bold text-xl"> {instructorName} </span></p>}
                <p className="text-md font-semibold">Available Seats : <span className="text-md font-bold text-xl"> {availableSeats} </span></p>
                {price && <p className="text-md font-semibold">Hadiya : <span className="text-md font-bold text-xl"> {price} ৳ </span></p>}
            </div>
            <div className='md:justify-end card-actions' disabled={noSeat === false} onClick={() => addCart(it)}>
                <button className="btn btn-primary btn-outline w-full" >Add to Cart</button>
            </div>

        </div>
    );
};

export default Card;