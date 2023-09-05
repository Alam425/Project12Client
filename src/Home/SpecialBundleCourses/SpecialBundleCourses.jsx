import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SectionTitle from "../../common/SectionTitle";
import AtAGlance from "../../common/AtAGlance";

const SpecialBundleCourses = () => {

    const { item } = useContext(AuthContext);
    const [isModalSet, setIsModalSet] = useState(false);

    const bundleCourses = item.filter(courses => courses.category === " Bundle Courses ");
    return (
    <>
    <SectionTitle down={"বিশেষ ছাড়ে বান্ডেল কোর্সসমূহ"}></SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-10">
            {
                bundleCourses.map(i => <AtAGlance isModalSet={isModalSet} setIsModalSet={setIsModalSet} key={i._id} i={i}></AtAGlance>)
            }
        </div>
    </>
    );
};

export default SpecialBundleCourses;