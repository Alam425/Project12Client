import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Instructors = () => {

    const { allusers }= useContext(AuthContext);
    // const instructor = allusers.filter(instructor => instructor.enrole === "instructor");
    // console.log(instructor);
    return (
        <div className="text-xl m-20">
            {/* { allusers } */}
        </div>
    );
};

export default Instructors;