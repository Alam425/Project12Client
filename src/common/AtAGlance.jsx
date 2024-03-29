import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import 'animate.css';

const AtAGlance = ({ i }) => {

    const { addToCart, user, oho } = useContext(AuthContext);

    const { image, name, price, _id, instructorName, availableSeats } = i;
    
    function showModal() {
        const modalElement = document.getElementById(`${_id}`);
        modalElement.showModal();
    }

    const addItemToCart = ite => {
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

    return (
        <div className="animate__animated animate__flip">
            <div className="rounded-box p-5 border-2 border-slate-600 w-full h-full">
                <div className="grid grid-cols-1">
                    <img className="w-80 h-52 rounded-xl mx-auto" src={image} alt={name} />
                    <p className="text-2xl font-bold text-pink-600 mt-3">{name}</p>
                    <div className="lg:grid-cols-2 grid grid-cols-1 gap-5 justify-between items-center">

                        <div className="flex gap-5 items-center justify-stretch">
                            <p className="text-lg font-semibold text-slate-600">Hadiya : &nbsp;&nbsp;&nbsp;<span className="text-lg text-amber-600">{price} ৳</span></p>
                            <p className="line-through text-slate-400 font-semibold">{price * 1.6} ৳</p>
                        </div>

                        <div>
                            <button className="btn btn-neutral my-2" onClick={() => showModal()}>See Details</button>
                            <dialog id={_id} className="modal">
                                <form method="dialog" className="modal-box bg-slate-100 ">
                                    <div className="grid grid-cols-1 items-center p-5 rounded-lg gap-3">
                                        <div className="w-3/4 mx-auto">
                                            <img className="w-full rounded-xl " src={image} alt={name} />
                                        </div>
                                        <div className=" text-slate-600">
                                            <h2 className="text-md font-semibold">Name: <span className="text-md font-bold text-xl"> {name} </span></h2>
                                            <p className="text-md font-semibold">Instructors Name : <span className="text-md font-bold text-xl"> {instructorName} </span></p>
                                            <p className="text-md font-semibold">Available Seats : <span className="text-md font-bold text-xl"> {availableSeats} </span></p>
                                            <div className="flex gap-5 items-center justify-stretch">
                                                <p className="text-lg font-semibold text-slate-600">Hadiya : &nbsp;&nbsp;&nbsp;<span className="line-through text-slate-400">{price * 1.6} ৳</span></p>
                                                <p className="text-lg font-bold text-amber-600">{price} ৳</p>
                                            </div>
                                        </div>
                                        <div className="md:justify-end card-actions">
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                        <button onClick={()=>addItemToCart(i)} className="btn btn-primary btn-outline">Add to Cart</button>
                                        <button className="btn btn-accent btn-outline">Close</button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtAGlance;