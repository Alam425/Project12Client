import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const { loading, loginViaGoogle } = useContext(AuthContext);
    const [see, setSee] = useState(false);

    const googleLogin = () => {
        loginViaGoogle()   
        .then((result) => {
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            console.log(error.message);
          });             
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold whitespace-nowrap">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
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
                                <label className="label">
                                    <p className="font-semibold text-slate-700">New here? <Link className="text-lg underline" to='/register'>Register Now.</Link></p>
                                </label>
                            </div>
                        </div>
                        <div className="form-control w-full px-8 pb-8">
                            <button className="btn btn-primary btn-outline">Login</button>
                        </div>
                        <div onClick={googleLogin} className="btn-outline btn btn-warning mx-8 mb-8 text-xl">
                            <div><FaGoogle/></div>
                            <div>Login Via Google</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
