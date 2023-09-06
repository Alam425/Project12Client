import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const ClassDetails = ({ categor }) => {

    const { item } = useContext(AuthContext);

    const filtered = item.filter(i => i.category === categor);
    
    return (
        <>
            <SectionTitle down={categor}></SectionTitle>
            <div>
                {
                    filtered.map(it => <Card key={it._id} it={it} />)
                }
            </div>
        </>
    );
};

export default ClassDetails;