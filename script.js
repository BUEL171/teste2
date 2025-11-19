// Scroll suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle FAQ
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Fecha todos os outros FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abre o FAQ clicado (se não estava aberto)
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Handler de compra
function handlePurchase() {
    
    console.log('Compra iniciada');
    window.location.href = 'https://www.youtube.com'
    
    // Aqui você pode adicionar a integração real com gateway de pagamento
    // Por exemplo: window.location.href = 'https://checkout.stripe.com/...';
}

// Animação de entrada ao scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observa cards e seções
    document.querySelectorAll('.card, .method-item, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Contador de visualizações (simulado)
function updateViewersCount() {
    const viewersElement = document.querySelector('.viewers');
    if (viewersElement) {
        const baseCount = 37;
        const variation = Math.floor(Math.random() * 5) - 2; // -2 a +2
        const currentCount = baseCount + variation;
        
        const countText = viewersElement.textContent;
        viewersElement.innerHTML = countText.replace(/\d+/, currentCount);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Ativa animações ao scroll
    animateOnScroll();
    
    // Atualiza contador de visualizações a cada 10 segundos
    updateViewersCount();
    setInterval(updateViewersCount, 10000);
    
    // Log para debug
    console.log('Método Anti-Sabotagem 21D - Landing Page carregada');
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});
