 var bg, bg1img, bg2img;
 var player, playerAnimation;
 var coin, coinAnimation;
var obstacle, obstacle1, obstacle2, obstacle3, obstacle4;
var coinGroup, obstacleGroup;
var invisibleGround;

function preload(){
  bg1img = loadImage("images/forest2.jpg");
  obstacle1 = loadImage("images/obstacle1.png");
  obstacle2 = loadImage("images/obstacle2.png");
  obstacle3 = loadImage("images/obstacle3.png");
  obstacle4 = loadImage("images/obstacle4.png");
  coinAnimation = loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png")
  playerAnimation = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png","images/10.png","images/11.png","images/12.png","images/13.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  coinGroup = new Group(); 
  obstacleGroup = new Group();

  bg = createSprite(0, windowHeight/2, windowWidth*5, windowHeight);
  bg.addImage(bg1img);
  bg.scale = 6.2;
  bg.x = windowWidth/2;

  invisibleGround = createSprite(windowWidth/2, windowHeight-270, windowWidth, 20);
 // invisibleGround.visible = false;
  player = createSprite(windowWidth/2-999, windowHeight-330, 50,100);
}

function draw() {
  background(0);  
  
  //TO MOVE THE BG
  bg.velocityX = -5;
  if(bg.x<0){
    bg.x = windowWidth/2; 
  }

  //TO MAKE THE PLAYER JUMP ON PRESSING SPACE KEY
  if (keyDown("space") && player.y >= windowHeight-800 ){
    player.velocityY = -10; 
  }
  player.velocityY = player.velocityY + 0.8;

  //TO MAKE THE PLAYER PREVENT FROM FALLING DOWN THE GROUND
  player.collide(invisibleGround);
  spawnCoins();
 spawnObstacles();
  drawSprites();
}

//FUNCTION TO GENERTAE THE COINS
function spawnCoins() {
  //write code here to spawn the coins
  if (frameCount % 450 === 0) {
    var coin = createSprite(windowWidth,420,40,40);
    coin.y = random(420,620);
    coin.addAnimation("coin",coinAnimation);
    coin.scale = 0.7;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    //add each coin to the group
    coinGroup.add(coin);
  }
  
  //FUNCTION TO GENERTAE THE OBSTACLES

}
function spawnObstacles() {
  //write code here to spawn the coins
  if (frameCount % 227 === 0) {
    var obstacle = createSprite(windowWidth,800,40,40);
    var r = Math.round(random(1,4));
   obstacle.addImage("obstacle"+r);
    //obstacle.scale = 0.7;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
  
} 