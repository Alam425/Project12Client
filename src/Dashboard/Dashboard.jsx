import { useLoaderData } from "react-router-dom";
import Users from "./Users";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {

    const { allusers } = useContext(AuthContext);

    return (
        <div>
            <div className="mt-16">
                Dashboard.jsx
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                            allusers.map((users, index)=><Users index={index} users={users}></Users>) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;