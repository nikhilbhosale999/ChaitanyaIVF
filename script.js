document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Sticky Header Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '12px 0';
            header.style.boxShadow = 'var(--shadow-sm)';
        } else {
            header.style.padding = '16px 0';
            header.style.boxShadow = 'none';
        }
    });

    // Subtle Parallax for Hero Image
    const heroImage = document.querySelector('.hero-image-wrapper img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight && heroImage) {
            // Very subtle scale + translate
            heroImage.style.transform = `scale(1.05) translateY(${scrolled * 0.05}px)`;
        }
    });

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            // Close others (optional, if you want only one open at a time)
            /*
            document.querySelectorAll('.accordion-content').forEach(item => {
                if(item !== content) {
                    item.style.maxHeight = null;
                    item.previousElementSibling.querySelector('i').classList.replace('ph-caret-up', 'ph-caret-down');
                }
            });
            */

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                if(icon) {
                    icon.classList.replace('ph-caret-up', 'ph-caret-down');
                }
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                if(icon) {
                    icon.classList.replace('ph-caret-down', 'ph-caret-up');
                }
            }
        });
    });
});
