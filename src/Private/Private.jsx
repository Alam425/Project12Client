import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {

    const navigate = useLocation();
    const { user, loading } = useContext(AuthContext);

    if(loading){
       return <span className="my-16 mx-auto loading loading-dots w-20"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/page/login" state={{ from : navigate }} replace />

};

export default Private;