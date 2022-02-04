const makeBigger = () => {
   const contentDiv = document.querySelector(".content");
   const currentFontSize = contentDiv.style.fontSize;
   if(currentFontSize === "") {
      contentDiv.style.fontSize = "24px";
   } else {
      const currentFontSizeInt = parseInt(currentFontSize);
      const newFontSize = (currentFontSizeInt + 2).toString() + "pt";
      contentDiv.style.fontSize = newFontSize;
   }
};

const makeSmaller = () => {
   const contentDiv = document.querySelector(".content");
   const currentFontSize = contentDiv.style.fontSize;
   if(currentFontSize === "") {
      contentDiv.style.fontSize = "18px";
   } else {
      const currentFontSizeInt = parseInt(currentFontSize);
      const newFontSize = (currentFontSizeInt - 2).toString() + "pt";
      contentDiv.style.fontSize = newFontSize;
   }
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

