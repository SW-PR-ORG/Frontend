import React from "react";
import "./App.css";

function AboutUs() {
  return (
    <div className="page">

      {/*HEADER*/}
      <header className="header">
        <div className="tab">How It Works</div>
        <div className="tab">Home Page</div>
        <div className={`tab active`}>About Us</div>
      </header>

      {/*MAIN CONTENT*/}
      <main className="content">
        <h2>About Us</h2>
        <p>
          Welcome to our website! We are dedicated to providing you with the best password security and tools 
          to help you understand and manage your passwords safely.
        </p>
        <p>
          Our mission is to make online security simple, intuitive, and accessible for everyone. 
          With our interactive tools, you can learn about password strength, encryption, and best practices 
          to keep your accounts safe.
        </p>
        <p>
          Our team consists of passionate developers and security experts who are committed to helping users 
          protect their digital lives.
        </p>
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

export default AboutUs;