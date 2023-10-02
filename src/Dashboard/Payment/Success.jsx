import { useNavigate } from "react-router-dom";

const Success = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate("/");
    }

    return (
        <div className="my-20">
            <img src="https://ruperhat.com/wp-content/uploads/2020/06/Paymentsuccessful21.png" alt="Payment Successful" className="w-full max-w-lg mx-auto" />
            <div className="w-40 mx-auto">
                <button className="text-xl text-green-600 font-semibold underline" onClick={goBack}>Go to Home😄</button>
            </div>
        </div>
    );
};

export default Success;