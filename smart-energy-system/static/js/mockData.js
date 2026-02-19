const MockData = {
    generate30DayHistory() {
        const history = [];
        const baseUsage = 15; // kWh base
        const now = new Date();

        for (let i = 29; i >= 0; i--) {
            const date = new Date();
            date.setDate(now.getDate() - i);

            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const multiplier = isWeekend ? 1.25 : 1.0;
            const noise = (Math.random() * 0.3) + 0.85; // ±15%

            // Random spike every 8 days
            const spike = (i % 8 === 0) ? 1.4 : 1.0;

            const actual = parseFloat((baseUsage * multiplier * noise * spike).toFixed(2));
            history.push({
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                actual: actual,
                predicted: parseFloat((actual * (0.9 + Math.random() * 0.2)).toFixed(2)),
                cost: parseFloat((actual * 0.13).toFixed(2)),
                co2: parseFloat((actual * 0.386).toFixed(2))
            });
        }
        return history;
    },

    getApplianceBreakdown() {
        return [
            { name: 'HVAC', percentage: 38, color: '#00C2FF' },
            { name: 'Refrigerator', percentage: 14, color: '#00E5A0' },
            { name: 'Water Heater', percentage: 12, color: '#FF6B35' },
            { name: 'Lighting', percentage: 9, color: '#FFCC00' },
            { name: 'Washer/Dryer', percentage: 8, color: '#9D50BB' },
            { name: 'EV Charger', percentage: 7, color: '#6E48AA' },
            { name: 'Other', percentage: 12, color: '#8892A4' }
        ];
    }
};
