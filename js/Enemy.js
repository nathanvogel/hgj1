window.Enemy = function(x, y) {
  this.current_radius = 0;
  this.initial_life = 50;
  this.dead = false;
  this.creation = new Date().getTime();
  this.currentColor = "blue";
  this.isLocked = false;

  this.body = new Path.Circle({
    center: [x, y],
    radius: 0,
    fillColor: this.currentColor,
    visible: true,
    applyMatrix: false
  });
};

Enemy.prototype = {
  step: function() {
    this.position = this.body.position;

    if (this.initial_life > 0) {
      this.initial_life -= 1;
      this.current_radius += 1;
      console.log("recreate");
      this.body.remove();
      this.body = new Path.Circle({
        center: this.position,
        radius: this.current_radius,
        fillColor: this.currentColor,
        visible: true,
        applyMatrix: false
      });
    }
    if (!this.isLocked && new Date().getTime() - this.creation > 10 * 1000) {
      console.log("LOCK");
      this.isLocked = true;
      this.currentColor = "red";
      this.body.fillColor = this.currentColor;
    }
  },

  collision: function(player_pos, player_r) {
    var d = player_pos - this.position;
    if (d.length < 12 + this.current_radius) {
      window.player.lose();
    }
    if (d.length < player_r + this.current_radius) {
      console.log("BUM");
      if (!this.isLocked) {
        this.current_radius = d.length - player_r;
        if (this.current_radius <= 0) {
          this.current_radius = 0;
          this.dead = true;
        }
      }

      this.body.remove();
      this.body = new Path.Circle({
        center: this.position,
        radius: this.current_radius,
        fillColor: this.currentColor,
        visible: true,
        applyMatrix: false
      });
    }
  }
};
