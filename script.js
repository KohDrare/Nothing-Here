// Sélectionner le bouton et ajouter un événement de clic
const button = document.getElementById("caButton");

button.addEventListener("click", () => {
    // Ajouter la classe 'active' pour l'effet d'agrandissement et de brillance
    button.classList.add("active");

    // Supprimer la classe 'active' après 1 seconde (durée de l'animation)
    setTimeout(() => {
        button.classList.remove("active");
    }, 1000);
});