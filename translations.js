// === SYSTÈME DE TRADUCTIONS MULTILINGUES ===
const translations = {
  fr: {
    navbar: {
      infos: "Infos",
      supplements: "Suppléments",
      contact: "Contact"
    },
    hero: {
      title: "RÉSERVEZ VOTRE CHAUFFEUR PRIVÉ",
      bookBtn: "Réserver votre course"
    },
    driver: {
      title: "👤 Rencontrez votre chauffeur & notre véhicule 🚗",
      name: "Stephan PERRET",
      position: "Chauffeur Privé Premium",
      description: "Passionné par la route et le contact humain, je mets mon expertise au service de vos déplacements à Lisbonne. Fort de plusieurs années d'expérience dans le transport privé, mon objectif est de vous offrir bien plus qu'un simple trajet : une expérience confortable, sereine et adaptée à vos besoins.",
      experience: "✨ Plus de 4 ans d'expérience",
      license: "Permis Professionnel",
      insurance: "Véhicule Assuré",
      languages: "Portugais/Français",
      punctuality: "Ponctualité Garantie"
    },
    vehicle: {
      type: "Voiture SUV",
      model: "Nissan QASHQAI",
      description: "Véhicule spacieux et propre, idéal pour les travailleurs, familles ou transferts aéroport. Confort, sécurité et services à bord inclus.",
      ac: "Climatisation",
      capacity: "Grande capacité",
      clean: "Véhicule propre",
      water: "Bouteille d'eau"
    },
    supplements: {
      charger: "Chargeur de téléphone",
      water: "Bouteille d'eau",
      welcome: "Accueil Personnalisé",
      wifi: "Wifi à bord (bientôt dispo)"
    },
    footer: {
      copyright: "Copyright 2025 Nicolas VTC. Tous droits réservés."
    }
  },
  en: {
    navbar: {
      infos: "Info",
      supplements: "Amenities",
      contact: "Contact"
    },
    hero: {
      title: "BOOK YOUR PRIVATE DRIVER",
      bookBtn: "Book Your Ride"
    },
    driver: {
      title: "👤 Meet your driver & our vehicle 🚗",
      name: "Stephan PERRET",
      position: "Premium Private Driver",
      description: "Passionate about driving and human interaction, I put my expertise at your service for your travels in Lisbon. With several years of experience in private transportation, my goal is to offer you much more than just a ride: a comfortable, peaceful and tailored experience to your needs.",
      experience: "✨ More than 4 years of experience",
      license: "Professional License",
      insurance: "Vehicle Insured",
      languages: "Portuguese/French",
      punctuality: "Punctuality Guaranteed"
    },
    vehicle: {
      type: "SUV Car",
      model: "Nissan QASHQAI",
      description: "Spacious and clean vehicle, ideal for professionals, families or airport transfers. Comfort, security and onboard services included.",
      ac: "Air Conditioning",
      capacity: "Large capacity",
      clean: "Clean vehicle",
      water: "Water bottle"
    },
    supplements: {
      charger: "Phone charger",
      water: "Water bottle",
      welcome: "Personalized greeting",
      wifi: "Wifi onboard (coming soon)"
    },
    footer: {
      copyright: "Copyright 2025 Nicolas VTC. All rights reserved."
    }
  },
  pt: {
    navbar: {
      infos: "Informações",
      supplements: "Amenidades",
      contact: "Contato"
    },
    hero: {
      title: "RESERVE SEU MOTORISTA PARTICULAR",
      bookBtn: "Reservar sua Corrida"
    },
    driver: {
      title: "👤 Conheça seu motorista e nosso veículo 🚗",
      name: "Stephan PERRET",
      position: "Motorista Particular Premium",
      description: "Apaixonado por dirigir e interação humana, coloco minha experiência a serviço de seus deslocamentos em Lisboa. Com vários anos de experiência em transporte particular, meu objetivo é oferecer a você muito mais do que apenas um passeio: uma experiência confortável, tranquila e adaptada às suas necessidades.",
      experience: "✨ Mais de 4 anos de experiência",
      license: "Licença Profissional",
      insurance: "Veículo Segurado",
      languages: "Português/Francês",
      punctuality: "Pontualidade Garantida"
    },
    vehicle: {
      type: "Carro SUV",
      model: "Nissan QASHQAI",
      description: "Veículo espaçoso e limpo, ideal para profissionais, famílias ou transferências aeroportuárias. Conforto, segurança e serviços a bordo inclusos.",
      ac: "Ar condicionado",
      capacity: "Grande capacidade",
      clean: "Veículo limpo",
      water: "Garrafa de água"
    },
    supplements: {
      charger: "Carregador de telefone",
      water: "Garrafa de água",
      welcome: "Recepção personalizada",
      wifi: "Wifi a bordo (em breve)"
    },
    footer: {
      copyright: "Copyright 2025 Nicolas VTC. Todos os direitos reservados."
    }
  }
};

// === SYSTÈME DE GESTION DES LANGUES ===
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'fr';
    this.init();
  }

  init() {
    this.setLanguage(this.currentLang);
    this.updateLangButton();
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('lang', lang);
      this.updateDOM();
      this.updateLangButton();
    }
  }

  updateDOM() {
    const lang = translations[this.currentLang];

    // Navbar
    document.querySelectorAll('.navbar-menu a').forEach((link, idx) => {
      const navKeys = ['infos', 'supplements', 'contact'];
      if (navKeys[idx]) link.textContent = lang.navbar[navKeys[idx]];
    });

    // Hero
    const titleBtn = document.querySelector('.reserve-btn');
    if (titleBtn) titleBtn.textContent = lang.hero.bookBtn;

    const titleText = document.querySelector('.titreprincipal p');
    if (titleText) titleText.textContent = lang.hero.title;

    // Driver section
    const driverTitle = document.querySelector('.section-title');
    if (driverTitle) {
      driverTitle.textContent = lang.driver.title;
      // Ajouter la classe si portugais (pour forcer une ligne en mobile)
      if (this.currentLang === 'pt') {
        driverTitle.classList.add('lang-pt');
      } else {
        driverTitle.classList.remove('lang-pt');
      }
    }

    const driverName = document.querySelector('.driver-info h3');
    if (driverName) driverName.textContent = lang.driver.name;

    const driverPosition = document.querySelector('.driver-title');
    if (driverPosition) driverPosition.textContent = lang.driver.position;

    const driverDesc = document.querySelector('.driver-description');
    if (driverDesc) driverDesc.textContent = lang.driver.description;

    const driverExp = document.querySelector('.driver-experience');
    if (driverExp) driverExp.textContent = lang.driver.experience;

    const badges = document.querySelectorAll('.certification-badge');
    if (badges.length >= 4) {
      badges[0].textContent = lang.driver.license;
      badges[1].textContent = lang.driver.insurance;
      badges[2].textContent = lang.driver.languages;
      badges[3].textContent = lang.driver.punctuality;
    }

    // Vehicle section
    const vehicleType = document.querySelector('.vehicle-card h3');
    if (vehicleType) vehicleType.textContent = lang.vehicle.type;

    const vehicleModel = document.querySelector('.vehicle-card .driver-title');
    if (vehicleModel) vehicleModel.textContent = lang.vehicle.model;

    const vehicleDesc = document.querySelector('.vehicle-card p');
    if (vehicleDesc) vehicleDesc.textContent = lang.vehicle.description;

    const vehicleItems = document.querySelectorAll('.vehicle-card ul li');
    if (vehicleItems.length >= 4) {
      vehicleItems[0].innerHTML = `<span style="position:absolute; left:-8px; color:#FFB6A3;">•</span> ${lang.vehicle.ac}`;
      vehicleItems[1].innerHTML = `<span style="position:absolute; left:-8px; color:#FFB6A3;">•</span> ${lang.vehicle.capacity}`;
      vehicleItems[2].innerHTML = `<span style="position:absolute; left:-8px; color:#FFB6A3;">•</span> ${lang.vehicle.clean}`;
      vehicleItems[3].innerHTML = `<span style="position:absolute; left:-8px; color:#FFB6A3;">•</span> ${lang.vehicle.water}`;
    }

    // Supplements
    const iconLabels = document.querySelectorAll('.icon-label');
    if (iconLabels.length >= 4) {
      iconLabels[0].textContent = lang.supplements.charger;
      iconLabels[1].textContent = lang.supplements.water;
      iconLabels[2].textContent = lang.supplements.welcome;
      iconLabels[3].textContent = lang.supplements.wifi;
    }

    // Footer
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) footerBottom.textContent = lang.footer.copyright;
  }

  updateLangButton() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === this.currentLang) {
        btn.classList.add('active');
      }
    });
  }
}

// Initialiser le gestionnaire de langue au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  window.langManager = new LanguageManager();
});

// Fonction utilitaire pour changer de langue (appelée par les boutons)
function changeLanguage(lang) {
  if (window.langManager) {
    window.langManager.setLanguage(lang);
  }
}
