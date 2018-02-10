
SOUNDS = {};




function newSound(name, path){

  var sound = SOUNDS[name];
  sound = document.createElement("audio");
  sound.src = path;
  sound.setAttribute("preload", "auto");
  sound.setAttribute("controls", "none");
  sound.style.display = "none";
  document.body.appendChild(sound);

}

newSound("click", "../sounds/click.mp3");

SOUNDS.click.play();
