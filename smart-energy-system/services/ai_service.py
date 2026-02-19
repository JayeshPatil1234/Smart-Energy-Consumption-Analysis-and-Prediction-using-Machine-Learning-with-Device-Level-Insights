import os
import json
from openai import OpenAI

class AIService:
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY")
        self.client = OpenAI(api_key=self.api_key) if self.api_key else None

    def get_recommendations(self, household_context):
        if not self.client:
            return self.get_fallback_recommendations()

        try:
            prompt = f"""
            As an energy consultant, provide 8 specific recommendations for this household:
            Context: {json.dumps(household_context)}
            Return ONLY a JSON list of 8 objects with keys: 
            priority (High/Medium/Low), category (Appliance/Schedule/Behavior), 
            title, description, savings_currency, savings_kwh.
            """
            response = self.client.chat.completions.create(
                model="gpt-4o",
                messages=[{"role": "system", "content": "You are a specialized energy optimization AI."},
                          {"role": "user", "content": prompt}],
                response_format={ "type": "json_object" }
            )
            return json.loads(response.choices[0].message.content)['recommendations']
        except Exception as e:
            return self.get_fallback_recommendations()

    def get_fallback_recommendations(self):
        return [
            {"priority": "High", "category": "Schedule", "title": "Shift Laundry to Off-Peak", "description": "Running your washing machine after 10 PM can save significant costs on time-of-use tariffs.", "savings_currency": 15, "savings_kwh": 45},
            {"priority": "High", "category": "Appliance", "title": "Optimize HVAC Temperature", "description": "Increasing your AC by just 2 degrees in summer reduces cooling load by 12%.", "savings_currency": 22, "savings_kwh": 80},
            {"priority": "Medium", "category": "Behavior", "title": "Unplug Phantom Loads", "description": "Idle electronics consume 'vampire' energy. Use smart power strips.", "savings_currency": 8, "savings_kwh": 20},
            {"priority": "Low", "category": "Behavior", "title": "LED Lighting Upgrade", "description": "Replace remaining halogen bulbs with LED alternatives.", "savings_currency": 5, "savings_kwh": 15},
            {"priority": "Medium", "category": "Appliance", "title": "Fridge Coil Cleaning", "description": "Dusty coils make your fridge work 20% harder. Clean them every 6 months.", "savings_currency": 10, "savings_kwh": 30},
            {"priority": "High", "category": "Schedule", "title": "EV Charging Window", "description": "Configure your EV to charge between 2 AM and 6 AM.", "savings_currency": 40, "savings_kwh": 120},
            {"priority": "Medium", "category": "Appliance", "title": "Dishwasher Eco Mode", "description": "Always use Eco-mode and ensure the unit is fully loaded.", "savings_currency": 7, "savings_kwh": 18},
            {"priority": "Low", "category": "Behavior", "title": "Cold Water Wash", "description": "Heating water accounts for 90% of washing machine energy.", "savings_currency": 6, "savings_kwh": 25}
        ]

    def chat_with_energy_ai(self, message, context):
        if not self.client:
            return "AI features are disabled. Please add your OpenAI API Key in Settings."
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": f"You are EnergyAI. User context: {json.dumps(context)}. Give short, practical advice."},
                    {"role": "user", "content": message}
                ],
                stream=False
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"Error connecting to AI service: {str(e)}"