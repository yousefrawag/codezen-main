import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import { useGlobalContext } from '../context/context';
import Whatsaapcontact from '../whasappfile/Whatsaapcontact';
import {BsWhatsapp} from "react-icons/bs"
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
    <button onClick={massageHandelar} className='whats_button' type='button'> {t("ms_btn")} <BsWhatsapp/> </button>

    <Footer/>

    </React.Fragment>
  )
}

export default Layout