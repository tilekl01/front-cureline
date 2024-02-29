import './App.css';
import React, {useState} from 'react'
import { questions } from "../src/components/faq/questions";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styled from "styled-components";
import { HOME, SING_IN, DOCTAR, CONTACT, APPOINTMENT, ADMIN, ALBUM, FAQ } from "./utils/Consts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountBox from "../src/register/accountBox/index"
import Slider from './components/slider/Slider';
import Doctars from './components/doctars/Doctars';
import Contact from './pages/contact/Contact';
import AppointmentForm from './pages/appointment/Appointment';
import AdminPanel from './pages/adminpanel/AdminPanel';
import Scan from './pages/scan/Scan';
import Licence from './components/licence/Licence';
import ImageGallery from './components/sliderimage/SliderImage';
import SingleQuestion from './components/faq/Faq';
import Testimonial from './components/Clients/ClientSlider';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [cards] = useState(questions);

  return (
    <div className="App" >



      <Header />
      <BrowserRouter>
      
        <Routes>
          <Route path={CONTACT} element={<Contact/>}/>
          <Route path={DOCTAR} element={<Doctars/>}/>
          {/* <Route path='/infodoctar' element={<DoctorDetailPage/>}/> */}
          <Route path={ALBUM} element={<ImageGallery/>}/>
          <Route path={SING_IN} element={
            <AppContainer>
              <AccountBox />
            </AppContainer>
          } />
          <Route path={FAQ} element={(            
          <section className="max-w-xl mx-auto py-20 px-4">
                <h1 className="text-center uppercase tracking-widest font-bold mb-8">
                    Вопросы и ответы
                </h1>
                <section className="grid grid-cols-1 gap-8">
                    {cards.map((card, index) => (
                        <SingleQuestion {...card} key={index} />
                    ))}
                </section>
            </section>)}/>
          <Route path='/licence' element={<Licence/>}/>
          <Route path='/clients' element={<Testimonial/>}/>
          <Route path={HOME} element={<Slider />} />
          <Route path={APPOINTMENT} element={<AppointmentForm/>}/>
          <Route path={ADMIN} element={<AdminPanel/>}/>
          <Route path='/scan' element={<Scan/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
