document.addEventListener('DOMContentLoaded', () => {
    // Logique pour l'accordéon des services à gauche
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        const titleElement = item.querySelector('.service-title');
        
        titleElement.addEventListener('click', () => {
            // Retirer la classe 'active' et le curseur '▶' de tous les éléments
            serviceItems.forEach(i => {
                i.classList.remove('active');
                const t = i.querySelector('.service-title');
                if (t.textContent.includes('▶ ')) {
                    t.textContent = t.textContent.replace('▶ ', '');
                }
            });
            
            // Ajouter 'active' à l'élément cliqué et le curseur '▶'
            item.classList.add('active');
            if (!titleElement.textContent.includes('▶ ')) {
                titleElement.textContent = '▶ ' + titleElement.textContent;
            }
        });
    });

    // Effet parallax subtil pour le bouton en verre
    const glassBtn = document.querySelector('.glass-btn');
    if(glassBtn) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;
            glassBtn.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
    // Logique pour la pop-up Contact
    const modal = document.getElementById('contactModal');
    const triggerBtns = document.querySelectorAll('.contact-trigger');
    const closeBtn = document.querySelector('.close-modal');

    if (triggerBtns.length > 0 && modal && closeBtn) {
        triggerBtns.forEach(btn => {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // empêcher le scroll du fond
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Fermer la pop-up en cliquant en dehors du contenu
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
