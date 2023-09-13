import { useState } from "react";
import ClassesName from "../Instructors/ClassesName";


const Instructor = ({ i }) => {
    console.log(i);

    const [claas, setClaas] = useState(false);
    const { email, image, name, nameOfClassesTaken, numberOfClassesTaken } = i;
    if (numberOfClassesTaken === 0) {
       setClaas(true);
    }

    return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>Number of Classes Taken : {numberOfClassesTaken}</p>

                {
                    claas && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost">
                            Name of Classes Taken
                        </label>
                        <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                            <div className="card-body">
                                <h2 className="card-title">
                                    {
                                        nameOfClassesTaken.map(classesName => <ClassesName classesName={classesName} key={classesName} ></ClassesName>)
                                    }
                                     </h2>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
    );
};

export default Instructor;