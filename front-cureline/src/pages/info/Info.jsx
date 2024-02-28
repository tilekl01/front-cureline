import React from 'react';
import './Info.css'; // Assuming you have a CSS file for styling

const DoctorProfile = () => {
  return (
<div class="doctor-card">
  <div class="doctor-info">
    <div class="doctor-name">ЖОЛДОШЕВ ОМУРБЕК БАХРИДИНОВИЧ</div>
    <div class="doctor-title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
  </div>
  <div class="doctor-image">
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Dr. Omurbek Zholdoshev"/>
  </div>
  <div class="doctor-social-media">
    <a href="https://instagram.com/dr_omurbek_zholdosh" target="_blank">@dr_omurbek_zholdosh</a>
  </div>
</div>
  );
};

export default DoctorProfile;
