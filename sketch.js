
//var r = 20;
//var g = 50;
//var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  //background(r,g,b);
  
  


  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
  if(mouseX>=200 && mouseX<400){
    background(0,255,0)
  }

  if(mouseX<200){
    background(255,119,255);
  }
  
  if(mouseX>=400 && mouseX<600){
    background(255,211,0);
  }

  if(mouseX>=600 && mouseX<800){
    background(255,0,0);
  }

  if(mouseX>=800 && mouseX<1000){
    background(255,255,255);
  }

  if(mouseX>=1000){
    background(0,0,255);
  }
  
 // background(r,g,b);

  fill(0,0,0);
  ellipse(mouseX,200,50,50);
  ellipse(255);

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}