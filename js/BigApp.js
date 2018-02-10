/* global paper Size Shape Point Path view */
/* global App Player Level Road myApp */
/* global anime */

window.App = function(c) {
  this.setup();
};

App.prototype = {
  setup: function() {
    this.progressCircle = new Path.Circle({
      center: new Point(0, 0),
      radius: 5,
      fillColor: "#EE5555",
      visible: false
    });
    this.progressCircle.applyMatrix = false;

    anime({
      targets: this.progressCircle.scaling,
      x: 1.3,
      y: 1.3,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
      duration: 1000
    });
  },

  onLevelLoaded: function() {
    console.log("Level loaded");
    this.currentLevel.svg.clipMask = false;
    this.currentLevel.svg.clipped = false;
    this.connection.send(
      JSON.stringify({
        type: "screensize",
        screenSizeX: this.currentLevel.originalBounds.width,
        screenSizeY: this.currentLevel.originalBounds.height
      })
    );
    this.progressCircle.position = this.currentLevel.road.path.getPointAt(0);
    this.progressCircle.visible = true;
    this.progressCircle.bringToFront();
  },

  onFrame: function() {},

  onKeyUp: function(event) {
    console.log(event);
    switch (event.key) {
      case "1":
        this.loadLevel("level01");
        break;
      case "2":
        this.loadLevel("level02");
        break;
      case "3":
        this.loadLevel("level03");
        break;
      case "4":
        this.loadLevel("level04");
        break;
      case "5":
        this.loadLevel("level05");
        break;
      case "6":
        this.loadLevel("level06");
        break;
      default:
    }
  },

  loadLevel: function(levelName) {
    // It's easier to recreate the Player every time
    if (this.player) this.player.destroy();
    // Destroy the previous level if there's one
    if (this.currentLevel) this.currentLevel.destroy();
    // Load the new level
    this.currentLevel = new Level(levelName);
    // Tell the mobile app to load it too
    this.connection.send(
      JSON.stringify({
        type: "loadlevel",
        levelName: levelName
      })
    );
  },

  onMouseDown: function(event) {
    // console.log("click");
  },

  onMouseMove: function(event) {},

  onMessage: function(message) {
    console.log(message);
    switch (message.type) {
      case "screensize":
        // Desktop : do nothing. Desktop is the leader
        break;
      case "roadprogress":
        this.progressCircle.position = this.currentLevel.road.path.getPointAt(
          message.roadProgress
        );
        break;
    }
  }
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
