const stars = document.querySelectorAll('#starRating .star');
const noteText = document.getElementById('noteValue');
let selectedRating = 0;
// ... autres lignes pour afficher le terrain

// Réinitialiser les étoiles
selectedRating = 0;
stars.forEach(star => star.classList.remove('active'));
noteText.textContent = "Note : 0 étoile(s)";



stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));

    // Mise à jour visuelle
    stars.forEach(s => {
      s.classList.remove('active');
      if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
        s.classList.add('active');
      }
    });

    // Affichage de la note
    noteText.textContent = `Note : ${selectedRating} étoile(s)`;

    // Tu peux ici envoyer la note vers Firebase ou autre base de données
    console.log("Note enregistrée :", selectedRating);
  });
});


const terrains = [
  {
    image: "ter1.jpg",
    superficie: "1 hectare",
    adresse: "Cocody Faya",
    type: "Plat",
    prix: "200 000 000",
    proprio: "Souleymane Sanogo"
  },
  {
    image: "ter2.jpg",
    superficie: "2 hectares",
    adresse: "Yopougon",
    type: "Sablonneux",
    prix: "150 000 000",
    proprio: "Bah Alassane"
  },
  {
    image: "ter3.jpg",
    superficie: "5000 m²",
    adresse: "Bingerville",
    type: "Marécageux",
    prix: "100 000 000",
    proprio: "Kamara Philipe"
  }
];


let currentIndex = 0;
function afficherTerrain(index) {
  const terrain = terrains[index];
  document.getElementById("terrainImage").src = `../${terrain.image}`;
  document.getElementById("superficie").textContent = terrain.superficie;
  document.getElementById("adresse").textContent = terrain.adresse;
  document.getElementById("type").textContent = terrain.type;
  document.getElementById("prix").textContent = `${terrain.prix} FCFA`;
  document.getElementById("proprio").textContent = terrain.proprio;

  selectedRating = 0;
  stars.forEach(star => star.classList.remove('active'));
  noteText.textContent = "Note : 0 étoile(s)";
}
afficherTerrain(currentIndex);
document.getElementById("haut").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + terrains.length) % terrains.length;
  afficherTerrain(currentIndex);
});

document.getElementById("bas").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % terrains.length;
  afficherTerrain(currentIndex);
});

