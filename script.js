var fortunes = [", you will run into an old friend.", ", you will ace your finals.", ", you will befriend a puppy.", ", you will embarass yourself in front of your crush today.",
", you will get front row seats to your favorite band's next concert."];
var color = ["#e994d4", "#b5dac1", "#5959c8", "#eb9dd1", "#b11f81", "#ffe4f6", "#3c3f77"];

window.addEventListener('DOMContentLoaded', function(){
  calculatorButton = document.getElementById("half-button");
  calculatorInput = document.getElementById("half-input");
  calcOutput = document.getElementById("half-output");
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");

  fortuneButton.addEventListener("click",fortune);
  calculatorButton.addEventListener("click",halfNumber);
});

function halfNumber() {
  var numInput = calculatorInput.value;
  var numOutput = numInput/2;

  if (numInput) {
    alert("Half of " + numInput + " is " + numOutput + ".");
  } else {
    alert("You did not type a number");
  }
}

function fortune(){
  var name = fortuneInput.value;

  if(fortuneInput.value){
    restyle(name);
  }
  else{
    fortuneOutput.innerHTML = "Please type in your name!";
  }
}

function restyle(name){
  var ranFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneOutput.innerHTML = name + ranFortune;
  fortuneOutput.style.color = color[Math.floor(Math.random() * color.length)];
  fortuneOutput.style.fontFamily = "sakura";
  fortuneOutput.style.fontSize = "2vw";
  fortuneOutput.style.textShadow = "2px 2px white";
}
