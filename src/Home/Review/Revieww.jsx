
const Revieww = ({ i }) => {
    const { name, review } = i;
    return (
        <div className="rounded-xl border-purple-200 border-2 m-5 p-10 grid grid-rows-1" >
            <div className="my-auto">
                <h3 className="text-sm text-slate-600">{review}</h3>
            </div>
            <div className="">
                <img className="w-16 h-16 mx-auto rounded-lg mt-10" src="https://aslafacademy.com/wp-content/uploads/2021/03/avatar-female-01-1918x2048.png" alt={name} />
                <h3 className="font-semibold text-md text-slate-700 text-center">{name}</h3>
            </div>
        </div>
    );
};

export default Revieww;