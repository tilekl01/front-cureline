import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';
import Schedule from './components/schedule/Schedule';


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Schedule/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
