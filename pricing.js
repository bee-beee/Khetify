// ===============================================
// PRICING - BILLING TOGGLE FUNCTIONALITY
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const monthlyPeriods = document.querySelectorAll('.monthly-period');
    const yearlyPeriods = document.querySelectorAll('.yearly-period');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the selected period
            const period = button.dataset.period;
            
            // Show/hide prices based on selected period
            if (period === 'monthly') {
                monthlyPrices.forEach(price => price.style.display = 'inline');
                yearlyPrices.forEach(price => price.style.display = 'none');
                monthlyPeriods.forEach(period => period.style.display = 'inline');
                yearlyPeriods.forEach(period => period.style.display = 'none');
            } else {
                monthlyPrices.forEach(price => price.style.display = 'none');
                yearlyPrices.forEach(price => price.style.display = 'inline');
                monthlyPeriods.forEach(period => period.style.display = 'none');
                yearlyPeriods.forEach(period => period.style.display = 'inline');
            }
        });
    });

    // Plan card interactions
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // FAQ accordion effect (optional enhancement)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the answer visibility
            const answer = item.querySelector('.faq-answer');
            const isExpanded = answer.style.maxHeight;
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = null;
                    otherItem.style.background = 'var(--bg-primary)';
                }
            });
            
            // Toggle current FAQ
            if (isExpanded) {
                answer.style.maxHeight = null;
                item.style.background = 'var(--bg-primary)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                item.style.background = 'var(--bg-secondary)';
            }
        });
    });
});
