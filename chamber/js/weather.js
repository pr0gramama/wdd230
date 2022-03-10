// Pinnacle City is a made up place, so I am using data from Farmington, UT; city id 5774662
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5774662&units=imperial&appid=7024811e8910a63973752b5b2868b3a1";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
    document.querySelector("#current-temp").textContent = jsObject.main.temp;
    

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description; 
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    desc = desc.split(' ').map(capitalize).join(' ');
    document.querySelector('figcaption').textContent = desc;

    document.querySelector('#wind').textContent = jsObject.wind.speed;
    const t = document.querySelector("#current-temp").textContent;
    const w = document.querySelector("#wind").textContent;
    if(t <= 50 && w > 3) {
        const windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(w,0.16) + 0.4275 * t * Math.pow(w,0.16)
        document.querySelector("#windchill").innerHTML = `${Math.round(windChill)}`;
    }
    else {
        document.querySelector("#windchill").innerHTML = "N/A"
    }
    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}