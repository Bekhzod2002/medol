import React, { Component } from "react";
import Slider from "react-slick";
import slide from '../../Assets/Img/slide.png';
import './slider.scss';
import { hover } from "@testing-library/user-event/dist/hover";

function SampleNextArrow({onClick}) {
    return (
      <div>
      </div>
    );
  }
  function SamplePrevArrow({onClick}) {
    return (
      <div>
      </div>
    );
  }


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      appendDots: dots => (
        <div
        style={{
          marginTop: '550px',
        }}
      >
        <ul style={{ margin: "0px", }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: '25px',
          border: "1px solid rgba(0, 201, 201, 1)",
             
        }}
      >
      </div>
    )

    };
    return (
      <div className="slayder">
        <Slider {...settings}>
          <div className="firstslide">
            <div className="slidecontainer">
                <div className="leftpart">
                    <h5>Анализатор <br /> ABL800 FLEX</h5>    
                    <p>Ориентированный на среднюю или высокую <br />
                        производительность тестов, анализатор ABL800 FLEX <br /> измеряет полный набор параметров, включая pH, газы <br /> крови, электролиты, метаболиты и показатели оксиметрии</p>        
                    <button className="podrobno">Подробнее</button>
                </div>
                <div className="rightpart">
                    <img src={slide} alt="imgslide" />
                </div>
            </div>
          </div>
          <div className="firstslide">
            <div className="slidecontainer">
                <div className="leftpart">
                    <h5>Анализатор <br /> ABL800 FLEX</h5>    
                    <p>Ориентированный на среднюю или высокую <br />
                        производительность тестов, анализатор ABL800 FLEX <br /> измеряет полный набор параметров, включая pH, газы <br /> крови, электролиты, метаболиты и показатели оксиметрии</p>        
                    <button className="podrobno">Подробнее</button>
                </div>
                <div className="rightpart">
                    <img src={slide} alt="imgslide" />
                </div>
            </div>
          </div>
          <div className="firstslide">
            <div className="slidecontainer">
                <div className="leftpart">
                    <h5>Анализатор <br /> ABL800 FLEX</h5>    
                    <p>Ориентированный на среднюю или высокую <br />
                        производительность тестов, анализатор ABL800 FLEX <br /> измеряет полный набор параметров, включая pH, газы <br /> крови, электролиты, метаболиты и показатели оксиметрии</p>        
                    <button className="podrobno">Подробнее</button>
                </div>
                <div className="rightpart">
                    <img src={slide} alt="imgslide" />
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}