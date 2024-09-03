const API_KEY = "46c42ba74d2d22c044c652e13464ef9b";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => 
        response.json()).then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("위치를 찾을 수 없어요. 날씨를 찾을 수 없어요ㅜ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);