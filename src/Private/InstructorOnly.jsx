import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const InstructorOnly = ({ children }) => {

    const { oho } = useContext(AuthContext);
     
    if(oho?.phoneNumber === 'instructor'){
        return children;
    }
    
};

export default InstructorOnly;