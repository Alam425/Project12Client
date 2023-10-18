import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const [see, setSee] = useState(false);
    const { loginViaGoogle, loginViaEmail, addUserToMongo } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const loginThoughEmail = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginViaEmail(email, password)
            .then(result => {
                const user = result.user;
                if (result) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `Welcome ${user?.displayName}!`,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    navigate(from, { replace: true });
                }
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    const googleLogin = () => {
        loginViaGoogle()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
                if (user) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `Welcome ${user?.displayName}!`,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    addUserToMongo(user);
                }
            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 pt-20">
                <div className="text-center">
                    <h1 className="text-5xl font-bold whitespace-nowrap">Login now!</h1>
                </div>
                <form onSubmit={loginThoughEmail} className="w-full">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" className="input input-bordered" name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <div>
                                    <input className="input input-bordered w-full" type={see ? 'text' : 'password'} name="password" />
                                </div>
                                <div className="text-xl absolute top-4 right-5" onClick={() => setSee(!see)}>
                                    {
                                        see ? <FaEye /> : <FaEyeSlash />
                                    }
                                </div>
                            </div>
                            <label className="label">
                                <p className="font-semibold text-slate-600">New here? <Link className="text-lg underline" to='/page/register'>Register Now.</Link></p>
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full px-8 pb-8">
                        <input type="submit" className="btn btn-primary btn-outline" value="Login" />
                    </div>
                    <div className="mx-8">

                        <div onClick={googleLogin} className="btn btn-success mb-8 text-xl w-full">
                            <div><FaGoogle /></div>
                            <div>Login Via Google</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
