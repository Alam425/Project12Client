import ClassesName from "../HomepageInstructors/ClassesName";

const Instructor = ({ i }) => {

    const { email, image, name, nameOfClassesTaken, numberOfClassesTaken, _id } = i;

    const showModal = () => { document.getElementById(_id).showModal() }

    return (
        <div className="text-center border-4 rounded-2xl">
            <div className="mb-2">
                <div className="w-80 h-80 mx-auto mb-2">
                    <img className="w-full rounded-md" src={image} alt={name} />
                </div>
                <p className="my-2 text-2xl font-semibold text-violet-400 pt-5">{name}</p>
                <p className="my-1 text-sm font-semibold text-red-700 ">{email}</p>
                <p className="my-1 text-md font-semibold text-orange-500">Classes Count : <span className="text-indigo-700">{numberOfClassesTaken}</span></p>

                {
                    numberOfClassesTaken !== 0 &&
                    <button className="underline text-slate-600" onClick={() => showModal(_id)}>Tap to see Classes</button>
                }
            </div>

            <dialog id={_id} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <p className="text-left text-sm font-semibold text-blue-700 ">
                        {nameOfClassesTaken.map((i, index) => <ClassesName index={index} key={i._id} classesName={i}></ClassesName>)}
                    </p>
                </div>
            </dialog>

        </div>
    );
};

export default Instructor;