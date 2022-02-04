const switchToDefault = () => {
   document.querySelector("body").className = "";
}

const switchToDesert = () => {
   document.querySelector("body").className = "desert";
}

const switchToOcean = () => {
   document.querySelector("body").className = "ocean";
}
const switchToHighContrast = () => {
   document.querySelector("body").className = "high-contrast";
}

document.querySelector("#default").addEventListener('click', switchToDefault);
document.querySelector("#desert").addEventListener('click', switchToDesert);
document.querySelector("#ocean").addEventListener('click', switchToOcean);
document.querySelector("#high-contrast").addEventListener('click', switchToHighContrast);