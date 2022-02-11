
//get current year
const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

// get the current date
const datefieldUK = document.querySelector("#currentdate");

// try {
//   const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//   date2.textContent = new Date().toLocaleDateString('en-UK', options);
// } catch (e) {
//   alert('Error with code or your browser does not support Locale');
// }

//get last modified date
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

//banner date structure
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

    // '🤝🏼 Join us for our meet & Greet Wednesday at 7:00 pm.';
dayOfweek = date1.getDay();

let message;
document.querySelector('#bannerDate').innerHTML                    
            if (dayOfweek == 1 || dayOfweek == 2) {
                message = '🤝🏼 Join us for our meet & Greet Wednesday at 7:00 pm.';
            } else {
                document.querySelector('#banner').style.display = 'none';
            }
            document.querySelector("#banner").innerHTML = message
document.querySelector('#bannerDate').innerHTML



// Toggle menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

function setActive() {
  aObj = document.getElementById('nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}

window.onload = setActive;