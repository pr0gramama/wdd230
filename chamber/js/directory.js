const requestURL = "https://pr0gramama.github.io/wdd230/chamber/data/data.json"

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const members = jsonObject["members"];
        console.table(jsonObject);
        members.forEach(displayMembers);
    });

function displayMembers(member) {
    let card = document.createElement('section');
    
    //h2 name
    let h2 = document.createElement('h2');
    h2.textContent = `${member.name}`;
    card.appendChild(h2);
    
    //p birth date
    let p1 = document.createElement('p');
    p1.textContent = `${member.address}`;
    card.appendChild(p1);
    
    //p birth place
    let p2 = document.createElement('p');
    p2.textContent = `${member.phone}`;
    card.appendChild(p2);
    
    //website
    let p3 = document.createElement("p");
    p3.textContent = `${member.website}`;
    card.appendChild(p3);

    
    // img
    let logo = document.createElement('img');
    logo.setAttribute("src", member.logo);
    logo.setAttribute('alt', `${member.name} Logo`);
    card.appendChild(logo);
    
    
    document.querySelector('div.cards').appendChild(card);
}