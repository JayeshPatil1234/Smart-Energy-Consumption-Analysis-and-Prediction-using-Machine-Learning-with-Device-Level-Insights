const Settings = {
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
if (document.getElementById('settings-view')) Settings.init();


