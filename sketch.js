let man;
let badGuy;
let coinGuy;
let coin = [];
let baddies = []
let sceneNum = 0;

function setup() {
  createCanvas(400, 400);

  man = new Person();

  //controls when the badguys and coins will appear  

  for (let i = 0; i < 50; i++) {
    baddies[i] = new baddy(random(500, 3500), random(400));
  }

  badGuy = new baddy(random(300, 500), random(500));

  for (let j = 0; j < 50; j++) {
    coin[j] = new coins(random(500, 3500), random(400));
  }

  coinGuy = new coins(random(300, 500), random(500));
}
var x;
x = -100;

//controls how you jump and flipping between scenes

function keyPressed() {
  if (key == ' ') {
    var jump = createVector(0, -5);
    man.applyForce(jump)
  }
  if (key == "p") {
    sceneNum = (sceneNum + 1) % 3
  }
}

//opening screen

function open() {
  background(50, 50, 200);
  fill("yellow")
  textSize(20)
  text("Welcome to Iron Jumper", 90, 100);
  text("Press P to start", 130, 140);
  text("Controls: Spacebar to jump", 85, 200);
  textSize(12)
  text("Goal: Get to the end by avoiding enemy robots while collecting coins!", 15, 270);
}

//end screen

function close() {
  background(150, 150, 200);
  text("Thanks for playing!", 90, 100);
  text("Press P to return to home screen", 70, 140);
}

function draw() {
  if (sceneNum == 0) {
    open();
  } else if (sceneNum == 1) {
    game();
  } else if (sceneNum == 2) {
    close();
  }
}

function game() {
  background(70, 160, 220);

  //tells you how many badGuy you hit and how many coins you collected

  text("Fails:" + man.hit, 20, 20);

  text("Points:" + man.collect, 20, 40);
  
  let scoreNum = man.collect - man.hit;
  text("Score:" + scoreNum, 20, 60);

  translate(-man.pos.x + 50, 0);

  let gravity = createVector(0, 0.12)
  man.applyForce(gravity)

  //Makes the man appear and work
  man.update();
  man.display();
  man.edges();

  //Makes the badGuy appear and work

  for (let i = 0; i < 30; i++) {
    //baddies[i] = new baddy(random(300, 500), random(400));
    baddies[i].update();
    baddies[i].display();
    baddies[i].edges();
    man.hits(baddies[i]);
  }

  badGuy.update();
  badGuy.display();
  badGuy.edges();

  //Makes the coins appear and work

  for (let j = 0; j < 35; j++) {
    //coin[j] = new coins(random(500, 3500), random(400));  
    coin[j].update();
    coin[j].display();
    coin[j].edges();
    man.collects(coin[j]);
  }

  coinGuy.update();
  coinGuy.display();
  coinGuy.edges();
}
