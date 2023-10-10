// 小手調べ
function setup(){
  createCanvas(150, 150);
  noFill();
  for(let i = 0; i < 10; i++){
  if(i<5){
  stroke(0, 0, 255);}
  else{
  stroke(255, 0, 0);}
  ellipse(width/2,height/2,i*10,i*10);
  }  
}