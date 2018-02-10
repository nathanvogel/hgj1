window.enemyGenerator = function(attr){


  this.enemies   = [];
  this.center  = attr.center;
  this.width   = attr.width;
  this.height  = attr.height;


  this.timer_limit = 1 * 60;
  this.timer_time = this.timer_limit;

  console.log("init enemy gen");

};

enemyGenerator.prototype = {

  step : function(player){


    for (var i = 0; i < this.enemies.length; i++) {
      this.enemies[i].step();
      this.enemies[i].collision(player.form.position, player.form.bounds.width);
    }

    this.timer_time--;
    if(this.timer_time < 0){
      this.timer_time = this.timer_limit;
      this.generateEnemy(Math.random()*this.width, Math.random()*this.height);

    }

  },

  generateEnemy : function(x, y){

    this.enemies.push(new Enemy(x, y));

  },

};
