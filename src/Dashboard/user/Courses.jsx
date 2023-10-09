import { useContext } from 'react';
import Course from './Course';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Courses = () => {

    const { courses } = useContext(AuthContext);

    return (
        <div className='mt-20'>

            <div className="text-center text-4xl my-10 underline font-bold">My Enrolled Courses</div>
            {
                courses?.map((cartItem, index) => <Course index={index} key={cartItem._id} cartItem={cartItem} ></Course>)
            }
        </div>
    );
};

export default Courses;