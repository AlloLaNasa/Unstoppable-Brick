class Brick {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocityX = 0;
    this.velocityY = 0;
    this.LivingState = 0;
    this.isDead = false;
  }

  show() {
    fill(0);
    quad(this.x + size, this.y, this.x, this.y + size, this.x - size, this.y, this.x, this.y - size);
    noStroke();
    smooth();

    //let angle = 0;

    // if(this.LivingState == 'RTrigo'){
    //   while (this.y < height){
    //     angle += 2;
    //     rotate(angle);
    //   }
    // }
    //
    // if(this.LivingState == 'RAntiTrigo'){
    //   while (this.y < height){
    //     angle -= 2;
    //     rotate(angle);
    //   }
    // }
  }


  update() {

    if (start > 0) {
      this.velocityY += gravity;
      this.x += this.velocityX;
      this.y += this.velocityY;

      if (this.y > height){
        this.velocityX = 0;
        this.y = height;
      }

      if (this.y < height/2){
        this.y = height/2;
      }

      if (this.x > width - size){
        this.velocityY = 0;
        this.x = width - size;
        this.y += slide;
      }

      if (this.x < size){
        this.velocityY = 0;
        this.x = size;
        this.y += slide;
      }
    }

  //   if(this.LivingState == 'Straight'){
  //     brick.velocityX = 0;
  //     brick.velocityY = slide;
  //     this.isDead = true;
  //   }
  //   if(this.LivingState == 'RTrigo'){
  //       brick.velocityY = slide;
  //       brick.velocityX = 0;
  //       this.y += this.velocityY;
  //     this.isDead = true;
  //   }
  //   if(this.LivingState == 'RAntiTrigo'){
  //       brick.velocityY = slide;
  //       brick.velocityX = 0;
  //       this.y += this.velocityY;
  //     this.isDead = true;
  //   }
  }


  UpLeft() {

    if (start > 0) {
      if (this.y < height/2) {
        this.velocityX = -thrust*0.2;
      }
      else {
        this.velocityX = -thrust*0.2;
        this.velocityY = -thrust;
      }
    }
  }


  UpRight() {

    if (start > 0) {
      if (this.y < height/2){
        this.velocityX = thrust*0.2;
      }
      else {
        this.velocityX = thrust*0.2;
        this.velocityY = -thrust;
      }
    }
  }

  // collided(zima, netero){
  //   zima
  //   if((0 < this.x < zima.scope) || (zima.scope + zima.gap < this.x < width)){
  //     if(zima.altitude - zima.thicc - this.size <= this.y <= zima.altitude + this.size){
  //       if(this.velocityY*this.velocityX < 0){
  //         this.LivingState = 'RTrigo';
  //       }
  //       if(this.velocityY*this.velocityX > 0){
  //         this.LivingState = 'RAntiTrigo';
  //       }
  //     }
  //   }
  //   if(zima.altitude - zima.thicc < this.y < zima.altitude){
  //     if(this.x <= zima.scope + this.size || this.x >= zima.scope + zima.gap - this.size){
  //       if(this.velocityY*this.velocityX > 0){
  //         this.LivingState = 'RTrigo';
  //       }
  //       if(this.velocityY*this.velocityX < 0){
  //         this.LivingState = 'RAntiTrigo';
  //       }
  //     }
  //   }
  //   if((zima.scope <= this.x <= zima.scope + this.size) || (zima.scope + zima.gap - this.size <= this.x <= width)){
  //     if((this.y >= -this.size + zima.altitude - zima.thicc + zima.scope + zima.gap - this.size && this.velocityY > 0)
  //     || (this.y >= this.x + zima.altitude - zima.thicc - zima.scope + this.size && this.velocityY > 0)
  //     || (this.y <= -this.x + zima.altitude + this.size - zima.scope + this.size && this.velocityY < 0)
  //     || (this.y <= this.x + zima.altitude + this.size - zima.scope + zima.gap))
  //     this.LivingState = 'Straight';
  //   }
  //   // //netero
  //   // if((netero.a < this.x < netero.a + netero.dimension)
  //   // || (netero.c < this.x < netero.c + netero.dimension)){
  //   //   if((netero.b < this.y < netero.b - this.size)
  //   //   || (netero.b + netero.dimension < this.y < netero.b - this.size + netero.dimension)
  //   //   || (netero.d < this.y < netero.d + netero.dimension)
  //   //   || (netero.d + netero.dimension < this.y < netero.d - this.size + netero.dimension)){
  //   //     if(this.velocityY*this.velocityX < 0){
  //   //       this.LivingState = 'RTrigo';
  //   //     }
  //   //     if(this.velocityY*this.velocityX > 0){
  //   //       this.LivingState = 'RAntiTrigo';
  //   //     }
  //   //   }
  //   // }
  //   // if((netero.b < this.y < netero.b + netero.dimension)
  //   // || (netero.d < this.y < netero.d + netero.dimension)){
  //   //   if((netero.a < this.x < netero.a - this.size)
  //   //   || (netero.a + netero.dimension < this.y < netero.a - this.size + netero.dimension)
  //   //   ||(netero.c < this.y < netero.c + netero.dimension)
  //   //   || (netero.c + netero.dimension < this.y < netero.c - this.size + netero.dimension)){
  //   //     if(this.velocityY*this.velocityX > 0){
  //   //       this.LivingState = 'RTrigo';
  //   //     }
  //   //     if(this.velocityY*this.velocityX < 0){
  //   //       this.LivingState = 'RAntiTrigo';
  //   //     }
  //   //   }
  //   // }
  //   // if((netero.a - this.size <= this.x <= netero.a && this.velocityY > 0 && netero.b +  this.size >= this.y >= -this.x + netero.a + netero.b - this.size)
  //   // || (netero.c - this.size <= this.x <= netero.c && this.velocityY > 0 && netero.d +  this.size >= this.y >= -this.x + netero.c + netero.d - this.size)
  //   // || (netero.a - this.size <= this.x <= netero.a && this.velocityY < 0 && netero.b +  this.size <= this.y <= this.x + netero.b + netero.dimension + this.size - netero.a)
  //   // || (netero.c - this.size <= this.x <= netero.c && this.velocityY < 0 && netero.d +  this.size <= this.y <= this.x + netero.d + netero.dimension + this.size - netero.c)
  //   // || (netero.a + netero.dimension <= this.x <= netero.a + netero.dimension + this.size && this.velocityY < 0 && netero.b +  this.size <= this.y <= -this.x + netero.b + netero.a + 2*netero.dimension + this.size)
  //   // || (netero.c + netero.dimension <= this.x <= netero.c + netero.dimension + this.size && this.velocityY < 0 && netero.d +  this.size <= this.y <= -this.x + netero.d + netero.c + 2*netero.dimension + this.size)
  //   // || (netero.a + netero.dimension <= this.x <= netero.a + netero.dimension + this.size && this.velocityY > 0 && netero.b +  this.size >= this.y >= this.x + netero.b - netero.a - netero.dimension - this.size)
  //   // || (netero.c + netero.dimension <= this.x <= netero.c + netero.dimension + this.size && this.velocityY > 0 && netero.d +  this.size >= this.y >= this.x + netero.d - netero.c - netero.dimension - this.size)){
  //   //   this.LivingState =  'Straight';
  //   // }
  // }
}
