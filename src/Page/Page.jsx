import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Page = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>       
        </div>
    );
};

export default Page;