/* exported Square */
class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(context) {
        context.fillStyle = "#F58426";
        context.fillRect(this.x, this.y, 20, 20);
    }
}