
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import '../index.css';
import Login from '../login/Login';
import Navbar from '../navbar/Navbar';

function App() {

  return (
   <div className=''>
      <Navbar/>
      <Outlet/>
      <Footer/>
   </div>
  )
}

export default App
