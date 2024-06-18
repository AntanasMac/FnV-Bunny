console.log("script running");

//  #################### 
//  BUTTON FUNCTIONALITY 
//  #################### 

//avocado button functionality

const avocadoButton = document.getElementById('avocado-window');

function onClickButton(event) {
    window.location.href="./info-pages/avocado.html"
}

avocadoButton.addEventListener('click', onClickButton);




// #############################
// IMAGE SLIDESHOW FUNCTIONALITY
// #############################
// outsourced code.

/* 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

*/