import { Link } from "react-router-dom";

const ClassesList = ({i}) => {
    return (
        <div className="py-2 px-10">
            <Link className="">{i}</Link>
        </div>
    );
};

export default ClassesList;