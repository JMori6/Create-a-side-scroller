 class coins {
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
     //outer coin
     fill(255, 255, 0);
     ellipse(this.pos.x, this.pos.y + 20, 16, 20);
     //inner coin
     fill(255, 255, 0);
     ellipse(this.pos.x, this.pos.y + 20, 7, 11);
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
