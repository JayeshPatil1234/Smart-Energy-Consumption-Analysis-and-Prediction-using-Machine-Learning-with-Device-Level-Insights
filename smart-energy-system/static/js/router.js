const Router = {
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
document.addEventListener('DOMContentLoaded', () => Router.init());


