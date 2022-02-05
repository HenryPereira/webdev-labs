/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
  -
*/

const dyslexiaMode = () => {
  const body = document.querySelector("body");
  if(body.className === "") {
    body.className = "dyslexia-mode";
  } else {
    body.className = "";
  }
}

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaMode);
