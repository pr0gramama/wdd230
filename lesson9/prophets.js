const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        // console.table(jsonObject);
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
  let card = document.createElement('section');

  //h2 name
  let h2 = document.createElement('h2');
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  card.appendChild(h2);

  //p birth date
  let p1 = document.createElement('p');
  p1.textContent = `Date of Birth: ${prophet.birthdate}`;
  card.appendChild(p1);

  //p birth place
  let p2 = document.createElement('p');
  p2.textContent = `Place of birth: ${prophet.birthplace}`;
  card.appendChild(p2);

  //img
  let image = document.createElement('img');
  image.src = prophet.imageurl;
  
    //alt description
    let order = ``;
    
    if (prophet.order === 1 && prophet.order != 11) {
        order = `${prophet.order}st`;
    } else if (prophet.order == 2 && prophet.order != 12) {
        order = `${prophet.order}nd`;
    } else if (prophet.order == 3 && prophet.order != 13) {
        order = `${prophet.order}rd`;
    } else{
        order = `${prophet.order}th`;
    }

  image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}, ${order} Latter-day President`);
  card.appendChild(image);


  document.querySelector('div.cards').appendChild(card);
}