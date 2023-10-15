import React from 'react';

const Payments = ({ i, index }) => {

    const { itemName, date, price, item } = i;

    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();

    return (
        <div className="my-5 me-5">

            <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center justify-center text-md sm:text-lg text-center">

                <div>{index + 1}.</div>

                <div className="col-span-5 text-lg">{itemName}</div>

                <div className="col-span-3">{item?.ite?.instructorName}</div>

                <div className="col-span-1">{price}</div>

                <div className="col-span-2">{day} - {month} - {year}</div>

            </div>
        </div>
    );
};

export default Payments;