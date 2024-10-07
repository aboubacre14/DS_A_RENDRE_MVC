// controller.js
import { produits } from './model.js';
import { renderTable } from './view.js';

const idform = document.getElementById('idform');
const stockOnlyCheckbox = document.getElementById('stockOnly');
const categorieInput = document.getElementById('categorie');

idform.addEventListener('input', chercher);

function chercher() {
    const recherche = categorieInput.value.toLowerCase();
    const stockOnly = stockOnlyCheckbox.checked;

    const produitsFiltres = produits.filter(produit => 
        (stockOnly ? produit.stocke : true) &&
        (produit.categorie.toLowerCase().includes(recherche) || produit.nom.toLowerCase().includes(recherche))
    );

    renderTable(produitsFiltres);
}