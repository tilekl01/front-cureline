import React, { useState } from 'react';
import '../info_doctar/infoDoctar.css';

const InfoDoctar = () => {
  const [highlighted, setHighlighted] = useState(false);

  const toggleHighlight = () => {
    setHighlighted(!highlighted);
  };

  return (
    <div className="info-doctar-container">
      <div className={highlighted ? "profile-card highlight" : "profile-card"}>
        <div className="profile-header">
          <span className="profile-name" onClick={toggleHighlight}>Абдулхакимов Нуридин Мураджанович</span>
          <div className="profile-badge">DOC</div>
        </div>
        <div className="profile-body">
          <div className="name-details">
            <p>Филиал: МНИОИ им. П.А. Герцена</p>
            <p>Специализация: Онкология</p>
            <p>Должность: врач-онколог</p>
            <p>Подразделение: Отдел торакоабдоминальной онкохирургии</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDoctar;
