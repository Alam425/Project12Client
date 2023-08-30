import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../common/card";
import SectionTitle from "../../common/SectionTitle";

const QuranRecitationTajweed = () => {
    const {item} = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Quran Recitation & Tajweed ");

    return (
        <>
        <SectionTitle down={" Quran Recitation & Tajweed "}></SectionTitle>
        <div>
            {
                filterded.map(it => <Card key={it._id} it={it} />)
            }
        </div>
            </>
    );
};

export default QuranRecitationTajweed;