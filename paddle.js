class Paddle{
    constructor(x,y,w,h){
        this.pos=createVector(x,y)
        this.w=w
        this.h=h
    //key moving vector
         

    }
    //show function for the paddle
    show(){
        fill(40)
        noStroke()
        rect(this.pos.x,this.pos.y,this.w,this.h)
    
    }
    
    
    //the paddle will keep moving untill the key is released
    keepmoving(){
        // this.keepmove=createVector(2,0)
        this.pos.add(this.keepmoving)
   }

   //movemnt for the paddle
   move(chnge){
       chnge.mult(50)
      this.pos.add(chnge)

   }

   //detect paddle edges
   edges(){
       if(this.pos.x<0 ||this.pos.x>=width-100){
          return true

       }
   }
   
}