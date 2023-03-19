let time = 0;
let wave = [];

function setup()
{
    createCanvas(600,400);
}

function draw()
{
    background(0);
    translate(185, 200); //where to begin to draw
    let x = 0;
    let y = 0;
    
    //create the point in moving
    for(let i = 0;i < 5;i++){
        
        let prevx = x;
        let prevy = y;
        
        let n = i*2 + 1;
        let radius = 80*(4/(n*PI)); //radius of each circle

        x += radius*cos(n*time);
        y += radius*sin(n*time);
        
        stroke(225, 100);
        noFill();
        ellipse(prevx, prevy, radius*2); 


        fill(225)
        stroke(225)
        line(prevx,prevy,x,y); //lines of each circle
        ellipse(x,y,8); //each tiny point 
     }

    wave.unshift(y);
    line(x,y,185,y);

    beginShape();
    translate(185,0)
    
    noFill()
    for (let i = 0; i < wave.length; i++)
    {
        vertex(i, wave[i]);
    }
    endShape();
    time += 0.02;

    if (wave.length > 250){
        wave.pop();
    }
}
0