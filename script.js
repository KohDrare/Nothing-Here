const fullscreenButton = document.getElementById('fullscreenButton');
const mainContent = document.getElementById('mainContent');
const caContent = document.getElementById('caContent');
const exitFullscreenButton = document.getElementById('exitFullscreenButton');

function goFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }

    fullscreenButton.style.display = 'none';
    mainContent.style.display = 'block'; // Afficher le contenu principal
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    fullscreenButton.style.display = 'inline-block';
    mainContent.style.display = 'none';
    caContent.style.display = 'none';
}

function showCA() {
    mainContent.style.display = 'none'; // Cache le contenu principal
    caContent.style.display = 'block';  // Affiche le contenu "Just the CA"
}

// Écouter les changements de l'état plein écran
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        // En plein écran : afficher le bouton "Quitter le plein écran"
        exitFullscreenButton.style.display = 'inline-block';
    } else {
        // Pas en plein écran : cacher le bouton "Quitter le plein écran"
        exitFullscreenButton.style.display = 'none';
    }
});