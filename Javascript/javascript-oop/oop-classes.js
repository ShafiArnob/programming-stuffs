class Point{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  static displayName = "Point";
  
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    
    return [dx, dy]
  }
}
var print = console.log

const p1 = new Point(5,5)
const p2 = new Point(2,2)


print(Point.distance(p1,p2))