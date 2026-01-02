import React from "react";
import './Certificates.css';
import certificates from "../data/certificates.json";

function Certificates() {
  return (
    <div className="container-cert">
      <h1>CERTIFICATES</h1>
      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-card">
            <a href={`/assets/${cert.imageSrc}`} target="_blank" rel="noopener noreferrer">
              <img
                src={`/assets/${cert.imageSrc}`}
                alt={`Certificate ${cert.id}`}
                className="cert-img"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
