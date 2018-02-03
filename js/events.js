//define functions here

$(document).ready(function(){

// call functions here

});




function getIt() {
  $('p').on("click", function() {
  alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
   $('img').addClass("tasty");
  });
}

function pressIt() {
  
}
 
function submitIt() {
  
}







$('h1').on("click", function() {
  alert("You clicked me!");
});

$('img').on('load', function(){
  console.log("I am a minion!");
});