import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Classes = ({ i, index }) => {

    const { name, price, category, image, status, feedback } = i;

    const dynamicClass = `font-bold text-lg uppercase ${status === 'approved' && 'text-green-500'} ${status === 'denied' && 'text-red-500'} ${status === 'pending' && 'text-yellow-500'}`;

    return (
        <div className='grid grid-cols-12 justify-around items-center gap-2 p-5 m-5'>

            <div>{index + 1}.</div>

            <div className="col-span-2 hidden sm:block">
                <img className="w-40 h-20 rounded-md" src={image} alt={name} />
            </div>

            <div className="col-span-7 sm:col-span-6 text-slate-700">
                {name &&
                    <h2 className="font-semibold">Name: <span className="font-bold text-xl"> {name} </span></h2>
                }
                {name &&
                    <p className="font-semibold">Instructor's Name : <span className="font-bold text-xl"> {name} </span></p>
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
            <div className='sm:col-span-3 flex col-span-4 justify-between gap-3 items-center'>
                {
                    status === 'denied' &&
                    <Link to='/page/'><div className='btn w-full' >Update</div></Link>
                }
            </div>

        </div>
    );
};

export default Classes;