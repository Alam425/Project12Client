import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../common/card";
import SectionTitle from "../../common/SectionTitle";

const MarriageFamilyLife = () => {
    const {item} = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Marriage & Family Life ");

    return (
        <>
        <SectionTitle down={"Marriage & Family Life"}></SectionTitle>
        <div>
            {
                filterded.map(it => <Card key={it._id} it={it} />)
            }
        </div>
            </>
    );
};

export default MarriageFamilyLife;