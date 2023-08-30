import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../common/card";
import SectionTitle from "../../common/SectionTitle";

const Fiqh = () => {
    const {item} = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Fiqh ");

    return (
        <>
        <SectionTitle down={ "Fiqh" }></SectionTitle>
        <div>
            {
                filterded.map(it => <Card key={it._id} it={it} />)
            }
        </div>
            </>
    );
};

export default Fiqh;