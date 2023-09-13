
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import '../index.css';
import Navbar from '../navbar/Navbar';
import Top from './Top/Top';
import OurSpecialities from './specialities/OurSpecialities';
import Review from './Review/Review';
import SpecialBundleCourses from './SpecialBundleCourses/SpecialBundleCourses';
import PopularInstructors from './PopularInstructors/PopularInstructors';

function App() {

  return (
   <div className='bg-slate-100'>
      <Navbar/>
      <Top/>
      <Outlet/>
      <SpecialBundleCourses/>
      <PopularInstructors/>
      <OurSpecialities/>
      <Review/>
      <Footer/>
   </div>
  )
}

export default App;