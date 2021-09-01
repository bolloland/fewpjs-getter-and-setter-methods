// Add your Circle class here
const pi = Math.PI
class Circle {
    constructor(radius) { 
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }
    get circumference() {
        return 2 * this.radius * pi
    }
    get area() {
        return Math.PI * this.radius ** 2
    }
    set diameter(diam) {
        this.radius =  diam / 2
    }
    set circumference(circum)  {
        this.radius = (circum / 2) / pi
    }
    set area(area) {
        this.radius = Math.sqrt(area/pi)
    }
}