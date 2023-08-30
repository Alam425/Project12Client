
const Speciality = ({ i }) => {
    const { icon, title, title1 } = i;
    return (
        <div className="border-2 m-5 text-center border-purple-200 rounded-xl p-5 bg-white">
            <img className="w-20 mx-auto h-20 mb-4" src={icon} alt={title} />
            <h3 className="text-lg text-amber-600 font-bold my-2">{title}</h3>
            <h5 className="text-sm text-sky-700 font-semibold">{title1}</h5>
        </div>
    );
};

export default Speciality;