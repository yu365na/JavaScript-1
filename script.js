function filterStyle(){
  let value = Number (document.getElementById("rangeInput").value);
  if(document.getElementById("blurButton").checked){
    document.querySelector("img").style.filter = `blur(${value}px)`;
  }
  else if (document.getElementById("brightnessButton").checked){
    document.querySelector("img").style.filter = `brightness(${value}%)` 
   }
   else if (document.getElementById("contrastButton").checked){
    document.querySelector("img").style.filter = `contrast(${value}%)` 
   }
   else if (document.getElementById("hueRotateButton").checked){
    document.querySelector("img").style.filter = `hue-rotate(${value*3.6}deg)` 
   }
   else if (document.getElementById("invertButton").checked){
    document.querySelector("img").style.filter = `invert(${value}%)` 
   } 
   else if (document.getElementById("invertButton").checked){
    document.querySelector("img").style.filter = `invert(${value}%)` 
   } 
   else if (document.getElementById("opacityButton").checked){
    document.querySelector("img").style.filter = `opacity(${value}%)` 
   } 
   else if (document.getElementById("saturateButton").checked){
    document.querySelector("img").style.filter = `saturate(${value*10}%)` 
   } 
   else if (document.getElementById("sepiaButton").checked){
    document.querySelector("img").style.filter = `sepia(${value}%)` 
   } 

}

function changeSize(){
  document.querySelector("img").style.width = document.getElementById("sizeImage").value+"%";

}