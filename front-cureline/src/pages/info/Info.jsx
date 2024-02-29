import React from 'react';
import './Info.css'; // Assuming you have a CSS file for styling

const DoctorProfile = () => {
  return (
<div className="doctor-card">
  <div className="doctor-info">
    <div className="doctor-name">ЖОЛДОШЕВ ОМУРБЕК БАХРИДИНОВИЧ</div>
    <div className="doctor-title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
  </div>
  <div className="doctor-image">
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Dr. Omurbek Zholdoshev"/>
  </div>
  <div className="doctor-social-media">
    <a href="https://instagram.com/dr_omurbek_zholdosh" target="_blank">@dr_omurbek_zholdosh</a>
  </div>
</div>
  );
};

export default DoctorProfile;
