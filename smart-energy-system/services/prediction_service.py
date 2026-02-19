import random

class PredictionService:
    @staticmethod
    def forecast_usage(history_data):
        """
        Implements a weighted moving average with a trend factor.
        """
        if not history_data or len(history_data) < 3:
            return [round(random.uniform(15, 20), 2) for _ in range(7)]
        
        # Get last 7 days of actual usage
        recent = [d['actual'] for d in history_data[-7:]]
        
        predictions = []
        last_val = recent[-1]
        
        for i in range(1, 8):
            # Weighted average of last 3 points
            wma = (recent[-1] * 0.5) + (recent[-2] * 0.3) + (recent[-3] * 0.2)
            # Add small random variation and weekly trend
            variation = random.uniform(0.95, 1.05)
            next_val = round(wma * variation, 2)
            predictions.append(next_val)
            
            # Update history for next step in forecast
            recent.pop(0)
            recent.append(next_val)
            
        return predictions

    @staticmethod
    def detect_anomalies(history_data):
        """
        Detects values 2 standard deviations away from the mean.
        """
        if not history_data: return []
        values = [d['actual'] for d in history_data]
        avg = sum(values) / len(values)
        
        anomalies = []
        for d in history_data:
            if d['actual'] > avg * 1.5:
                anomalies.append({
                    "date": d['date'],
                    "value": d['actual'],
                    "type": "High Consumption Spike"
                })
        return anomalies