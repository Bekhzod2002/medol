import React from "react";
import first from '../../Assets/Img/firstservis.png';
import second from '../../Assets/Img/secondservis.png';
import third from '../../Assets/Img/thirdservis.png';
import './Services.scss';

const Services = () => {
    return(
        <div className="Services__part">
            <div className="Services__container">
                <h5>Услуги</h5>
                <div className="servis">
                    <div className="servis__container">
                        <div className="box__service">
                            <div className="box__container">
                                <img className="box__img" src={first} alt="first"/>
                                <div className="titles">
                                    <p className="titlef">Сервис оборудования</p>
                                    <p className="titlem">Компания предоставляет сервисное <br /> обслуживание по всем <br /> предоставляемым продуктам. У наших <br /> инженеров имеется опыт и сертификаты <br /> фирм производителей......</p>
                                </div>
                                <button className="more__service"> 
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div className="box__service">
                            <div className="box__container">
                                <img className="box__img" src={second} alt="first"/>
                                <div className="titles">
                                    <p className="titlef">Регистрации</p>
                                    <p className="titlem">Обеспечение получения <br /> разрешительных документов, <br /> регистрационного удостоверения на <br /> изделия медицинского назначения <br /> Подготовка объектов к проведению ....</p>
                                </div>
                                <button className="more__service"> 
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div className="box__service">
                            <div className="box__container">
                                <img className="box__img" src={third} alt="first"/>
                                <div className="titles">
                                    <p className="titlef">Услуги логистики</p>
                                    <p className="titlem">Компания предоставляет сервисное <br /> обслуживание по всем <br /> предоставляемым продуктам. У наших <br /> инженеров имеется опыт и сертификаты <br /> фирм производителей......</p>
                                </div>
                                <button className="more__service"> 
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;