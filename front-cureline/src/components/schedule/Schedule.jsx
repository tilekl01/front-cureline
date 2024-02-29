import React, { useState, useEffect } from "react";
import "./Schedule.css";
import "../../App.css";
import '../../bootstrap.min.css';
import '../../animate.min.css';

const Schedule = () => {

    return (
        <div>
            
            <section className="schedule">
                <div className="container">
                    <div className="schedule-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 " style={{marginTop: '5px'}}>
                                <div className="single-schedule first">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fa fa-ambulance"></i>
                                        </div>
                                        <div className="single-content">
                                            <h4>Сотрудничество с Партнерами</h4>
                                            <p>Мы гордимся партнерством с DOC University Clinic, что позволяет нам обмениваться опытом, ресурсами и знаниями для общей цели - улучшения медицинской практики и научных исследований.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12" style={{marginTop: '5px'}}>
                                <div className="single-schedule middle">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-prescription"></i>
                                        </div>
                                        <div className="single-content">
                                            <h4>DocLab Pathological Laboratory</h4>
                                            <p>также является партнером DOC University Clinic, что обеспечивает нам доступ к многолетнему опыту и экспертизе высококвалифицированных специалистов в области медицины.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-12" style={{marginTop: '5px'}}>
                                <div className="single-schedule last">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="iфcofont-ui-clock"></i>
                                        </div>
                                        <div className="single-content">
                                            <h4>Часы работы</h4>
                                            <ul className="time-sidual">
                                                <li className="day">Понедельник  - Пятница  <span>8.00-20.00</span></li>
                                                <li className="day">Суббота <span>9.00-18.30</span></li>
                                                <li className="day">Понедельник - четверг
                                                    <span>9.00-15.00</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
      
        </div>
    )
};

export default Schedule;