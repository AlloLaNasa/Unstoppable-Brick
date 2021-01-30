let start = 0;
let k = 0;
let isFirst = true;
let score = 0;

var brick;
var bars = [];
var cubes = [];

let size = 20;
let gravity = 1;
let thrust = 17;
let slide = 8;
let dimension = 1.75*size;
let thicc = 1.5*dimension;

let colors = ["#EE5D42", "#945FB6", "#8BBCFF", "#E6DA22", "#8AE892"];
function setup() {
  createCanvas(500, 900);
  frameRate(75);

  textFont('Georgia');
  textSize(width/10);
  textAlign(RIGHT, TOP);
  text(str(score), 0, 0);

  var extent = random(width/16, width/2);
  window.gap = 0.34*width;
  window.security = height/2;

  //window.bleu = int(random(1,5));

  brick = new Brick(width/2, height/2);

  bar = new Bar(0, extent, "#8BBCFF");
  bars.push(bar);

  cube = new Cube(random(extent*0.9, (extent + gap)*1.1), random((width/2)*0.65, (width/2)*0.85), random(extent*0.9, (extent + gap)*1.1), random((width/2)*0.15, (width/2)*0.35), "#8BBCFF");
  cubes.push(cube);
}


function draw(){
  background(255);
  brick.update();
  brick.show();

  for (var i = 0; i < bars.length; i++){
    let extent = random(width/16, width/2);
    kolor = "#8BBCFF";

    bar = new Bar(-security, extent, kolor);
    cube = new Cube(random(extent*0.9, (extent + gap)*1.1), random((width/2)*0.65, (width/2)*0.85) - security, random(extent*0.9, (extent + gap)*1.1), random((width/2)*0.15, (width/2)*0.35) - security, kolor);

    if (k>0){
      isFirst = false;
    }

    bars[i].show();
    cubes[i].show();

    bars[i].update();
    cubes[i].update();

    // brick.collided(bars[i], cubes[i]);

    if (bars[bars.length - 1].altitude > -security){
      bars.push(bar);
      cubes.push(cube);
      k++;
    }

    if (bars[i].altitude > height){
      bars.splice(i,1);
    }

    if (bars[i].b > height){
      bars.splice(i,1);
    }

    if (!brick.isDead && brick.y > bars[i].altitude - bars[i].thicc/2){
      score++;
    }

    text(str(score), 0, 0);
  }
}


function keyPressed(){
  if (key == 'q' || key == 'ArrowLeft' ){
    start++;
    brick.UpLeft();
  }

  if (key == 'd' || key == 'ArrowRight' ){
    start++;
    brick.UpRight();
  }
}
