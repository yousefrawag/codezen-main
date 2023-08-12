import { useTranslation } from "react-i18next";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Fade = () => {
  const {t} = useTranslation();
  return (
    <div className="waveWrapper waveAnimation">
    <div className="container">
    <div id='title'>
    <div className="row">
        <div className="col-lg-6 col-12">
            <div className="text-title">
              <p>{t('hero_title')}</p>
              <div>
              <Link to ="contact">{t('contact_us')}</Link>
              <Link to ="about">{t('who_we_are')}</Link>
              </div>
            </div>
        
        </div>
        <div className="col-lg-6 col-12">
              <div className="ava-img">
                <img loading='lazy' src="../images/icon-1.png" alt="vector" />
            </div>
        </div>
    </div>



</div>
    
    </div>
   
  <div className="waveWrapperInner bgTop">
    <div className="wave waveTop" style={{backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-top.png)'}}></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage: '(http://front-end-noobs.com/jecko/img/wave-mid.png)'}}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage: "url(http://front-end-noobs.com/jecko/img/wave-bot.png)"}}></div>
  </div>
</div>
  )
}

export default Fade