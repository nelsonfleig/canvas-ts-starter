import { Vector } from '../core';

export class Thing {
  public position: Vector;
  public velocity: Vector;
  public radius: number;
  public speed: number;

  constructor(position: Vector, velocity: Vector, radius: number) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
  }
  update(c: CanvasRenderingContext2D) {
    this.draw(c);

    if (this.position.x + this.radius > innerWidth || this.position.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.position.y + this.radius > innerHeight || this.position.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }

    this.position.add(this.velocity);
  }
  draw(c: CanvasRenderingContext2D) {
    c.save();
    c.beginPath();
    c.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
    c.fillStyle = 'red';
    c.fill();
    c.closePath();
    c.restore();
  }
}
