import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {

    const course = useLoaderData();
console.log(course);
    return (
        <div>
        </div>
    );
};

export default CourseDetails;