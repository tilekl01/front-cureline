import React,{useState} from 'react'
import Schedule from '../schedule/Schedule';
import Scan from '../../pages/scan/Scan';
import Doctars from '../doctars/Doctars';
import Contact from '../../pages/contact/Contact';
import Licence from '../licence/Licence';
import { useTranslation } from 'react-i18next';
import { questions } from "../faq/questions";
import SingleQuestion from "../faq/Faq";
import AboutUs from '../aboutus/AboutUs';
import Testimonial from '../Clients/ClientSlider';


const Slider = () => {
    const {t} = useTranslation()
    const [cards] = useState(questions);
    return (
        <div>
            <section className="slider">
                <div className="hero-slider" >
                    <div className="single-slider">
                        <div className="container"  >
                            <div className="row" style={{display:'flex',textAlign: 'center', justifyContent:'center'}}>
                                <div className="col-lg-7">
                                    <div className="text" >
                                        <h1>БОЛЕЕ  <span>ТЫСЯЧИ</span> ГЕНЕТИЧЕСКИХ <span>ТЕСТОВ</span></h1>
                                        <p style={{fontSize:'19px'}}>{t("title_banner")}</p>
                                        {/* <div className="button">
                                            <a href="#" className="btn">Записаться</a>
                                            <a href="#" className="btn primary">ещё</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Schedule/>
            <AboutUs/>
            <Scan/>
            <section className="max-w-xl mx-auto py-20 px-4">
        <h1 className="text-center uppercase tracking-widest font-bold mb-8" style={{fontSize:'26px'}}>
        Вопросы и ответы
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
            <Doctars/>
            <Licence/>
            <Testimonial/>
      <Contact/>
        </div>
    )
}
export default Slider;
