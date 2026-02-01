// Копирование IP
const ipButton = document.getElementById('copy-ip');
const ipText = document.getElementById('ip-text');
const serverIP = "play.oterworlds.ru"; // Замени на свой

ipButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(serverIP);
        const originalText = ipText.innerText;
        
        ipText.innerText = "IP Скопирован!";
        ipButton.classList.add('border-primary', 'bg-primary/10');
        
        setTimeout(() => {
            ipText.innerText = originalText;
            ipButton.classList.remove('border-primary', 'bg-primary/10');
        }, 2000);
    } catch (err) {
        console.error('Ошибка копирования:', err);
    }
});

// Анимация при скролле (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Параллакс эффект для логотипа (легкий)
document.addEventListener('mousemove', (e) => {
    const logo = document.querySelector('.hero-logo');
    if(logo) {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        logo.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});