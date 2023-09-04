import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SectionTitle from "../../common/SectionTitle";
import Speciality from "./speciality";

const OurSpecialities = () => {
    const { specialities } = useContext(AuthContext);
    return (
        <div>
            <SectionTitle down={'ইসলাহ একাডেমির বিশেষত্ব'}></SectionTitle>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {
                    specialities.map(i => <Speciality key={i.serial} i={i}></Speciality>)
                }
            </div>
        </div>
    );
};

export default OurSpecialities;