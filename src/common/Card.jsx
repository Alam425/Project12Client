import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Card = ({ it }) => {

    let { name, image, instructorName, availableSeats, price } = it;
// availableSeats = 0;
    const { addToCart, noSeat, setNoSeat } = useContext(AuthContext);

    if (availableSeats < 1) {
        setNoSeat(false);
    }
    
    const addCart = ite => {
        addToCart(ite);
    }

    const dynamicClassName = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-slate-300 items-center p-5 gap-5 m-5 rounded-lg  ${!noSeat && "bg-red-500"}`;

    return (
        <div className={dynamicClassName}>
            <div className="w-3/4 mx-auto">
                <img className="w-full rounded " src={image} alt={name} />
            </div>
            <div className=" text-slate-700">
                {name && <h2 className="text-md font-semibold">Name: <span className="text-md font-bold text-xl"> {name} </span></h2>}
                {instructorName && <p className="text-md font-semibold">Instructors Name : <span className="text-md font-bold text-xl"> {instructorName} </span></p>}
                <p className="text-md font-semibold">Available Seats : <span className="text-md font-bold text-xl"> {availableSeats} </span></p>
                {price && <p className="text-md font-semibold">Hadiya : <span className="text-md font-bold text-xl"> {price} ৳ </span></p>}
            </div>
            <div className="md:justify-end card-actions" disabled={noSeat === false} onClick={() => addCart(it)}>
                <button className="btn btn-primary btn-outline">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;