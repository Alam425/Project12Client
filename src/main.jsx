import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './Home/App';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './login/Login';
import Register from './Register/Register';
import Error from './Error/Error';
import Fiqh from './navbar/Catagories.jsx/Fiqh';
import Hadith from './navbar/Catagories.jsx/Hadith';
import ArabicLanguage from './navbar/Catagories.jsx/ArabicLanguage';
import SeerahHistory from './navbar/Catagories.jsx/SeerahHistory';
import MannersEtiquette from './navbar/Catagories.jsx/MannersEtiquette';
import MarriageFamilyLife from './navbar/Catagories.jsx/MarriageFamilyLife';
import HomeschoolingParenting from './navbar/Catagories.jsx/HomeschoolingParenting';
import QuranRecitationTajweed from './navbar/Catagories.jsx/QuranRecitationTajweed';
import IslamicBelief from './navbar/Catagories.jsx/IslamicBelief';
import SunnahLifestyle from './navbar/Catagories.jsx/SunnahLifestyle';
import ProductivityLifeHacks from './navbar/Catagories.jsx/ProductivityLifeHacks';
import Instructors from './Instructors/Instructors';
import CourseDetails from './common/CourseDetails';
import Private from './Private/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "Fiqh",
        element: <Fiqh/>
      },{
        path: "Hadith",
        element: <Hadith/>,
      },{
        path: "IslamicBelief",
        element: <IslamicBelief/>,
      },{
        path: "ArabicLanguage",
        element: <ArabicLanguage/>, 
      },{
        path: "Seerah&History",
        element: <SeerahHistory/>,
      },{
        path: "Sunnah&Lifestyle",
        element: <SunnahLifestyle/>,
      },{
        path: "Manners&Etiquette",
        element: <MannersEtiquette/>,
      },{
        path: "Marriage&FamilyLife",
        element: <MarriageFamilyLife/>,
      },{
        path: "Productivity&LifeHacks",
        element: <ProductivityLifeHacks/>,
      },{
        path: "Homeschooling&Parenting",
        element: <HomeschoolingParenting/>,
      },{
        path: "QuranRecitation&Tajweed",
        element: <Private><QuranRecitationTajweed/></Private>,
      },{
        path: "instructors",
        element: <Instructors></Instructors>
      },{
        path: "/tutor/:_id",
        element: <CourseDetails/>,
        loader: ({ params }) => fetch(`http://localhost:3000/tutor/${params._id}`)
      }
    ]
  },{
    path: 'login',
    element: <Login/>
  },{
    path: 'register',
    element: <Register/>
  },{
    path: "*",
    element: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)