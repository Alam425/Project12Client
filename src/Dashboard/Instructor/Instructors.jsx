import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Instructors = () => {

    const { allusers }= useContext(AuthContext);
    const instructor = allusers.filter(instructor => instructor?.phoneNumber === "admin");
    console.log(instructor);
    return (
        <div className="text-xl m-20">
        </div>
    );
};

export default Instructors;