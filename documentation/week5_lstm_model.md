# Week 5 – LSTM Model Development

## Objective
To build a time-series forecasting model using LSTM to predict future energy consumption and compare its performance with the baseline Linear Regression model.

## Data Preparation
- Used cleaned and time-ordered energy consumption data
- Applied Min-Max scaling for neural network compatibility
- Created sliding window sequences with 24-hour time steps

## Model Architecture
- Two stacked LSTM layers (64 and 32 units)
- Dropout layers to prevent overfitting
- Dense output layer for single-step prediction

## Training Strategy
- Optimizer: Adam
- Loss Function: Mean Squared Error
- Early stopping to avoid overfitting

## Evaluation Metrics
- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)

## Outcome
The LSTM model captures temporal dependencies better than the baseline Linear Regression model and provides improved forecasting accuracy for energy consumption.
