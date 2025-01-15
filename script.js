document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById('navbar-default');
    
    button.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
    });

    // Activación de la animación de la sección Skills cuando entra en pantalla
    const servicesSection = document.querySelector('#services');
    const skillsSection = document.querySelector('#skills');
    const projectsSection = document.querySelector('#projects');
    const aboutSection = document.querySelector('#about');
    const contactSection = document.querySelector('#contact');
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0'); // Hace visible la sección
                entry.target.classList.add('card-animation'); // Aplica la animación
                observer.unobserve(entry.target); // Deja de observar la sección una vez que entra en vista
            }
        });
    }, { threshold: 0.5 }); // Activar cuando el 50% de la sección esté visible en pantalla
  
    observer.observe(servicesSection); // Empieza a observar la sección de Services
    observer.observe(skillsSection); // Empieza a observar la sección de Skills
    observer.observe(projectsSection); // Empieza a observar la sección de Projects
    observer.observe(aboutSection); // Empieza a observar la sección de About
    observer.observe(contactSection); // Empieza a observar la sección de Contact
});
