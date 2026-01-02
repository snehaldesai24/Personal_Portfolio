import React from "react";
import './Experience.css';
import experience from "../data/experience.json";

function Experience() {
  return (
    <div className="containerex">
      <h1>EXPERIENCE</h1>
      {experience.map((data) => (
        <div
          key={data.id} 
          className="ex-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            padding: '20px',
            border: '1px solid #444',
            borderRadius: '8px',
          }}
        >
          <img 
            src={`/assets/${data.imageSrc}`} 
            alt={data.company} 
            style={{ width: '120px', borderRadius: '8px', marginBottom: '15px' }} 
          />
          <h2 style={{ marginBottom: '10px' }}>{data.role}</h2>
          <p style={{ color: "yellowgreen", marginBottom: '5px' }}>
            {data.startDate} – {data.endDate}
          </p>
          <p style={{ color: "yellow", marginBottom: '15px' }}>
            {data.location}
          </p>
          {data.experiences.map((exp, index) => (
            <p key={index} style={{ color: "yellow", marginBottom: '5px' }}>
              {exp}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Experience;

