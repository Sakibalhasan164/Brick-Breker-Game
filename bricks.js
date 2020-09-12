class Bricks{
    constructor(){
        let x=random(width);
         let y=random(90,300)
        this.pos=createVector(x,y)
           let size=random(80,120)
             this.r=size
        // this.vel=createVector(-5,3)
    }

    show(){
        fill(51)//255, 204, 239
        stroke(0)
        circle(this.pos.x,this.pos.y,this.r)

    }
    shrink(){
        this.r-=5
    }
      //after hiting
    //   afterhit(){
    //       let size=random(20,80)
    //       this.r=size
    //     circle(this.pos.x,this.pos.y,this.r)
    //     }


}