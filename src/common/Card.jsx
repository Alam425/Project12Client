
const Card = ({ it }) => {
    const { name, image, instructorName, availableSeats, price } = it;
    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-slate-300 items-center p-5 gap-5 m-5 rounded-lg">
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
                    <button className="btn btn-primary btn-outline">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Card;