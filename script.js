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
        localStorage.setItem('fontSize', (currentSize + 2) + 'px'); // Salva no localStorage
    }
}

// Função para diminuir o tamanho da fonte com limite
function decreaseFontSize() {
    var content = document.getElementById('content');
    var style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    if (currentSize > minFontSize) {
        content.style.fontSize = (currentSize - 2) + 'px';
        localStorage.setItem('fontSize', (currentSize - 2) + 'px'); // Salva no localStorage
    }
}

// Função para resetar o tamanho da fonte para o original
function resetFontSize() {
    var content = document.getElementById('content');
    content.style.fontSize = defaultFontSize + 'px';
    localStorage.setItem('fontSize', defaultFontSize + 'px'); // Salva no localStorage
}

// Função para alternar o modo de alto contraste
function toggleHighContrast() {
    var body = document.body;
    body.classList.remove('low-contrast'); // Remove baixo contraste, se estiver ativado
    body.classList.toggle('high-contrast');
    localStorage.setItem('contrastMode', 'high'); // Salva no localStorage
}

// Função para alternar o modo de baixo contraste
function toggleLowContrast() {
    var body = document.body;
    body.classList.remove('high-contrast'); // Remove alto contraste, se estiver ativado
    body.classList.toggle('low-contrast');
    localStorage.setItem('contrastMode', 'low'); // Salva no localStorage
}

// Função para alternar entre fontes
function toggleFont() {
    var body = document.body;
    body.classList.toggle('alternative-font');
    localStorage.setItem('font', body.classList.contains('alternative-font') ? 'alternative' : 'default'); // Salva no localStorage
}

// Ao carregar a página, verificamos as configurações salvas no localStorage
window.onload = function() {
    // Recuperar tamanho da fonte
    if (localStorage.getItem('fontSize')) {
        document.getElementById('content').style.fontSize = localStorage.getItem('fontSize');
    }

    // Recuperar modo de contraste
    if (localStorage.getItem('contrastMode') === 'high') {
        document.body.classList.add('high-contrast');
    } else if (localStorage.getItem('contrastMode') === 'low') {
        document.body.classList.add('low-contrast');
    }

    // Recuperar fonte
    if (localStorage.getItem('font') === 'alternative') {
        document.body.classList.add('alternative-font');
    }
};
