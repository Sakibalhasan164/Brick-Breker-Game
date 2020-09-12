let point=0;


let paddle;
let ball;
let brick=[]

function setup(){
    createCanvas(windowWidth,windowHeight)

    //paddle object from the class
    paddle=new Paddle(300,550,170,30)

    //ball object
    ball=new Ball()

    //bricks
     for(i=0;i<25;i++){
         brick[i]=new Bricks()}
    
}


//draw functon 
function draw(){
    background(255)//255, 204, 239
    ///score for the game
    textAlign(CENTER, CENTER);
    noStroke()
    text("score:",width-150,15)
    score()

    
    //paddle
    paddle.show()
    // paddle.edges()
    // paddle.keepmoving()

    //ball
    ball.show()
    ball.move()
    ball.edges()
    //ball hirs the paddle
    if (ball.mets(paddle)) {
         ball.vel.y*= -1;
      }
      //bricks
      for(i=0;i<=brick.length-1;i++){
           brick[i].show()
        }


    //if the ball hits the bricks splice it from the array
    
    for(i=brick.length-1;i>=0;i--){
        if(ball.hitsBrick(brick[i])){
            // console.log("its a hit boy");
            ball.vel.y*=-1
            ball.vel.x*=-1
            // brick[i].shrink()
            // brick[i].afterhit()
            if(brick[i].r>30){
                brick[i].r=brick[i]/2
                
                brick.splice(i,1)
                point+=5
                
            }
        }
    }
        
     

    if(brick.length===0){
        // console.log("game over");
        
        background(255, 204, 239);
        youWin();
        noLoop();
    }
    if(ball.pos.y>height){
        background(255, 204, 239);
        gameover();
        noLoop();
        
    }
    
}
//key press tomove the paddle
function keyPressed(){
    // console.log("press");
    if(keyCode===39){
        // console.log("right");
        let plasX=createVector(1,0)
        paddle.move(plasX)
        if(paddle.edges()){
            let plusX=createVector(-1,0)
            paddle.move(plusX)
        }

    }
    if(keyCode===37){
        // console.log("left");
        let minusX=createVector(-1,0)
        paddle.move(minusX)
        if(paddle.edges()){
           let minusX=createVector(1,0)
            // console.log(0);
            paddle.move(minusX)
        }
    }
    
}

function youWin(){

     textSize(55);
     textAlign(CENTER, CENTER);
    text("YOU WIN!",width/2,height/2)
    
}
function gameover(){
    textSize(55)
    fill(0)
    textAlign(CENTER, CENTER);
    text("Game Over",width/2,height/2-50)
    //score
    textSize(25)
    text(`Your Score: ${point}`,width/2,height/2+50)
}

function score(){
    textSize(25);
    textAlign(CENTER, CENTER);
    fill(0)
   text(point,width-100,18)
}