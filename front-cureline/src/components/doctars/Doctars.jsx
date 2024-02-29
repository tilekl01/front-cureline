import React from 'react'
import '../doctars/Doctars.css'
import Licence from '../licence/Licence'
// import FaqSimple from '../faq/Faq'
// import { MantineProvider } from '@mantine/core';
const Doctars = () => {
  return (
    <div > 
      <h4 style={{display: 'flex', justifyContent: 'center', padding: '40px 20px', fontSize:'36px'}}>Наши содрудники</h4>
    <div className="card-container">
     
    <div className="card_doctars">
    <div className="card-content">
    <a href='/infodoctar'>
        <div className="name" >Жолдошев Омурбек Бахридинович</div>
      </a>
      <div className="title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
      <a href="appointment_link" className="button_doc">Записаться</a>
      
    </div>
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Doctor"/>
  </div>
  <div className="card_doctars">
    <div className="card-content">
    <a href='/infodoctar'>
        <div className="name" >Жолдошев Омурбек Бахридинович</div>
      </a>
      <div className="title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
      <a href="appointment_link" className="button_doc">Записаться</a>
      
    </div>
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Doctor"/>
  </div>
  <div className="card_doctars">
    <div className="card-content">
    <a href='/infodoctar'>
        <div className="name" >Жолдошев Омурбек Бахридинович</div>
      </a>
      <div className="title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
      <a href="appointment_link" className="button_doc">Записаться</a>
      
    </div>
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Doctor"/>
  </div>


</div>
{/* <MantineProvider>
  <FaqSimple/>
</MantineProvider> */}

</div>
  )
}

export default Doctars

// [
//   {
//     "id": 1,
//     "title": "главная",
//      "children": [
        // 
      // ]
//   }
// ]