import React from "react";
import first from '../../Assets/Img/endeavor-large 1.png';
import second from '../../Assets/Img/img6 1.png';
import third from '../../Assets/Img/gallery_cs300_1 1.png';
import fourth from '../../Assets/Img/754-1 1.png';
import fiveth from '../../Assets/Img/img5 1.png';
import sex from '../../Assets/Img/pacemaker-advisa-mrishtsh222 1.png';
import {AiOutlineRightCircle} from 'react-icons/ai';
import './Products.scss';

const Products = () => {
    const data = [
        {
            id: 1,
            image: first,
            title: 'Эндоваскулярная хирургия'
        },
        {
            id: 2,
            image: second,
            title: 'Лабораторная диагностика'
        },
        {
            id: 3,
            image: third,
            title: 'Кардиохирургия'
        },
        {
            id: 4,
            image: fourth,
            title: 'ДИАБЕТ'
        },
        {
            id: 5,
            image: fiveth,
            title: 'ЭНДОУРОЛОГИЯ'
        },
        {
            id: 6,
            image: sex,
            title: 'АРИТМОЛОГИЯ'
        },

    ]
    return(
        <div className="Products">
            <div className="Products__container">
                <h5>Продукция</h5>
                <div className="tovary">
                    {data.map((item) => (
                        <div className="tovar__card">
                            <div className="tovar_">
                                <div className="image__container">
                                    <img className="tovarimg" src={item.image} alt="tovary"/>
                                </div>
                                <p className="title" >{item.title}</p>
                                <button className="moreinfo">Посмотреть все</button>
                            </div>
                        </div>

                    ))}
                </div> 
                <a className="tocatalog">Перейти в каталог нашей продукции <AiOutlineRightCircle/></a> 
            </div>
        </div>
    )
}

export default Products;