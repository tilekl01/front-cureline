import React, { useState, useEffect } from "react";
import "./Header.css";
import "../../App.css";
import '../../bootstrap.min.css';
import '../../animate.min.css';
import '../../responsive.css';
import LOGO from '../../logo.png'
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import MenuItem from '@mui/material/MenuItem';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleChangeLanguage = (language, e) => {
        i18n.changeLanguage(language)
        }
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [language, setLanguage] = useLocalStorage('language', 'ru')
    const {t} = useTranslation()
    return (
        <div>
            <header className="header" >
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-12">
                                <ul className="top-link">
                                    <li><a href="/">О Нас</a></li>
                                    <li><a href="/doctar">Докторы</a></li>
                                    <li><a href="/contact">Контакт</a></li>
                                    <li><a href="/faq">FAQ</a></li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-6 col-md-7 col-12">
                                <ul className="top-contact">
                                    <li><i className="fa fa-phone"></i>+999 999999999</li>
                                    <li><i className="fa fa-envelope"></i><a href="mailto:support@yourmail.com">romdevv@gmail.com</a></li>
                                </ul>
                            </div>
                            <MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" className="imgLng" alt="" /></MenuItem>
                            <MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"  className="imgLng" alt="" /></MenuItem>
                            <MenuItem sx={{border: "2px solid #fff", borderRadius: "5px", margin: "3px", color: "#111"}} className="lng" onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png" className="imgLng" alt="" /></MenuItem>
                            
                        </div>
                    </div>
                </div>

                <div className="header-inner">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12" >
                                    <div className="logo">
                                        <a href="/"><img style={{borderRadius: '50px'}} src={LOGO} alt="#"  /></a>
                                    </div>
                                    <div className="mobile-nav">
                                        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                                            <span style={{
                                                transform: menuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'translate(0, 0)',
                                            }}></span>
                                            <span style={{
                                                opacity: menuOpen ? '0' : '1',
                                            }}></span>
                                            <span style={{
                                                transform: menuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'translate(0, 0)',
                                            }}></span>
                                        </div>
                                        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                                            <nav>
                                                <ul>
                                                    <li><a href="/">Главная</a></li>
                                                    <li><a href="/doctar">Докторы</a></li>
                                                    <li><a href="#">Услуги</a></li>
                                                    <li><a href="/">О нас</a></li>
                                                    <li><a href="/contact">Контакт</a></li>
                                                    <li><a href="/faq">FAQ</a></li>
                                                    <div className="col-lg-2 col-12 login" >
                                    <div className="registration-icon">
                                        <i className="fa fa-user"></i>
                                        <a href="/singin">Войти</a> 
                                </div>
                                </div>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-9 col-12">
                                    <div className="main-menu">
                                        <nav className="navigation">
                                            <ul className="nav menu">
                                                <li ><a href="/">Главная<i className="icofont-rounded-down"></i></a>
                                                    <ul className="dropdown">
                                                    <li><a href="/album">Галерея</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/doctar">Докторы </a></li>
                                                {/* <li><a href="#">Услуги </a></li> */}
                                                <li><a href="/">О нас <i className="icofont-rounded-down"></i></a>
                                                    <ul className="dropdown">
                                                        <li><a href="/scan">Сканер</a></li>
                                                        <li><a href="/licence">Лицензия</a></li>
                                                        <li><a href="/doctar">Докторы</a></li>
                                                        <li><a href="/faq">FAQ</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/album">Галерея</a></li>
                                                <li><a href="/contact">Контакт</a></li>
                                                <li><a href="/faq">FAQ</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-12 login" >
                                    <div className="registration-icon">
                                        <i className="fa fa-user"></i>
                                        <a href="/singin">Войти</a> 
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
};

export default Header;