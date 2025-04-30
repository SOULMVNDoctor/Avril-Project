// Données des projets immobiliers
const realEstateProjects = [
    {
      id: 1,
      title: "Résidence Premium - Lyon",
      type: "neuf",
      price: "250 000 - 500 000€",
      return: "5-7%",
      duration: "3-5 ans",
      risk: "low",
      image: "lyon-residence.jpg",
      description: "Programme neuf avec garantie de loyer. Parfait pour un investissement locatif sécurisé.",
      taxAdvantages: ["Pinel", "LMNP", "Déficit foncier"]
    },
    {
      id: 2,
      title: "Parkings - Paris 15ème",
      type: "parking",
      price: "30 000 - 60 000€",
      return: "6-8%",
      duration: "2-4 ans",
      risk: "low",
      image: "paris-parking.jpg",
      description: "Investissement en parking avec gestion incluse. Très forte demande dans ce quartier."
    }
  ];
  
  // Afficher les projets
  function displayProjects() {
    const container = document.getElementById('real-estate-container');
    
    realEstateProjects.forEach(project => {
      const projectCard = `
        <div class="project-card" data-id="${project.id}">
          <img src="assets/${project.image}" alt="${project.title}">
          <div class="project-info">
            <h3>${project.title}</h3>
            <div class="project-details">
              <span><i class="fas fa-tag"></i> ${project.price}</span>
              <span><i class="fas fa-chart-line"></i> ${project.return}</span>
              <span><i class="fas fa-clock"></i> ${project.duration}</span>
            </div>
            <button class="details-btn">Voir détails</button>
          </div>
        </div>
      `;
      container.innerHTML += projectCard;
    });
  
    // Gestion des clics
    document.querySelectorAll('.details-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const projectId = this.closest('.project-card').dataset.id;
        showProjectDetails(projectId);
      });
    });
  }
  
  // Afficher les détails d'un projet
  function showProjectDetails(id) {
    const project = realEstateProjects.find(p => p.id == id);
    if (!project) return;
  
    const modal = `
      <div class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>${project.title}</h2>
          <img src="assets/${project.image}" alt="${project.title}">
          
          <div class="modal-details">
            <p><strong>Type:</strong> ${project.type}</p>
            <p><strong>Investissement:</strong> ${project.price}</p>
            <p><strong>Rendement:</strong> ${project.return}</p>
            <p><strong>Durée:</strong> ${project.duration}</p>
            <p><strong>Risque:</strong> <span class="risk-${project.risk}">${getRiskText(project.risk)}</span></p>
          </div>
          
          <div class="project-description">
            <h3>Description</h3>
            <p>${project.description}</p>
          </div>
          
          ${project.taxAdvantages ? `
          <div class="tax-advantages">
            <h3>Avantages fiscaux</h3>
            <ul>
              ${project.taxAdvantages.map(adv => `<li>${adv}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          
          <button class="contact-btn">Contacter un conseiller</button>
        </div>
      </div>
    `;
  
    document.body.insertAdjacentHTML('beforeend', modal);
  
    // Fermer la modal
    document.querySelector('.modal .close').addEventListener('click', () => {
      document.querySelector('.modal').remove();
    });
  
    // Bouton contact
    document.querySelector('.contact-btn').addEventListener('click', () => {
      window.location.href = '#contact';
      document.querySelector('.modal').remove();
    });
  }
  
  // Helper function
  function getRiskText(risk) {
    const risks = {
      low: "Faible risque",
      medium: "Risque modéré",
      high: "Haut risque"
    };
    return risks[risk] || risk;
  }
  
  // Initialisation
  document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    
    // Filtres
    document.getElementById('filter-btn').addEventListener('click', filterProjects);
  });
  
  // Filtrer les projets
  function filterProjects() {
    const typeFilter = document.getElementById('type-filter').value;
    const riskFilter = document.getElementById('risk-filter').value;
    
    let filtered = realEstateProjects;
    
    if (typeFilter !== 'all') {
      filtered = filtered.filter(p => p.type === typeFilter);
    }
    
    if (riskFilter !== 'all') {
      filtered = filtered.filter(p => p.risk === riskFilter);
    }
    
    // Réafficher les projets filtrés
    document.getElementById('real-estate-container').innerHTML = '';
    filtered.forEach(p => {
      // Même logique que displayProjects mais pour les résultats filtrés
    });
  }