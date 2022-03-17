const requestURL = "https://pr0gramama.github.io/wdd230/chamber/data/data.json"
const spotlight1 = document.querySelector(".spotlight1");
const spotlight2 = document.querySelector(".spotlight2");
const spotlight3 = document.querySelector(".spotlight3");
const memberList = 1

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.log(jsonObject);

    let members = jsonObject['members'];

    members.forEach(displaySpot1);
});

function displaySpot1(member) {
    if (member.name === "Sigurd Semiconductor") {
        let levelmem = document.createElement("p");
        levelmem.textContent = `${member.level}`;
        spotlight1.appendChild(levelmem)
    } 

    // level paragraph
    let levelp = document.createElement("p");
    levelp.textContent = `${member.level} Member`;
    spotlight1.appendChild(levelp);
}
    
    // if (spotlightID < 4 && (level === "Silver" || level === "Gold")) {
    //     if (randInt % 2 === 0) {

    //         console.log(randInt);
    //         let section = document.createElement('section');
    //         let h3 = document.createElement('h3');
    //         let logo = document.createElement('img');
    //         let levelLevel = document.createElement('p');
    //         let contact = document.createElement('p');

    //         section.setAttribute('id', `spotlight-${spotlightID}`);

    //         h3.textContent = members.name;

    //         logo.setAttribute('src', members.logo);
    //         logo.setAttribute('alt', `Logo for ${members.name}`);
    //         logo.setAttribute('loading', 'lazy');

    //         levelLevel.textContent = `${level} Member`;

    //         contact.setAttribute('class', 'spotlight-contact');
    //         contact.innerHTML = `${members.phone} <a href='#'>${members.website}</a>`;

    //         section.appendChild(h3);
    //         section.appendChild(logo);
    //         section.appendChild(levelLevel);
    //         section.appendChild(contact);

    //         sections.appendChild(section);

    //         spotlightID += 1;
        // }

    


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }