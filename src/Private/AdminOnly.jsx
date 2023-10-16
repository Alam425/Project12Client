import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminOnly = ({ children }) => {

    const { oho } = useContext(AuthContext);
     
    if(oho?.phoneNumber === 'instructor'){
        return children;
    }
    
};

export default AdminOnly;