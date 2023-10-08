
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import '../index.css';
import Navbar from '../navbar/Navbar';
import Top from './Top/Top';
import OurSpecialities from './specialities/OurSpecialities';
import Review from './Review/Review';
import SpecialBundleCourses from './SpecialBundleCourses/SpecialBundleCourses';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthProvider/AuthProvider';


function App() {

  const { user, setMyCart } = useContext(AuthContext);
  useEffect(() => {
    // const userEmail = user.email;
    // axios.get(`http://localhost:3000/cart/${userEmail}`)
    axios.get(`http://localhost:3000/cart`)
      .then(data => {
        setMyCart(data?.data);
      })
  }, [])

  useEffect(() => {
    window.history.scrollRestoration = 'auto';
  }, []);


  return (
    <div className='bg-slate-100'>
      <Navbar />
      <Top />
      <Outlet />
      <SpecialBundleCourses />
      <PopularInstructors />
      <OurSpecialities />
      <Review />
      <Footer />
    </div>
  )
}

export default App;