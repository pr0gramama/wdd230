const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
