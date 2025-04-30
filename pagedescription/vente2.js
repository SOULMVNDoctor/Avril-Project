document.addEventListener('DOMContentLoaded', function() {
    // Vous pouvez ajouter des interactions ici si nécessaire
    console.log("Page chargée - prête pour des fonctionnalités supplémentaires");
    
    // Exemple d'interaction possible :
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // Animation au clic
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

});