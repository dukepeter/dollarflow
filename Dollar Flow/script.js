document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Update countdown timer (example for urgency section)
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown-timer');
        if (countdownElement) {
            // Example countdown logic
            const now = new Date();
            const endDate = new Date();
            endDate.setDate(now.getDate() + 2); // 2 days from now
            
            const diff = endDate - now;
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            countdownElement.textContent = `${hours}h ${minutes}m remaining`;
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000);
});