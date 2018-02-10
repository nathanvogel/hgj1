var Enemy = function(x, y){

  this.current_radius = 0;
  this.initial_life = 20;
  this.body = new Path.Circle({
    center: [x, y],
    radius: 50,
    fillColor: "red",
    visible: true,
    applyMatrix: false
  });
};




Enemy.prototype = {


  step : function(){
    if(this.initial_life){
      this.initial_life -= 0.2;
      this.current_radius += 0.2;
    }
  },


};
