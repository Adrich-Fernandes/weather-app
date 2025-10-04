const api_key = "40db5ec66d904ec29eb111941251708";
const url = "https://api.weatherapi.com/v1";

const randomCities = ["New York", "London", "Tokyo", "Sydney", "Berlin", "Paris", "Delhi", "Toronto"];
const randomCityDiv = document.getElementById("randomCity");
const rfbtn = document.getElementById("rfbtn");
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("ser-btn");
const fel = document.getElementById('fel-i');
const img = document.querySelector('.day');

async function getWeather(city) {
  if (!city) return;

  try {
    const res = await fetch(`${url}/current.json?key=${api_key}&q=${city}`);
    if (!res.ok) throw new Error("Error fetching weather");
    const data = await res.json();
    const updateimg = data.current.condition.icon;
    img.src = updateimg;
    // Update UI
    document.getElementById("cityname").textContent = `${data.location.name}`;
    document.getElementById("temperature").textContent = `${data.current.temp_c}°C`;
    document.getElementById("humid").textContent = ` ${data.current.humidity}%`;
    document.getElementById("wind").textContent = ` ${data.current.wind_kph} km/h`;
    document.getElementById("feel").textContent = ` ${data.current.feelslike_c}°C`;

    // Save to localStorage
    localStorage.setItem("lastCity", city);

    // Change background color based on temperature
    changeBackground(data.current.temp_c);
    console.log(data);
  } catch (err) {
    console.error(err);
    alert("Could not fetch weather!");
  }
}

// Function to update background color
function changeBackground(temp) {
  let gradient;

  if (temp >= 26) {
    // Hot
    fel.textContent = '🌤️'
    gradient = "radial-gradient(circle, rgba(255, 168, 61, 1), transparent 300%)";
  } else if (temp <= 15) {
    // Cold 
    fel.textContent = '❄️'
    gradient = "radial-gradient(circle, rgba(51, 104, 174, 1), transparent 300%)";
  } else {
    // Normal 
    fel.textContent = '☁️'
    gradient = "radial-gradient(circle, rgba(89, 205, 255, 1), transparent 300%)";
  }

  document.body.style.background = gradient;
  document.body.style.backgroundSize = "200% 200%";
  document.body.style.animation = "glowMove 17s ease-in-out infinite";
  document.body.style.backdropFilter = "blur(50px)";
}

// Refresh random city text
function setRandomCity() {
  const city = randomCities[Math.floor(Math.random() * randomCities.length)];
  randomCityDiv.textContent = city;
}

// Search button click
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

// Random city click
randomCityDiv.addEventListener("click", () => {
  const city = randomCityDiv.textContent.trim();
  if (city) {
    cityInput.value = city;
    getWeather(city);
  }
});

// Refresh random city button
rfbtn.addEventListener("click", setRandomCity);

// On page load → load last city or default Mumbai
window.onload = () => {
  const savedCity = localStorage.getItem("lastCity");
  if (savedCity) {
    cityInput.value = savedCity;
    getWeather(savedCity);
  } else {
    cityInput.value = "Mumbai";
    getWeather("Mumbai");
  }
  setRandomCity();
};
