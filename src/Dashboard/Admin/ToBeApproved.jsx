import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ApproveClass from './ApproveClass';

const ToBeApproved = () => {

    const { item } = useContext(AuthContext);
    const pendingitems = item.filter(i => (i.status === 'pending' || i.status === 'approved' || i.status === 'denied'));

    return (
        <div className=''>
            <div className="text-center text-4xl my-10 underline font-bold">Courses to be approved</div>
            {
                pendingitems.map((it, index) => <ApproveClass index={index} key={it._id} it={it} />)
            }
        </div>
    );
};

export default ToBeApproved;