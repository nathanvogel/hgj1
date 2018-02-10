window.Timer = function(){

  this.frames = 60;
  this.seconds = 10;


  this.text = new PointText({
    point: [window.innerWidth/2, window.innerHeight/2],
    content: '10',
    fillColor: 'rgb(230, 230, 230)',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: window.innerWidth/2
  });

  this.text.bounds.center = view.bounds.center;
  // this.text.position.x = window.innerWidth/2 - this.text.bounds.width/2;
  // this.text.position.y = window.innerHeight/2 - this.text.bounds.height/2;
  this.text.sendToBack();



};




Timer.prototype = {

  step : function(){

    this.frames--;
    if(this.frames <= 0){
      console.log("bing");

      this.seconds--;
      this.frames = 60;
      if(this.seconds <= 0){
        this.seconds = 10;
      }

      this.text.content = (this.seconds == 10? '' : '0') + this.seconds + '';
    }

  }



};
