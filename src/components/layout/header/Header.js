import Hero from '../hero/Hero';
import './Header.scss';
import Navbar from '../navbar/Navbar';


const Header = () => {
  return (
    <>
    
    <header className='header'>
      <div className='container'>
      <Hero/>
      </div>
    </header>
    </>
  )
 }

export default Header