import React from "react";
import "./App.css";
import omarImg from "./assets/omar.jpg";
import youssefImg from "./assets/youssef.jpg";
import mohamedImg from "./assets/mohamed.jpg";

function AboutUs() {
  return (
    <main className="content">
      <h2>Who Are We</h2>

      <div className="team-grid">
        <div className="team-card">
          <img src={omarImg} alt="" className="team-image" />
          <h3>Omar Mohamed Ameen</h3>
          <p className="team-role">Team Leader</p>
          <div className="member-links">
            <a href="https://www.linkedin.com/in/omar-ameen-092041354" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/omarmohamed456" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image placeholder">Image</div>
          <h3>Abdelrahman Mohamed Ramadan</h3>
          <p className="team-role">Frontend / Designer Engineer</p>
          <div className="member-links">
            <a href="https://www.linkedin.com/in/abdelrahman-mohamed-753562327/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/AbdoTAB" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="team-card">
          <img src={youssefImg} alt="" className="team-image" />
          <h3>Youssef Amr Mohie</h3>
          <p className="team-role">Backend / API Engineer</p>
          <div className="member-links">
            <a href="https://www.linkedin.com/in/youssof-mohie-52b73b2a6/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/youssofamrmohie" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="team-card">
          <img src={mohamedImg} alt="" className="team-image" />
          <h3>Mohamed Mahmoud</h3>
          <p className="team-role">Frontend Engineer</p>
          <div className="member-links">
            <a href="https://www.linkedin.com/in/omar-ameen-092041354" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Mohamed70709" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <h2>About This Project</h2>

      <div className="info-stack about-only">
        <div className="info-card">
          <h3>Our Purpose</h3>
          <p>Addressing weak and predictable passwords.</p>
        </div>
        <div className="info-card">
          <h3>Research-Driven</h3>
          <p>Inspired by real-world cracking techniques.</p>
        </div>
        <div className="info-card">
          <h3>User Privacy</h3>
          <p>No passwords are stored or logged.</p>
        </div>
        <div className="info-card">
          <h3>Educational Focus</h3>
          <p>Teaching better password practices.</p>
        </div>
      </div>

      <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/omar-ameen-092041354" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/omarmohamed456" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <p className="contact-email">
          Outlook: <a href="mailto:omarmohamedameen@outlook.com">omarmohamedameen@outlook.com</a>
        </p>
      </section>
    </main>
  );
}

export default AboutUs;