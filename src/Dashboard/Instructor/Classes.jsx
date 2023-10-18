import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Classes = ({ i, index }) => {

    const [all, setAll] = useState(false);
    const { _id, name, price, category, image, status, feedback, availableSeats, instructorName } = i;
    const { removeFromClass, user } = useContext(AuthContext);

    const dynamicClass = `font-bold text-lg uppercase ${status === 'approved' && 'text-green-500'} ${status === 'denied' && 'text-red-500'} ${status === 'pending' && 'text-yellow-500'}`;
    
    const update = d => {
        d.preventDefault();
        const name = d.target.name.value;
        const image = d.target.image.value;
        const category = d.target.category.value;
        const instructorEmail = d.target.instructorEmail.value;
        const instructorName = d.target.instructorName.value;
        const availableSeats = d.target.availableSeats.value;
        const price = d.target.price.value;

        const addClassObject = { _id, name, image, instructorName, instructorEmail, availableSeats, price, category };

        removeFromClass(addClassObject);
    }

    const dClass = `col-span-7 sm:col-span-6 text-slate-600 ${status !== "denied" && 'sm:col-span-9 col-span-11'}`;

    return (
        <div>
            {
                !all &&
                <div className='grid grid-cols-12 justify-around items-center gap-2 p-5 m-5'>
                    <div>{index + 1}.</div>

                    <div className="col-span-2 hidden sm:block">
                        <img className="w-40 h-20 rounded-md" src={image} alt={name} />
                    </div>

                    <div className={dClass}>
                        {name &&
                            <h2 className="font-semibold">Name: <span className="font-bold text-xl"> {name} </span></h2>
                        }
                        {instructorName &&
                            <p className="font-semibold">Instructor's Name : <span className="font-bold text-xl"> {instructorName} </span></p>
                        }
                        {category &&
                            <p className="font-semibold">Category : <span className="font-bold text-xl"> {category} </span></p>
                        }
                        {price &&
                            <p className="font-semibold">Hadiya : <span className="font-bold text-xl"> {price} ৳ </span></p>
                        }
                        {status &&
                            <p className="font-semibold text-amber-400">Status : <span className={dynamicClass}> {status} </span></p>
                        }
                        {feedback &&
                            <div className="font-semibold">
                                <p className="font-semibold text-xl">Feedback : <span className="font-bold"> {feedback} </span></p>
                            </div>
                        }
                    </div>
                    {
                        status === 'denied' &&
                        <div className='col-span-4 sm:col-span-3 flex justify-between gap-3 items-center'>
                            <div className='btn w-full' onClick={() => setAll(true)} >Update</div>
                        </div>
                    }

                </div>
            }

            {
                all &&

                <form className="xl:gap-5 xl:grid xl:grid-cols-2 m-5 p-5 border-4 rounded-md" onSubmit={update}>

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
                        <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" type="text" name="name" required defaultValue={name} />
                    </div>

                    <div className="grid grid-cols-3 items-center my-5 xl:my-0">
                        <label className="col-span-1 text-xl">Image URL</label>
                        <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="image" required defaultValue={image} type="text" />
                    </div>

                    <div className="grid grid-cols-3 items-center my-5 xl:my-0">
                        <label className="col-span-1 text-xl">Available Seats</label>
                        <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="availableSeats" type="number" required defaultValue={availableSeats} />
                    </div>

                    <div className="grid grid-cols-3 items-center my-5 xl:my-0">
                        <label className="col-span-1 text-xl">Price</label>
                        <input className="text-lg w-60 sm:w-80 md:w-96 text-center bg-white text-black border-4 rounded-lg" name="price" type="number" required defaultValue={price} />
                    </div>

                    <div className="grid grid-cols-3 items-center my-5 xl:my-0 col-span-2">
                        <label className="col-span-1 text-xl xl:text-right xl:me-10">Category</label>
                        <select className="text-lg w-60 sm:w-80 md:w-96 p-2 rounded-md border-4 bg-white text-black text-center" name="category"> defaultValue={category}
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

                    <div className="flex justify-center items-center gap-5">
                        <input className="btn btn-accent w-40" type="submit" value="Update" />
                        <input className="btn btn-secondary w-40" onClick={() => setAll(false)} value="close" />
                    </div>

                </form>

            }
        </div>
    );
};

export default Classes;