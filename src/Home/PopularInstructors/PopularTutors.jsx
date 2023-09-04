import { Link } from "react-router-dom";

const PopularTutors = ({ i }) => {

    const { name, email, nameOfClassesTaken, numberOfClassesTaken, _id, image } = i;

    function showModal() {
        const modalElement = document.getElementById('my_modal');
        modalElement.showModal();
    }

    return (
        <div>
            <div className="m-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-slate-300 items-center p-5 rounded-lg">
                    <div className="w-3/4 mx-auto">
                        <img className="w-96 rounded-xl " src={image} alt={name} />
                    </div>
                    <div className=" text-slate-700">
                        {name && <h2 className="text-md font-semibold">Name: <span className="text-md text-red-900 mx-3 text-lg whitespace-nowrap"> {name} </span></h2>}

                        {email && <p className="text-md font-semibold">Instructors Email : <span className="text-md text-purple-900 mx-3 text-lg"> {email} </span></p>}

                        {numberOfClassesTaken && 
                        <p className="text-md font-semibold">Number of Classes Taken : <span className="text-cyan-700 text-xl"> {numberOfClassesTaken} </span></p>
                        }

                        {nameOfClassesTaken &&
                            <Link to={`/tutor/${_id}`}>
                                <div className="underline text-rose-600 font-semibold text-lg whitespace-nowrap" >
                                    See Classes Taken by The Tutor
                                </div>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularTutors;