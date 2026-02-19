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

## Project Workflow (Week-wise)

### Week 1: Data Collection & Understanding
- Loaded Smart Home Energy dataset
- Verified schema, missing values, and target variable

### Week 2: Data Cleaning & Preprocessing
- Converted Date and Time into datetime
- Cleaned missing and invalid values

### Week 3: Feature Engineering
- Created time-based features (hour, day, month)
- Encoded categorical variables

### Week 4: Baseline Model Development
- Implemented Linear Regression
- Evaluated using MAE and RMSE

---

## Week 5 – LSTM Model Development

- Implemented LSTM-based time series forecasting model
- Performed Min-Max scaling and sequence generation (24-hour window)
- Designed stacked LSTM architecture with dropout
- Trained model using Adam optimizer and MSE loss
- Evaluated model using MAE and RMSE
- Observed improved performance compared to baseline Linear Regression

Documentation: `documentation/week5_lstm_model.md`

---

## 🔹 Week 6: Model Evaluation and Integration

**Goals:**
- Evaluate LSTM model performance
- Compare LSTM with baseline Linear Regression
- Prepare model for deployment

**Key Activities:**
- Calculated MAE, RMSE, and R² score
- Visualized Actual vs Predicted energy consumption
- Saved trained model and scalers
- Selected best-performing model for integration

**Outcome:**
LSTM outperformed the baseline model and was finalized for deployment in the smart energy prediction system.

