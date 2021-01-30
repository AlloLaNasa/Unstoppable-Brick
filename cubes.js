class Cube{

  constructor(a, b, c, d, kolor) {
    this.dimension = dimension;
    this.descent = (thrust - ((1,6*thrust)/width)**2);
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.kolor = kolor;
  }


  show() {
    fill(this.kolor);

    if (isFirst == false) {
      square(this.a, this.b, dimension);
      square(this.c, this.d, dimension);
    }

    noStroke();
    smooth();
  }


  update() {
    if (brick.y <= height/2){
      if (keyIsPressed && ((key == 'q'|| key == 'ArrowLeft') || (key == 'd'|| key == 'ArrowRight'))) {
        this.b += this.descent;
        this.d += this.descent;
      }
    }
  }
}
