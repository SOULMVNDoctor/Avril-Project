document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.querySelector(".nom input").value;
        const prenom = document.querySelector(".prenom input").value;
        const email = document.querySelector(".email input").value;
        const numero = document.querySelector(".num input").value;
        const password = document.querySelector(".passw input").value;

        const newUser = { nom, prenom, email, numero, password };

        // Récupérer les utilisateurs existants dans localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Vérifier si l'email OU le numéro existent déjà
        const userExists = users.some(
            user => user.email === email || user.numero === numero
        );

        const alertBox = document.getElementById("customAlert");

        if (userExists) {
            alertBox.innerHTML = "❌ Cet email ou numéro existe déjà.";
            alertBox.style.backgroundColor = "#d9534f"; // rouge
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
            }, 3000);
        } else {
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
        
            // Enregistrer l'utilisateur actuellement connecté
            localStorage.setItem("utilisateurConnecte", JSON.stringify(newUser));
        
            alertBox.innerHTML = "✅ Compte créé avec succès !";
            alertBox.style.backgroundColor = "#8da5da"; // bleu
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
                window.location.href = "../pageDacceuil/acceuil.html";
            }, 2500);
        }
        
    });
});
