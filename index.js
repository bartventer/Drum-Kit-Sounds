// #################################################################
// CLICKING: EVENTLISTENER TO PLAY SOUND FOR BUTTON THAT IS CLICKED
// #################################################################
var numberButtons = document.querySelectorAll(".drum").length
for (i = 0; i < numberButtons; i += 1) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
// CLICKING: FUNCTION TO HANDLE CLICKS, THIS FUNCTION WILL BE USED IN THE EVENTLISTENER
function handleClick() {
  var buttonClicked = this.innerHTML;
  makeSound(buttonClicked);
  buttonAnimation(buttonClicked);
}

// #################################################################
// KEYPRESS: EVENTLISTENER TO PLAY SOUND FOR KEY THAT IS PRESSED
// #################################################################
document.addEventListener("keydown", keyPress);

// KEYPRESS: FUNCTION TO PLAY SOUND IF KEY IS PRESSED
function keyPress(k) {
  var keyPressed = (k.key.toLowerCase());
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
}

// FUNCTION FOR MAKING SOUND
// REQUIRES A PARAMTER WHICH WILL BE USED TO LOCATE THE SOUND FILE
function makeSound(input) {
  switch (input) {
    case "w":
      var audioTom1 = new Audio("sounds/tom-1.mp3")
      audioTom1.play()
      break;
    case "a":
      var audioTom2 = new Audio("sounds/tom-2.mp3")
      audioTom2.play()
      break;
    case "s":
      var audioTom3 = new Audio("sounds/tom-3.mp3")
      audioTom3.play()
      break;
    case "d":
      var audioTom4 = new Audio("sounds/tom-4.mp3")
      audioTom4.play()
      break;
    case "j":
      var audioSnare = new Audio("sounds/snare.mp3")
      audioSnare.play()
      break;
    case "k":
      var audioCrash = new Audio("sounds/crash.mp3")
      audioCrash.play()
      break;
    case "l":
      var audioKick = new Audio("sounds/kick-bass.mp3")
      audioKick.play()
      break;
    case "q":
      var audioKick = new Audio("sounds/airhorn-mlg.mov")
      audioKick.play()
      break;

    default:
      console.log(input);

  }
}

// FUNCTION TO ADD A 100 MILISECOND ANIMATION TO EACH BUTTON AFTER PRESSED OR CLICKED
function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");
  setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);


}
