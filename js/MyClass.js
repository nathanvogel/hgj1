/* global paper Size Shape Point Path view project */
/* global App Player MyClass Road myApp levels */

window.MyClass = function(levelName) {
  this.svg;
};

MyClass.prototype = {
  loadLevel: function(levelData) {
    // Load svg
    this.levelData = levelData;
    project.importSVG(this.levelData.filePath, this.onLevelLoaded.bind(this));
  },

  onLevelLoaded: function(svg) {
    this.svg = svg;
  }
};
