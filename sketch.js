var bg, pedroPalmeirense, ricardoFlamenguista,cjBaianoRebaixado,bispo, pedroPalmeirenseImg, ricardoFlamenguistaImg,cjBaianoRebaixadoImg,bispoImg,veioDaHavanSuperHeroiImg,bispoSom,gCjBaianoRebaixado, pedra,pedraImg,gPedra;
var vidas = 3;
var salvamentos=0;
var estado=0;
function preload() {
pedroPalmeirenseImg=loadImage("pedro palmeirense.png");  
ricardoFlamenguistaImg=loadImage("ricardo flamenguista.png");  
veioDaHavanSuperHeroiImg=loadImage("veio da havan super heroi.png");  
bispoImg=loadImage("bispo bombado.jpg");  
cjBaianoRebaixadoImg=loadImage("cj baiano rebaixado.png");  
bg=loadImage("IMG_5180 (1).JPG");  
bispoSom=loadSound("bispo.mp3");
pedraImg=loadImage("pedra.png")



}

function setup() {
  createCanvas(windowWidth,windowHeight);

bispo=createSprite(width/2,height/2);
bispo.addImage(bispoImg);
bispo.scale=width/400;
bispo.visible=false;
  gCjBaianoRebaixado= new Group();

gPedra=new Group();

ricardoFlamenguista=createSprite(width/5,height-(height/3),50,400);
ricardoFlamenguista.addImage(ricardoFlamenguistaImg);
ricardoFlamenguista.scale=width/3500;

pedroPalmeirense=createSprite(width-(width/5),height-(height/3),50,400);
pedroPalmeirense.addImage(pedroPalmeirenseImg);
//pedroPalmeirense.scale=0.62;
pedroPalmeirense.scale=width/5600

createEdgeSprites();
}
//draw é aqui em baixo
//draw é aqui em baixo
//draw é aqui em baixo
//draw é aqui em baixo
//draw é aqui em baixo
//draw é aqui em baixo
function draw(){
  background(bg);

  if(keyDown("a")&&ricardoFlamenguista.x>width/15){
    ricardoFlamenguista.x=ricardoFlamenguista.x-width/150;
  }
  if(keyDown("d")&&ricardoFlamenguista.x<width/1.4){
    ricardoFlamenguista.x=ricardoFlamenguista.x+width/150;
  }
  if(keyDown("w")&&ricardoFlamenguista.y>height/2.3){
    ricardoFlamenguista.y=ricardoFlamenguista.y-height/60;
  }
  if(keyDown("s")&&ricardoFlamenguista.y<height/1.1){
    ricardoFlamenguista.y=ricardoFlamenguista.y+height/60;
  }
if(gCjBaianoRebaixado.isTouching(ricardoFlamenguista)){
salvamentos++;
gCjBaianoRebaixado.destroyEach();
}



stroke("white");
fill("yellow");
textSize(25);
 text(vidas,width/20,height-height/20);

  if(frameCount%100==0){
    Pedra();
  }

  if(frameCount%1500==0){
CjBaianoRebaixado();
  }

pedroPalmeirense.y=ricardoFlamenguista.y;

if(keyDown("k")){
salvamentos++;
}


if(gPedra.isTouching(ricardoFlamenguista)){
  vidas=vidas-1;
  gPedra.destroyEach();
}
if(vidas==0&&salvamentos>0){
  bispoSom.play();
  vidas=3
  bispo.visible=true;
  pedroPalmeirense.y=height/2;
estado=1;
salvamentos=salvamentos-1;

}
if(estado==1){
  gPedra.destroyEach();
  fill("red");
textSize(30);
pedroPalmeirense.visible=false;
text("pressione espaço",width/2,height/2);

}
if(keyDown("space")){
  pedroPalmeirense.visible=true;
  bispo.visible=false;
  gPedra.Setlifetime=100;
  pedroPalmeirense.y=ricardoFlamenguista.y;
estado=0;
}
if(vidas<0){
  fill("red");
  textSize(25);
  text("você morreu",width/2,height/2);
}

//pedroPalmeirense.debug=true;
//ricardoFlamenguista.debug=true;
//gPedra.debug=true;
//gCjBaianoRebaixado.debug=true;



textSize(25);
fill("red");
text(salvamentos,width/20,height/20)
drawSprites();
}

function CjBaianoRebaixado(){
  
cjBaianoRebaixado=createSprite(width*1.2,height/(random(1,23)/10));
cjBaianoRebaixado.addImage(cjBaianoRebaixadoImg);


cjBaianoRebaixado.x=width*1.2;
cjBaianoRebaixado.x=cjBaianoRebaixado.x-width/40;
cjBaianoRebaixado.lifetime=100;
cjBaianoRebaixado.y=height/3;
cjBaianoRebaixado.velocityX=-width/80;
gCjBaianoRebaixado.add(cjBaianoRebaixado);
}
function Pedra(){
pedra=createSprite(pedroPalmeirense.x,pedroPalmeirense.y);
pedra.addImage(pedraImg);
pedra.scale=width/5000
pedra.velocityX=-width/60;
pedra.lifetime=50
gPedra.add(pedra);
}