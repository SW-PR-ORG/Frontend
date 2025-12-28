import React, { useState } from "react";
import "./App.css";

import softwareIcon from "./assets/software-application (1).png";
import dataIcon from "./assets/data.png";
import analyticsIcon from "./assets/analytics.png";
import foorteenIcon from "./assets/number-14 (1).png";
import crackingIcon from "./assets/cracking.png";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Home() {
  const [input, setInput] = useState("");
  const [mlOutput, setMlOutput] = useState("");
  const [mlScore, setMlScore] = useState("");
  const [ruleScore, setRuleScore] = useState("");
  const [ruleFeedback, setRuleFeedback] = useState([]);
  const [spaceWarning, setSpaceWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEvaluate = async () => {
    if (!input) return;
    
    setIsLoading(true);
    setMlOutput("Evaluating...");
    setMlScore("");

    try {
      const response = await fetch(`${BACKEND_URL}/evaluate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Check for error response first
      if (data.error) {
        setMlOutput(data.error);
        setMlScore("");
      } 
      // Check for the expected ML response structure
      else if (data.ml_score !== undefined) {
        const score = data.ml_score.toFixed(2);
        const explanation = data.explanation || "No explanation available";
        
        setMlScore(score);
        setMlOutput(`Explanation: ${explanation}`);
      } 
      // If structure is different but has score
      else if (data.score !== undefined) {
        const score = data.score.toFixed(2);
        const explanation = data.explanation || "No explanation available";
        
        setMlScore(score);
        setMlOutput(`Explanation: ${explanation}`);
      }
      else {
        // Fallback: show the entire response for debugging
        setMlOutput("Unexpected response format. Raw data: " + JSON.stringify(data));
        setMlScore("");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setMlOutput(`Error: ${err.message}`);
      setMlScore("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRuleBased = async () => {
    if (!input) return;

    try {
      const response = await fetch(`${BACKEND_URL}/rule_based`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      setRuleScore(data.rule_score ? data.rule_score.toFixed(2) : "0.00");
      setRuleFeedback(data.feedback || []);
    } catch (err) {
      console.error("Rule-based fetch error:", err);
      setRuleScore("");
      setRuleFeedback([`Error: ${err.message}`]);
    }
  };

  return (
    <main className="content">
      <div className="hero">
        <h1>Hello! Welcome to BTATS Password Evaluator.</h1>
        <p>Type your password below to see how strong it is. Don’t forget to explore how this project works and learn more about who we are!</p>
      </div>

      <h2>Type your password here</h2>

      <div className="input-container">
        <input
          className={`input-box ${spaceWarning ? "space-warning" : ""}`}
          type="text"
          value={input}
          placeholder="Enter password..."
          onChange={(e) => {
            setInput(e.target.value.replace(/\s/g, ""));
            // Clear ML results when typing new password
            setMlScore("");
            setMlOutput("");
          }}
          onKeyDown={(e) => {
            if (e.key === " ") {
              e.preventDefault();
              setSpaceWarning(true);
              setTimeout(() => setSpaceWarning(false), 300);
            }
          }}
        />

        <div className="button-output-wrapper">
          <button 
            className="enter-btn" 
            onClick={handleEvaluate}
            disabled={isLoading}
          >
            {isLoading ? "Evaluating..." : "Evaluate"}
          </button>
          
          {mlScore !== "" && <h2>Machine Learning Score:</h2>}
          
          {mlScore !== "" && (
            <div
              className={`score-box ${
                parseFloat(mlScore) >= 5 ? "high-score" : "low-score"
              }`}
            >
              {mlScore}
            </div>
          )}
          
          <div className="output-box">
            {mlOutput.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>

        <div className="button-output-wrapper">
          <button className="rule-btn" onClick={handleRuleBased}>
            Rule Based
          </button>

          {ruleScore !== "" && <h2>Traditional Rule Based Score:</h2>}

          {ruleScore !== "" && (
            <div
              className={`score-box ${
                parseFloat(ruleScore) === 10 ? "high-score" : "low-score"
              }`}
            >
              {ruleScore}
            </div>
          )}

          {ruleFeedback.length > 0 && (
            <div className="feedback-box">
              {ruleFeedback.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          )}
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