/* global paper Size Shape Point Path view project */
/* global App Player MyClass Road myApp levels */

window.Player = function(levelName) {
  this.myVar = 0;
  console.log("init Player");
};

Player.prototype = {
  myFunction: function(levelData) {},

  onKeyUp: function(event) {
    switch (event.key) {
      case "1":
        console.log("p1");
        break;
      default:
    }
  },

  onKeyDown: function(event) {
    switch (event.key) {
      case "1":
        break;
      default:
    }
  }
};

function onKeyDown(event) {
  console.log("oiwjef");
}
