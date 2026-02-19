const API = {
    async get(endpoint) {
        try {
            const response = await fetch(endpoint);
            return await response.json();
        } catch (error) {
            console.error(`API GET Error: ${endpoint}`, error);
            throw error;
        }
    },
    async post(endpoint, data) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error(`API POST Error: ${endpoint}`, error);
            throw error;
        }
    }
};


