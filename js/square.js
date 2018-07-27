/* exported Square */
class Square {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = "#F58426";
        context.fillRect(this.x, this.y, 20, 20);
    }
}