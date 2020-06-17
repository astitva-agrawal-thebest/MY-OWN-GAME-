var gun,gunInABox;
var rocket,rocketInABox;
var ufo;
var kinfe,kinfeInABox;
var enemy1Img,enemy2Img,enemy3Img,enemy4Img;

function preload(){
    enemy1Img=loadImage("image/enemy1.png");
    enemy2Img=loadImage("image/enemy2.png");
    enemy3Img=loadImage("image/enemy3.png");
    enemy4Img=loadImage("image/enemy4.png");
}
function setup(){
    var canvas = createCanvas(900,600);

}

function draw(){
    background("#FFFFFF");

    var enemy = Math.round(random(1,4));
     if (World.frameCount%80===0){
       if (enemy === 1){
        spawnEnemy1(); 
    }
    else if(enemy === 2){
        spawnEnemy2();
     }
     else if(enemy === 3){
        spawnEnemy3();
     }
    else if (enemy === 4){
         spawnEnemy4(); 
    }
     }
    drawSprites();
}

function spawnEnemy1(){

    var enemy1 = createSprite(900,random(50,550),20,20);
    enemy1.velocityX = -3
    enemy1.addImage("enemy1",enemy1Img);
    enemy1.scale=0.5

}

function spawnEnemy2(){

        var enemy2 = createSprite(900,random(50,550),20,20);
        enemy2.velocityX = -3
        enemy2.addImage("enemy2",enemy2Img);
        enemy2.scale=0.5
    }
    
    function spawnEnemy3(){

            var enemy3 = createSprite(900,random(50,550),20,20);
            enemy3.velocityX = -3
            enemy3.addImage("enemy3",enemy3Img);
            enemy3.scale=0.5
        }
        
        function spawnEnemy4(){

                var enemy4 = createSprite(900,random(50,550),20,20);
                enemy4.velocityX = -3
                enemy4.addImage("enemy4",enemy4Img);
                enemy4.scale=0.5
            }
            