function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`당신은 ${lat} ${lng} 있어요~`);
}

function onGeoError(){
    alert("위치를 찾을 수 없어요. 날씨를 찾을 수 없어요ㅜ")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);