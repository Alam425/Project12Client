import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Courses from "./Courses";
import { key } from "localforage";

const AllCouses = () => {

    const { courses, user } = useContext(AuthContext);
    
    return (
        <div>
            {
                courses.map(i => <Courses i={i} key={i._id}></Courses>)
            }
        </div>
    );
};

export default AllCouses;