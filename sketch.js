let time = 0;

function setup()
{
    createCanvas(600,400);
}

function draw()
{
    background(0);
    translate(200, 200); //where to begin to draw

    let radius = 50;

    stroke(225);
    noFill();
    ellipse(0, 0, radius*2);

    //create the point in moving
    let x = radius*cos(time);
    let y = radius*sin(time);
    fill(225)
    ellipse(x,y,8); //tiny circle 
    line(0,0,x,y);

    time += 0.05;
}
