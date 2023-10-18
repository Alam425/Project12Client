import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

  const { user, logOut, myCart, setTheme, oho } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    setToggle(!toggle);
  };
  

  return (
    <div className="relative">
      <div className="navbar fixed h-16 top-0 bg-slate-800 text-white">

        {/* ---------------------------small screen---------------------------- */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost p-0 m-0 btn lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-slate-800 rounded-box w-72">
              <li><Link to="/" >Home</Link></li>
              <li>Classes 
                <ul className="p-2">
                  <li><Link to="/fiqh">Fiqh</Link></li>
                  <li><Link to="/Hadith">Hadith</Link></li>
                  <li><Link to="/IslamicBelief">Islamic Belief</Link></li>
                  <li><Link to="/ArabicLanguage">Arabic Language</Link></li>
                  <li><Link to="/Seerah&History">Seerah & History</Link></li>
                  <li><Link to="/Sunnah&Lifestyle">Sunnah & Lifestyle</Link></li>
                  <li><Link to="/Manners&Etiquette">Manners & Etiquette</Link></li>
                  <li><Link to="/Marriage&FamilyLife">Marriage & Family Life</Link></li>
                  <li><Link to="/Productivity&LifeHacks">Productivity & Life Hacks</Link></li>
                  <li><Link to="/Homeschooling&Parenting">Homeschooling & Parenting</Link></li>
                  <li><Link to="/QuranRecitation&Tajweed">Quran Recitation & Tajweed</Link></li>
                </ul>
              </li>
              <li><Link to="/page/instructors">Instructors</Link></li>
              <li><Link to="/page/dashboard">Dashboard</Link></li>
            </ul>
          </div>


          <Link to="/" className="btn btn-ghost flex items-center text-xl">
            <div>
              <img src="https://i.ibb.co/zGW3dbW/islamic-school-icon-design-vector-1-100x100.jpg" className="rounded w-10 h-10" alt="ISLAMIC-SCHOOL-ICON-DESIGN-VECTOR" />
            </div>
            <div>ISLAH ACADEMY</div>
          </Link>
        </div>


        {/* ---------------------------large screen---------------------------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li tabIndex={0} className="dropdown pt-2 ">
              Classes
              <ul className="dropdown-content z-[1] mt-2 menu shadow rounded-box grid grid-cols-2 w-96 gap-1 bg-slate-600">
                <li><Link to="/fiqh">Fiqh</Link></li>
                <li><Link to="/Hadith">Hadith</Link></li>
                <li><Link to="/IslamicBelief">Islamic Belief</Link></li>
                <li><Link to="/ArabicLanguage">Arabic Language</Link></li>
                <li><Link to="/Seerah&History">Seerah & History</Link></li>
                <li><Link to="/Sunnah&Lifestyle">Sunnah & Lifestyle</Link></li>
                <li><Link to="/Manners&Etiquette">Manners & Etiquette</Link></li>
                <li><Link to="/Marriage&FamilyLife">Marriage & Family Life</Link></li>
                <li><Link to="/Productivity&LifeHacks">Productivity & Life Hacks</Link></li>
                <li><Link to="/Homeschooling&Parenting">Homeschooling & Parenting</Link></li>
                <li><Link to="/QuranRecitation&Tajweed">Quran Recitation & Tajweed</Link></li>
              </ul>
            </li>
            <li><Link to="/page/instructors">Instructors</Link></li>
            <li><Link to="/page/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        <div className="navbar-end">

          <div className="form-control me-1" onClick={toggleTheme} >
            {
              toggle ?
              <span className="text-center text-white text-xs bg-blue-900 rounded-md p-1">Dark<br />Theme</span> :
              <span className="text-center text-black text-xs bg-white rounded-md p-1">Light<br />Theme</span>
            }
          </div>
          
          {
            user ?
              <div className="flex justify-between items-center gap-1 sm:gap-5">
                {
                  oho?.phoneNumber === null &&
                  <Link to='/page/dashboard' className="btn btn-success relative">
                    <FaShoppingCart className="w-8 h-8" />
                    <div className="badge badge-primary absolute m-0 p-1 -top-3 -right-2">
                      {myCart.length || 0}
                    </div>
                  </Link>
                }
                <div className="btn flex" onClick={logOut}>
                  <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                    <img src={user.photoURL} className="w-8 rounded h-8" alt={user.displayName} />
                  </div>LogOut
                </div>
              </div> :
              <Link to="/page/login" className="btn">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
