import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {

    const navigate = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center">
            <span className="w-20 h-screen loading loading-dots"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/page/login" state={{ from: navigate }} replace />

};

export default Private;