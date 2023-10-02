import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const Register = () => {

    const navigate = useNavigate();
    const { auth, addUserToMongo } = useContext(AuthContext);
    const [see, setSee] = useState(false);
    const [se, setSe] = useState(false);
    const [error, setError] = useState("");
    const [error2, setError2] = useState("");
    const [error3, setError3] = useState("");
    const [error4, setError4] = useState("");


    const formSubmitted = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const photo = e.target.photo.value;

        if (password.length < 6) {
            setError("Password Must Contain More Than 5 Characters");
            return;
        }
        setError("");

        if (/(?=.*?[A-Z])/.test(password) === false) {
            setError2("Password Must Contain At Least 1 Capital Letter");
            return;
        }
        setError2("");

        if (/(?=.*?[#?!@$%^&*-])/.test(password) === false) {
            setError3("Password Must Contain At Least 1 Special Character");
            return;
        }
        setError3("");

        if (password !== confirmPassword) {
            setError4('Passwords do not match, please check');
            return;
        }
        setError4("");

        createUserWithEmailAndPassword(auth, email, confirmPassword)
            .then(result => {
                updateProfile(auth.currentUser, {
                    photoURL: photo, displayName: name,
                }
                )
                    .then(() => {
                        addUserToMongo(result.user);
                        console.log(result.user);
                        if (result?.user) {
                            Swal.fire({
                                position: 'top',
                                icon: 'success',
                                title: `Welcome ${result?.user?.displayName}!`,
                                showConfirmButton: false,
                                timer: 3000
                            })
                        }
                    })
                    .catch((e) => {
                        if (e?.message) {
                            Swal.fire({
                                position: 'top',
                                icon: 'error',
                                title: `${result.user} </br> Already Exists!`,
                                showConfirmButton: false,
                                timer: 2000
                            })
                        };
                    });
                e.target.reset();
                navigate('/', { replace: true });
            })
            .catch((e) => {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: `${e.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div>
            <div className="mt-20 grid grid-cols-1 justify-center items-center sm:grid-cols-2">
                <div className="text-center w-full">
                    <h1 className="text-5xl font-bold whitespace-nowrap">Register now!</h1>
                </div>
                <form onSubmit={formSubmitted} className="w-full">
                    <div className="card-body pb-0 mb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full max-w-full">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <div>
                                    <input className="input input-bordered w-full" type={see ? 'text' : 'password'} name="password" id="" />
                                </div>
                                <div className="text-xl absolute top-4 right-5" onClick={() => setSee(!see)}>
                                    {
                                        see ? <FaEye /> : <FaEyeSlash />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div className="relative">
                                <div>
                                    <input className="input input-bordered w-full" type={se ? 'text' : 'password'} name="confirmPassword" id="" />
                                </div>
                                <div className="text-xl absolute top-4 right-5" onClick={() => setSe(!se)}>
                                    {
                                        se ? <FaEye /> : <FaEyeSlash />
                                    }
                                </div>
                            </div>
                        </div>
                        <label className="label">
                            <p className="font-semibold text-slate-700">Already have an account? <Link className="text-lg underline" to='/page/login'>Login Now.</Link></p>
                        </label>
                        <h3 className="text-red-600 text-xl text-center font-semibold">{error || error2 || error3 || error4}</h3>
                    </div>
                    <div className="form-control w-full px-8 pb-8 mt-0">
                        <input type="submit" className="btn btn-primary btn-outline" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;