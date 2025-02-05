document.addEventListener("DOMContentLoaded", function() {
    // Mise à jour de l'année actuelle
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Mise à jour de la dernière date de modification
    document.getElementById("last-modified").textContent = document.lastModified;

    // Variables pour la météo
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
    
    function calculateWindChill(temp, wind) {
        return (temp <= 10 && wind > 4.8) ? 
            (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2) : 
            "N/A";
    }

    // Affichage du refroidissement éolien
    document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);
});
