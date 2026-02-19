const EnergyCharts = {
    colors: {
        blue: '#00C2FF',
        green: '#00E5A0',
        orange: '#FF6B35',
        muted: '#8892A4'
    },

    initUsageLineChart(ctx, data) {
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => d.date),
                datasets: [{
                    label: 'Actual Usage (kWh)',
                    data: data.map(d => d.actual),
                    borderColor: this.colors.blue,
                    backgroundColor: 'rgba(0, 194, 255, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { color: this.colors.muted } },
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: this.colors.muted } }
                }
            }
        });
    },

    initApplianceBarChart(ctx, data) {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.name),
                datasets: [{
                    data: data.map(d => d.percentage),
                    backgroundColor: data.map(d => d.color),
                    borderRadius: 8
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { max: 50, grid: { display: false } },
                    y: { grid: { display: false } }
                }
            }
        });
    },

    initPredictionAreaChart(ctx, actualData, predictedArray) {
        // Mocking last 3 actuals + 7 predictions
        const labels = ["T-2", "T-1", "Today", "D+1", "D+2", "D+3", "D+4", "D+5", "D+6", "D+7"];
        const lastActuals = actualData.slice(-3).map(d => d.actual);
        const predictionLine = [...new Array(2).fill(null), lastActuals[2], ...predictedArray];

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                        label: 'Actual',
                        data: [...lastActuals, ...new Array(7).fill(null)],
                        borderColor: this.colors.blue,
                        borderWidth: 3
                    },
                    {
                        label: 'Predicted',
                        data: predictionLine,
                        borderColor: this.colors.green,
                        borderDash: [5, 5],
                        borderWidth: 2,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: '#fff' } } }
            }
        });
    }
};


