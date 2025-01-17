document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById('navbar-default');
    
    button.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
    });

    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        once: true      // La animación se ejecuta solo una vez
    });
});
