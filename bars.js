class Bar{

  constructor(altitude, scope, kolor) {
    this.scope = scope;
    this.dimension = dimension;
    this.thicc = thicc;
    this.gap = gap;
    this.altitude = altitude;
    this.descent = (thrust - ((1,6*thrust)/width)**2);
    this.kolor = kolor;
  }

  show() {
    fill(this.kolor);

    quad(0, this.altitude, this.scope, this.altitude, this.scope, this.altitude - thicc, 0, this.altitude - thicc);
    quad(this.scope + gap, this.altitude, width, this.altitude, width, this.altitude - thicc, this.scope + gap, this.altitude - thicc);

    noStroke();
    smooth();
  }

  update() {
    if (brick.y <= height/2){
      if (keyIsPressed && ((key == 'q'|| key == 'ArrowLeft') || (key == 'd'|| key == 'ArrowRight'))) {
        this.altitude += this.descent;
      }
    }
  }
}
