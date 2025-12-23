import React from "react";
import "./App.css";

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
        <h2>About This Project</h2>

        <div className="info-stack about-only">
          <div className="info-card">
            <div className="info-text full-width">
              <h3>Our Purpose</h3>
              <p>
                This project was developed to address one of the most critical
                weaknesses in modern cybersecurity: predictable and weak
                passwords. Despite widespread awareness, many users continue to
                rely on passwords that are vulnerable to automated attacks.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-text full-width">
              <h3>Research-Driven Approach</h3>
              <p>
                Unlike traditional password meters that rely on rule-based
                checks, this system evaluates password strength using real-world
                cracking methodologies and data-driven analysis informed by
                modern cybersecurity research.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-text full-width">
              <h3>User Privacy & Ethics</h3>
              <p>
                User privacy is a core design principle. No passwords are stored,
                logged, or transmitted. All evaluations are performed without
                retaining any identifiable data, ensuring complete anonymity.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-text full-width">
              <h3>Educational Focus</h3>
              <p>
                Beyond scoring, this project aims to educate users on what makes
                passwords strong or weak, helping them adopt safer practices and
                avoid reusing passwords across multiple services.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;