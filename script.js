class Ball{

  constructor(x, y, w, h, vx, vy, color){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.vx = vx;
   this.vy = vy;
   this.color = color;
  }
}

var x, y, vx, vy;

function setup() {
 createCanvas(500,400);
}

function draw() {
  background(225);

  fill(this.color);
  ellipse(this.x, this.y, this.w, this.h)
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;

  if(this.x <= 0 || this.x >500) {
   this.vx = this.vx * -1; 
  }

  if(this.y <= 0 || this.y > 400) {
    this.vy = this.vy * -1;
  }
}

var ball1, ball2, ball3;

function setup() {

  ball1 = new Ball(275, 180, 50, 50, 5, 3, "Red");

  ball2 = new Ball(100, 100, 50, 50, 2, 2, "Blue");

  ball3 = new Ball(350, 300, 50, 50, 1, 4, "Green");
}

function draw() {
  background(255);

  draw.ball1();
  draw.ball2();
  draw.ball3();

}