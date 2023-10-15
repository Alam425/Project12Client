import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Users from "./Users";

const UsersTable = () => {

    const { allusers } = useContext(AuthContext);

    return (
        <table className="pt-20 mb-5 px-20 w-full text-center text-zinc-400">
            <thead>
                <tr className="">
                    <th className="pb-5">S/No</th>
                    <th className="pb-5 hidden sm:block">Image</th>
                    <th className="pb-5">Name</th>
                    <th className="pb-5 hidden sm:block">Email</th>
                    <th className="pb-5">Change Role</th>
                    <th className="pb-5">Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    allusers.map((users, index) =>
                        <Users users={users} index={index} key={users._id}></Users>)
                }
            </tbody>
        </table>
    );
};

export default UsersTable;