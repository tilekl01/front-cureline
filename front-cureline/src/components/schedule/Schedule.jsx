import React, { useState, useEffect } from "react";
import "./Schedule.css";
import "../../App.css";
import '../../bootstrap.min.css';
import '../../animate.min.css';
import Scan from "../../pages/scan/Scan";

const Schedule = () => {

    return (
        <div>
            
            <section class="schedule">
                <div class="container">
                    <div class="schedule-inner">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 ">
                                <div class="single-schedule first">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="fa fa-ambulance"></i>
                                        </div>
                                        <div class="single-content">
                                            <h4>Сотрудничество с Партнерами</h4>
                                            <p>Мы гордимся партнерством с DOC University Clinic, что позволяет нам обмениваться опытом, ресурсами и знаниями для общей цели - улучшения медицинской практики и научных исследований.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="single-schedule middle">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="icofont-prescription"></i>
                                        </div>
                                        <div class="single-content">
                                            <h4>DocLab Pathological Laboratory</h4>
                                            <p>также является партнером DOC University Clinic, что обеспечивает нам доступ к многолетнему опыту и экспертизе высококвалифицированных специалистов в области медицины.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-12">
                                <div class="single-schedule last">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="iфcofont-ui-clock"></i>
                                        </div>
                                        <div class="single-content">
                                            <h4>Часы работы</h4>
                                            <ul class="time-sidual">
                                                <li class="day">Понедельник  - Пятница  <span>8.00-20.00</span></li>
                                                <li class="day">Суббота <span>9.00-18.30</span></li>
                                                <li class="day">Понедельник - четверг
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