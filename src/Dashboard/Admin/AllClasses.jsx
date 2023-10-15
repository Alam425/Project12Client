import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AllItemCard from './AllItemCard';

const AllClasses = () => {

    const { item } = useContext(AuthContext);

    return (
        <div>

            {
                item.map(it => <AllItemCard key={it._id} it={it} />)
            }
        </div>
    );
};

export default AllClasses;