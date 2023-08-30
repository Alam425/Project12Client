import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";

const ArabicLanguage = () => {
    const { item } = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Arabic Language ");

    return (
        <>
            <SectionTitle down={'Arabic Language'}></SectionTitle>
            <div>
                {
                    filterded.map(it => <Card key={it._id} it={it} />)
                }
            </div>
        </>
    );
};

export default ArabicLanguage;