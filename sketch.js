var scope, scopeImage;
var asteroid, asteroidImage, asteroidGroup;
var bomb, bombImage, bombGroup;
var backgroundImage;
var space;
var gameState
let spacecam;

function preload() {
scopeImage = loadImage('scope.png')
asteroidImage = loadImage('asteroid.png')
bombImage = loadImage('bomb2.png')
backgroundImage = loadImage('spacebackground2.jpg')
}

function setup() {
createCanvas(displayWidth, displayHeight, WEBGL)
space = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
asteroidGroup = new Group()
bombGroup = new Group()
space.addImage(backgroundImage)
scope = createSprite(displayWidth/2,displayHeight/2,1,1)
scope.addImage(scopeImage)
space.scale = 1;
space.velocityX = 0;
scope.scale = 0.35
scope.depth = space.depth+1
}

function draw() {
background(0);
asteroids()
bombs()
if(asteroidGroup.isTouching(scope)){
asteroidGroup.destroyEach()
}
if(bombGroup.isTouching(scope)){
gameState = 'end'
}
if(gameState == 'end'){
asteroidGroup.destroyEach()
bombGroup.destroyEach()
asteroidGroup.setVelocityXEach = 0;
bombGroup.setVelocityXEach = 0;
scope.destroy()
space.destroy()
textSize(36)
text('GAME OVER NGL',50,200)
}
drawSprites() 
}

function asteroids() {
if(World.frameCount%80==0){
asteroid = createSprite(displayWidth/2,displayHeight/2,1,1)
asteroid.addImage(asteroidImage)
asteroid.x = Math.round(random(50,displayWidth-60))
asteroid.y = Math.round(random(50,displayHeight-60))
asteroid.scale = 0.25
asteroid.velocityX = 0;
asteroid.lifetime = 100;
asteroid.depth = scope.depth-1
asteroidGroup.add(asteroid)
}
}

function bombs(){
if(World.frameCount%200==0){
bomb = createSprite(displayWidth/2,displayHeight/2,1,1)
bomb.addImage(bombImage)
bomb.x = Math.round(random(50,displayHeight-60))
bomb.y = Math.round(random(50,displayHeight-60))
bomb.scale = 0.25
bomb.velocityX = 0;
bomb.lifetime = 100;
bomb.depth = scope.depth-1
bombGroup.add(bomb)
}
}