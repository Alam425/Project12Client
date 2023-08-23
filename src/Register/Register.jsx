import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const { registerViaEmail } = useContext(AuthContext);
    const [see, setSee] = useState(false);
    const [se, setSe] = useState(false);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl whitespace-nowrap font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" className="input input-bordered" />
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
                                        <input className="input input-bordered w-full" type={see ? 'text' : 'password'} name="confirmPassword" id="" />
                                    </div>
                                    <div className="text-xl absolute top-4 right-5" onClick={() => setSe(!se)}>
                                        {
                                            se ? <FaEye /> : <FaEyeSlash />
                                        }
                                    </div>
                                </div>
                            </div>
                            <label className="label">
                                <p className="font-semibold text-slate-700">Already have an account? <Link className="text-lg underline" to='/login'>Login Now.</Link></p>
                            </label>
                        </div>
                        <div className="form-control w-full p-8">
                            <button className="btn btn-primary btn-outline">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;