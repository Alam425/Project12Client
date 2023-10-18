import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Payments from './Payments';

const AllPayments = () => {

    const { payments } = useContext(AuthContext);

    if (!payments) {
        return;
    }

    return (
        <>
            {
                payments.length > 0 &&
                <>
                    <div className="grid grid-cols-12 gap-2 sm:gap-5 text-md sm:text-lg text-center ms-2">
                        <div>Index</div>
                        <div className="col-span-5 sm:col-span-5">Name</div>
                        <div className="col-span-3">Instructor</div>
                        <div className="col-span-1">Price</div>
                        <div className="col-span-2">Date</div>
                    </div>
                    <div className="border-2"></div>
                </>
            }

            <div>
                {
                    payments.map((i, index) => <Payments key={i._id} index={index} i={i}></Payments>)
                }
            </div>
        </>
    );
};

export default AllPayments;