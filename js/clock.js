const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    // AM/PM 형식으로 변환
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 시간 0을 12로 변환

    // 두 자리 숫자로 포맷
    const formattedHours = String(hours).padStart(2, "0");
    
    clock.innerText = `${ampm} ${formattedHours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 1초마다 실행