import React from "react";
import "./App.css";

function HowItWorks() {
  const sections = [
    {
      title: "Introduction",
      text: `Passwords remain a critical component of digital security, protecting everything from social media accounts to financial systems.
      Ideally, passwords should never be stored in plain text—yet in practice, this still happens in some systems.
      To mitigate this risk, passwords are typically processed using cryptographic hashing algorithms, which transform a readable password into an irreversible representation.
      The same input password hashed with the same algorithm will always produce the same hash, but the original password cannot be reconstructed from it.
      Therefore attackers use password cracking. password cracking is when attackers obtain hashed password databases and attempt to determine which passwords correspond to which hashes by systematically guessing likely inputs.`,
      imageSide: "left",
    },
    {
      title: "Password Cracking",
      text: `Password “guessing” is far from random.
      Traditional techniques include dictionary attacks and rainbow table attacks, which rely on precomputed or commonly used password lists.
      More advanced modern approaches use probabilistic cracking tools such as PCFG (Probabilistic Context-Free Grammar) models.
      These tools operate as unsupervised machine learning systems that learn structural patterns from large collections of real passwords, generating rule sets that model how humans actually create passwords.
      To demonstrate the effectiveness of this approach, we ran a PCFG-based guesser for just 15 minutes, during which it generated nearly 95 million candidate passwords—and it had not yet exhausted all learned rules.`,
      imageSide: "right",
    },
    {
      title: "Our Project",
      text: `The goal of this project is to provide users with realistic insight into how vulnerable their passwords actually are.
      Most online password checkers that are implemented to set specific rules for creating password rely on simplistic scoring systems. Even though they follow NIST recommendation they can still be easily manipulated to produce high scores while remaining highly guessable.
      Unlike tools such as traditional rule-based evaluators or popular libraries like zxcvbn, our approach is designed to reflect modern cracking techniques.
      We evaluate passwords using models inspired by real-world tools such as PCFG and OMEN, which are specifically built to guess the most probable passwords rather than enforce superficial complexity rules.`,
      imageSide: "left",
    },
    {
      title: "Technical Architecture of the System",
      text: `The system is built using approximately 14 million leaked passwords from the RockYou 2009 breach, obtained from Kaggle.
      Through extensive feature engineering, we extracted over 50 meaningful features and trained an XGBoost regression model capable of scoring passwords on a scale of 0 to 10, representing how easily they can be guessed.
      If a password exists directly in the RockYou dataset, it is flagged as immediately compromised as breached passwords are the first passwords attackers try. This means they are very weak even if they follow all the rules or get high score.
      Otherwise, the model predicts a score and provides a feature-based justification using SHAP (SHapley Additive exPlanations) to explain why the password is strong or weak.
      Additionally, the system includes a rule-based evaluation to demonstrate how fragile conventional password scoring methods can be when compared to probabilistic attack models.`,
      imageSide: "right",
    },
    {
      title: "Model and Features",
      text: `The most influential feature used in the model is derived from zxcvbn-based estimates, entropy measurements, and dictionary-based indicators such as names, years, and common words.
      To improve numerical stability and interpretability, probability-based features are transformed using log₁₀ scaling.
      Other features include OMEN, a probabilistic password model that estimates password guessability based on learned patterns. Feature importance analysis confirms OMEN-based metrics as the second strongest predictor and zxcvbn as the first.
      High-dimensional entropy features are reduced using Principal Component Analysis (PCA), while dictionary sources are compiled from reliable public datasets, including common word lists and name databases.
      XGBoost Regressor was chosen because it delivers high accuracy on structured feature-based data, handles non-linear relationships well, and is robust to feature interactions common in password strength modeling.`,
      imageSide: "left",
    },
    {
      title: "End-to-End System Workflow",
      text: `When a user submits a password for evaluation, the system first checks whether it exists in the leaked password dataset.
      If found, the password is immediately classified as critically weak.
      If not found, the password is passed to the trained XGBoost model, which predicts a vulnerability score.
      SHAP is then applied to identify which features contributed most to the prediction, and these results are translated into human-readable explanations through a custom utility module.
      The frontend is implemented using React, while the backend consists of the trained model and supporting code written in Python, in addition to FastAPI, enabling seamless communication between the user interface, model inference, and other features.`,
      imageSide: "right",
    },
    {
      title: "Limitations and Future Improvements",
      text: `While the system provides a realistic assessment of password vulnerability, it has several limitations. Training the model on a substantially larger dataset—such as the RockYou2024 dataset available on Kaggle, which contains approximately 14 billion passwords and exceeds 165 GB in size—would likely improve prediction accuracy, generalization, and coverage.
      Password security is inherently complex, and no single model can definitively determine password strength. Even passwords classified as strong may still be compromised due to poor storage practices, password reuse, data breaches, or system-level vulnerabilities. Despite the efforts made in this project, the proposed system should not be considered a sole or authoritative factor for determining password strength.
      Furthermore, many modern cyberattacks aim to bypass credentials entirely through techniques such as social engineering, Trojans, rootkits, and other forms of malware. As a result, assigning a single numerical score to a password is not the most critical aspect of overall security. In addition, the role of passwords as the primary means of authentication is gradually diminishing, as multi-factor authentication (MFA) and biometric-based access methods are increasingly adopted.
      Another limitation is that the dataset used is heavily biased toward English-language passwords. A more comprehensive and globally applicable system would benefit from incorporating multilingual dictionaries and breach data from a broader geographical range.`,
      imageSide: "left",
    },
    {
      title: "Documentation, References, and Tools",
      links: {
        documentation: [
          { name: "XGBoost Documentation", url: "https://xgboost.readthedocs.io/en/stable/" },
          { name: "SHAP Documentation", url: "https://shap.readthedocs.io/en/latest/generated/shap.Explainer.html" },
        ],
        tools: [
          { name: "zxcvbn", url: "https://github.com/dropbox/zxcvbn" },
          { name: "PCFG Cracker", url: "https://github.com/lakiw/pcfg_cracker" },
        ],
        datasets: [
          { name: "RockYou 2009 (Used)", url: "https://www.kaggle.com/datasets/wjburns/common-password-list-rockyoutxt/data" },
          { name: "RockYou 2024 (10B)", url: "https://www.kaggle.com/datasets/bwandowando/common-password-list-rockyou2024-txt" },
        ],
        dictionaries: [
          { name: "English Words", url: "https://github.com/dwyl/english-words" },
          { name: "SecLists (Names & Wordlists)", url: "https://github.com/danielmiessler/SecLists" },
        ],
        extra: [
          { name: "Hive Systems Password Table", url: "https://www.hivesystems.com/blog/are-your-passwords-in-the-green" },
        ],
      },
      imageSide: "right",
    },
  ];

   return (
    <main className="content how-it-works">
      <div className="section-header">
        <h2>How It Works</h2>
        <p className="section-subtitle">
          A realistic, data-driven approach to password strength evaluation
        </p>
      </div>

        <div className="stacked-sections">
          {sections.map((item, index) => (
            <div
              key={index}
              className={`stacked-card ${item.imageSide === "right" ? "reverse" : ""}`}
            >
              <div className="stacked-image placeholder"></div>

              <div className="stacked-text">
                <h3>{item.title}</h3>

                {item.text && <p>{item.text}</p>}

                {item.links && (
                  <div className="reference-links">
                    {Object.entries(item.links).map(([category, links]) => (
                      <div key={category}>
                        <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                        <ul>
                          {links.map((link, i) => (
                            <li key={i}>
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}

export default HowItWorks;