const API_KEY = "46c42ba74d2d22c044c652e13464ef9b";

// 날씨 상태에 따른 이모지 매핑
const weatherEmojis = {
    "Clear": "☀️",
    "Clouds": "☁️",
    "Rain": "🌧️",
    "Drizzle": "🌦️",
    "Thunderstorm": "⛈️",
    "Snow": "❄️",
    "Mist": "🌫️",
    "Smoke": "🌫️",
    "Haze": "🌫️",
    "Fog": "🌁",
    "Sand": "🌪️",
    "Dust": "🌫️",
    "Ash": "🌋",
    "Squall": "🌫️",
    "Tornado": "🌪️"
};

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            city.innerText = data.name;
            
            // 온도를 소수 첫째 자리까지 표시
            const temp = data.main.temp.toFixed(1);
            
            // 날씨 상태에 따른 이모지 가져오기
            const weatherCondition = data.weather[0].main;
            const emoji = weatherEmojis[weatherCondition] || "🌥️"; // 기본 이모지
            
            weather.innerText = `${weatherCondition} ${emoji} / ${temp}°C`;
        });
}

function onGeoError() {
    alert("위치를 찾을 수 없어요. 날씨를 찾을 수 없어요ㅜ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
