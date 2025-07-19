import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.png';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>A little bit about me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt="Profile"
            style={{ width: '250px', height: '250px' }}
          />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a Computer Science student with interests across cybersecurity, AI, cloud, and software development. I love learning and always aim to understand how things work—especially so I can help others learn too.
            </p>
            <p>
              Outside of tech, I enjoy spending time with my family and friends, exploring Coptic Hymnology, and trying new kinds of food 😋.
            </p>
          </div>

          {/* 🧠 Skills Section */}
          <div className="skills-section">
            <h2 className="skills-header">Skills</h2>
            <hr />
            <div className="skills-container">
              <div className="skills-format">
                <h3>Programming Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="skills-format">
                <h3>AI/ML Tools</h3>
                <ul>
                  <li>Scikit-learn</li>
                  <li>NumPy</li>
                  <li>Pandas</li>
                  <li>Matplotlib</li>
                  <li>Jupyter Notebook</li>
                  <li>Google Colab</li>
                </ul>
              </div>
              <div className="skills-format">
                <h3>Frameworks & Technologies</h3>
                <ul>
                  <li>Node.js</li>
                  <li>React.js</li>
                  <li>JavaFX</li>
                </ul>
              </div>
              <div className="skills-format">
                <h3>Developer Tools</h3>
                <ul>
                  <li>VS Code</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>AWS S3</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🌟 More About Me Section */}
          <div className="more-about-section">
            <h2 className="more-about-header">More About Me</h2>
            <hr />
            <p>
              I was born in Egypt and moved to the USA at the age of 2. Growing up, my parents weren’t very good with technology, and that’s where my journey began. From helping my dad connect to Wi-Fi networks at 6 years old to shopping for a new phone based on specs he didn’t even understand, I’ve always been drawn to technology. One of my biggest drives, especially when it comes to tech, is my deep curiosity. I love seeing how things can be so simple, yet so complex.
            </p>
            <p>
              I’m passionate about Coptic tradition and am currently studying Coptic Chant at St. Didymus Institute for Cantors. As the lead hymns teacher at my local church, I love working with little kids because of their innocence and how they see the world. I’m also a fan of trying different kinds of coffee, and I like to think that, at the end of the day, I always give my best to whatever I’m doing.
            </p>
          </div>
        </div>
      </div>

      {/* 🏅 Certifications Section */}
      <div className="certifications-section">
        <h2 className="certifications-header">Certifications</h2>
        <div className="certifications-container">
          <div className="cert-card">
            <h3>AT&T Technology Academy</h3>
            <p>Issued by AT&T - July 2025</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
          <div className="cert-card">
            <h3>COMPTIA Sec+</h3>
            <p>Issued by COMPTIA (Expected Sep 2025)</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
          {/* <div className="cert-card">
            <h3>Certification Name</h3>
            <p>Issued by ___ Date</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
