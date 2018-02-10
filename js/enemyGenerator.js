var enemyGenerator = function(attr){


  this.enemies   = [];
  this.center  = attr.center;
  this.width   = attr.width;
  this.height  = attr.height;

  this.timer_limit = 1 * 60;
  this.timer_time = this.timer_limit;

};

enemyGenerator.prototype = {

  step : function(){

    for (var i = 0; i < this.enemies.length; i++) {
      this.enemies[i].step();
    }

    this.timer--;
    if(this.timer < 0){
      this.timer = this.timer_time;
      this.generateEnemy(Math.random()*this.width + Math.random()*this.height);

    }

  },

  generateEnemy : function(x, y){

    this.enemies.push(new Enemy(x, y));

  },

};
