import { Link, useLoaderData } from "react-router-dom";
import ClassesList from "./ClassesList";

const InstructorDetails = () => {

  const aidee = useLoaderData();
  const { email, image, name, nameOfClassesTaken, numberOfClassesTaken, serial } = aidee;

  return (
    <div>
      <div className="md:flex mt-16 justify-around items-center gap-40 md:gap-5">
        <div className="mx-5 text-center ">
          <img src={image} alt={name} className="max-w-sm rounded-lg mx-auto" />
          <div>
            <h1 className="text-5xl text-amber-600 font-bold">{name}</h1>
            <p className="text-xl p-2 text-amber-500 font-semibold">Email: <Link href={`mailto:${email}`} target="_blank" className="underline text-amber-700" >{email}</Link></p>
          </div>
        </div>
        <div className="p-5 text-center border-b-4">
          <p className="md:text-4xl text-3xl p-2 text-emerald-700 font-bold border-y-4">{numberOfClassesTaken} Classes from<br /><span className="text-sky-800">{name}</span></p>
          <div className="text-xl mt-5 sm:mt-10 text-fuchsia-800 font-semibold border-x-4">
            {
              nameOfClassesTaken.map(i => <ClassesList key={serial} i={i}></ClassesList>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;