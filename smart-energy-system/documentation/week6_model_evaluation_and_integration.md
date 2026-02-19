# Week 6 – Model Evaluation and Integration

## Objective
To evaluate the performance of the trained LSTM model, compare it with the baseline Linear Regression model, and prepare the model for integration with the web application.

## Evaluation Process
- Generated predictions on the test dataset
- Compared predicted values with actual energy consumption
- Analyzed model errors and generalization capability

## Evaluation Metrics Used
- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)
- R² Score

## Visualization
- Scatter plot of Actual vs Predicted Energy Consumption
- Line plot comparison for time-series trends
- Error distribution visualization to analyze prediction spread

## Model Comparison
- LSTM captures temporal dependencies better than Linear Regression
- Lower RMSE and MAE compared to baseline model
- Improved prediction stability on sequential data

## Model Saving
- Final trained LSTM model saved for reuse
- Scaler objects preserved for consistent inference

## Outcome
The LSTM model demonstrates superior forecasting performance and is suitable for deployment in the energy consumption prediction system.

## Next Steps
- Convert model into Flask-compatible format
- Integrate prediction API with dashboard
- Deploy application locally or on cloud
