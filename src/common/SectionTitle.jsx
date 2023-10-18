import AOS from "aos";
import { useEffect } from "react";

const SectionTitle = ({ up, down }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="zoom-in">
            <div className="w-8/12 py-2 mx-auto my-10 text-center border-2 border-slate-600 rounded-xl">
                <h3 className="text-xl font-bold text-slate-600">{up}</h3>
                <h2 className="text-3xl font-bold text-slate-600">{down}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;