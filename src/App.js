import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter , RouterProvider} from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Servies from './components/pages/servies/Servies';
import OurWork from './components/pages/ourWork/Our-Work';
import Contact from './components/pages/contact/Contact';
import './App.scss';
import SingleProduct from "./components/pages/singleProduct/SingleProduct";
import Sainglemember from "./components/pages/Sainglemember/Sainglemember";
import Erorrpage from "./components/pages/erornotfound/Erorrpage";

const App = () => {

  const handleCopy = (event) => {
    event.preventDefault()
    alert('Copying content from this site is not allowed.')
  }

  useEffect(() => {
    window.addEventListener('copy' ,handleCopy)
    return () =>{
      window.removeEventListener('copy', handleCopy)
    }
  
  },[])
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement:<Erorrpage />,
    children:[
      {
       element:<Home />,
        index:true,
        
      },
      {
        path:"about",
        element:<About />
        
      },
      {
        path:"servies",
        element:<Servies />
        
      },
      {
        path:"our-work",
        element:<OurWork />
        
      },
      {
        path:"contact",
        element:<Contact />
        
      },
      {
        path:"SingleProduct/:id",
        element:<SingleProduct />
        
      },
      {
        path:"Sainglemember/:id",
        element:<Sainglemember />
        
      },
    ]

  },
])
  return (
    <React.Fragment>
    <RouterProvider  router={router}/>
    </React.Fragment>
  );
}

export default App;
