import React from "react";
import './About.scss';

const About = () => {
    return(
        <div className="About__part">
            <div className="About__container">
                <h5>О компании</h5>
                <div className="infobox">
                    <div className="info__container">
                        <p className="txt">Группа компаний MEDOL создавалась <br />
                             высококвалифицированными специалистами в сфере медицины, <br /> инженерии и экономики, за плечами которых значительный опыт <br /> на рынке высоких медицинских технологий, которая имеет свои <br /> представительства в разных уголках Земли. В 2011 году MEDOL <br /> зарегистрировал в Узбекистане ИП ООО “Medical Online Services". <br /> Цель компании построить прозрачный долгосрочный бизнес, <br /> принести пользу обществу путем развития и внедрения передовых <br /> технологий в систему здравоохранения Республики Узбекистан. </p>
                        <button className="info__btn" >Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About