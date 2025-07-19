import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Decorative Pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt={work.w_name} />

            <div className="work-content-card">
              <h3>{work.w_name}</h3>
              <p>{work.w_desc}</p>
              <div className="work-actions">
                <a
                  href={work.w_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
