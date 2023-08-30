import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut();
  };

  return (
    <div className="relative">
      <div className="navbar fixed h-16 top-0 bg-slate-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 rounded-box w-72">
              <li><Link>Home</Link></li>
              <li><Link>Classes</Link>
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
              <li><Link>Instructors</Link></li>
              <li><Link>Dashboard</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost flex items-center text-xl">
            <div>
              <img src="../../assets/islamic-school-icon-design-vector_1_100x100.jpg" className="rounded w-10 h-10" alt="ISLAMIC-SCHOOL-ICON-DESIGN-VECTOR"/>
            </div>
            <div>ISLAH ACADEMY</div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li tabIndex={0}>
              <details>
                <summary>Classes</summary>
                <ul className="p-2 grid grid-cols-2 w-96 gap-1 bg-slate-500">
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
              </details>
            </li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link>Dashboard</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ?
            <div className="btn flex" onClick={signOut}>
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <img src={user.photoURL} className="w-8 rounded h-8" alt={user.displayName}/>
              </div>LogOut
            </div> :
            <Link to="/login" className="btn">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
