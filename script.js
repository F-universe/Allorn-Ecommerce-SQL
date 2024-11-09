// Seleziona tutti i pulsanti "Aggiungi al Carrello"
const buttons = document.querySelectorAll('.product-info button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Prodotto aggiunto al carrello!');
    });
});
