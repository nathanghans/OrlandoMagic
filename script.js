// Orlando Magic 2026-27 Season Hub - Interactive Features

document.addEventListener('DOMContentLoaded', function() {

    // Highlight the nav link matching the current page
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        link.classList.toggle('active', linkPage === currentPage);
    });

    // Smooth scroll only for in-page anchor links (e.g. hero buttons on the home page)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation for cards as they scroll into view
    const animatedCards = document.querySelectorAll('.player-card, .news-card, .preview-card, .roster-card, .offseason-card');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                requestAnimationFrame(() => {
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedCards.forEach(card => observer.observe(card));

    console.log('%c Orlando Magic 2026-27 Season Hub ', 'background: #0077C0; color: white; font-size: 16px; padding: 10px;');
});
