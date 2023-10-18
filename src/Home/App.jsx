
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import '../index.css';
import Navbar from '../navbar/Navbar';
import Top from './Top/Top';
import OurSpecialities from './specialities/OurSpecialities';
import Review from './Review/Review';
import SpecialBundleCourses from './SpecialBundleCourses/SpecialBundleCourses';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


function App() {

  const { theme } = useContext(AuthContext);

  useEffect(() => {
    window.history.scrollRestoration = 'auto';
  }, []);

  // const classesDataFn = () => {
  //   () => {
  //     return axios.get("http://localhost:3000/class")
  //   }
  // }

  // const queryClient = useQueryClient();

  // const { data, isLoading } = useQuery({
  //   queryKey: ['classesData'],
  //   queryFn: classesDataFn
  // })

  // if (isLoading) {
  //   return <div className='text-5xl text-center'>Loading</div>
  // }

  const dynamicClassName = `${theme}`;

  return (
    <div className={dynamicClassName}>
      <Navbar />
      <Top />
      {
        // data.data.map(i => <div>{i.price}</div>)
      }
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