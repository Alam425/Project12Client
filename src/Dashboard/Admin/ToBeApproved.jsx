import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ApproveClass from './ApproveClass';

const ToBeApproved = () => {

    const { item } = useContext(AuthContext);
    const pendingitems = item.filter(i => i.status === 'pending');

    return (
        <div className='mt-20'>
            {
                pendingitems.map(it => <ApproveClass key={it._id} it={it} />)
            }
        </div>
    );
};

export default ToBeApproved;