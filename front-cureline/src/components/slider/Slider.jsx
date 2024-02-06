import React from 'react'
import Schedule from '../schedule/Schedule';

const Slider = () => {
    return (
        <div>
            <section class="slider">
                <div class="hero-slider" >
                    <div class="single-slider">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="text">
                                        <h1>БОЛЕЕ  <span>ТЫСЯЧИ</span> ГЕНЕТИЧЕСКИХ <span>ТЕСТОВ</span></h1>
                                        <p>доступны в медицинских офисах лаборатории «Геномед»</p>
                                        <div class="button">
                                            <a href="#" class="btn">Записаться</a>
                                            <a href="#" class="btn primary">ещё</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Schedule/>
            
        </div>
    )
}
export default Slider;
