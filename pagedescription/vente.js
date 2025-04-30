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




document.querySelectorAll('.product-card').forEach(card => {
    const image = card.querySelector('.product-img');
    image.style.cursor = 'pointer';

    image.addEventListener('click', () => {
        const name = card.querySelector('.product-name').textContent;
        const size = card.querySelector('.product-price').textContent;
        const price = card.querySelector('.quantity-selector span').textContent;
        const imgSrc = image.getAttribute('src');

        // Remplir la modale avec les infos
        document.getElementById('modal-title').textContent = name;
        document.getElementById('modal-size').textContent = size;
        document.getElementById('modal-price').textContent = price;
        document.getElementById('modal-img').setAttribute('src', imgSrc);

        // Afficher la modale
        document.getElementById('product-modal').classList.remove('hidden');
    });
});

// Fermer la modale quand on clique sur le bouton X
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('product-modal').classList.add('hidden');
});


// Lorsqu'on clique sur "Acheter"
document.getElementById('buy-btn').addEventListener('click', () => {
    alert("Merci pour votre intérêt ! Nous vous contacterons d'ici 2 minutes pour les formalités.");
    document.getElementById('product-modal').classList.add('hidden');
});
