import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Course = ({ cartItem, index }) => {

    const { courseUser, user } = useContext(AuthContext);
    const { image, name, instructorName, category } = cartItem;


    return (
        <div className="my-5 me-5">
            {
                user.email === courseUser.email && 
                <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center justify-center text-md md:text-xl">

                    <div className="text-gray-700 font-semibold text-center">{index + 1}.</div>

                    <div className="col-span-2 hidden sm:block">
                        <img src={image} alt={name} className="w-16 h-16 mx-auto rounded-xl" />
                    </div>

                    <div className="col-span-5 sm:col-span-5 text-lg sm:text-2xl text-slate-700 font-bold">{name}</div>

                    <div className="text-gray-500 col-span-3 sm:col-span-2 text-md">{instructorName}</div>

                    <div className="text-purple-700 col-span-3 sm:col-span-2 text-md">{category}</div>

                </div>
            }
        </div>
    );
};

export default Course;