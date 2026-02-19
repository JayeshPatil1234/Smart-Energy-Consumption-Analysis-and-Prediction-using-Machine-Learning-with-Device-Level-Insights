const Reports = {
    async exportJSON() {
        const household = Utils.getLocalStorage('energy_household', {});
        const history = MockData.generate30DayHistory();
        const res = await fetch('/api/export/json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ household, history })
        });
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'energy_report.json';
        a.click();
    },

    async exportPDF() {
        Utils.showToast("Generating PDF Report...", "info");
        const household = Utils.getLocalStorage('energy_household', {});
        const history = MockData.generate30DayHistory();

        const payload = {
            household,
            total_kwh: history.reduce((s, d) => s + d.actual, 0),
            total_cost: (history.reduce((s, d) => s + d.actual, 0) * 0.13).toFixed(2),
            total_co2: (history.reduce((s, d) => s + d.actual, 0) * 0.386).toFixed(0)
        };

        const res = await fetch('/api/export/pdf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'energy_report.pdf';
        a.click();
    }
};