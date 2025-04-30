const titres = [
  "La qualité en toutes sécurité,",
  "Offre Premium pour Agences",
  "Vente Facile",
  "Location Touristique",
  "Achat Express"
];

const textes = [
  "Chez SOULMVN Immobilier vous avez les meilleures opportunités immobilières sur toute l’étendue du territoire national.",
  "Vous êtes une entreprise ou agence ? Connectez-vous en tant qu'administrateur et publiez vos biens en gardant votre identité.",
  "Chaque propriétaire peut vendre facilement via notre rubrique Partenariat depuis l'accueil.",
  "Avec Soulmvn Immobilier, comparez les logements touristiques en temps réel selon votre budget.",
  "Avec SOULMVN Immobilier, achetez une propriété en un clic !"
];

let i = 0;
const titre = document.getElementById("titreChangeant");
const texte = document.getElementById("texteChangeant");

function redemarrerAnimation(element, classe) {
  element.classList.remove(classe);
  void element.offsetWidth; // 🔄 Force le navigateur à reinitialiser l'animation
  element.classList.add(classe);
}

function changerTexte() {
  titre.textContent = titres[i];
  texte.textContent = textes[i];
  redemarrerAnimation(titre, "animation-titre");
  redemarrerAnimation(texte, "animation-texte");
  i = (i + 1) % titres.length;
}

changerTexte(); // au chargement
setInterval(changerTexte, 10000); // toutes les 10s







const menuBtn = document.getElementById("param");
const closeBtn = document.getElementById("closeBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
  console.log("ok");
  
  menu.style.display = "block";
};

closeBtn.onclick = () => {
  menu.style.display = "none";
};




function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');

  const active = document.getElementById(id);
  if (active) {
    active.style.display = 'block';
  }
}


function closeSection() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
}




document.addEventListener("DOMContentLoaded", function () {
  const boutonVous = document.getElementById("vous");
  const menuCompte = document.getElementById("votreCompte");

  boutonVous.addEventListener("click", function (e) {
    e.stopPropagation(); // empêche la fermeture immédiate
    menuCompte.classList.toggle("hidden");
  });

  // Cacher si on clique ailleurs
  document.addEventListener("click", function (event) {
    if (!menuCompte.contains(event.target) && !boutonVous.contains(event.target)) {
      menuCompte.classList.add("hidden");
    }
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const btnDeconnexion = document.getElementById("deconnexion");

  btnDeconnexion.addEventListener("click", function () {
    localStorage.removeItem("utilisateurConnecte"); // Efface l'utilisateur connecté
    window.location.href = "../pagesDeConnexion/pageConnexion.html"; // Redirection
  });
});













document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popupConnexion");
  const fermerBtn = document.getElementById("fermerPopup");

  // Fermer la popup
  if (fermerBtn) {
    fermerBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  }

  // Si utilisateur NON connecté => bloquer tous les clics
  const utilisateur = localStorage.getItem("currentUser");

  if (!utilisateur) {
    document.body.addEventListener("click", function (e) {
      // Ne bloque pas la popup elle-même ni les boutons à l'intérieur
      if (!popup.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        popup.classList.remove("hidden");
      }
    }, true); // true = capture phase pour intercepter les clics avant propagation
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const ferbtn = document.getElementById('ferme-btn');
  ferbtn.addEventListener('click', function () {

    const infoTermes = document.querySelector('.info-termes');
    infoTermes.style.display = 'none'
  })

})





document.getElementById('terme').addEventListener('click', function () {

  document.querySelector('.info-termes').style.display = 'block'

})


document.addEventListener('DOMContentLoaded', () => {
  const image1 = document.querySelector('.image1').addEventListener('click', () => {
    window.location.href = '../pagedescription/vente.html'
  
  })

  const image2 = document.querySelector('.image2').addEventListener('click', () => {
    window.location.href = '../pagedescription/vente2.html'
  })

  constimage3=document.querySelector('.image3').addEventListener('click',()=>{
    window.location.href='../pagedescription/vente1.html'
  })

  const image4 = document.querySelector('.image4').addEventListener('click', () => {
    window.location.href = 'https://www.google.com/maps/@5.2887183,-3.9444025,13.49z?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D'
  })


  const image5 = document.querySelector('.image5').addEventListener('click', () => {
    window.location.href = "../pagedescription/invest.html"
  })


  const image6=document.querySelector('.image6').addEventListener('click',()=>{
    window.location.href='https://hotel.tiama.ci/.  '
  })

})
document.addEventListener('DOMContentLoaded',()=>{
  const propo=document.querySelector('.propo')
  const ferme=document.querySelector('.fermeP').addEventListener('click',()=>{
    propo.style.display='none'
  })

  document.getElementById('propos').addEventListener('click',()=>{
    propo.style.display='block'
  })

})




//Notification//
const notification = document.getElementById("notification");

  const Notification=document.querySelector('.Notification')
  const closeNote = document.getElementById('closeNote')
     closeNote.onclick = () =>{
      Notification.style.display='none'
     }
      

     notification.addEventListener('click',()=>{
      Notification.style.display='block'
     })
 
document.addEventListener('DOMContentLoaded',()=>{
     
     const postuler = document.getElementById('postu').addEventListener('click',()=>{
      console.log('ok')
     alert('Votre candidature a été envoyée avec succès !')
     })

    })