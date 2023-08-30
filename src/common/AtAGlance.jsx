import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AtAGlance = ({ i }) => {
    const { image, name, price, _id } = i;

    const { setCourseDeatails } = useContext(AuthContext);
    
    const setTheId = () => {
        setCourseDeatails(_id);
    }

    return (
        <div className="mx-5">
            <div className="rounded-box p-5 border-2 border-black w-full h-full">
                <div className="grid grid-cols-1">
                    <img className="w-80 h-52 rounded-xl mx-auto" src={image} alt={name} />
                    <p className="text-2xl font-bold text-green-600">{name}</p>
                    <div className="flex gap-5 justify-between items-center">
                        <div className="flex gap-5 items-center justify-between">
                            <p className="text-lg font-semibold text-slate-600">Hadiya : &nbsp;&nbsp;&nbsp;<span className="line-through text-slate-400">{price * 1.5} ৳</span></p>
                            <p className="text-lg font-bold text-amber-600">{price} ৳</p>
                        </div>
                        <div onClick={setTheId}>
                            <Link to={`/details/${_id}`}>
                                <button className="btn btn-neutral my-2">See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtAGlance;