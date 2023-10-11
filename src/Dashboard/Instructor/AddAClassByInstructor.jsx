import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddAClassByInstructor = () => {

  const { user, addClassToMongo } = useContext(AuthContext);

  const onSubmit = d => {

    d.preventDefault();

    const name = d.target.name.value;
    const photo = d.target.photo.value;
    const category = d.target.category.value;
    const instructorEmail = d.target.instructorEmail.value;
    const instructorName = d.target.instructorName.value;
    const availableSeats = d.target.availableSeats.value;
    const price = d.target.price.value;
    parseFloat(availableSeats);
    parseFloat(price);

    const addClassObject = { name, photo, instructorName, instructorEmail, availableSeats, price, category };

    addClassToMongo(addClassObject);
    // d.target.reset();    
  };

  return (
    <div className="mt-20">
        <div className="text-center text-4xl underline font-bold">Add Class</div>
      
        <form className="lg:gap-5 lg:grid lg:grid-cols-2 m-5 p-5 border-4 border-zinc-400 text-zinc-600 rounded-md" onSubmit={onSubmit}>

          <div className="grid grid-cols-3 items-center my-5 lg:my-0 text-rose-500">
            <label className="col-span-1 text-xl">Instructor Name</label>
            <input className="text-lg w-60 sm:w-80 md:96 text-center border-4 rounded-lg" name="instructorName" type="text" defaultValue={user?.displayName} required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 lg:my-0 text-teal-500">
            <label className="col-span-1 text-xl">Instructor Email</label>
            <input className="text-lg w-60 sm:w-80 md:96 text-center border-4 rounded-lg" name="instructorEmail" type="text" defaultValue={user?.email} required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 lg:my-0 text-sky-500">
            <label className="col-span-1 text-xl">Name</label>
            <input className="text-lg w-60 sm:w-80 md:96 text-center border-4 rounded-lg" type="text" name="name" required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 lg:my-0 text-slate-500">
            <label className="col-span-1 text-xl">Image URL</label>
            <input className="text-lg w-60 sm:w-80 md:96 text-center border-4 rounded-lg" name="photo" required type="text" />
          </div>

          <div className="grid grid-cols-3 items-center my-5 lg:my-0 text-fuchsia-500">
            <label className="col-span-1 text-xl">Available Seats</label>
            <input className="text-lg w-60 sm:w-80 md:96 text-center border-4 rounded-lg" name="availableSeats" type="number" required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 lg:my-0 text-yellow-500">
            <label className="col-span-1 text-xl">Price</label>
            <input className="text-lg w-60 sm:w-80 md:96 text-center border-4 rounded-lg" name="price" type="number" required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 lg:my-0 col-span-2 text-emerald-500">
            <label className="col-span-1 text-xl">Category</label>
            <select className="text-lg w-full" name="category">
              <option value=" Arabic Language ">Arabic Language</option>
              <option value=" Fiqh ">Fiqh</option>
              <option value=" Hadith ">Hadith</option>
              <option value=" Homeschooling & Parenting ">Homeschooling & Parenting</option>
              <option value=" Islamic Belief ">Islamic Belief</option>
              <option value=" Manners & Etiquette ">Manners & Etiquette</option>
              <option value=" Marriage & Family Life ">Marriage & Family Life</option>
              <option value=" Productivity & Life Hacks ">Productivity & Life Hacks</option>
              <option value=" Quran Recitation & Tajweed ">Quran Recitation & Tajweed</option>
              <option value=" Seerah & History ">Seerah & History</option>
              <option value=" Sunnah & Lifestyle ">Sunnah & Lifestyle</option>
            </select>
          </div>

          <input className="btn btn-accent mx-auto w-full col-span-2" type="submit" value={"Add"} />

        </form>
    </div>
  );
};

export default AddAClassByInstructor;