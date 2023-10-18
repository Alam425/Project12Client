import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = ({ users, index }) => {

    const { displayName, photoURL, email, _id, phoneNumber } = users;
    
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
                                Swal.fire(
                                    `${displayName} is an admin now!!`
                                );
                                window.location.reload();
                            }
                        })
                }
            })
    }

    const makeStudent = id => {
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
                    // axios.patch(`https://assignment12-3fp9d56r0-alam425.vercel.app/users/student/${id}`)
                    axios.patch(`http://localhost:3000/users/student/${id}`)
                        .then(data => {
                            console.log(data?.data);
                            if (data?.data?.modifiedCount > 0) {
                                Swal.fire(
                                    `${displayName} is a Student Now!`
                                );
                                window.location.reload();
                            }
                        })
                }
            })
    }

    const makeInstructor = id => {
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
                    // axios.patch(`https://assignment12-3fp9d56r0-alam425.vercel.app/users/instructor/${id}`)
                    axios.patch(`http://localhost:3000/users/instructor/${id}`)
                        .then(data => {
                            console.log(data?.data);
                            if (data?.data?.modifiedCount > 0) {
                                Swal.fire(
                                    `${displayName} is an Instructor Now!`
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
        <tr className="font-bold py-40">
            <td className="py-5">{index + 1}</td>
            <td className="w-12 h-10 hidden sm:block m-auto">
                <img src={photoURL} className="rounded-full" alt={displayName} />
            </td>
            <td className="text-violet-600">{displayName}</td>
            <td className="text-sm text-gray-600 hidden sm:block">{email}</td>
            <td >
                {
                    phoneNumber === null &&
                    <div className="text-fuchsia-700 font-semibold flex justify-center items-center">Student&nbsp;<img src="https://www.iconpacks.net/icons/2/free-arrow-next-icon-2825-thumb.png" className="w-8 h-8" alt="arrow" />&nbsp;<button onClick={() => makeInstructor(_id)} className="text-green-600 font-semibold">Instructor</button></div>
                }
                {
                    phoneNumber === "instructor" &&
                    <div className="text-green-600 font-semibold flex justify-center items-center">Instructor&nbsp;<img src="https://www.iconpacks.net/icons/2/free-arrow-next-icon-2825-thumb.png" className="w-8 h-8" alt="arrow" />&nbsp;<button onClick={() => makeAdmin(_id)} className="text-indigo-600 font-semibold">Admin</button></div>
                }
                {
                    phoneNumber === "admin" &&
                    <div className="text-indigo-600 font-semibold flex justify-center items-center">Admin&nbsp;<img src="https://www.iconpacks.net/icons/2/free-arrow-next-icon-2825-thumb.png" className="w-8 h-8" alt="arrow" />&nbsp;<button onClick={() => makeStudent(_id)} className="text-fuchsia-700 font-semibold">Student</button></div>
                }
            </td>
            <td>
                <button onClick={() => deleteUser(_id)} className="text-rose-600 font-semibold">Delete</button>
            </td>
        </tr>
    );
};

export default Users;