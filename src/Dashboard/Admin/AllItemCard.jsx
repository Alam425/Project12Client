import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import 'animate.css';

const AllItemCard = ({ it }) => {

    let { name, image, instructorName, instructorEmail, availableSeats, price, status } = it;
    
    const { noSeat, setNoSeat, removeFromClass } = useContext(AuthContext);

    if (availableSeats < 1) {
        setNoSeat(false);
    }
    
    if(status === 'denied' || status === "pending"){
        return;
    }

    const remove = it => {
        Swal.fire({
            title: 'Do you want to proceed?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromClass(it);
            }
        })
    }

    const dynamicClassName = `grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 items-center p-2 gap-5 m-5 rounded-lg ${!noSeat && "bg-red-500"} bg-gray-200 animate__animated animate__rubberBand animate__delay-2s`;

    const cllass = `md:justify-end card-actions`;
    
    return (
        <div className={dynamicClassName}>
            <div className="mx-auto">
                <img className="h-40 rounded-md" src={image} alt={name} />
            </div>
            <div className="col-span-2 text-slate-600">
                {name && <h2 className="text-md font-semibold">Name: <span className="text-md font-bold text-xl"> {name} </span></h2>}
                {instructorName && <p className="text-md font-semibold">Instructor's Name : <span className="text-md font-bold text-xl"> {instructorName} </span></p>}
                {instructorEmail && <p className="text-md font-semibold">Instructor's Email : <span className="text-md font-bold text-xl"> {instructorEmail} </span></p>}
                <p className="text-md font-semibold">Available Seats : <span className="text-md font-bold text-xl"> {availableSeats} </span></p>
                {price && <p className="text-md font-semibold">Hadiya : <span className="text-md font-bold text-xl"> {price} ৳ </span></p>}
            </div>
            <div className={cllass} disabled={noSeat === false} onClick={() =>  remove(it)}>
                <button className="btn btn-primary btn-outline w-full" >Delete</button>
            </div>

        </div>
    );
};

export default AllItemCard;