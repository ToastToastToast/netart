function setup() {
createCanvas(600,600);
}

function draw() {
background(204);
  //change border thickness
  strokeWeight(8);
ellipse(50,50,80,50);
  point(70,25);
  line(100,120,400,250);
  //y1,y2 point. y3width, y4height
  rect(200,50,100,70);

  strokeWeight(2)
  //quad x1,y1,x2 y2,x3 y3, x4 y4
  //Its a flag =D
  quad(300,310,400,410,250,260,400,260);
  //Triangle6 x1 y1, x2 y2, x3 y3
  triangle(350,380,350,454,470,467);
  //arcs x,y,width,height,start,stop
  arc(90,60,80,80,0,HALF_PI);
  arc(390,60,80,80,QUARTER_PI,PI+QUARTER_PI);


}
