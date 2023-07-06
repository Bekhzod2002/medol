import React, { Component } from "react";
import Slider from "react-slick";
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import img1 from '../../Assets/Img/forst.png';
import img2 from '../../Assets/Img/socond.png';
import img3 from '../../Assets/Img/thord.png';
import img4 from '../../Assets/Img/depuy.png';
import img5 from '../../Assets/Img/fayv.png';
import img6 from '../../Assets/Img/webster.png';
import img7 from '../../Assets/Img/ethicon.png';
import img8 from '../../Assets/Img/eit.png';
import img9 from '../../Assets/Img/forst.png';
import img10 from '../../Assets/Img/socond.png';
import img11 from '../../Assets/Img/thord.png';
import img12 from '../../Assets/Img/depuy.png';
import img13 from '../../Assets/Img/fayv.png';
import img14 from '../../Assets/Img/webster.png';
import img15 from '../../Assets/Img/ethicon.png';
import img16 from '../../Assets/Img/eit.png';
import './Partners.scss';
import './style.css';

const data = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    },
    {
        id: 4,
        img: img4,
    },
    {
        id: 5,
        img: img5,
    },
    {
        id: 6,
        img: img6,
    },
    {
        id: 7,
        img: img7,
    },
    {
        id: 8,
        img: img8,
    }
]

function SampleNextArrow({onClick}) {
    return (
      <div className='arrowr arrow-right' onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  }
  function SamplePrevArrow({onClick}) {
    return (
      <div className='arrowl arrow-left' onClick={onClick}>
        <FaChevronLeft/>
      </div>
    );
  }

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="partners" >
        <div className="partners__container">
        <h5>Партнеры</h5>
        <div className="box">
            <div className="box__container">
                <Slider {...settings}>
                    {
                        data.map((index)=>(
                        <div className="boxslide">
                                <div className="box_container">
                                    <img src={index.img} />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
        </div>
      </div>
    );
  }
}