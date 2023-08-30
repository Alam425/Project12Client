import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../common/card";
import SectionTitle from "../../common/SectionTitle";

const SeerahHistory = () => {
    const {item} = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Seerah & History ");

    return (
        <>
        <SectionTitle down={" Seerah & History "}></SectionTitle>
        <div>
            {
                filterded.map(it => <Card key={it._id} it={it} />)
            }
        </div>
            </>
    );
};

export default SeerahHistory;