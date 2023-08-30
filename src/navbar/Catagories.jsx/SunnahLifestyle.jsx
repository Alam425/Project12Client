import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../common/card";
import SectionTitle from "../../common/SectionTitle";

const SunnahLifestyle = () => {
    const {item} = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Sunnah & Lifestyle ");

    return (
        <>
        <SectionTitle down={" Sunnah & Lifestyle "}></SectionTitle>
        <div>
            {
                filterded.map(it => <Card key={it._id} it={it} />)
            }
        </div>
            </>
    );
};

export default SunnahLifestyle;