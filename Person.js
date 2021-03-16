// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person() {
  this.pos = createVector(10, height - 50);
  this.vel = createVector(2.5, 0);
  this.acc = createVector(0, 0);
  this.hit = 0;
  this.collect = 0;
  // this.mass = m;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    //body
    fill(185, 50, 120);
    stroke(70);
    ellipse(this.pos.x, this.pos.y + 20, 50, 40);
    //whites
    fill(200);
    ellipse(this.pos.x - 10, this.pos.y + 15, 10, 10);
    ellipse(this.pos.x + 10, this.pos.y + 15, 10, 10);
    //pupils
    fill(0);
    ellipse(this.pos.x - 8, this.pos.y + 15, 6, 6);
    ellipse(this.pos.x + 12, this.pos.y + 15, 6, 6);
    //headpiece and mouth
    fill(255, 0, 0);
    stroke(0);
    arc(this.pos.x, this.pos.y + 2, 20, 20, 0, PI);
    rect(this.pos.x - 10, this.pos.y + 25, 20, 5);
  }

  this.edges = function(bad) {
    if (this.pos.y > height - 50) {
      this.vel.y *= 0;
      this.pos.y = height - 50;
    }
  }
  
  this.edges = function(coin) {
    if (this.pos.y > height - 50) {
      this.vel.y *= 0;
      this.pos.y = height - 50;
    }
  }
  
  this.hits = function(bad) {
  if ((bad.pos.x >= this.pos.x && bad.pos.x <= (this.pos.x + 40)) &&
        (bad.pos.y >= this.pos.y && bad.pos.y <= (this.pos.y + 40))) {
        bad.pos.y = -400;
        this.hit++;
    }
  }

  this.collects = function(coins) {
  if ((coins.pos.x >= this.pos.x && coins.pos.x <= (this.pos.x + 40)) &&
        (coins.pos.y >= this.pos.y && coins.pos.y <= (this.pos.y + 40))) {
        coins.pos.y = -400;
        this.collect++;
    }
  }
}
