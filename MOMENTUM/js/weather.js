const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position){
    console.log(position)
    //const lat = position.coords.latitude;
    const lat = '37.5985';
    //const lon = position.coords.longitude;
    const lon = '126.9783';
    console.log("You live in", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / &{data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);