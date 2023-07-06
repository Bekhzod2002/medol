import React, { useState} from "react";
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import {AiOutlineRightCircle} from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slideimg from '../../Assets/Img/slideimg.png';
import './News.scss';
import './style.css';



import img4 from '../../Assets/Img/slideimg.png';
import img3 from '../../Assets/Img/slideimg.png';
import img2 from '../../Assets/Img/slideimg.png';
import img1 from '../../Assets/Img/slideimg.png';

const images = [img1, img2, img3, img4];


  
  function SampleNextArrow({onClick}) {
    return (
      <div className='arrow arrow-right' onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  }
  function SamplePrevArrow({onClick}) {
    return (
      <div className='arrowleft arrow-left' onClick={onClick}>
        <FaChevronLeft/>
      </div>
    );
  }




  function EmptyArrow({onClick}) {
    return (
      <div></div>
    );
  }

  function CustomArrows ()  {
    const [slideIndex, setSlideIndex] = useState(0);
    
    
      const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next)=>setSlideIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div>
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (current, next) => (
            <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
            </div>
          ),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                nextArrow: <EmptyArrow />,
                prevArrow: <EmptyArrow />
              }
            }]
      };
      return (
        <div className="Newsslide">
            <div className="News__container">
            <h5>Custom Arrows</h5>
            <div className="box">
                <Slider {...settings}>
                    {
                                    images.map((img, index)=>(
                                  /*       <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index} >
                                          <img src={img} alt="" />
                                        </div> */
                                                    <div className="box__service">
                                                        <div className="box__container">
                                                            <img className="box__img" src={img} alt="firstslide"/>
                                                                <div className="titles">
                                                                    <p className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>Mастер-класс в исполнении <br /> Галлямова Эдуарда <br /> Абдулхаевича</p>
                                                                    <p className="data">26.07.2021</p>
                                                                    <p className="titlem">
                                                                        С 19 по 21 апреля в АО «РСНПМЦУ» <br /> 
                                                                        (Республиканский Специализированный <br /> 
                                                                        Научно-Практический Медицинский Центр <br /> 
                                                                        Урологии) при поддержке компаний <br />
                                                                        Ethicon Endo Surgery (Johnson&Johnson) и 
                                                                        <br /> ИП ООО «Medical Online Services» был <br /> 
                                                                        проведен мастер-класс в исполнении...
                                                                    </p>
                                                                </div>
                                                                <button className={index === slideIndex ? 'slidetxt slide-activetxt': 'slidetxt'} key={index}> 
                                                                    Подробнее
                                                                </button>
                                                        </div>
                                                    </div>
                                      ))
                    }
                </Slider>
            </div>
            <div className="btns">
                <div className="btns__container">
                    <a className="allnews">Посмотреть все новости <AiOutlineRightCircle/></a>
                    <a className="followtonews">Подписаться на новости <AiOutlineRightCircle/></a>
                </div>
            </div>
            </div>
        </div>
      );
    }

    export default CustomArrows
  