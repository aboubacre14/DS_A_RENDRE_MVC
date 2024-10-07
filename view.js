// view.js
export const renderTable = (produitsFiltres) => {
    const resultatTbody = document.getElementById('resultat').querySelector('tbody');
    resultatTbody.innerHTML = ''; // Vider le contenu précédent

    const fruits = produitsFiltres.filter(produit => produit.categorie === 'Fruits');
    const legumes = produitsFiltres.filter(produit => produit.categorie === 'Légumes');

    const maxPrixFruits = Math.max(...fruits.map(p => parseFloat(p.prix)));
    const maxPrixLegumes = Math.max(...legumes.map(p => parseFloat(p.prix)));

    const createTable = (produits, maxPrix, categorie) => {
        const categorieRow = document.createElement('tr');
        const categorieCell = document.createElement('td');
        categorieCell.colSpan = 2;
        categorieCell.innerHTML = `<strong>${categorie}</strong>`;
        resultatTbody.appendChild(categorieRow);

        produits.forEach(produit => {
            const row = document.createElement('tr');
            const nomCell = document.createElement('td');
            nomCell.textContent = produit.nom;
            const prixCell = document.createElement('td');
            prixCell.textContent = produit.prix;

            if (parseFloat(produit.prix) === maxPrix && produits.filter(p => parseFloat(p.prix) === maxPrix).length === 1) {
                row.style.color = 'red';
            }

            row.appendChild(nomCell);
            row.appendChild(prixCell);
            resultatTbody.appendChild(row);
        });
    };

    if (fruits.length > 0) {
        createTable(fruits, maxPrixFruits, 'Fruits');
    }

    if (legumes.length > 0) {
        createTable(legumes, maxPrixLegumes, 'Légumes');
    }
};