import React from "react";
import "./App.css";
import omarImg from "./assets/omar.jpg";
import youssefImg from "./assets/youssef.jpg";
import mohamedImg from "./assets/mohamed.jpg";

function AboutUs() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="tab">How It Works</div>
        <div className="tab">Home Page</div>
        <div className="tab active">About Us</div>
      </header>

      {/* MAIN CONTENT */}
      <main className="content">

        {/* ===============================
            WHO ARE WE SECTION
        ================================ */}
        <h2>Who Are We</h2>

        <div className="team-grid">
          {/* TEAM MEMBER 1 */}
          <div className="team-card">
            <img src={omarImg} alt="Omar Mohamed Ameen" className="team-image"/>
            <h3>Omar Mohamed Ameen</h3>
            <p className="team-role">Team Leader</p>
          </div>

          {/* TEAM MEMBER 2 */}
          <div className="team-card">
            <img src={youssefImg} alt="Youssef Amr Mohie" className="team-image" />
            <h3>Youssef Amr Mohie</h3>
            <p className="team-role">Backend / API Engineer</p>
          </div>

          {/* TEAM MEMBER 3 */}
          <div className="team-card">
            <div className="team-image">Image</div>
            <h3>Abdelrahman Mohamed Ramadan</h3>
            <p className="team-role">Frontend / Designer Engineer</p>
          </div>

          {/* TEAM MEMBER 4 */}
          <div className="team-card">
            <img src={mohamedImg} alt="Mohamed Mahmoud" className="team-image" />
            <h3>Mohamed Mahmoud</h3>
            <p className="team-role">Frontend Engineer</p>
          </div>
        </div>

        {/* ===============================
            ABOUT PROJECT (ORIGINAL CONTENT)
        ================================ */}
        <h2>About This Project</h2>

        <div className="info-stack about-only">
          <div className="info-card">
            <div className="info-text full-width">
              <h3>Our Purpose</h3>
              <p>
                This project was developed to address one of the most critical
                weaknesses in modern cybersecurity: predictable and weak
                passwords.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-text full-width">
              <h3>Research-Driven Approach</h3>
              <p>
                Unlike traditional password meters, this system evaluates
                password strength using real-world cracking methodologies and
                data-driven analysis.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-text full-width">
              <h3>User Privacy & Ethics</h3>
              <p>
                No passwords are stored, logged, or transmitted. All evaluations
                are performed locally without retaining identifiable data.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-text full-width">
              <h3>Educational Focus</h3>
              <p>
                The project educates users on password security principles and
                encourages safer digital practices.
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default AboutUs;