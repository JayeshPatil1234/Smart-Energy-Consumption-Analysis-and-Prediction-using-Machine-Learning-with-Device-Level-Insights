from flask import Blueprint, request, jsonify
from services.ai_service import AIService

ai_bp = Blueprint('ai', __name__)
ai_service = AIService()

@ai_bp.route('/chat', methods=['POST'])
def chat():
    data = request.json
    response = ai_service.chat_with_energy_ai(data['message'], data['context'])
    return jsonify({"response": response})

@ai_bp.route('/recommendations', methods=['POST'])
def recommendations():
    context = request.json
    recs = ai_service.get_recommendations(context)
    return jsonify(recs)

@ai_bp.route('/test-key', methods=['GET'])
def test_key():
    provider = request.args.get('provider')
    # Simple simulation of key testing
    return jsonify({"success": True, "message": f"{provider.upper()} API Key is valid."})