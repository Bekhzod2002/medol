import React from 'react';
import './App.scss';
import Header from '../Components/Header/Header';
import Products from '../Components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from '../Components/Services/Services';
import About from '../Components/AboutCompany/About';
import Slide from '../Components/News/News';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MultipleRows from '../Components/Partners/Partners';
import Footer from '../Components/Footer/Footer';
import SimpleSlider from '../Components/Slider/slider';

function App() {
    return (
      <div className="Main">
        <div className='Main__container'>
            <div className='sliders__part'>
              <div className='sliders__container'>
                <div className='head'>
                  <Header/>
                </div>
                <SimpleSlider/>

              </div>
            </div>
            <div className='Section'>
              <div className='Section__container'>
                <Products/>
                <Services/>
                <About/>
                <Slide/>
                <MultipleRows/>
              </div>
            </div>
            <div className='footer'>
              <div className='footer__container'>
                <Footer/>
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default App;
  