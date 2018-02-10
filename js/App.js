/* global paper Size Shape Point Path view tool */
/* global App Player MyClass Road app */
/* global anime */

window.App = function(c) {
  this.myObject = new MyClass();
  this.setup();
  this.timer = new Timer();
  this.enemies = new enemyGenerator({width : window.innerWidth, height: window.innerHeight, center : new Point(window.innerWidth/2, window.innerHeight/2)});
  this.enemies = new enemyGenerator({
    width: window.innerWidth,
    height: window.innerHeight,
    center: new Point(window.innerWidth / 2, window.innerHeight / 2)
  });
};

App.prototype = {
  setup: function() {
    // this.progressCircle = new Path.Circle({
    //   center: view.center,
    //   radius: 50,
    //   fillColor: "#EE5555",
    //   visible: true,
    //   applyMatrix: false
    // });
    // anime({
    //   targets: this.progressCircle.scaling,
    //   x: 1.3,
    //   y: 1.3,
    //   direction: "alternate",
    //   easing: "easeInOutSine",
    //   loop: true,
    //   duration: 500
    // });
    this.player = new Player();
    window.player = this.player;
  },

  onSVGLoaded: function() {
    console.log("SVG loaded");
  },

  onFrame: function() {
    this.enemies.step(this.player);
    this.timer.step();
    this.player.onFrame();
  },

  onKeyUp: function(event) {
    this.player.onKeyUp(event);
    switch (event.key) {
      case "1":
        break;
      default:
    }
  },

  onKeyDown: function(event) {
    this.player.onKeyDown(event);
    switch (event.key) {
      case "1":
        break;
      default:
    }
  },

  onMouseDown: function(event) {
    console.log("click");
  },

  onMouseMove: function(event) {}
};

//Paper.js event handlers
function onFrame(event) {
  if (typeof app === "undefined") return;
  app.onFrame();
}
tool.onMouseDown = function(event) {
  if (typeof app === "undefined") return;
  app.onMouseDown(event);
};
tool.onMouseMove = function(event) {
  if (typeof app === "undefined") return;
  app.onMouseMove(event);
};
tool.onKeyUp = function(event) {
  if (typeof app === "undefined") return;
  app.onKeyUp(event);
};
tool.onKeyDown = function(event) {
  if (typeof app === "undefined") return;
  app.onKeyDown(event);
};

window.app = new App();
