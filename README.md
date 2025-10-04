# 🌤️ Weather App

A simple and elegant **Weather App** built using **HTML, CSS, and JavaScript**, powered by the **WeatherAPI**.  
This app displays real-time weather details such as **temperature**, **humidity**, **wind speed**, and **feels-like temperature**, along with a **dynamic background** that changes color based on the current temperature.

---

## 🚀 Features

- 🌎 **Search for any city** to get live weather updates.  
- 🔄 **Random City Generator** to explore different locations.  
- 💾 **Saves last searched city** in local storage.  
- 🎨 **Dynamic background color**:
  - Orange gradient for **hot** weather ☀️  
  - Blue gradient for **cold** weather ❄️  
  - Sky-blue gradient for **normal** weather ☁️  
- 🌇 **Weather icon** updates automatically based on the current condition.  
- 💡 Clean and minimal **UI with glassmorphism** effects.

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure and layout |
| **CSS3** | Styling and animations |
| **JavaScript (ES6)** | Logic and API handling |
| **WeatherAPI** | Fetch real-time weather data |

---
```
weather-app/
│
├── index.html          # Main HTML file
├── wed.css             # Stylesheet
├── wed.js              # JavaScript logic and API integration
└── README.md           # Project documentation
```

## ⚙️ How It Works

When you enter a city name, the app fetches weather data from the WeatherAPI.

The app updates:

City name

Temperature (°C)

Humidity (%)

Wind speed (km/h)

Feels-like temperature (°C)

Weather icon 🌤️

The background color animates depending on the temperature.

Your last searched city is stored in localStorage for convenience.
