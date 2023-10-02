import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Users from "./Users";

const UsersTable = () => {

    const { allusers } = useContext(AuthContext);

    return (
        <table className="mt-20 mb-5 px-20 table-zebra table">
            <thead>
                <tr>
                    <th>S/No</th>
                    <th className="hidden sm:block">Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Change Role</th>
                    <th>Remove</th>
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