import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Course from './Course';

const Courses = () => {

    const { user, courses } = useContext(AuthContext);
    const currentUser = user;

    return (
        <div className='mt-20'>
            {
                courses[0]?.carrt.map((cartItem, index) => <Course currentUser={currentUser} index={index} key={cartItem._id} cartItem={cartItem}></Course>)
            }
        </div>
    );
};

export default Courses;