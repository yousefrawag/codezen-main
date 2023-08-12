import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Singleitem from './Singleitem.jsx'
import Coustomheader from '../../../coustom_header/Coustomheader.jsx'
import './services.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import "swiper/css/autoplay"
import SwiperCore, { Navigation, Autoplay } from 'swiper';



const Services = () => {
  SwiperCore.use([Navigation, Autoplay]);
  const { t } = useTranslation()
  const services = t('servies', { returnObjects: true })
  const unque_headers = [...new Set(services.map((serv) => serv.header))]
const [index , setindex] = useState(0)

  return (
    <React.Fragment>
        <div className='servies'>
            <div className="container">
            <Coustomheader title = {t("servies_header")} />
            <div className="servies_container">
                      <div className="row">
                          <div className="col-4">
                              <div className="catgerys">
                                    {
                                      unque_headers.map((header, i) => {
                                        return (
                                          <button  onClick={() => setindex(i)} className= { index === i ? ' catge-headers active_catgery ' : 'catge-headers'} key={header}> {header}</button>
                                        )
                                      })
                                    }
                              </div>
                          </div>
                          <Singleitem  services = {services} index = {index}/>
                    
                    </div>
            
            
            </div>
            
            
            </div>
          
        </div>
        <div className="slide_servies">
              <div className="container">
              <Coustomheader title = {t("servies_header")} />
              <Swiper
              autoplay={{ delay: 3000 }}
              navigation
              className='swiper-container'
              spaceBetween={50}
              slidesPerView={1}
             onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
            {
              services.map((service) => {
                return (
                            <SwiperSlide key={service.id} style={{width:"100%"}}  >
                            
                                    <div className="servies_item">
                                        <h3>{service.header}</h3>
                                        <p>
                                            {
                                              service.text
                                            }
                                        </p>
                                    
                                    </div>
                              
                              </SwiperSlide>
                )
              })
            }
         
       
              
            </Swiper>
          
              
              
              </div>
        </div>
</React.Fragment>
  )
}

export default Services
