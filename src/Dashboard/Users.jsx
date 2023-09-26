import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = ({ users, index }) => {

    const [ yes, setYes ] = useState(users.role);

    const { displayName, photoURL, email, _id } = users;

    const makeAdmin = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Modify it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    // axios.patch(`https://assignment12-3fp9d56r0-alam425.vercel.app/users/${_id}`)
                    axios.patch(`http://localhost:3000/users/${id}`, {
                        users 
                      })
                        .then(data => {
                            console.log(data?.data);
                            if (data?.data?.modifiedCount > 0) {
                                setYes(false);
                                Swal.fire(
                                    'Updated!',
                                    `${displayName} is an admin now!!`,
                                    'success'
                                );
                                window.location.reload();
                            }
                        })
                }
            })
    }

    const removeAdmin = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Modify it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    // axios.patch(`https://assignment12-3fp9d56r0-alam425.vercel.app/users/${uid}`)
                    axios.patch(`http://localhost:3000/users/now/${id}`)
                        .then(data => {
                            console.log(data?.data);
                            if (data?.data?.modifiedCount > 0) {
                                Swal.fire(
                                    'Updated!',
                                    `${displayName} is regularized!`,
                                    'success'
                                );
                                window.location.reload();
                            }
                        })
                }
            })
    }

    const deleteUser = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`https://assignment12-3fp9d56r0-alam425.vercel.app/users/${id}`)
                        // axios.delete(`http://localhost:3000/users/${id}`)
                        .then(data => {
                            if (data?.data?.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    `${displayName} has been deleted`,
                                    'success'
                                );
                                window.location.reload();;
                            }
                        })
                }
            })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td className="w-12 h-12">
                <img src={photoURL} className="rounded-full" alt={displayName} />
            </td>
            <td className="font-bold">{displayName}</td>
            <td className="text-sm">{email}</td>
            <td>
                {yes ?
                    <>
                        <button onClick={() => removeAdmin(_id)} className="underline text-indigo-600 font-semibold">No</button>
                    </> :
                    <>
                        <button onClick={() => makeAdmin(_id)} className="underline text-indigo-600 font-semibold">Yes</button>
                    </>
                }
            </td>
            <td>
                <button onClick={() => deleteUser(_id)} className="underline text-rose-600 font-semibold">Remove</button>
            </td>
        </tr>
    );
};

export default Users;