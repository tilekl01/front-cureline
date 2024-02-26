import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [clientMessages, setClientMessages] = useState([]);

  const addClientMessage = (message) => {
    setClientMessages([...clientMessages, message]);
    if (Notification.permission === 'granted') {
      new Notification('Новое сообщение о клиенте!', {
        body: message,
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Новое сообщение о клиенте!', {
            body: message,
          });
        }
      });
    }
  };

  const sendMessageToAdminPanel = (message) => {
    axios.post('localhost:3000/appointment', { message })
      .then(response => {
        console.log('Сообщение успешно отправлено на админ панель:', response.data);
        addClientMessage(message);
      })
      .catch(error => {
        console.error('Ошибка отправки сообщения на админ панель:', error);
      });
  };

  // Функция для обновления статуса предзаписи
  const updateAppointmentStatus = (index) => {
    const updatedMessages = [...clientMessages];
    updatedMessages[index] = 'Предзапись подтверждена: ' + updatedMessages[index];
    setClientMessages(updatedMessages);
  };

  return (
    <div>
      <h2>Сообщения о клиентах:</h2>
      <ul>
        {clientMessages.map((message, index) => (
          <li key={index}>
            {message}
            <button onClick={() => updateAppointmentStatus(index)}>Подтвердить предзапись</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
