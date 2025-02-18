const apiKey = "bfef23dd6ddbe9a8726e2b9da92a725b"; // Assure-toi que c'est ta clé API valide

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

async function compareWeather() {
    const city1 = document.getElementById("city1").value;
    const city2 = document.getElementById("city2").value;

    if (city1 === city2) {
        alert("Please select two different cities.");
        return;
    }

    const [weather1, weather2] = await Promise.all([fetchWeather(city1), fetchWeather(city2)]);

    if (!weather1 || !weather2) {
        alert("Error fetching weather data. Please try again.");
        return;
    }

    document.getElementById("comparison-results").innerHTML = `
        <div class="city">
            <h3>${weather1.name}</h3>
            <p>Temperature: ${weather1.main.temp}°C</p>
            <p>Weather: ${weather1.weather[0].description}</p>
            <p>Humidity: ${weather1.main.humidity}%</p>
        </div>
        <div class="city">
            <h3>${weather2.name}</h3>
            <p>Temperature: ${weather2.main.temp}°C</p>
            <p>Weather: ${weather2.weather[0].description}</p>
            <p>Humidity: ${weather2.main.humidity}%</p>
        </div>
    `;

    generateConclusion(weather1, weather2);
}

function generateConclusion(weather1, weather2) {
    let conclusion = "";
    if (weather1.main.temp > weather2.main.temp) {
        conclusion = `${weather1.name} is warmer than ${weather2.name}.`;
    } else if (weather1.main.temp < weather2.main.temp) {
        conclusion = `${weather2.name} is warmer than ${weather1.name}.`;
    } else {
        conclusion = `Both cities have the same temperature.`;
    }
    document.getElementById("conclusion").innerText = conclusion;
}
