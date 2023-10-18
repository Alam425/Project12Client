import { useContext } from 'react';
import Course from './Course';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Courses = () => {

    const { courses } = useContext(AuthContext);

    return (
        <div>
            {
                courses?.map((cartItem, index) => <Course index={index} key={cartItem._id} cartItem={cartItem} ></Course>)
            }
        </div>
    );
};

export default Courses;