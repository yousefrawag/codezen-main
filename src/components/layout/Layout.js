import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import { useGlobalContext } from '../context/context';
import Whatsaapcontact from '../whasappfile/Whatsaapcontact';
import React from 'react';
import { useTranslation } from 'react-i18next'

const Layout = () => {
  const {massageHandelar} = useGlobalContext();
  const { t } = useTranslation();
  return (
    <React.Fragment>

    <Navbar/>
    <Outlet/>
    <Whatsaapcontact />

    <Footer/>

    </React.Fragment>
  )
}

export default Layout