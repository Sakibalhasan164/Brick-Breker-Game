class Ball{
    constructor(){
        this.pos=createVector(200,350)
       
        this.r=30
        // let velR=random(3,5)
        this.vel=createVector(3,3)
    }

    //movement for the ball
    move(){
    this.pos.add(this.vel)
    }


    //edges
    edges(){
        if(this.pos.x>width){
            // console.log("edge");
            this.pos.x=width
            this.vel.x*=-1
        }
        if(this.pos.x<0){
            this.pos.x=0;
            this.vel.x*=-1
        }
        // if(this.pos.y>height){
        //     this.pos.y=height;
        //     this.vel.y*=-1
        // }
        if(this.pos.y<0){
        this.pos.y=0;
        this.vel.y*=-1
        }
    }

   ///if the ball hits the paddle
   mets(paddle){
    if (this.pos.y < paddle.pos.y &&
        this.pos.y >= paddle.pos.y - this.r &&
        this.pos.x >= paddle.pos.x  - this.r &&
        this.pos.x <= paddle.pos.x + paddle.w + this.r+5) {
      return true;
    } else {
      return false;
    }
   }



    //show function for the ball
    show(){
        fill(237,34,94)
        
        ellipse(this.pos.x,this.pos.y,this.r*2)
    }


    //ball hits the brick
    hitsBrick(brick){
        let d=dist(this.pos.x,this.pos.y,brick.pos.x,brick.pos.y)
        if(d<this.r+brick.r/2){
            return true
        }

    }

    
}
