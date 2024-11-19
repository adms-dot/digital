import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';
import Notfound from './components/Notfound.jsx';
import Social from './components/Services/Social.jsx';
import Web from './components/Services/Web.jsx';
import Whatsapp from './components/Services/Whatsapp.jsx';
import Ppc from './components/Services/Ppc.jsx';
import Seo from './components/Services/Seo.jsx';
import Pricing from './components/Pricing.jsx';
import Consultation from './components/Consultation.jsx';
import Plans from './components/Plans.jsx';
import Price from './components/Price.jsx';
import Clinics from './components/Plans/Clinics.jsx'
import Dieticians from'./components/Plans/Dieticians.jsx'
import Equipments from './components/Plans/Equipments.jsx'
import Exercise from './components/Plans/Exercise.jsx'
import Healthy from './components/Plans/Healthy.jsx'
import Hospitals from './components/Plans/Hospitals.jsx';
import Medicines from './components/Plans/Medicines.jsx'
import Sanitary from './components/Plans/Sanitary.jsx'



const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'services',
        element:<Services/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path:'*',
        element:<Notfound/>
      },
      {
        path:'social',
        element:<Social/>
      },
      {
        path:'seo',
        element:<Seo/>
      },
      {
        path:'web',
        element:<Web/>
      },
      {
        path:'whatsapp',
        element:<Whatsapp/>
      },
      {
        path:'ppc',
        element:<Ppc/>
      },
      {
        path:'pricing',
        element:<Pricing/>
      },
      {
        path:'consult',
        element:<Consultation/>
      },
      {
        path:'plans',
        element:<Plans/>
      },
      {
        path:'price',
        element:<Price/>
      },
      
      {
        path:'medicines',
        element:<Medicines/>
      },
      {
        path:'clinics',
        element:<Clinics/>
      },
      {
        path:'dieticians',
        element:<Dieticians/>
      },
      {
        path:'equipments',
        element:<Equipments/>
      },
      {
        path:'exercise',
        element:<Exercise/>
      },
      {
        path:'healthy',
        element:<Healthy/>
      },
      {
        path:'hospitals',
        element:<Hospitals/>
      },
      {
        path:'sanitary',
        element:<Sanitary/>
      },
      
      
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);