// Script pour améliorer l'interaction sur le portfolio

document.addEventListener("DOMContentLoaded", function() {
    // Animation de la section "Hero" au chargement
    const heroSection = document.getElementById("hero");
    heroSection.style.opacity = 0;
    setTimeout(function() {
        heroSection.style.transition = "opacity 2s ease-in";
        heroSection.style.opacity = 1;
    }, 500);

    // Navigation fluide
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajuste la position pour la barre de navigation
                behavior: "smooth"
            });
        });
    });
});

