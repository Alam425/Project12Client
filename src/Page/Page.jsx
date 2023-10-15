import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import '../index.css';
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Page = () => {

    useEffect(() => {
      window.history.scrollRestoration = 'auto';
    }, []);

    const { theme } = useContext(AuthContext);
    const dynamicClassName = `${theme}`;

    return (
        <div className={dynamicClassName}>
            <Navbar/>
            <Outlet/>
            <Footer/>       
        </div>
    );
};

export default Page;