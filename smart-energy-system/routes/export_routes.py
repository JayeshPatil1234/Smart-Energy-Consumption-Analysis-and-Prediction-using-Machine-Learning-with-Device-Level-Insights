from flask import Blueprint, send_file, request
from services.export_service import ExportService
import io

export_bp = Blueprint('export', __name__)

@export_bp.route('/json', methods=['POST'])
def export_json():
    data = request.json
    json_str = ExportService.generate_json_report(data)
    return send_file(
        io.BytesIO(json_str.encode()),
        mimetype='application/json',
        as_attachment=True,
        download_name='energy_report.json'
    )

@export_bp.route('/pdf', methods=['POST'])
def export_pdf():
    data = request.json
    pdf_buffer = ExportService.generate_pdf_report(data)
    return send_file(
        pdf_buffer,
        mimetype='application/pdf',
        as_attachment=True,
        download_name='energy_report.pdf'
    )