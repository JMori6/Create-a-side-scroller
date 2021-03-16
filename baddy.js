class baddy {
   constructor(x, y) {
     this.pos = createVector(x, y);
     this.vel = createVector(0, 0);
     this.acc = createVector(0, 0);
   }


   applyForce(force) {
     this.acc.add(orce);
   }

   update() {
     this.vel.add(this.acc);
     this.pos.add(this.vel);
     this.acc.set(0, 0);
   }

   display() {
     //body
     fill(100, 100, 100);
     stroke(70);
     ellipse(this.pos.x, this.pos.y + 20, 50, 40);
     //whites
     fill(200);
     ellipse(this.pos.x - 10, this.pos.y + 15, 10, 10);
     ellipse(this.pos.x + 10, this.pos.y + 15, 10, 10);
     //pupils
     fill(0);
     ellipse(this.pos.x - 12, this.pos.y + 15, 6, 6);
     ellipse(this.pos.x + 8, this.pos.y + 15, 6, 6);
     //headpiece and mouth
     fill(255, 255, 90);
     stroke(0);
     triangle(this.pos.x - 8, this.pos.y + 2, this.pos.x + 8, this.pos.y + 2, this.pos.x, this.pos.y + 20);
     triangle(this.pos.x - 10, this.pos.y + 38, this.pos.x + 10, this.pos.y + 38, this.pos.x, this.pos.y + 18);
   }

   edges() {
     if (this.pos.y > height - 50) {
       this.vel.y *= 0;
       this.pos.y = height - 50;
     }
   }
   //if (this.pos.x > width) {
   //this.vel.x *= -1;
   //this.pos.x = width;
   //}
   //}

 }
