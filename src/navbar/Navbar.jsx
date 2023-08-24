import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const signOut = () => {
        logOut();
    }

    return (
        <div>
            <div className="navbar bg-slate-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>Classes</Link></li>
                            <li><Link>Instructors</Link></li>
                            <li><Link>Dashboard</Link></li>
                            {/* <li>
                                <Link>Parentttt</Link>
                                <ul className="p-2">
                                    <li><Link>Submenu 1</Link></li>
                                    <li><Link>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link>Item 3</Link></li> */}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost flex items-center text-xl">
                        <div>
                            <img src="../../assets/islamic-school-icon-design-vector_1_100x100.jpg" className="rounded w-10 h-10" alt="ISLAMIC-SCHOOL-ICON-DESIGN-VECTOR" />
                        </div>
                        <div>ISLAH ACADEMY</div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Classes</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li><Link>Dashboard</Link></li>
                        {/* <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-slate-500">
                                    <li><Link>Submenu 1</Link></li>
                                    <li><Link>Senu 2</Link></li>
                                </ul>
                            </details>
                        </li> */}
                        {/* <li><Link>Item 3</Link></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="btn flex" onClick={signOut} >
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img src={user.photoURL} className="w-8 rounded h-8" alt={user.displayName} />
                            </div> LogOut
                        </div> :
                        <Link to='/login' className="btn">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;