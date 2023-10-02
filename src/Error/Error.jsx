import { useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="w-full relative">
            <img className="w-full" src="https://www.thetechedvocate.org/wp-content/uploads/2023/06/error-404-not-found.png" alt="" />
                <button className="absolute bg-slate-300 p-1 rounded-md bottom-7 left-7 md:bottom-10 md:left-10 lg:bottom-20 lg:left-16 xl:bottom-24 xl:left-20" onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Error;