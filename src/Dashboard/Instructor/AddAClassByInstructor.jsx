import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddAClassByInstructor = () => {

  const { user, addClassToMongo } = useContext(AuthContext);

  const onSubmit = d => {

    d.preventDefault();

    const name = d.target.name.value;
    const image = d.target.image.value;
    const category = d.target.category.value;
    const instructorEmail = d.target.instructorEmail.value;
    const instructorName = d.target.instructorName.value;
    const availableSeats = d.target.availableSeats.value;
    const price = d.target.price.value;

    const addClassObject = { name, image, instructorName, instructorEmail, availableSeats, price, category };

    addClassToMongo(addClassObject);
    d.target.reset();    
  };

  return (
    <div>      
        <form className="xl:gap-5 xl:grid xl:grid-cols-2 m-5 p-5 border-4 rounded-md" onSubmit={onSubmit}>

          <div className="grid grid-cols-3 items-center my-5 xl:my-0 text-teal-500">
            <label className="col-span-1 text-xl">Instructor Name</label>
            <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="instructorName" type="text" defaultValue={user?.displayName} required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 xl:my-0 text-teal-500">
            <label className="col-span-1 text-xl">Instructor Email</label>
            <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="instructorEmail" type="text" defaultValue={user?.email} required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 xl:my-0">
            <label className="col-span-1 text-xl">Name</label>
            <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" type="text" name="name" required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 xl:my-0">
            <label className="col-span-1 text-xl">Image URL</label>
            <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="image" required type="text" />
          </div>

          <div className="grid grid-cols-3 items-center my-5 xl:my-0">
            <label className="col-span-1 text-xl">Available Seats</label>
            <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="availableSeats" type="number" required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 xl:my-0">
            <label className="col-span-1 text-xl">Price</label>
            <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="price" type="number" required />
          </div>

          <div className="grid grid-cols-3 items-center my-5 xl:my-0 col-span-2">
            <label className="col-span-1 text-xl xl:text-right xl:me-10">Category</label>
            <select className="text-lg w-60 sm:w-80 md:w-96 p-2 rounded-md border-4 bg-white text-black" name="category">
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