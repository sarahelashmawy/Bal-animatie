class Ball{

  constructor(x, y, w, h, vx, vy, _color){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.vx = vx;
   this.vy = vy;
   this.color = _color;
  }

  drawBall() {

   fill(this._color);
   ellipse(this.x, this.y, this.w, this.h);
   this.x = this.x + this.vx;
   this.y = this.y + this.vy;

   if(this.x <= 0 || this.x >500) {
   this.vx = this.vx * -1; 
   }

   if(this.y <= 0 || this.y > 400) {
   this.vy = this.vy * -1;
   }
 }
}

var ball1, ball2, ball3;

function setup() {
  createCanvas(500,400);

  ball1 = new Ball(275, 180, 35, 35, 5, 3, "white");

  ball2 = new Ball(100, 100, 50, 50, 2, 2, "blue");

  ball3 = new Ball(350, 300, 50, 50, 1, 4, "purple");
}

function draw() {
  background("brown");

  ball1.drawBall();
  ball2.drawBall();
  ball3.drawBall();
}