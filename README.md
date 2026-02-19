# Smart-Energy-Consumption-Analysis-and-Prediction-using-Machine-Learning-with-Device-Level-Insights
The increasing demand for electricity and lack of visibility into energy usage patterns often result in
energy wastage, higher electricity bills, and inefficient appliance usage. Traditional billing systems
provide only monthly consumption values without offering meaningful insights into where and how
energy is used. This project proposes a Smart Energy Consumption Analysis System that monitors energy
usage device-wise over time, analyzes energy patterns, and predicts future consumption using machine
learning techniques.
Using the SmartHome Energy Monitoring Dataset with detailed timestamped device-level power
readings collected over six months, the system performs time series analysis and forecasting using Long
Short-Term Memory (LSTM) networks and Linear Regression as a baseline model. It provides users with
interactive visualizations, smart energy-saving suggestions, and a web-based dashboard built using Flask,
HTML, CSS, and JavaScript. The system aims to improve energy efficiency, lower electricity costs, and
support sustainable energy usage behavior.

🏛️ Technical Project Architecture & Internship Execution
This project, Smart Energy Consumption Analysis and Prediction, represents the culmination of a Full-Stack Engineering internship focused on bridging the gap between raw time-series data and actionable user insights.

Robust Backend Architecture: The system is powered by a Python Flask server, utilizing a modular template hierarchy with Jinja2 partials. By implementing a dedicated partials/sidebar.html structure, the application achieved higher modularity and resolved critical TemplateNotFound errors that were identified during the development phase.

Frontend Data Integrity: A primary focus was the engineering of a high-performance JavaScript frontend. This involved debugging complex asynchronous event handlers and resolving systemic syntax errors—specifically optional chaining spacing issues (e.g., correcting ? .value to ?.value)—which restored full functionality to the interactive UI.

Data Presentation Engineering: To address "text bunching" and data overlap in the reporting modules (specifically the UsedCostCO2 column overlap), a refined rendering logic was implemented to ensure that date, consumption, cost, and emission metrics are parsed into distinct, scannable table cells.

🤖 Machine Learning & Analytical Modeling
The project leverages advanced analytical techniques to transform six months of timestamped device-level power readings from the SmartHome Energy Monitoring Dataset into predictive value.

Predictive Modeling: The system utilizes Long Short-Term Memory (LSTM) neural networks for sophisticated time-series forecasting, capable of identifying long-term patterns in domestic energy behavior. Linear Regression serves as a high-accuracy baseline model to validate these forecasts.

Device-Level Insights: Unlike traditional billing, this system provides a "drill-down" analysis, identifying high-wattage anomalies and usage trends across individual appliances to pinpoint exactly where energy wastage occurs.

🇮🇳 Strategic Localization: The EnergyAI India Specialization
A key achievement of the internship was the successful adaptation of the global system for the Indian residential market, creating a localized experience known as EnergyAI India.

Economic Calibration:

Currency Standardization: The financial engine was hardcoded to the Indian Rupee (₹), utilizing the INR currency code and a custom utility for the Indian Numbering System (e.g., formatting values as ₹1,24,500.00).

Utility Rate Integration: Integrated a realistic urban electricity tariff of ₹8.00/kWh, ensuring that bill estimates are relevant to local Indian utility standards.

Environmental Contextualization:

Carbon Footprint Modeling: Carbon emission algorithms were updated to reflect the India Grid Average (approx. 0.82 kg CO2 per kWh), replacing irrelevant global defaults with local regional data.

Smart Energy Insights Engine:

Actionable Strategy: The project evolved from a simple chat interface into a structured "Smart Insights" grid. This module offers India-specific recommendations, such as optimizing AC temperatures to 24°C and promoting Solar Geyser adoption.

The "Apply" Interaction Model: Users can interact with "Apply Insight" cards, which provide immediate visual feedback via an "Applied ✓" state, fostering a tangible sense of engagement in sustainable energy behavior.