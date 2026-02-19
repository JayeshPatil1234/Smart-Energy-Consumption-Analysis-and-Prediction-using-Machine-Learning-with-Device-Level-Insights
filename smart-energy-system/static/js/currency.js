/**
 * EnergyAI India - Dedicated Currency Utility
 */
const CurrencyManager = {
    symbol: '₹',
    code: 'INR',
    tariffRate: 8.00, // Hardcoded Indian average rate

    load: function() {
        this.symbol = '₹';
        this.code = 'INR';
        this.tariffRate = 8.00;
    },

    format: function(amount) {
        const val = parseFloat(amount) || 0;
        // Indian numbering system formatting (e.g., ₹1,24,500.00)
        return '₹' + val.toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    },

    refreshAllPrices: function() {
        document.querySelectorAll('[data-price]').forEach(el => {
            el.textContent = this.format(el.getAttribute('data-price'));
        });
        document.querySelectorAll('.currency-symbol').forEach(el => {
            el.textContent = '₹';
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    CurrencyManager.load();
    CurrencyManager.refreshAllPrices();
});
