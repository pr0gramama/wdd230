const requestURL = "https://pr0gramama.github.io/wdd230/chamber/data/data.json"
const spotlight1 = document.querySelector(".spotlight1");
const spotlight2 = document.querySelector(".spotlight2");
const spotlight3 = document.querySelector(".spotlight3");


fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.log(jsonObject);

    let members = jsonObject['members'];

    members.forEach(displaySpot1);
    members.forEach(displaySpot2);
    members.forEach(displaySpot3);
});

function displaySpot1(member) {
    if (member.name === "Sigurd Semiconductor") {
        let levelmem = document.createElement("p");
        levelmem.classList.add("spots")
        levelmem.textContent = `${member.level} Member`;
        spotlight1.appendChild(levelmem);
    } 
}
function displaySpot2(member) {
    if (member.name === "Heather's Tethers") {
        let levelmem = document.createElement("p");
        levelmem.classList.add("spots")
        levelmem.textContent = `${member.level} Member`;
        spotlight2.appendChild(levelmem);
    } 
}
function displaySpot3(member) {
    if (member.name === "Office Haven") {
        let levelmem = document.createElement("p");
        levelmem.classList.add("spots")
        levelmem.textContent = `${member.level} Member`;
        spotlight3.appendChild(levelmem);
    } 
}
