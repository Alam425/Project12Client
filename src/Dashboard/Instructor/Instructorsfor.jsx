import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Classes from "./Classes";

const Instructorsfor = () => {

    const { myClasses } = useContext(AuthContext);

    const sum = myClasses.length * myClasses.length * myClasses.length;

    return (
        <div className="">
            {   
                myClasses.map((i, index) => <Classes i={i} index={index} key={i._id} ></Classes>)
            }
        </div>
    );
};

export default Instructorsfor;