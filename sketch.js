let time = 0;

function setup()
{
    createCanvas(600,400);
}

function draw()
{
    background(0);
    translate(200, 200); //relocate the center of the circle

    let radius = 50;

    stroke(225);
    noFill();
    ellipse(0, 0, radius*2);

    time += 0.01;
}
