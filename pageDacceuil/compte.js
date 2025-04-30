document.addEventListener("DOMContentLoaded", () => {
  // ——— Info utilisateur ———
  const infoBtn       = document.getElementById("info");
  const infoDiv       = document.getElementById("infoDiv");
  const closeInfoBtn  = document.getElementById("closeInfoBtn");

  infoBtn.addEventListener("click", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      document.getElementById("infoNom").textContent    = currentUser.nom    || "";
      document.getElementById("infoPrenom").textContent = currentUser.prenom || "";
      document.getElementById("infoEmail").textContent  = currentUser.email  || "";
      document.getElementById("infoNumero").textContent = currentUser.numero || "";
      infoDiv.style.display = "block";
    } else {
      alert("Aucun utilisateur connecté.");
      window.location.href = '../pagesDeConnexion/pageConnexion.html';
    }
  });

  closeInfoBtn.addEventListener("click", () => {
    infoDiv.style.display = "none";
  });

  // ——— Déconnexion ———
  const btnDeconnexion = document.getElementById("deconnexion");
  btnDeconnexion.addEventListener("click", () => {
    // Supprime la donnée utilisateur
    localStorage.removeItem("currentUser");
    // redirection vers la page d'accueil
    window.location.replace("../pageDacceuil/index.html");
  });
});
