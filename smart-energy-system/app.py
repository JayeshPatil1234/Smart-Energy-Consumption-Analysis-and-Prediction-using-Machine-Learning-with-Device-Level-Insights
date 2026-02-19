import os
from flask import Flask, render_template
from flask_cors import CORS
from dotenv import load_dotenv
import json

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev_key')
CORS(app)

# Import Blueprints
from routes.data_routes import data_bp
from routes.ai_routes import ai_bp
from routes.export_routes import export_bp

# Register Blueprints
app.register_blueprint(data_bp, url_prefix='/api/data')
app.register_blueprint(ai_bp, url_prefix='/api/ai')
app.register_blueprint(export_bp, url_prefix='/api/export')

# Template Routes
@app.route('/')
def landing():
    return render_template('index.html')

@app.route('/onboarding')
def onboarding():
    return render_template('onboarding.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/recommendations')
def recommendations():
    return render_template('recommendations.html')

@app.route('/reports')
def reports():
    return render_template('reports.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

if __name__ == '__main__':
    port = int(os.getenv('FLASK_PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)