// get all imgs with data-src attribute

let imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionObserver

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
   image.setAttribute("src", image.getAttribute("data-src"));
   image.onLoad = () => {
       image.removeAttribute("data-src")
    ;};
};

// first check to see if IntersectionObserver is supported
if ("IntersectionObserver" in window) {
    const  observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    })
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// Days since last visit
const visitDisplay = window.localStorage.getItem('last-visit');
if(visitDisplay === undefined) {
    visitDisplay = new Date(Data.now());
}
const lastVisit = Date.parse(visitDisplay);
const FACTOR = 1000 * 60 * 60 * 24;


let daysbetween = Date.now() - lastVisit;
let numberOfDays = daysbetween / FACTOR;

window.localStorage.setItem('last-visit', new Date(Date.now()));

const dayLastVisit = Math.floor(numberOfDays);
document.getElementById('last-visit').textContent = dayLastVisit;
