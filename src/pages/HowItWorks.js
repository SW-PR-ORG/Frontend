import React from "react";
import "./App.css";

function HowItWorks() {
  const sections = [
    {
      title: "Passwords and Modern Cybersecurity",
      text: `Passwords represent one of the most fundamental pillars of internet security.
      Despite widespread enforcement of rule-based policies, many passwords remain vulnerable
      to automated cracking tools such as Hashcat and John the Ripper.`,
      imageSide: "left",
    },
    {
      title: "Beyond Rule-Based Strength Meters",
      text: `Traditional password strength meters often rely on predictable rules.
      Weak passwords are those that can be efficiently guessed by algorithms rather than
      relying on human intuition. This project focuses on realistic attack feasibility.`,
      imageSide: "right",
    },
    {
      title: "Real-World Data: RockYou Dataset",
      text: `The system is trained on the RockYou leaked dataset, containing over
      14 million real passwords. Extensive data cleaning and preprocessing were performed
      to ensure meaningful and reliable feature extraction.`,
      imageSide: "left",
    },
    {
      title: "Machine Learning with XGBoost",
      text: `More than twenty engineered features are extracted from each password and
      used to train an XGBoost regression model. This allows accurate strength scoring
      based on empirical cracking difficulty rather than assumptions.`,
      imageSide: "right",
    },
    {
      title: "Industry-Aligned Evaluation",
      text: `Evaluation is inspired by real cracking methodologies such as PCFG-based
      password crackers and benchmarked against industry research published by Hive Systems,
      ensuring practical relevance.`,
      imageSide: "left",
    },
    {
      title: "Privacy, Ethics, and User Safety",
      text: `This project never stores passwords and guarantees complete anonymity.
      Users are strongly advised never to reuse the same password across different services.`,
      imageSide: "right",
    },
  ];

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="tab active">How It Works</div>
        <div className="tab">Home Page</div>
        <div className="tab">About Us</div>
      </header>

      {/* MAIN CONTENT */}
      <main className="content how-it-works">
        <div className="section-header">
          <h2>How It Works</h2>
          <p className="section-subtitle">
            A realistic, data-driven approach to password strength evaluation
          </p>
        </div>

        {/* STACKED SECTIONS */}
        <div className="stacked-sections">
          {sections.map((item, index) => (
            <div
              key={index}
              className={`stacked-card ${
                item.imageSide === "right" ? "reverse" : ""
              }`}
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="stacked-image placeholder">
                {/* PLACE IMAGE HERE */}
              </div>

              {/* TEXT */}
              <div className="stacked-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}

export default HowItWorks;