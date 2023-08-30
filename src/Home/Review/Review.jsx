import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Revieww from "./Revieww";
import SectionTitle from "../../common/SectionTitle";

const Review = () => {
    const { review } = useContext(AuthContext);
    return (
        <>
        <SectionTitle down={"শিক্ষার্থীদের রিভিউ"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3">
            {
                review.map(i => <Revieww key={i.serial} i={i}></Revieww>)
            }
        </div>
        </>
    );
};

export default Review;