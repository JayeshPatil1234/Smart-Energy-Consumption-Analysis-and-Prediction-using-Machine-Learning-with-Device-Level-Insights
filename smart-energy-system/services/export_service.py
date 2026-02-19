import json
import io
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

class ExportService:
    @staticmethod
    def generate_json_report(data):
        return json.dumps(data, indent=4)

    @staticmethod
    def generate_pdf_report(data):
        buffer = io.BytesIO()
        doc = SimpleDocTemplate(buffer, pagesize=A4)
        elements = []
        styles = getSampleStyleSheet()

        # Header
        elements.append(Paragraph("EnergyAI - Monthly Consumption Report", styles['Title']))
        elements.append(Spacer(1, 12))
        
        # Summary Table
        summary_data = [
            ["Metric", "Value"],
            ["Household Name", data.get('household', {}).get('name', 'N/A')],
            ["Total Usage", f"{data.get('total_kwh', 0)} kWh"],
            ["Estimated Cost", f"${data.get('total_cost', 0)}"],
            ["Carbon Footprint", f"{data.get('total_co2', 0)} kg CO2"]
        ]
        t = Table(summary_data, colWidths=[200, 200])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), colors.navy),
            ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
            ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
            ('GRID', (0, 0), (-1, -1), 1, colors.black)
        ]))
        elements.append(t)
        
        doc.build(elements)
        buffer.seek(0)
        return buffer