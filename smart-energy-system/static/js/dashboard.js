document.addEventListener('DOMContentLoaded', async() => {
    if (!document.getElementById('dashboard-view')) return;

    // Load Data
    const household = Utils.getLocalStorage('energy_household', null);
    if (!household) {
        window.location.href = '/onboarding';
        return;
    }

    const history = MockData.generate30DayHistory();
    const appliances = MockData.getApplianceBreakdown();

    // Update KPIs
    const totalKwh = history.reduce((sum, d) => sum + d.actual, 0).toFixed(0);
    const totalCost = (totalKwh * 0.13).toFixed(2);
    const totalCo2 = (totalKwh * 0.386).toFixed(0);

    Utils.animateValue('kpi-usage', 0, totalKwh, 1500);
    Utils.animateValue('kpi-cost', 0, totalCost, 1500);
    Utils.animateValue('kpi-co2', 0, totalCo2, 1500);

    // Initialize Charts
    const usageCtx = document.getElementById('usageChart').getContext('2d');
    EnergyCharts.initUsageLineChart(usageCtx, history);

    const applianceCtx = document.getElementById('applianceChart').getContext('2d');
    EnergyCharts.initApplianceBarChart(applianceCtx, appliances);

    // Get Prediction from Backend
    try {
        const predRes = await API.post('/api/data/prediction', { history: history });
        const predictCtx = document.getElementById('predictionChart').getContext('2d');
        EnergyCharts.initPredictionAreaChart(predictCtx, history, predRes.predictions);
    } catch (e) {
        console.error("Prediction failed", e);
    }

    // Live Ticker Simulation
    setInterval(() => {
        const liveWatts = Math.floor(Math.random() * (2500 - 400) + 400);
        document.getElementById('live-usage').innerText = `${liveWatts} W`;
    }, 5000);
});
