import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "../../common/card";
import SectionTitle from "../../common/SectionTitle";

const ProductivityLifeHacks = () => {
    const {item} = useContext(AuthContext);

    const filterded = item.filter(i => i.category === " Productivity & Life Hacks ");

    return (
        <>
        <SectionTitle down={" Productivity & Life Hacks "}></SectionTitle>
        <div>
            {
                filterded.map(it => <Card key={it._id} it={it} />)
            }
        </div>
            </>
    );
};

export default ProductivityLifeHacks;