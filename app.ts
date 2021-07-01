

interface Point {
  x: number;
  y: number;
}

// function logPoint with parameters bound by interface Point to must contain a key of x & y. failing to do so would stop the static compiler and throw a type error.
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

// This would not run because it does not match the initial requirements set by Interface - the parameter must be an object containing keys x and y. 
// const color = { hex: "#187ABF" };
// logPoint(color);

const point = { x: 12, y: 26 }
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 }
logPoint(rect);

// Class Constructor passes duck typing
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56)
logPoint(newVPoint)