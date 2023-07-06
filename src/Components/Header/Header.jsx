import {ImLocation} from 'react-icons/im';
import {BiSolidPhoneCall, BiSearchAlt, BiLogoFacebook} from 'react-icons/bi';
import {AiOutlineMenu} from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../Assets/Img/logo 1 (1).png';
import language from '../../Assets/Img/Flag_of_Russia 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'
const Header = () => {
    
    return(
        <>
            <div className="header">
                <div className="header__container">
                    <div className="hat__part">
                        <div className="hat__container">
                            <div className='adress'>
                                <div className='location_icon'>
                                    <ImLocation style={{width: '25px', height: '25px'}} />
                                </div>
                                <p>г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1</p>
                            </div>
                            <div className='contacts'>
                                <div className='contact_icon'>
                                    <BiSolidPhoneCall style={{width: '25px', height: '25px'}}/>
                                </div>
                                <p>+998 71 276-62-53 <br /> +998 71 276-62-54</p>
                            </div>
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                            <div className='search'>
                                <BiSearchAlt style={{width: '20px', height: '20px'}}/>
                            </div>
                            <div className='facebook'>
                                <BiLogoFacebook/>
                                Мы на Facebook
                            </div>
                            <div className='language'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{background: 'none', color: '#000', border: 'none'}} >
                                        <img src={language}/> Русский
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Английский</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Французский</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Немецкий</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="menu__part">
                        <div className="menu__container">
                            <div className='link'>Магазин</div>
                            <div className='link'>О компании</div>
                            <div className='link'>Продукция</div>
                            <div className='link'>Услуги</div>
                            <div className='link'>Акции и новости</div>
                            <div className='link_'>Обратная связь</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Header