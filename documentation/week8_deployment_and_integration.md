# Week 8: Web Application Deployment and Reporting

## Objective
Develop a Flask-based API to connect the interactive frontend interface with the trained LSTM machine learning model and finalize project documentation.

## Tasks Completed
- **API Development**: Integrated a **Flask API** to serve real-time predictions from the **LSTM** and Linear Regression models to the frontend.
- **UI/UX Optimization**: Finalized the "glassmorphism" web dashboard using **HTML, CSS, and JavaScript**, ensuring a seamless user experience across all devices.
- **System Stability**: Resolved critical `TemplateNotFound` errors by implementing a modular template hierarchy with a dedicated `partials/sidebar.html`.
- **Data Reporting Repair**: Fixed a critical UI bug in the **Monthly Summary Table** (e.g., overlapping "UsedCostCO2" labels) by restructuring `reports.js` to render data into separate table cells.
- **Navigation Debugging**: Eliminated syntax errors in the onboarding script (correcting spacing issues like `? .value` to `?.value`) to restore the functionality of the "Finalize" button and dashboard redirects.

## EnergyAI India Localization
A major milestone in Week 8 was localizing the **SmartHome Energy Monitoring Dataset** for Indian standards.

- **Financial Calibration**: Transitioned all currency displays from USD ($) to **Indian Rupee (₹)** and implemented a standard urban tariff of **₹8.00/kWh**.
- **Environmental Context**: Updated the carbon footprint algorithms to reflect the **India Grid Average** (0.82 kg CO2 per kWh).
- **Smart Insights Engine**: Pivoted from a generic chat to an actionable **"Smart Energy Insights"** grid tailored for the Indian climate (e.g., AC optimization to 24°C) with an "Apply" interaction model.

## Tools Used
- **Backend**: Python, Flask, Jinja2.
- **Frontend**: JavaScript (ES6+), CSS3 (Tailwind-style), HTML5.
- **Automation**: PowerShell for codebase cleaning and environment setup.

## Outcome
- Successfully deployed **EnergyAI India** on a local development server.
- Delivered a bug-free, fully localized reporting system from initial onboarding to final data export.
- Completed the final technical documentation, including the machine learning modeling phase and result summaries.