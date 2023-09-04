import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SectionTitle from "../../common/SectionTitle";
import PopularTutors from "./PopularTutors";

const PopularInstructors = () => {

    const { instructors }= useContext(AuthContext);

    return (
        <div>
            <SectionTitle down={"জনপ্রিয় শিক্ষকমন্ডলী"}></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {
                instructors.filter(i => i.numberOfClassesTaken > 1 ).slice(0,6).map( i => <PopularTutors key={i._id} i={i} ></PopularTutors> )
            }
        </div>
        </div>
    );
};

export default PopularInstructors;