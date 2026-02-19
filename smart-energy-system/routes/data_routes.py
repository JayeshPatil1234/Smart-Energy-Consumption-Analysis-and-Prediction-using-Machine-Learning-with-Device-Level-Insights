from flask import Blueprint, request, jsonify
import json
import os
from services.prediction_service import PredictionService

data_bp = Blueprint('data', __name__)
DATA_FILE = 'data/household_data.json'

def load_data():
    if not os.path.exists(DATA_FILE): return {}
    with open(DATA_FILE, 'r') as f:
        return json.load(f)

@data_bp.route('/household', methods=['GET', 'POST', 'DELETE'])
def household_data():
    if request.method == 'POST':
        data = request.json
        with open(DATA_FILE, 'w') as f:
            json.dump(data, f)
        return jsonify({"status": "success", "message": "Data saved"}), 201
    
    if request.method == 'DELETE':
        if os.path.exists(DATA_FILE):
            os.remove(DATA_FILE)
        return jsonify({"status": "success", "message": "Data reset"}), 200

    return jsonify(load_data()), 200

@data_bp.route('/usage', methods=['GET'])
def get_usage():
    # In a real app, this would query a DB. 
    # Here it returns the simulated 30-day data sent from frontend state/localStorage
    # or generates it on the fly.
    return jsonify({"message": "Data generated client-side for this demo"}), 200

@data_bp.route('/prediction', methods=['POST'])
def get_prediction():
    history = request.json.get('history', [])
    predictions = PredictionService.forecast_usage(history)
    anomalies = PredictionService.detect_anomalies(history)
    return jsonify({
        "predictions": predictions,
        "anomalies": anomalies
    }), 200