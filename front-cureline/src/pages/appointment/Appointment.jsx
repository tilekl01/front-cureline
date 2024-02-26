import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/adminpanel', {
        name,
        time,
        phoneNumber,
        serviceType
      });
      console.log('Ответ сервера:', response.data);
      // Очистка полей формы после успешной отправки
      setName('');
      setTime('');
      setPhoneNumber('');
      setServiceType('');
    } catch (error) {
      console.error('Ошибка отправки данных на админ панель:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Время:</label>
        <input
          type="text"
          id="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Номер телефона:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="serviceType">Вид услуги:</label>
        <input
          type="text"
          id="serviceType"
          value={serviceType}
          onChange={(event) => setServiceType(event.target.value)}
          required
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default AppointmentForm;
