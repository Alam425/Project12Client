import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Card = ({ it }) => {

    const { name, image, instructorName, availableSeats, price } = it;

    const { addToCart } = useContext(AuthContext);

    const addCart = ite => {
        if (availableSeats < 1) {
            return;
        }
        addToCart(ite);
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-slate-300 items-center p-5 gap-5 m-5 rounded-lg">
            <div className="w-3/4 mx-auto">
                <img className="w-full rounded " src={image} alt={name} />
            </div>
            <div className=" text-slate-700">
                {name && <h2 className="text-md font-semibold">Name: <span className="text-md font-bold text-xl"> {name} </span></h2>}
                {instructorName && <p className="text-md font-semibold">Instructors Name : <span className="text-md font-bold text-xl"> {instructorName} </span></p>}
                {availableSeats && <p className="text-md font-semibold">Available Seats : <span className="text-md font-bold text-xl"> {availableSeats} </span></p>}
                {price && <p className="text-md font-semibold">Hadiya : <span className="text-md font-bold text-xl"> {price} ৳ </span></p>}
            </div>
            <div className="md:justify-end card-actions" onClick={() => addCart(it)}>
                <button className="btn btn-primary btn-outline">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;