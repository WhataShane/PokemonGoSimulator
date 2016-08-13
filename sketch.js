var ball; 
var xpos;
var movingfloor;
var jump;
var inair;
var rand;
var xposclone;
var score = 0;
var endscreen = false;
var count = 0;
var placeholder;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball = loadImage("assets/pkred.png");
  ballback = loadImage("assets/pkred.png");
  ball2 = loadImage("assets/pkblue.png"); 
  ball3= loadImage("assets/pkblack.png"); 
  thefloor = loadImage("assets/floor.png");
  blob = loadImage("assets/pk1.png"); 
  blobback = loadImage("assets/pk1.png");
  blob2 = loadImage("assets/pk2.png"); 
  bad = loadImage("assets/bad.png"); 
  grass = loadImage("assets/grass.png"); 
  balloon = loadImage("assets/balloon.png"); 
  xpos = width;
  xposclone = width;
  ypos = height-103;
  movingfloor = 0;
  grassfloor = width-10;
  balloonmove = width;
  setInterval(function(){count = count + .5},100);
}

function draw() {
  background('#00bff3');
  if(placeholder == true){
    fill(random(255),random(255),random(255))
    text("Caught!",30,30)
  }else if(placeholder == false){
    fill(255)
    text("It ran away...",60,30)
  }
  if(score >= 10){
    ball = ball2; 
  }
  if(score >= 50){
    ball = ball3; 
  }
  
  textSize(32);
  fill(255)
  stroke(0)
  strokeWeight(5)
  textFont("Source Sans Pro");
  text(score, 10, 30)
  image(bad,xposclone+80,height-150, 70, 70)
  balloonmove = balloonmove -.3;
  image(balloon,balloonmove,height-300, 20,20)
  if(balloonmove < 0){
    balloonmove = width + 30;
  }
  if(jump === true){
  ypos = ypos - 7
  }
  if(jump === false){
    ypos = ypos + 5
  }
  if(ypos > height-103){
    ypos = height-103
  }
  if(xposclone < -40 & xposclone > -70 & inair === false){
    xposclone = width;
    endscreen = true
    noLoop()
    background('#00bff3');
    text("          Game Over\n     Pidgey Caught: "+score+"\n      Press Anywhere\n           to Restart \n",10,30)
    textSize(16);
    text("\n\n\n\n\n\n\n\nUse the spacebar or tap the screen (mobile)\n                  to move your character\n             Game by: Shane Brunswick",10,30)
    
 }else if(xposclone < -40 & inair === false){
   xposclone = width;
 }
  for(i=1;i<100;i++){
    image(thefloor,(movingfloor-1)+(991*i),height-89)
  }
  movingfloor = movingfloor -2
  grassfloor = grassfloor-2
  image(grass,grassfloor,height-129, 40, 40)
  xpos = xpos-4
  xposclone = xposclone-4
  
  if(isEven(count) == true){
    blob=blob2
  }else{
    blob=blobback
  }
  image(blob,xpos,height-139, 50, 50)
  image(thefloor,movingfloor,height-89)
  
  if(grassfloor < -30){
    grassfloor = width+20;
  }
  if(xpos < 40 & xpos > 0 & inair === false){
    xpos = width;
    if (Math.random() > 0.7){
    score += 1;
      placeholder = true;
    }else{
      placeholder = false;
    }
 }else if(xpos < 30 & inair === false){
   xpos = width;
 }
  translate(30,ypos);
  rotate(frameCount / 5.0);
  image(ball, -15, -15, 30, 30);
  
 
  if(ypos != height-103){
    inair = true;
  }else{
    inair = false
  }
  
  
  
}
  
  function keyPressed() {
  if (key === " " & ypos == height-103) {
    jump = true;
    setTimeout(function(){
      jump = false;
    }, 500);
  }
  }
  
 function touchStarted(){
    if (ypos == height-103) {
      if(endscreen === false){
    jump = true;
    setTimeout(function(){
      jump = false;
    }, 600);}
    if (endscreen === true){
      score = 0
      loop()
      endscreen = false
    }
  }
  }
  function isEven(n) {
   return n % 2 == 0;
}
