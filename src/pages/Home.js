import React, { useState } from "react";
import "./App.css";

import softwareIcon from "./assets/software-application (1).png";
import dataIcon from "./assets/data.png";
import analyticsIcon from "./assets/analytics.png";
import foorteenIcon from "./assets/number-14 (1).png";
import crackingIcon from "./assets/cracking.png";

function Home() {
  const [input, setInput] = useState("");
  const [mlOutput, setMlOutput] = useState("");
  const [ruleOutput, setRuleOutput] = useState("");

  const handleEvaluate = async () => {
    if (!input) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input }),
      });
      const data = await response.json();
      setMlOutput(
        data.flag ? data.message : `Score: ${data.score} - ${data.explanation}`
      );
    } catch {
      setMlOutput("Error: Could not evaluate password");
    }
  };

  const handleRuleBased = async () => {
    if (!input) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/rule_based", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input }),
      });
      const data = await response.json();
      setRuleOutput(
        data.flag ? data.message : `Score: ${data.score} - ${data.explanation}`
      );
    } catch {
      setRuleOutput("Error: Could not evaluate password");
    }
  };

  return (
    <main className="content">
      <div className="hero">
        <h1>Hello</h1>
        <p>Passwords are essential for protecting our digital identities.</p>
      </div>

      <h2>Type your password here</h2>

      <div className="input-container">
        <input
          className="input-box"
          type="text"
          value={input}
          placeholder="Enter password..."
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="button-output-wrapper">
          <button className="enter-btn" onClick={handleEvaluate}>
            Evaluate
          </button>
          <h2>Machine Learning Score:</h2>
          <div className="output-box">{mlOutput}</div>
        </div>

        <div className="button-output-wrapper">
          <button className="rule-btn" onClick={handleRuleBased}>
            Rule Based
          </button>
          <h2>Rule Based Score:</h2>
          <div className="output-box rule-output">{ruleOutput}</div>
        </div>
      </div>

      <div className="info-section">
        <h2>This Project Features</h2>

        <div className="info-grid">
          <div className="info-card">
            <img src={softwareIcon} alt="" className="info-icon" />
            <h3>XGBoost AI</h3>
            <p>Machine-learning based password evaluation.</p>
          </div>

          <div className="info-card">
            <img src={analyticsIcon} alt="" className="info-icon" />
            <h3>RockYou Dataset</h3>
            <p>Real-world leaked passwords for realism.</p>
          </div>

          <div className="info-card">
            <img src={dataIcon} alt="" className="info-icon" />
            <h3>Data Engineering</h3>
            <p>Cleaned, normalized, and optimized data.</p>
          </div>

          <div className="info-card-row">
            <div className="info-card">
              <img src={foorteenIcon} alt="" className="info-icon" />
              <h3>14M Passwords</h3>
              <p>Trained on millions of real passwords.</p>
            </div>

            <div className="info-card">
              <img src={crackingIcon} alt="" className="info-icon" />
              <h3>Realistic Attacks</h3>
              <p>Inspired by PCFG cracking logic.</p>
            </div>
          </div>
        </div>

        <div className="strong-password">
          <h3>How To Make a Strong Password</h3>
          <ul>
            <li>Use at least 12 characters</li>
            <li>Mix letters, numbers, and symbols</li>
            <li>Avoid reused or common passwords</li>
            <li>Use a password manager</li>
          </ul>
        </div>

        <div className="security-notes">
          <h3>Important Security Notes</h3>
          <ul>
            <li>This project does not store or log passwords</li>
            <li>Never reuse passwords across platforms</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;