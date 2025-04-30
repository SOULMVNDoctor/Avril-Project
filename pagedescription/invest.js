document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('modal');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const closeBtn = document.querySelector('.close');
    
    // Open modal when "En savoir plus" button is clicked
    learnMoreBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre intérêt! Nous vous contacterons bientôt.');
        modal.style.display = 'none';
        contactForm.reset();
    });
    
    // Feature card animations
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Feature buttons functionality
    const featureButtons = document.querySelectorAll('.feature-btn');
    
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.feature-card');
            const title = card.querySelector('h2').textContent;
            
        });
    });

        document.getElementById('file').addEventListener('click',()=>{
            const file= document.createElement('a');
        const pdf="../Guide de  l'einvestissement.pdf"
        file.href=pdf;
        file.download="Guide de l'einvestissement.pdf"
        file.click();
    })

    const decouvrir = document.getElementById('decouvrir').addEventListener('click',()=>{
        window.location.href="decouvrir.html"
    })


    const explorer=document.getElementById('explorer').addEventListener('click',()=>{
        window.location.href='explorer.html'
    })

});




