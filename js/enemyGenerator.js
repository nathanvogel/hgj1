window.enemyGenerator = function(attr){


  this.enemies   = [];
  this.center  = attr.center;
  this.width   = attr.width;
  this.height  = attr.height;


  this.timer_limit = 10 * 60;
  this.timer_time = this.timer_limit;

  var times = Math.floor(Math.random() * (1+3)) + 3;
  for (var j = 0; j < times; j++) {
    this.generateEnemy(Math.random()*this.width, Math.random()*this.height);
  }
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
      var times = Math.floor(Math.random() * (1+3)) + 3;
      for (var j = 0; j < times; j++) {
        this.generateEnemy(Math.random()*this.width, Math.random()*this.height);
      }

    }

  },

  generateEnemy : function(x, y){

    this.enemies.push(new Enemy(x, y));

  },

};
