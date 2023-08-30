import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../common/card";
import SectionTitle from "../../common/SectionTitle";

const MannersEtiquette = () => {
    const {item} = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Manners & Etiquette ");

    return (
        <>
        <SectionTitle down={ "Manners & Etiquette" }></SectionTitle>
        <div>
            {
                filterded.map(it => <Card key={it._id} it={it} />)
            }
        </div>
        </>
    );
};

export default MannersEtiquette;