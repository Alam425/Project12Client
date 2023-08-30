
const Revieww = ({ i }) => {
    const { name, review } = i ;
    return (
        <div className="rounded-xl border-purple-200 border-2 m-5 p-10" >
            <h3 className="text-sm text-slate-600">{review}</h3>
            <img className="w-16 h-16 mx-auto mt-10" src="https://aslafacademy.com/wp-content/uploads/2021/03/avatar-female-01-1918x2048.png" alt={name} />
            <h3 className="font-semibold text-md text-slate-700 text-center">{name}</h3>
        </div>
    );
};

export default Revieww;