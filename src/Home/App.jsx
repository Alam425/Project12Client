
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
import { AuthContext } from '../AuthProvider/AuthProvider';


function App() {

  const { theme } = useContext(AuthContext);
  
  useEffect(() => {
    window.history.scrollRestoration = 'auto';
  }, []);

  const dynamicClassName = `${theme}`;

  return (
    <div className={dynamicClassName}>
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