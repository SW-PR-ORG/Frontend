import React, { useState } from "react";
import "./App.css";

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { title: "Step 1", description: "Type your password in the input box." },
    { title: "Step 2", description: "Click the Enter button to submit." },
    { title: "Step 3", description: "See your password strength output below." },
  ];

  return (
    <div className="page">

      {/*HEADER*/}
      <header className="header">
        <div className={`tab active`}>How It Works</div>
        <div className="tab">Home Page</div>
        <div className="tab">About Us</div>
      </header>

      {/*MAIN CONTENT*/}
      <main className="content">
        <h2>How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step-card ${activeStep === index + 1 ? "active-step" : ""}`}
              onClick={() => setActiveStep(index + 1)}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/*FOOTER*/}
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