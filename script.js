document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produkt wurde in den Warenkorb gelegt!');
        });
    });
});
