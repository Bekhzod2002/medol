import React from "react";
import logo from '../../Assets/Img/logo 1 (1).png';
import {BiSolidPhoneCall} from 'react-icons/bi';
import {ImLocation} from 'react-icons/im';
import {IoIosMail} from 'react-icons/io';

import './Footer.scss';

const Footer = () => {
    return(
        <div className="futer">
            <div className="futer__container">
                <div className="left">
                    <div className="top">
                        <h5>Контакты</h5>
                        <div className="first">
                            <div className='adress'>
                                <div className='location_icon'>
                                    <ImLocation style={{width: '25px', height: '25px'}} />
                                </div>
                                <p>г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1</p>

                            </div>
                            <div className="mail">
                                <div className="mailicon">
                                    <IoIosMail style={{width: '25px', height: '25px'}}/>
                                </div>
                                <p>info@medol.uz</p>

                            </div>
                        </div>
                        <div className="second">
                            <div className='contacts'>
                                <div className='contact_icon'>
                                    <BiSolidPhoneCall style={{width: '25px', height: '25px'}}/>
                                </div>
                                <p>+998 71 276-62-53 <br /> +998 71 276-62-54</p>
                            </div>
                            <button className="btnblank">Оставить заявку</button>
                        </div>
                    </div>
                    <div className="bottom">
                        <img src={logo} alt="footlogo"/>
                        <p>Наша цель – построить прозрачный, <br /> долгосрочный бизнес, приносить огромную <br /> пользу населению, путем решения глобальных <br /> вопросов. Внедряя инновационные технологии <br /> на рынок Узбекистана.</p>
                    </div>
                </div>
                <div className="right">
                    <div className="about">
                        <h5>О компании</h5>
                        <p>История   <br />   
                            Партнеры       <br /> 
                            Вакансии</p>
                    </div>
                    <div className="products">
                        <h5>Продукция</h5>
                        <p>Эндоваскулярная хирургия <br />
                            Аритмология <br />
                            Кардиохирургия <br />
                            Лабораторная диагностика <br />
                            Хирургия <br />
                            Эндоурология <br />
                            Нейрохирургия <br />
                            Анестезиология и реанимация <br />
                            Диабет <br />
                        </p>
                    </div>
                    <div className="services">
                        <h5>Услуги</h5>
                        <p>Сервис <br />
                            Регистрации <br />    
                            Услуги логистики</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer