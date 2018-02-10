/* global paper Size Shape Point Path view */
/* global App Player MyClass Road myApp */
/* global anime */

window.App = function(c) {
  this.myObject = new MyClass();
  this.setup();
};

App.prototype = {
  setup: function() {
    this.progressCircle = new Path.Circle({
      center: view.center,
      radius: 50,
      fillColor: "#EE5555",
      visible: true,
      applyMatrix: false
    });
    anime({
      targets: this.progressCircle.scaling,
      x: 1.3,
      y: 1.3,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
      duration: 500
    });
  },

  onSVGLoaded: function() {
    console.log("SVG loaded");
  },

  onFrame: function() {},

  onKeyUp: function(event) {
    console.log(event);
    switch (event.key) {
      case "1":
        break;
      default:
    }
  },

  onMouseDown: function(event) {
    // console.log("click");
  },

  onMouseMove: function(event) {}
};

//Paper.js event handlers
function onFrame(event) {
  if (typeof myApp === "undefined") return;
  myApp.onFrame();
}
function onMouseDown(event) {
  if (typeof myApp === "undefined") return;
  myApp.onMouseDown(event);
}
function onMouseMove(event) {
  if (typeof myApp === "undefined") return;
  myApp.onMouseMove(event);
}
function onKeyUp(event) {
  if (typeof myApp === "undefined") return;
  myApp.onKeyUp(event);
}

window.app = new App();

console.log("App");
