/* global paper Size Shape Point Path view project */
/* global App Player Level Road myApp levels */

window.Level = function(levelName) {
  this.svg;
  this.road;
  this.originalBounds; // the bounds change when disabling clipping
  this.loadLevel(levels[levelName]);
};

Level.prototype = {
  loadLevel: function(levelData) {
    // Load svg
    this.levelData = levelData;
    project.importSVG(this.levelData.filePath, this.onLevelLoaded.bind(this));
  },

  onLevelLoaded: function(svg) {
    this.svg = svg;
    if (myApp.BIG_SCREEN) {
      this.svg.bounds.width = view.bounds.width;
      this.svg.bounds.height = view.bounds.height;
    } else {
      this.svg.bounds.width = myApp.desktopScreenSizeX;
      this.svg.bounds.height = myApp.desktopScreenSizeY;
    }
    this.originalBounds = this.svg.bounds.clone();

    // this.svg.children.obstacles.shadowColor = new Color(1, 1, 1, 0.45);
    // this.svg.children.obstacles.shadowBlur = 25;
    this.svg.children.obstacles.fillColor = "black";
    if (this.svg.children.speedzone)
      this.svg.children.speedzone.strokeColor = "#C2185B";
    this.svg.children.background.fillColor = "#5E35B1";
    if (myApp.BIG_SCREEN) {
      this.svg.children.background.fillColor = {
        gradient: {
          stops: [["#7E57C2", 0], ["#5E35B1", 1]],
          radial: true
        },
        origin: this.originalBounds.center,
        destination: this.originalBounds.bottomRight
      };
    }

    this.road = new Road(this);
    svg.sendToBack();
    myApp.onLevelLoaded();
  },

  destroy: function() {
    if (this.svg) this.svg.remove();
    if (this.road) this.road.destroy();
  }
};
