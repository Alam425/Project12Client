import { Link } from "react-router-dom";

const Course = ({ cartItem, index }) => {
    
    const { image, name, instructorName, category } = cartItem?.myCartItem?.ite;

    const categoryWithoutSpaces = category.replace(/\s+/g, '');

    return (
        <div className="my-5 me-5">

            <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center justify-center md:text-xl">

                <div className="text-gray-600 font-semibold text-center">{index + 1}.</div>

                <div className="col-span-2 hidden sm:block mx-auto">
                    <img src={image} alt={name} className="h-28 rounded-xl" />
                </div>

                <div className="col-span-5 sm:col-span-5 text-lg sm:text-2xl text-slate-600 font-bold">{name}</div>

                <div className="text-gray-600 col-span-3 sm:col-span-2 text-base">{instructorName}</div>

                <div className="text-purple-700 col-span-3 sm:col-span-2 text-base"><Link to={`/${categoryWithoutSpaces}`}>{category}</Link></div>

            </div>
        </div>
    );
};

export default Course;