import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ApproveClass = ({ it, index }) => {

    let { name, image, instructorName, availableSeats, price, status, _id, category } = it;
    
    const { approvePendingClass, proceedWithFeedback } = useContext(AuthContext);

    const [hi, setHi] = useState('');

    const pppp = e => { setHi(e.target.value) }

    const afterFeedback = { ...it, feedback: hi };

    function showModal() {
        Swal.fire({
            title: 'Do you want to proceed with feedback?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                const modalElement = document.getElementById(`${_id}`);
                modalElement.showModal();
            } else if (result.isDenied) {
                proceedWithFeedback(it);
            }
        })

    }

    const dynamicClassName = ` justify-center gap-2 items-center col-span-3 grid grid-cols-1 ${status !== 'pending' && 'hidden'}`;

    return (
        <div className='grid grid-cols-12 items-center m-5 gap-5 rounded-lg uppercase'>

            <div>{index + 1}.</div>

            <div className="w-3/4 sm:col-span-2 mx-auto hidden sm:block">
                <img className="w-60 h-40 rounded-md " src={image} alt={name} />
            </div>

            <div className="col-span-8 sm:col-span-6 text-slate-600">
                {name && <h2 className="text-md font-semibold">Name: <span className="text-md font-bold text-xl"> {name} </span></h2>}
                {category && <h2 className="text-md font-semibold">Category: <span className="text-md font-bold text-xl"> {category} </span></h2>}
                {instructorName && <p className="text-md font-semibold">Instructors Name : <span className="text-md font-bold text-xl"> {instructorName} </span></p>}
                <p className="text-md font-semibold">Available Seats : <span className="text-md font-bold text-xl"> {availableSeats} </span></p>
                {price && <p className="text-md font-semibold">Hadiya : <span className="text-md font-bold text-xl"> {price} ৳ </span></p>}
                {status === 'approved' && <p className="text-md font-semibold">Status : <span className="text-xl text-green-600"> {status}</span></p>}
                {status === 'denied' && <p className="text-md font-semibold">Status : <span className="text-xl text-red-600"> {status}</span></p>}
                {status === 'pending' && <p className="text-md font-semibold">Status : <span className="text-xl text-yellow-600"> {status}</span></p>}
            </div>

            <div className={dynamicClassName}>

                <div className="md:justify-end card-actions" onClick={() => approvePendingClass(it)}>
                    <button className="btn btn-secondary">Approve</button>
                </div>

                <div className="md:justify-end card-actions">
                    <button className="btn btn-warning" onClick={() => showModal()}>Deny</button>
                    <div>
                        <dialog id={_id} className="modal">
                            <form method="dialog" className="modal-box bg-slate-100 ">
                                <div className="grid grid-cols-1 items-center rounded-lg gap-5">
                                    <div className="">
                                        <textarea name="feedback" onChange={pppp} value={hi} id="" cols="45" rows="6" className="rounded-lg p-3 text-xl"></textarea>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <button onClick={() => proceedWithFeedback(afterFeedback)} className="btn btn-primary btn-outline">Proceed</button>
                                    <button className="btn btn-accent ">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ApproveClass;