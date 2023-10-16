import React from 'react';

const UpdateAClass = () => {
    
        const { _id, name, price, category, image, status, feedback, availableSeats } = i;
    
    const { addClassToMongo, user } = useContext(AuthContext);

    function showModal() {
        const modalElement = document.getElementById(`${_id}`);
        modalElement.showModal();
    }

    const update = d => {
        d.preventDefault();
        const name = d.target.name.value;
        const image = d.target.photo.value;
        const category = d.target.category.value;
        const instructorEmail = d.target.instructorEmail.value;
        const instructorName = d.target.instructorName.value;
        const availableSeats = d.target.availableSeats.value;
        const price = d.target.price.value;

        const addClassObject = { name, image, instructorName, instructorEmail, availableSeats, price, category };
        addClassToMongo(addClassObject);
        d.target.reset();
    }

    return (
        <div>
            <div>
                    <dialog id={_id} className="modal">
                        <form method="dialog" className="modal-box" onSubmit={update}>
                            <div className="grid grid-cols-1 items-center p-5 rounded-lg gap-3">

                                <div className="my-5 text-teal-500">
                                    <label className="col-span-1 text-xl">Instructor Name</label>
                                    <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="instructorName" type="text" defaultValue={user?.displayName} required />
                                </div>

                                <div className="my-5 text-teal-500">
                                    <label className="col-span-1 text-xl">Instructor Email</label>
                                    <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="instructorEmail" type="text" defaultValue={user?.email} required />
                                </div>

                                <div className="my-5">
                                    <label className="col-span-1 text-xl">Name</label>
                                    <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" type="text" defaultValue={name} name="name" required />
                                </div>

                                <div className="my-5">
                                    <label className="col-span-1 text-xl">Image URL</label>
                                    <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="photo" required defaultValue={image} type="text" />
                                </div>

                                <div className="my-5">
                                    <label className="col-span-1 text-xl">Available Seats</label>
                                    <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="availableSeats" type="number" defaultValue={availableSeats} required />
                                </div>

                                <div className="my-5">
                                    <label className="col-span-1 text-xl">Price</label>
                                    <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" defaultValue={price} name="price" type="number" required />
                                </div>

                                <div className="my-5">
                                    <label className="col-span-1 text-xl xl:text-right xl:me-10">Category</label>
                                    <select className="text-lg w-60 sm:w-80 md:w-96 p-2 rounded-md border-4 bg-white text-black" name="category" defaultValue={category}>
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
                                
                                <button type="submit" className="btn btn-primary btn-outline">Proceed</button>

                            </div>
                            <div className="modal-action">
                                <button className="btn btn-accent btn-outline">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
        </div>
    );
};

export default UpdateAClass;