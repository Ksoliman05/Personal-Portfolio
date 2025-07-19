import React from 'react';
import "./services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Currently Learning</h1>
        <img src={theme_pattern} alt="decorative pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
