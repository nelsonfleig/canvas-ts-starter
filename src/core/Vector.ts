/**
 * A simple 2D vector class
 */
export class Vector {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(vector: Vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  sub(vector: Vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }

  mult(n: number) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n: number) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  mag() {
    return Math.hypot(this.x, this.y);
  }

  normalize() {
    const m = this.mag();
    if (m === 0) return this;
    return this.div(m);
  }

  limit(max: number) {
    const m = this.mag();
    if (m > max) {
      this.div(m) //normalize it
        .mult(max); //then rescale to max
    }
    return this;
  }

  copy() {
    return new Vector(this.x, this.y);
  }
}
