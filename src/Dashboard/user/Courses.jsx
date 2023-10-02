import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Course from './Course';

const Courses = () => {

    const { courses, setCourseUser } = useContext(AuthContext);
    setCourseUser(courses[0]?.user);

    return (
        <div className='mt-20'>
            
            <div className="text-center text-4xl my-10 underline font-bold">My Enrolled Courses</div>
            {
                courses[0]?.carrt.map((cartItem, index) => <Course index={index} key={cartItem._id} cartItem={cartItem}></Course>)
            }
        </div>
    );
};

export default Courses;