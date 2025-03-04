const table = document.querySelector('table');
const indicators = ['BB', 'FM', 'MEV', 'ASSU', 'PRO'];

// Fonction pour charger les données depuis le stockage local
function loadData() {
  indicators.forEach(indicator => {
    const value = localStorage.getItem(indicator);
    if (value !== null) {
      table.querySelector(`[data-indicator="${indicator}"]`).textContent = value;
    }
  });
}

// Fonction pour sauvegarder les données dans le stockage local
function saveData() {
  indicators.forEach(indicator => {
    const value = table.querySelector(`[data-indicator="${indicator}"]`).textContent;
    localStorage.setItem(indicator, value);
  });
}

// Gestion des événements des boutons
table.addEventListener('click', (event) => {
  if (event.target.classList.contains('increment') || event.target.classList.contains('decrement')) {
    const indicator = event.target.dataset.indicator;
    const valueElement = table.querySelector(`[data-indicator="${indicator}"]`);
    let value = parseInt(valueElement.textContent);

    if (event.target.classList.contains('increment')) {
      value++;
    } else {
      value--;
    }

    valueElement.textContent = value;
    saveData();
  }
});

// Charger les données au chargement de la page
loadData();