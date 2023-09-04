import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {

    const aidee = useLoaderData();
    console.log(aidee.nameOfClassesTaken);

    return (
        <div>
           
        </div>
    );
};

export default CourseDetails;