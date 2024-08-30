import './App.css';
import Header from './components/header/Header'
import Info from './components/info/Info';
import CTA from './components/CTA/CTA';
import Brands from './components/brands/Brands';
import Function from './components/function/Function';
import Ads from './components/Ads/Ads';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Design from './components/Design/Design';
import Questions from './components/Questions/Questions';
import Method from './components/Method/Method';
import Footer from './components/Footer/Footer';
import "aos/dist/aos.css";
import AOS  from 'aos';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <header>
      <Header/>
      <Info/>
      </header>
      <CTA/>
      <Brands/>
      <Function/>
      <Ads/>
      <Design/>
      <Questions/>
      <Method/>
      <Footer/>

    </div>
  );
}

export default App;
