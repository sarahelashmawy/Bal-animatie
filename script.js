class Ball{

  constructor(x, y, w, h, vx, vy, _color){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.vx = vx;
   this.vy = vy;
   this._color = _color;
  }
}

draw() {
  fill(this._color)
}

var ball1, ball2, ball3;

function setup() {

  ball1 = new Ball(275, 180, 50, 50, 5, 3, "Red");

  ball2 = new Ball(100, 100, 50, 50, 2, 2, "Blue");

  ball3 = new Ball(350, 300, 50, 50, 1, 4, "Green")
}

function draw() {
  draw.ball1();
  draw.ball2();
  draw.ball3();
}



