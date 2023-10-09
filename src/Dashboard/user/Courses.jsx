import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Course from './Course';

const Courses = () => {

    const { user, courses } = useContext(AuthContext);
    
    const carrt = courses.map(i=>i?.carrt);
    const userEmail = carrt.map(i=>i.map(d=>d.userEmail))
    const ite = carrt.map(i=>i.map(d=>d.ite));
    // console.log(userEmail, ite);
    
    // const myCart = userCart.filter( item => currentUser?.email === user?.email );

    return (
        <div className='mt-20'>

            <div className="text-center text-4xl my-10 underline font-bold">My Enrolled Courses</div>
            {
                // myCart?.map((cartItem, index) => <Course index={index} key={cartItem._id} cartItem={cartItem} ></Course>)
            }
        </div>
    );
};

export default Courses;