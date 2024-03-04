import React, { useState } from 'react';
import axios from 'axios';
import './Appointment.css'
const AppointmentForm = () => {
 
  return (
<div class="callback-form">
  <h2>Обратный звонок</h2>
  <p>Представьтесь, мы вам перезвоним.</p>
  <form action="/submit-callback" method="post"/>
    <input type="text" name="name" placeholder="Ваше имя: *" required/>
    <input type="tel" name="phone" placeholder="Телефон: *" required/>
    <input type="submit" value="Отправить"/>
    <p class="privacy-policy">Продолжая, вы соглашаетесь с политикой конфиденциальности</p>
  
</div>
  );
};

export default AppointmentForm;
