import { useState } from "react";
import ClassesName from "./ClassesName";


const Instructor = ({ instructor }) => {
    console.log(instructor);
    const [classs, setClasss] = useState(false);
    let { email, image, name, nameOfClassesTaken, numberOfClassesTaken } = instructor;

    if(numberOfClassesTaken === 0){
        setClasss(true);
    }

    // return (
        // <div>
        //     <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //         <figure><img src={image} alt={name} /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{name}</h2>
        //             <p>{email}</p>
        //             <p>Number of Classes Taken : {numberOfClassesTaken}</p>

        //             {
        //                 classs && <div className="dropdown dropdown-end">
        //                     <label tabIndex={0} className="btn btn-ghost">
        //                         Name of Classes Taken
        //                     </label>
        //                     <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
        //                         <div className="card-body">
        //                             <h2 className="card-title">
        //                                 {
        //                                     nameOfClassesTaken.map(classesName => <ClassesName classesName={classesName} key={classesName} ></ClassesName>)
        //                                 }
        //                                  </h2>
        //                         </div>
        //                     </div>
        //                 </div>
        //             }
        //         </div>
        //     </div>
        // </div>
    // );
};

export default Instructor;