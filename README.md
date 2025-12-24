# Machine Learning–Based Password Strength Evaluation
This project is a password strength evaluation system that leverages over 14 million leaked RockYou passwords, an XGBoost regression model, and a React-based interface to provide accurate, data-driven assessments of password security.

Passwords are a fundamental pillar of internet security, required for access to nearly every online service and digital activity. Despite strict, rule-based policies enforced by most platforms, many passwords remain vulnerable to automated attacks, as they can be easily guessed by algorithmic methods. Traditional cracking tools like Hashcat and John the Ripper are now supplemented by advanced probabilistic modeling techniques, such as Probabilistic Context‑Free Grammar (PCFG).

This system addresses these challenges by applying extensive feature engineering on the RockYou dataset and training an XGBoost regression model with over twenty features, providing a reliable and practical method to evaluate password strength based on real-world cracking techniques.
## 🏗️ Project Architecture

This application has been recently updated to support a single-page application (SPA) architecture using **React Router v6**.

### 🛣️ Routing Structure
The application utilizes client-side routing to manage navigation between different modules without refreshing the page.

- **Home (`/`)**: The main dashboard for password strength evaluation.
- **About (`/about`)**: Detailed information regarding the project's security goals and team.
- **How It Works (`/how-it-works`)**: Technical breakdown of the XGBoost machine learning model and dataset.

### 🧩 Component Overview
- **`App.js`**: The root component managing the `BrowserRouter` and high-level route definitions.
- **`Navbar`**: Provides global navigation links using the `<Link>` component for SEO-friendly, internal transitions.
- **`/pages` Directory**: Contains the standalone view components imported into the main router.
