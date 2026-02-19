const Utils = {
    formatCurrency(value, currency = 'INR') {
        return new Intl.NumberFormat('en-India', { style: 'currency', currency }).format(value);
    },

    animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        if (!obj) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            obj.innerHTML = current.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    },

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast show ${type}`;
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    },

    getLocalStorage(key, defaultVal) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultVal;
    },

    setLocalStorage(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }
};
