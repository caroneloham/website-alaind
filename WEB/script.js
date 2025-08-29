// --- script.js ---

// Script pour le preloader (s'applique à toutes les pages)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Gestion de la Lightbox pour les galeries
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImage = lightbox.querySelector('img');
        const galleryImages = document.querySelectorAll('.gallery-item img');
        const closeBtn = lightbox.querySelector('.close');

        galleryImages.forEach(image => {
            image.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImage.src = image.src;
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
        };

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            // Ferme si on clique sur le fond noir, mais pas sur l'image
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});