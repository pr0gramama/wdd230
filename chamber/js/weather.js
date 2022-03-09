// Pinnacle City is a made up place, so I am using data from Farmington, UT; city id 5774662
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5774662&units=imperial&appid=7024811e8910a63973752b5b2868b3a1";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
    document.querySelector("#current-temp").textContent = jsObject.main.temp;
    

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description; 
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

    document.querySelector('#wind').textContent = jsObject.wind.speed;
    });

    