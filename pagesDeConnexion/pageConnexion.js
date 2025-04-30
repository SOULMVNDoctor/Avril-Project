document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".formulaire");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Récupération des utilisateurs enregistrés
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Vérifie si un utilisateur correspond
        const userFound = users.find(
            user => user.email === email && user.password === password
        );

        if (userFound) {
            // Stocker l'utilisateur connecté si besoin
            localStorage.setItem("currentUser", JSON.stringify(userFound));

            alert("✅ Connexion réussie !");
            // Redirection (ex: page d’accueil)
            window.location.href = "../pageDacceuil/index.html";
        } else {
            alert("❌ Email ou mot de passe incorrect.");
        }
    });
});
