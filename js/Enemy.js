window.Enemy = function(x, y){

  this.current_radius = 0;
  this.initial_life = 50;
  this.dead = false;

  this.body = new Path.Circle({
    center: [x, y],
    radius: 0,
    fillColor: "red",
    visible: true,
    applyMatrix: false
  });
};




Enemy.prototype = {


  step : function(){

  this.position = this.body.position;

    if(this.initial_life > 0){
      this.initial_life -= 1;
      this.current_radius += 1;
      this.body = new Path.Circle({
        center: this.position,
        radius: this.current_radius,
        fillColor: "red",
        visible: true,
        applyMatrix: false
      });
    }
  },

  collision : function(player_pos, player_r){

    var d = player_pos - this.position;
    if(d.length < player_r + this.current_radius){
      this.current_radius = d.length - player_r;
      if(this.current_radius <= 0){
        this.current_radius = 0;
        this.dead = true;
      }
    }

  },


};
