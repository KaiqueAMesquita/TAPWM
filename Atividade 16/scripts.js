// Seleciona o elemento pelo ID
const windowElement = document.getElementById('windows');

// Define uma função personalizada para evitar conflitos com funções nativas
function openWindow() {
    windowElement.src = './assets/opened.png';
}

function outWindow(){
    windowElement.src = './assets/closed.png';
}
