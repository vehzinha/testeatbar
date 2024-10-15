// Limites de tamanho de fonte
var minFontSize = 12; // tamanho mínimo da fonte em pixels
var maxFontSize = 24; // tamanho máximo da fonte em pixels
var defaultFontSize = 16; // tamanho original da fonte em pixels

// Função para aumentar o tamanho da fonte com limite
function increaseFontSize() {
    var content = document.getElementById('content');
    var style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    if (currentSize < maxFontSize) {
        content.style.fontSize = (currentSize + 2) + 'px';
    }
}

// Função para diminuir o tamanho da fonte com limite
function decreaseFontSize() {
    var content = document.getElementById('content');
    var style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    if (currentSize > minFontSize) {
        content.style.fontSize = (currentSize - 2) + 'px';
    }
}

// Função para resetar o tamanho da fonte para o original
function resetFontSize() {
    var content = document.getElementById('content');
    content.style.fontSize = defaultFontSize + 'px';
}

// Função para alternar o modo de alto contraste
function toggleHighContrast() {
    var body = document.body;
    body.classList.remove('low-contrast'); // Remove baixo contraste, se estiver ativado
    body.classList.toggle('high-contrast');
}

// Função para alternar o modo de baixo contraste
function toggleLowContrast() {
    var body = document.body;
    body.classList.remove('high-contrast'); // Remove alto contraste, se estiver ativado
    body.classList.toggle('low-contrast');
}


// Função para alternar entre fontes
function toggleFont() {
    var body = document.body;
    body.classList.toggle('alternative-font');
}
