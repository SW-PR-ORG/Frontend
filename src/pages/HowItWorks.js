import React from "react";
import "./App.css";

function HowItWorks() {
  const sections = [
    {
      title: "Introduction: Why Passwords Still Matter",
      text: `Passwords remain a critical component of digital security, protecting everything 
      from social media accounts to financial systems. Ideally, passwords should never be stored 
      in plain text—yet in practice, this still happens in some systems. To mitigate this risk, 
      passwords are typically processed using cryptographic hashing algorithms, which transform 
      a readable password into an irreversible representation. The same input password hashed 
      with the same algorithm will always produce the same hash, but the original password cannot 
      be reconstructed from it. Password cracking occurs when attackers obtain hashed password 
      databases and attempt to determine which passwords correspond to which hashes by 
      systematically guessing likely inputs.`,
      imageSide: "left",
    },
    {
      title: "How Password Cracking Really Works",
      text: `Password “guessing” is far from random. Traditional techniques include dictionary 
      attacks and rainbow table attacks, which rely on precomputed or commonly used password lists. 
      More advanced modern approaches use probabilistic cracking tools such as PCFG 
      (Probabilistic Context-Free Grammar) models. These tools operate as unsupervised machine 
      learning systems that learn structural patterns from large collections of real passwords, 
      generating rule sets that model how humans actually create passwords. To demonstrate the 
      effectiveness of this approach, we ran a PCFG-based guesser for just three minutes, during 
      which it generated nearly 20 million candidate passwords—and it had not yet exhausted all 
      learned rules. This highlights how dangerous predictable password structures can be.`,
      imageSide: "right",
    },
    {
      title: "Project Goal and Unique Value Proposition",
      text: `The goal of this project is to provide users with realistic insight into how vulnerable 
      their passwords actually are. Most online password checkers rely on simplistic scoring 
      systems that can be easily manipulated to produce high scores while remaining highly 
      guessable. Unlike tools such as traditional rule-based evaluators or popular libraries like 
      zxcvbn, our approach is designed to reflect modern cracking techniques. We evaluate passwords 
      using models inspired by real-world tools such as PCFG and OMEN, which are specifically built 
      to guess the most probable passwords rather than enforce superficial complexity rules.`,
      imageSide: "left",
    },
    {
      title: "Technical Architecture of the System",
      text: `The system is built using approximately 14 million leaked passwords from the RockYou 
      2009 breach, obtained from publicly available datasets. Through extensive feature engineering, 
      we extracted over 50 meaningful features and trained an XGBoost regression model capable of 
      scoring passwords on a scale of 0 to 10, representing how easily they can be guessed. If a 
      password exists directly in the RockYou dataset, it is flagged as immediately compromised. 
      Otherwise, the model predicts a score and provides a feature-based justification using SHAP 
      (SHapley Additive exPlanations) to explain why the password is strong or weak. Additionally, 
      the system includes a rule-based evaluation to demonstrate how fragile conventional password 
      scoring methods can be when compared to probabilistic attack models.`,
      imageSide: "right",
    },
    {
      title: "Model Features and Data Sources",
      text: `The most influential feature used in the model is derived from OMEN, a probabilistic 
      password model that estimates password guessability based on learned patterns. Feature 
      importance analysis confirms OMEN-based metrics as the strongest predictor. Other features 
      include zxcvbn-based estimates, entropy measurements, and dictionary-based indicators such as 
      names, years, and common words. To improve numerical stability and interpretability, 
      probability-based features are transformed using log₁₀ scaling. High-dimensional entropy 
      features are reduced using Principal Component Analysis (PCA), while dictionary sources are 
      compiled from reliable public datasets, including common word lists and name databases.`,
      imageSide: "left",
    },
    {
      title: "End-to-End System Workflow",
      text: `When a user submits a password for evaluation, the system first checks whether it 
      exists in the leaked password dataset. If found, the password is immediately classified as 
      critically weak. If not found, the password is passed to the trained regression model, which 
      predicts a vulnerability score. SHAP is then applied to identify which features contributed 
      most to the prediction, and these results are translated into human-readable explanations 
      through a custom utility module. The frontend is implemented using React, while the backend 
      is built with FastAPI, enabling seamless communication between the user interface, model 
      inference, and explanation generation layers.`,
      imageSide: "right",
    },
    {
      title: "Limitations and Future Improvements",
      text: `While the system provides a realistic assessment of password vulnerability, it has 
      limitations. Training on a significantly larger dataset—such as the full 14 billion-entry 
      RockYou collection—would likely improve prediction accuracy and coverage. Password security 
      is inherently complex, and no single model can fully determine password strength. Even strong 
      passwords can be compromised through poor storage practices, password reuse, data breaches, 
      or system-level vulnerabilities. Additionally, the dataset is heavily English-biased. A more 
      comprehensive system would incorporate multilingual dictionaries and breach data from a 
      wider geographical scope. As authentication evolves, passwords are increasingly supplemented 
      or replaced by multi-factor authentication and biometric methods.`,
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
    <div className="page">
      <header className="header">
        <div className="tab active">How It Works</div>
        <div className="tab">Home Page</div>
        <div className="tab">About Us</div>
      </header>

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

      <footer className="footer">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </footer>
    </div>
  );
}

export default HowItWorks;