Descrizione:
// Rivediamo l’esercizio della lista della spesa visto insieme,
// ma questa volta con il ciclo while al posto del ciclo for.
// Facciamo attenzione a non dimenticare tutte le differenze implementative
// che il ciclo while ci impone, in particolare alla variabile di indice.

// Lista della spesa (da convertire in array)
// Uova
// Pane
// Latte
// Biscotti
// Pasta
// Affettati
// Formaggio
// Verdura
// Frutta


groceryList = document.getElementById('grocery-list');
const listItems = ['uova', 'pane', 'latte', 'biscotti', 'pasta', 'affettati', 'formaggio', 'verdura', 'frutta'];
let item = '';

// for (let i = 0; i < listItems.length; i++) {
//     item += `<li>${listItems[i]}</li>`;
// }



let i = 0;

while (i < listItems.length) {
    item += `<li>${listItems[i]}</li>`;
    i++;
}

groceryList.innerHTML = item;