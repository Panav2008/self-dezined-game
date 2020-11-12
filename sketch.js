var wall,obstacle,advantage;
var player ,computer;

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
 wall29 = createSprite(225, 310,35,15);

 player =createSprite(5,25,20,20);
 player.shapeColor= "black";
 computer=createSprite(374,24,20,20)
 computer.shapeColor="red";

 edges=createEdgeSprites();
}

function draw (){
  background("pink")
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
  if (keyDown(RIGHT_ARROW)){
    computer.x=computer.x+3
  }
  if (keyDown(LEFT_ARROW)){
    computer.x=computer.x-3
  }
  if (keyDown(UP_ARROW)){
    computer.y=computer.y-3
  }
  if (keyDown(DOWN_ARROW)){
    computer.y=computer.y+3
  }
  player.bounceOff(edges[0])
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])

  computer.bounceOff(edges[0])
  computer.bounceOff(edges[1])
  computer.bounceOff(edges[2])
  computer.bounceOff(edges[3])

  
 if (player.isTouching(wall1)||player.isTouching(wall2)||player.isTouching(wall3)||player.isTouching(wall4)||player.isTouching(wall5)||player.isTouching(wall6)||player.isTouching(wall7)||player.isTouching(wall8)||player.isTouching(wall9)||player.isTouching(wall10)||player.isTouching(wall11)||player.isTouching(wall12)||player.isTouching(wall13)||player.isTouching(wall14)||player.isTouching(wall15)||player.isTouching(wall16)||player.isTouching(wall17)||player.isTouching(wall18)||player.isTouching(wall19)||player.isTouching(wall20)||player.isTouching(wall21)||player.isTouching(wall22)||player.isTouching(wall23)||player.isTouching(wall24)||player.isTouching(wall25)||player.isTouching(wall26)||player.isTouching(wall27)||player.isTouching(wall28)||player.isTouching(wall29)){
  fill("white");
  textSize(18);
  text("you lose press R to restart",40,197);
 };
 if (computer.isTouching(wall1)||computer.isTouching(wall2)||computer.isTouching(wall3)||computer.isTouching(wall4)||computer.isTouching(wall5)||computer.isTouching(wall6)||computer.isTouching(wall7)||computer.isTouching(wall8)||computer.isTouching(wall9)||computer.isTouching(wall10)||computer.isTouching(wall11)||computer.isTouching(wall12)||computer.isTouching(wall13)||computer.isTouching(wall14)||computer.isTouching(wall15)||computer.isTouching(wall16)||computer.isTouching(wall17)||computer.isTouching(wall18)||computer.isTouching(wall19)||computer.isTouching(wall20)||computer.isTouching(wall21)||computer.isTouching(wall22)||computer.isTouching(wall23)||computer.isTouching(wall24)||computer.isTouching(wall25)||computer.isTouching(wall26)||computer.isTouching(wall27)||computer.isTouching(wall28)||computer.isTouching(wall29)){
  fill("white");
 
  textSize(18);
  text("you lose press R to restart",90,197);
 }
 
 

  drawSprites(); 
  
}

