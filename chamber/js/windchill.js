

const t = parseInt(document.querySelector("#current-temp").textContent);
const w = parseInt(document.querySelector("#wind").textContent);

if(t <= 50 && w > 3) {
    const windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(w,0.16) + 0.4275 * t * Math.pow(w,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windChill)}`;
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}
