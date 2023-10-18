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
import InstructorDetails from './common/InstructorDetails';
import Private from './Private/Private';
import Dashboard from './Dashboard/Dashboard';
import Page from './Page/Page';
import PaymentGateway from './Dashboard/Payment/PaymentGateway';
import Success from './Dashboard/Payment/Success';
import Instructors from './HomepageInstructors/Instructors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Fiqh",
        element: <Fiqh />
      }, {
        path: "Hadith",
        element: <Hadith />,
      }, {
        path: "IslamicBelief",
        element: <IslamicBelief />,
      }, {
        path: "ArabicLanguage",
        element: <ArabicLanguage />,
      }, {
        path: "Seerah&History",
        element: <SeerahHistory />,
      }, {
        path: "Sunnah&Lifestyle",
        element: <SunnahLifestyle />,
      }, {
        path: "Manners&Etiquette",
        element: <MannersEtiquette />,
      }, {
        path: "Marriage&FamilyLife",
        element: <MarriageFamilyLife />,
      }, {
        path: "Productivity&LifeHacks",
        element: <ProductivityLifeHacks />,
      }, {
        path: "Homeschooling&Parenting",
        element: <HomeschoolingParenting />,
      }, {
        path: "QuranRecitation&Tajweed",
        element: <QuranRecitationTajweed />,
      }
    ]
  }, {
    path: '/page',
    element: <Page />,
    children: [{
      path: '/page/login',
      element: <Login />
    }, {
      path: '/page/register',
      element: <Register />
    }, {
      path: "/page/tutor/:_id",
      element: <InstructorDetails />,
      loader: ({ params }) => fetch(`https://assignment12-3fp9d56r0-alam425.vercel.app/tutor/${params._id}`)
    }, {
      path: "/page/dashboard",
      element: <Private><Dashboard /></Private>
    }, {
      path: "/page/payment",
      element: <Private><PaymentGateway /></Private>
    }, {
      path: "/page/instructors",
      element: <Instructors></Instructors>
    }]
  }, {
    path: "*",
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)