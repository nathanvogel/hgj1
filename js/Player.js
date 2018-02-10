/* global paper Size Shape Point Path view project Key */
/* global App Player MyClass Road myApp levels */

window.Player = function(levelName) {
  this.myVar = 0;
  console.log("init Player");
  this.form = new Path.Circle({
    center: view.center,
    radius: 20,
    fillColor: "#5555EE",
    visible: true
  });
  this.velocity = new Point(0, 0);
  this.inCollision = false;
  this.lost = false;
};

Player.prototype = {
  myFunction: function(levelData) {},

  onFrame: function() {
    if (this.lost) return;
    var acc = new Point(0, 0);
    if (Key.isDown("left")) acc += new Point(-1, 0);
    if (Key.isDown("right")) acc += new Point(1, 0);
    if (Key.isDown("up")) acc += new Point(0, -1);
    if (Key.isDown("down")) acc += new Point(0, 1);

    acc *= 0.42;

    if (this.inCollision) acc *= 0.4;

    this.velocity += acc;
    this.velocity *= 0.92;
    this.form.position += this.velocity;
  },

  lose: function() {
    this.form.fillColor = "red";
    this.lost = true;
  },

  onKeyUp: function(event) {
    switch (event.key) {
      case "1":
        console.log("p1");
        this.position;
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
