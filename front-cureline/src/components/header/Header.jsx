import React, { useState, useEffect } from "react";
import "./Header.css";
import "../../App.css";
import '../../bootstrap.min.css';
import '../../animate.min.css';
import '../../responsive.css';
import LOGO from '../../logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <header class="header" >
                <div class="topbar">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-5 col-12">
                                <ul class="top-link">
                                    <li><a href="/">О Нас</a></li>
                                    <li><a href="/doctar">Докторы</a></li>
                                    <li><a href="/contact">Контакт</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            
                            <div class="col-lg-6 col-md-7 col-12">
                                <ul class="top-contact">
                                    <li><i class="fa fa-phone"></i>+999 999999999</li>
                                    <li><i class="fa fa-envelope"></i><a href="mailto:support@yourmail.com">romdevv@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-inner">
                    <div class="container">
                        <div class="inner">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-12" >
                                    <div class="logo">
                                        <a href="/"><img src={LOGO} alt="#"  /></a>
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
                                <div class="col-lg-7 col-md-9 col-12">
                                    <div class="main-menu">
                                        <nav class="navigation">
                                            <ul class="nav menu">
                                                <li class="active"><a href="/">Главная<i class="icofont-rounded-down"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="/doctar">Докторы</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/doctar">Докторы </a></li>
                                                <li><a href="#">Услуги </a></li>
                                                <li><a href="/">О нас <i class="icofont-rounded-down"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="/scan">Сканер</a></li>
                                                        <li><a href="/licence">Лицензия</a></li>
                                                        <li><a href="/doctar">Докторы</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/album">Галерея</a></li>
                                                <li><a href="/contact">Контакт</a></li>
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
                                {/* <div class="col-lg-2 col-12">
                                    <div class="get-quote">
                                        <a href="appointment.html" class="btn">Book Appointment</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
};

export default Header;