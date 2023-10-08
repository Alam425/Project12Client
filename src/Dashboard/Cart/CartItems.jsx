import axios from "axios";
import Swal from "sweetalert2";

const CartItems = ({ i, index }) => {

    const { image, name, price, _id } = i.ite;
    
    const deletecart = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    // axios.delete(`https://assignment12-3fp9d56r0-alam425.vercel.app/cart/${id}`)
                    axios.delete(`http://localhost:3000/cart/${id}`)
                        .then(data => {
                            if (data?.data?.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    `${name} has been removed successfully...!!`,
                                    'success'
                                );
                            }
                            window.location.reload();
                        })
                        .catch(r => console.log(r.message))
                }
            })
    }


    return (
        <div className="my-5 me-5">
            <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center justify-center text-md md:text-xl">

                <div className="text-gray-700 font-semibold text-center">{index + 1}.</div>

                <div className="col-span-2 hidden sm:block">
                    <img src={image} alt={name} className="md:w-24 md:h-20 sm:w-20 sm:h-16 mx-auto rounded-md" />
                </div>

                <div className="col-span-6 sm:col-span-5 text-slate-700 font-bold">{name}</div>

                <div className="text-amber-500 col-span-3 sm:col-span-2 font-semibold">Price : <span className="text-green-600">{price}</span>৳</div>

                <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-2">
                        <button onClick={() => deletecart(_id)} className="btn-error text-white btn">Remove</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartItems;