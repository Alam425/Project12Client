
const ClassesName = ({ classesName, index }) => {

    return (
        <div>
            <h2 className="p-1">
                <span className="text-pink-700">{index + 1}/</span>&nbsp;&nbsp;&nbsp;{classesName} 
            </h2>
        </div>
    );
};

export default ClassesName;