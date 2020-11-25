var wall;
var player ,treasure,fire1,fire2,fire3;
var playerimage,fire1image,treasureimage,ballimage;
var score;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball8,ball9,ball10;
function preload(){
  playerimage=loadImage("car.png")
  fire1image=loadImage("fire.png")
  treasureimage=loadImage("tre.png")
  ballimage=loadImage("ball.png")
}
function setup (){
canvas = createCanvas(400,400)
 wall1 = createSprite(2, 46,100,20);
 wall2 = createSprite(130, 26,80,15);
 wall3= createSprite(356, 390,50,20);
 wall4= createSprite(76, 116,80,15);
 wall5= createSprite(128, 113,20,70);
 wall6 = createSprite(222, 65,15,70);
 wall7= createSprite(289, 50,80,15);
 wall8= createSprite(288, 110,15,80);
 wall9= createSprite(230, 128,80,15);
 wall19= createSprite(364, 170,250,20);
 wall11= createSprite(296,368 ,15,250);
 wall12= createSprite(374, 210,143,15);
 wall13= createSprite(340, 355,20,50);
 wall14= createSprite(6, 300,15,180);
 wall15= createSprite(320, 297,100,15);
 wall16= createSprite(4, 75,20,70);
 wall17= createSprite(47, 217,80,15);
 wall18= createSprite(200, 235,20,260);
 wall10= createSprite(48, 296,80,15);
 wall20= createSprite(25, 354,140,15);
 wall21 = createSprite(48, 210,20,80);
 wall22 = createSprite(50, 294,20,40);
 wall23 = createSprite(48, 369,20,70);
 wall24 = createSprite(8, 165,15,95);
 wall25 = createSprite(181, 200,80,15);
 wall26 = createSprite(147,230,15,40);
 wall27 = createSprite(151, 350,15,100);
 wall28 = createSprite(100, 354,80,15);
 wall29 = createSprite(225, 310,30,15);
 score=0
 count=0
 ball1=createSprite(21,84,20,15);
 ball1.addImage(ballimage);
 ball1.scale=0.1
 ball2=createSprite(28,144,20,15);
 ball2.addImage(ballimage);
 ball2.scale=0.1
 ball3=createSprite(189,73,20,15);
 ball3.addImage(ballimage);
 ball3.scale=0.1
 ball4=createSprite(65,254,20,15);
 ball4.addImage(ballimage);
 ball4.scale=0.1
 ball5=createSprite(74,319,20,15);
 ball5.addImage(ballimage);
 ball5.scale=0.1
 ball6=createSprite(167,162,20,15);
 ball6.addImage(ballimage);
 ball6.scale=0.1
 ball7=createSprite(161,272,20,15);
 ball7.addImage(ballimage);
 ball7.scale=0.1
 ball8=createSprite(225,270,20,15);
 ball8.addImage(ballimage);
 ball8.scale=0.1
 ball9=createSprite(357,245,20,15);
 ball9.addImage(ballimage);
 ball9.scale=0.1
 ball10=createSprite(263,192,20,15);
 ball10.addImage(ballimage);
 ball10.scale=0.1

 player =createSprite(5,5,20,20);
 player.addImage(playerimage)
 player.shapeColor= "black";
 treasure=createSprite(376,370,18,18)
 player.scale=0.2;
treasure.shapeColor="yellow";
treasure.addImage(treasureimage);
treasure.scale=0.2
fire1=createSprite(52,103,18,18)
fire1.addImage(fire1image);
fire1.scale=0.1
fire2=createSprite(138,108,18,18)
fire2.addImage(fire1image)
fire2.scale=0.1;
fire3=createSprite(70,230,18,18)
fire3.addImage(fire1image)
fire3.scale=0.1;
 edges=createEdgeSprites();
}

function draw (){
  background("pink")
  textSize(20)
  text("score="+count,300,30)
  if (keyDown("D")){
    player.x=player.x+3
  }
  
  if (keyDown("A")){
    player.x=player.x-3
  }

  if (keyDown("W")){
    player.y=player.y-3
  }

  if (keyDown("S")){
    player.y=player.y+3
  }

  if(player.isTouching(ball1)){
    count=count+1; 
    ball1.visible=false;
  }

  if(player.isTouching(ball2)){
    count=count+1; 
    ball2.visible=false;
  }

  if(player.isTouching(ball3)){
    count=count+1; 
    ball3.visible=false;
  }

  if(player.isTouching(ball4)){
    count=count+1; 
    ball4.visible=false;
  }

  if(player.isTouching(ball5)){
    count=count+1; 
    ball5.visible=false;
  }

  if(player.isTouching(ball6)){
    count=count+1; 
    ball6.visible=false;
  }

  if(player.isTouching(ball7)){
    count=count+1; 
    ball7.visible=false;
  }

  if(player.isTouching(ball8)){
    count=count+1; 
    ball8.visible=false;
  }

  if(player.isTouching(ball9)){
    count=count+1; 
    ball9.visible=false;   
  }

  if(player.isTouching(ball10)){
    count=count+1; 
    ball10.visible=false;
  }
  
  player.bounceOff(edges[0])
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])

 

  
 if (player.isTouching(wall1)||player.isTouching(wall2)||player.isTouching(wall3)||player.isTouching(wall4)||player.isTouching(wall5)||player.isTouching(wall6)||player.isTouching(wall7)||player.isTouching(wall8)||player.isTouching(wall9)||player.isTouching(wall10)||player.isTouching(wall11)||player.isTouching(wall12)||player.isTouching(wall13)||player.isTouching(wall14)||player.isTouching(wall15)||player.isTouching(wall16)||player.isTouching(wall17)||player.isTouching(wall18)||player.isTouching(wall19)||player.isTouching(wall20)||player.isTouching(wall21)||player.isTouching(wall22)||player.isTouching(wall23)||player.isTouching(wall24)||player.isTouching(wall25)||player.isTouching(wall26)||player.isTouching(wall27)||player.isTouching(wall28)||player.isTouching(wall29)){
  fill("white");
  textSize(18);
  text("you lose  ",40,197);
  wall1.destroy()
  wall2.destroy()
  wall3.destroy()
  wall4.destroy()
  wall5.destroy()
  wall6.destroy()
  wall7.destroy()
  wall8.destroy()
  wall9.destroy()
  wall10.destroy()
  wall11.destroy()
  wall12.destroy()
  wall13.destroy()
  wall14.destroy()
  wall15.destroy()
  wall16.destroy()
  wall17.destroy()
  wall18.destroy()
  wall19.destroy()
  wall20.destroy()
  wall21.destroy()
  wall22.destroy()
  wall23.destroy()
  wall24.destroy()
  wall25.destroy() 
  wall26.destroy()
  wall27.destroy()
  wall28.destroy()
  wall29.destroy()
  fire1.destroy()
  fire2.destroy()
  fire3.destroy()
  player.destroy()
  treasure.destroy()
  ball1.destroy()
  ball2.destroy()
  ball3.destroy()
  ball4.destroy()
  ball5.destroy()
  ball6.destroy()
  ball7.destroy()
  ball8.destroy()
  ball9.destroy()
  ball10.destroy()
 }
 
 if(player.isTouching(treasure)){
  fill("white")
  textSize(18);
  text("You Win",90,197)
  count=count+1;
 }
 
 if(player.isTouching(fire1)){
  fill("white")
  textSize(18);
  text("You Lose",90,197)
 }

 if(player.isTouching(fire2)){
  fill("white")
  textSize(18);
  text("You Lose",90,197)
 }

 if(player.isTouching(fire3)){
  fill("white")
  textSize(18);
  text("You Lose",90,197)
 }

  drawSprites(); 
  
}


  

  