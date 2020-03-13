var ballX = 320;
var ballY = 240;
const ballR = 10;

var speedX = 2;
var speedY = 1;

var playerX = 0;
var playerY = 200;
var compX = 630;
var compY = 200;
const paddleX = 10;
const paddleY = 100;

var net = [];
const net_lines = 12;
const netSize = 20;

function setup() {
  createCanvas(640, 480);
  for(var i=0; i < net_lines; i++){
    net.push(i* (height/net_lines));
  }
}

function draw() {
  background(0);
  for(var i=0; i < net.length; i++){
    stroke(255);
    line(width/2,net[i],width/2, net[i] + netSize);
  }
  moveBall();
  moveComp();
  movePlayer();
}

function moveBall(){
  ballX += speedX;
  ballY += speedY;
  if(ballY <= 0 || ballY >= height){
    speedY *= -1.05;
  }
  // player side
  if(ballX <= 0){
    // player hits ball
    if(ballY >= playerY && ballY <= playerY + paddleY){
      speedX *= -1.05;
    } else{
      resetBall();
    }
  }else if(ballX >= width){
    if(ballY >= compY && ballY <= compY + paddleY){
      speedX *= -1.05;
    } else{
      resetBall();
    }
  } // end of if statement to determine player hits the ball
  fill(255);
  ellipse(ballX,ballY, ballR);

}

function moveComp(){
  if(ballY < compY + 25){
    compY -= 1.5;
  }else if(ballY > compY + paddleY - 25){
    compY += 1.5;
  }
  rect(compX, compY, paddleX, paddleY);
}

function movePlayer(){
  playerY = mouseY;
  rect(playerX, mouseY, paddleX, paddleY);
}

function resetBall(){
  ballX = width / 2;
  ballY = height / 2;
  speedX = 2;
  speedY = 1;
}
