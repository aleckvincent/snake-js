/* global Square */
/* exported Snake */
class Snake {

    constructor() {
        this.length = 0;
        this.speed = 0;
        this.score = 0;
        this.squares = [
            new Square(0, 20),
            new Square(20, 20),
            new Square(40, 20)
        ];
    }

    /**
     * Reset la position en Y du Snake
     * @param {array} y 
     */
    resetY(y) {
        return this.squares = [
            { x: 0, y: y[0] },
            { x: 20, y: y[1] },
            { x: 40, y: y[2] }
        ];
    }

    /**
     * Reset la position en X du Snake
     * @param {array} x 
     */
    resetX(x) {
        return this.squares = [
            { x: x[0], y: 20 },
            { x: x[1], y: 20 },
            { x: x[2], y: 20 }
        ];
    }

    /**
     * Dessine un snake
     */
    draw(context) {
        for (const square of this.squares) {
            square.draw(context);
        }
    }

    /**
     * Determine la direction du snake
     * @param {string} direction 
     */
    move(direction) {
        this.squares.shift();
        const lastIndex = this.squares.length - 1;
        const head = new Square(this.squares[lastIndex].x, this.squares[lastIndex].y);
        if (direction === 'right') {
            head.x += 20;
        } else if (direction === 'down') {
            head.y += 20;
        } else if (direction === 'left') {
            head.x -= 20;
        } else if (direction === 'up') {
            head.y -= 20;
        }
        this.squares.push(head);
    }

    /**
     * Verifie si le snake a mangé la pomme
     * @param {Apple} apple
     */
    checkIfEat(apple) {
        let lastIndex = this.squares.length - 1;
        if (this.squares[lastIndex].x === apple.appleX && this.squares[lastIndex].y === apple.appleY) {
            this.score = this.score + 30;
            apple.appleX = (Math.floor(Math.random() * (window.innerWidth / 20))) * 20;
            apple.appleY = (Math.floor(Math.random() * (window.innerHeight / 20))) * 20;
            this.squares.unshift(new Square(this.squares[0].x, this.squares[0].y));
        }
    }


    gameOver() {
        let lastIndex = this.squares.length - 1;
        let collisition = false;

        for(let i = 0; i < lastIndex; i++) {
            if(this.squares[i].x === this.squares[lastIndex].x && this.squares[i].y === this.squares[lastIndex].y) {
                collisition = true;
            }
        }
        return collisition;
    }
}