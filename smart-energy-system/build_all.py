import os

# This dictionary contains the exact, error-free code for your files
project_files = {
    "static/js/api.js": """const API = {
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
};""",
    "static/js/router.js": """const Router = {
    init() {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }
};
document.addEventListener('DOMContentLoaded', () => Router.init());""",
    "static/js/settings.js": """const Settings = {
    init() {
        console.log("Settings module initialized");
        const saveBtn = document.querySelector('.btn-save-settings');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                const key = document.getElementById('api-openai').value;
                localStorage.setItem('openai_key', key);
                alert("Settings Saved!");
            });
        }
    }
};
if (document.getElementById('settings-view')) Settings.init();"""
}

def build():
    print("⚡ Starting Full Project Reconstruction...")
    for path, content in project_files.items():
        # Ensure the directory exists before writing the file
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"✅ Created/Fixed: {path}")
    print("\n🚀 DONE! All spaces are fixed and missing files are created.")

if __name__ == "__main__":
    build()