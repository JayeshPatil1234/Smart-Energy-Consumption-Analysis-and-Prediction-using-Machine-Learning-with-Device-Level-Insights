let currentStep = 1;
const totalSteps = 4;

const Onboarding = {
    init() {
        this.updateStepUI();
        this.bindEvents();
    },

    bindEvents() {
        document.querySelectorAll('.btn-next').forEach(btn => {
            btn.addEventListener('click', () => this.nextStep());
        });
        document.querySelectorAll('.btn-prev').forEach(btn => {
            btn.addEventListener('click', () => this.prevStep());
        });
    },

    nextStep() {
        if (currentStep < totalSteps) {
            currentStep++;
            this.updateStepUI();
        } else {
            this.finish();
        }
    },

    prevStep() {
        if (currentStep > 1) {
            currentStep--;
            this.updateStepUI();
        }
    },

    updateStepUI() {
        document.querySelectorAll('.step-content').forEach(s => s.classList.add('hidden'));
        document.getElementById(`step-${currentStep}`).classList.remove('hidden');

        document.querySelectorAll('.step-node').forEach((node, i) => {
            if (i + 1 < currentStep) node.className = 'step-node completed';
            else if (i + 1 === currentStep) node.className = 'step-node active';
            else node.className = 'step-node';
        });
    },

    async finish() {
        const formData = {
            name: document.getElementById('name').value,
            location: document.getElementById('location').value,
            sqft: document.getElementById('sqft').value,
            residents: document.getElementById('residents').value,
            appliances: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value)
        };

        Utils.setLocalStorage('energy_household', formData);
        await API.post('/api/data/household', formData);

        Utils.showToast("Setup Complete! Redirecting...", "success");
        setTimeout(() => window.location.href = '/dashboard', 2000);
    }
};

if (document.getElementById('onboarding-view')) Onboarding.init();