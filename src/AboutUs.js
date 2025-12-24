import React from "react";
import "./App.css";
import omarImg from "./assets/omar.jpg";
import youssefImg from "./assets/youssef.jpg";
import mohamedImg from "./assets/mohamed.jpg";

function AboutUs() {
  return (
    <div className="page">
      <header className="header">
        <div className="tab">How It Works</div>
        <div className="tab">Home Page</div>
        <div className="tab active">About Us</div>
      </header>

      <main className="content">
        <h2>Who Are We</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src={omarImg} alt="Omar Mohamed Ameen" className="team-image" />
            <h3>Omar Mohamed Ameen</h3>
            <p className="team-role">Team Leader</p>
            <div className="member-links">
              <a href="https://www.linkedin.com/in/omar-ameen-092041354" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/omarmohamed456" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image placeholder">Image</div>
            <h3>Abdelrahman Mohamed Ramadan</h3>
            <p className="team-role">Frontend / Designer Engineer</p>
            <div className="member-links">
              <a href="https://www.linkedin.com/in/abdelrahman-mohamed-753562327/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/AbdoTAB" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="team-card">
            <img src={youssefImg} alt="Youssef Amr Mohie" className="team-image" />
            <h3>Youssef Amr Mohie</h3>
            <p className="team-role">Backend / API Engineer</p>
            <div className="member-links">
              <a href="https://www.linkedin.com/in/youssof-mohie-52b73b2a6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/youssofamrmohie" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="team-card">
            <img src={mohamedImg} alt="Mohamed Mahmoud" className="team-image" />
            <h3>Mohamed Mahmoud</h3>
            <p className="team-role">Frontend Engineer</p>
            <div className="member-links">
              <a href="https://www.linkedin.com/in/omar-ameen-092041354" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Mohamed70709" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <h2>About This Project</h2>

        <div className="info-stack about-only">
          <div className="info-card">
            <h3>Our Purpose</h3>
            <p>This project was developed to address one of the most critical weaknesses in modern cybersecurity: predictable and weak passwords.</p>
          </div>
          <div className="info-card">
            <h3>Research-Driven Approach</h3>
            <p>Unlike traditional password meters, this system evaluates password strength using real-world cracking methodologies.</p>
          </div>
          <div className="info-card">
            <h3>User Privacy & Ethics</h3>
            <p>No passwords are stored, logged, or transmitted. All evaluations are performed locally.</p>
          </div>
          <div className="info-card">
            <h3>Educational Focus</h3>
            <p>The project educates users on password security principles and encourages safer digital practices.</p>
          </div>
        </div>

        {/* CONTACT US */}
        <section className="contact-section">
          <h2 className="contact-title">Contact Us</h2>

          <div className="contact-links">
            <a href="https://www.linkedin.com/in/omar-ameen-092041354" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/omarmohamed456" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          <p className="contact-email">
            Outlook:{" "}
            <a href="mailto:omarmohamedameen@outlook.com">
              omarmohamedameen@outlook.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;