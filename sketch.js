//Micah Theriot hw3
function setup() {
  createCanvas(1200,6000);
  background(0);
  noStroke();
  fill(255);
}
function draw() {
  noLoop();
  for(var i = 10; i < 1200; i = i + 40){
    for(var j = 10; j < 6000; j+=40){
      ellipse (i,j,10);
    }
  }


  var yJump=380;
  while (yJump <= 6000) {
    var y=yJump;
    var d;
    var xi=20;
    var yi=20;
    var f=50
    var x=620;
    for(d=400; d>=100; d-=35) {
      noStroke();
      fill(f);
      ellipse(x-xi,y+yi,d);
      y-=10;
      x+=10;
      xi+=1;
      yi-=1;
      f+=45;
      d/=1.03;
    }
    stroke(255);
    noFill();
    angleMode(DEGREES);
    //ellipse(600,yJump+20, 800,200);
    arc(600,yJump+20, 800,200,-26.5,206.5);
    var yyJump = 850;
    for(x = -400; x<=400; x+=80) {
        y = sqrt(160000-sq(x))/4;
        for (var iEllipse=100; iEllipse>=0; iEllipse-=(900/iEllipse)) {
          noFill();
          stroke(255);
          ellipse(600+x,yyJump+y,iEllipse,100);
          ellipse(600+x,yyJump+y,100,iEllipse);
          if (x == -320) {
            ellipse(600+x,400-y,iEllipse,100);
            ellipse(600+x,400-y,100,iEllipse);
          }
          if (x == 320) {
            ellipse(600+x,5800-y,iEllipse,100);
            ellipse(600+x,5800-y,100,iEllipse);
          }
        }
    yyJump+=450;
    }
    yJump+=450;
  }


}
