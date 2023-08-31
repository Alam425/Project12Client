import { Link } from "react-router-dom";

const AtAGlance = ({ i }) => {

    const { image, name, price, _id, instructorName, availableSeats } = i;
    console.log(i);

    function showModal() {
        const modalElement = document.getElementById('my_modal_1');
        modalElement.showModal();
    }

    return (
        <div className="mx-5">
            <div className="rounded-box p-5 border-2 border-slate-500 w-full h-full">
                <div className="grid grid-cols-1">
                    <img className="w-80 h-52 rounded-xl mx-auto" src={image} alt={name} />
                    <p className="text-2xl font-bold text-green-600">{name}</p>
                    <div className="flex gap-5 justify-between items-center">
                        <div className="flex gap-5 items-center justify-between">
                            <p className="text-lg font-semibold text-slate-600">Hadiya : &nbsp;&nbsp;&nbsp;<span className="line-through text-slate-400">{price * 1.6} ৳</span></p>
                            <p className="text-lg font-bold text-amber-600">{price} ৳</p>
                        </div>
                        <div>
                            {/* <Link to={`/class/${_id}`}> */}
                            {/* Open the modal using ID.showModal() method */}
                            <button className="btn btn-neutral my-2" onClick={() => showModal()}>See Details</button>
                            <dialog id="my_modal_1" className="modal">
                                <form method="dialog" className="modal-box bg-slate-100 ">
                                    <div className="grid grid-cols-1 items-center p-5 rounded-lg gap-3">
                                        <div className="w-3/4 mx-auto">
                                            <img className="w-full rounded-xl " src={image} alt={name} />
                                        </div>
                                        <div className=" text-slate-700">
                                            <h2 className="text-md font-semibold">Name: <span className="text-md font-bold text-xl"> {name} </span></h2>
                                            <p className="text-md font-semibold">Instructors Name : <span className="text-md font-bold text-xl"> {instructorName} </span></p>
                                            <p className="text-md font-semibold">Available Seats : <span className="text-md font-bold text-xl"> {availableSeats} </span></p>
                                            <p className="text-md font-semibold">Hadiya : <span className="text-md font-bold text-xl"> {price} ৳ </span></p>
                                        </div>
                                        <div className="md:justify-end card-actions">
                                        </div>
                                    </div>

                                    <div className="modal-action m-0">
                                            <button className="btn btn-primary btn-outline">Listen</button>
                                        <button className="btn btn-info btn-outline">Close</button>
                                    </div>
                                </form>
                            </dialog>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtAGlance;