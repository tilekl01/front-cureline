import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styled from "styled-components";
import { HOME, SING_IN, DOCTAR, CONTACT, APPOINTMENT, ADMIN } from "./utils/Consts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountBox from "../src/register/accountBox/index"
import Slider from './components/slider/Slider';
import InfoDoctar from './components/info_doctar/InfoDoctar';
import Doctars from './components/doctars/Doctars';
import Contact from './pages/contact/Contact';
import AppointmentForm from './pages/appointment/Appointment';
import AdminPanel from './pages/adminpanel/AdminPanel';
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
  return (
    <div className="App">



      <Header />
      <BrowserRouter>
      
        <Routes>
          <Route path={CONTACT} element={<Contact/>}/>
          <Route path={DOCTAR} element={<Doctars/>}/>
          <Route path='/infodoctar' element={<InfoDoctar/>}/>
          <Route path={SING_IN} element={
            <AppContainer>
              <AccountBox />
            </AppContainer>
          } />
          <Route path={HOME} element={<Slider />} />
          <Route path={APPOINTMENT} element={<AppointmentForm/>}/>
          <Route path={ADMIN} element={<AdminPanel/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
