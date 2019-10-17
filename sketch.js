var img;
function preload(){
  img = loadImage("dog.png");
}


function mousePressed(){
 //variables
  var x = 50;
  var y = 25;
}

function setup() {
createCanvas(600,600);
image(img,0,0);
}

function draw() {
background(250, 250, 200);
  //color RGB
   fill(3,252,202);
  stroke(3,136,252);
  //change border thickness
  strokeWeight(2);

  //drawing function
  //keyIsPressed also exists
  if(mouseIsPressed){
    fill(233,33,33,50);
    ellipse(mouseX,mouseY,20,20);
  }
  else{
    fill(300,50,50,25);
    rect(mouseX,mouseY,10,10);
  }

ellipse(50,50,80,50);
  point(500,25);
  line(100,120,400,250);
  //y1,y2 point. y3width, y4height
  rect(200,50,100,70);

  //arcs x,y,width,height,start,stop
  arc(90,60,80,80,0,HALF_PI);
  arc(390,60,80,80,QUARTER_PI,PI+QUARTER_PI);

  //quad x1,y1,x2 y2,x3 y3, x4 y4
  //Its a flag =D
  fill(3,252,165);
  quad(300,310,400,410,250,260,400,260);

  //Triangle6 x1 y1, x2 y2, x3 y3
  triangle(300,380,350,454,470,467);

image(img, -30, 200);
}
