import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../common/card";
import SectionTitle from "../../common/SectionTitle";

const HomeschoolingParenting = () => {
    const {item} = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Homeschooling & Parenting ");

    return (
        <>
        <SectionTitle down={ "Homeschooling & Parenting" }></SectionTitle>
        <div>
            {
                filterded.map(it => <Card key={it._id} it={it} />)
            }
        </div>
            </>
    );
};

export default HomeschoolingParenting;