import React from 'react';
import './infoDoctar.css'; // Предполагается, что стили уже созданы

const DoctorProfile = () => {
  return (
    <div>
    <div class="doctor-profile-card">
  <div class="doctor-details">
    <div class="breadcrumb">Главная / Врачи / Жолдошев Омурбек Бахридинович</div>
    <div class="doctor-name">ЖОЛДОШЕВ ОМУРБЕК БАХРИДИНОВИЧ</div>
    <div class="doctor-title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
  </div>
  <div class="doctor-photo">
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Doctor Omurbek Zholdoshev"/>
  </div>
  <div class="doctor-social-media">
    <a href="https://instagram.com/dr_omurbek_zholdosh" target="_blank">@dr_omurbek_zholdosh</a>
  </div>
</div>
<div class="additional-info">
  <h2>Образование:</h2>
  <p>В 2014 году окончил КГМА им. И.К. Ахунбаева. С 2014 — 2016гг проходил клиническую ординатуру на базе КГМА им. И.К. Ахунбаева по специальности офтальмология.</p>
</div>
</div>
  );
};

export default DoctorProfile;
