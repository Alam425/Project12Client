import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const isAdmin = () => {

    const { allusers, yesUser, setYesUser } = useContext(AuthContext);
console.log(allusers);
    return (
        <div>

        </div>
    );
};

export default isAdmin;