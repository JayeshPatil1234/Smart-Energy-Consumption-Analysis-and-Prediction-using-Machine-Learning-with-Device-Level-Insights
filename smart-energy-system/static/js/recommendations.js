const Recs = {
    async load() {
        const container = document.getElementById('recs-grid');
        const household = Utils.getLocalStorage('energy_household', {});

        container.innerHTML = '<div class="skeleton" style="height:300px; grid-column: 1/-1"></div>';

        try {
            const data = await API.post('/api/ai/recommendations', household);
            container.innerHTML = '';

            data.forEach(rec => {
                const card = document.createElement('div');
                card.className = 'glass-card rec-card';
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-4">
                        <span class="badge badge-${rec.priority.toLowerCase()}">${rec.priority}</span>
                        <span class="text-2xl">${rec.category === 'Appliance' ? '⚡' : '🕐'}</span>
                    </div>
                    <h4 class="mb-2">${rec.title}</h4>
                    <p class="text-muted text-sm mb-4">${rec.description}</p>
                    <div class="flex justify-between items-center mt-auto">
                        <div class="text-xs">
                            <span class="text-green-400 font-bold">$${rec.savings_currency}/mo</span>
                        </div>
                        <button class="btn btn-secondary btn-sm" onclick="this.innerText='Applied ✓'; this.classList.add('text-green-400')">Apply</button>
                    </div>
                `;
                container.appendChild(card);
            });
        } catch (e) {
            Utils.showToast("Failed to load AI recommendations", "error");
        }
    },

    async handleChat() {
        const input = document.getElementById('ai-chat-input');
        const output = document.getElementById('ai-chat-output');
        const msg = input.value;
        if (!msg) return;

        output.innerHTML += `\n> User: ${msg}`;
        input.value = '';

        const context = Utils.getLocalStorage('energy_household', {});
        const res = await API.post('/api/ai/chat', { message: msg, context });

        output.innerHTML += `\n> AI: ${res.response}`;
        output.scrollTop = output.scrollHeight;
    }
};

if (document.getElementById('recs-view')) {
    Recs.load();
    document.getElementById('send-chat').addEventListener('click', () => Recs.handleChat());
}