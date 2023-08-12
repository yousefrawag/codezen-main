import React from 'react'
import "./singlemember.scss"
import BreadCrumb from "../breadCrumb/BreadCrumb.js"
import Coustomheader from '../../coustom_header/Coustomheader'
import { useTranslation } from 'react-i18next'
import {  useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const Sainglemember = () => {
  const {t} =useTranslation();
  const {id} = useParams()
  const teamData = t("team_staff" , {returnObjects: true});
  const fetch_Mebmer = teamData.find((item) => item.id === id)
  const navagition = useNavigate()
  if(!fetch_Mebmer) {
  
      toast.error(" sorry, we cant find member you looking for, please try again")
      return navagition("/")
 
  } 
  
  return (
    <div className='single_member'>
    <BreadCrumb  title = {fetch_Mebmer.name}/>
        <div className="container">
              <div className="parent_memeber">
                    <div className="row">
                      <div className="col-lg-8 col-12">
                          <div className="about_me">
                              <div className="member_image_name">
                                  <div className="member_image">
                                      <img loading='lazy' src={fetch_Mebmer?.image} alt={fetch_Mebmer?.name} />
                                  </div>
                                  <h6>{fetch_Mebmer?.name}</h6>
                                  
                              </div>
                              <hr className='member_hr'/>
                              <div className="about_me_text">
                                  <Coustomheader title = {t( "about-me")} />
                                  <p>
                                        {
                                          fetch_Mebmer?.description
                                        }
                                  </p> 
                             

                              </div>
                          </div>
                      </div>
                        <div className="col-lg-4 col-12">
                            <div className="logo">
                            <img loading='lazy' src="../images/15.png" alt="logo" />
                               </div>
                      
                        </div>
                      
                </div>
              
              </div>

        </div>
     
    </div>
  )
}

export default Sainglemember