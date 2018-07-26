/* global Snake */
/* global Apple */
/* exported Control */
class Control {

    constructor(context) {
        this.snake = new Snake();
        this.apple = new Apple();
        this.current = 'right';
        this.context = context;
        this.paused = true;
        this.interval;
    }


    getKeyDown() {
        document.addEventListener('keydown', this.handleKey.bind(this));
    }

    animate() {
        this.snake.move(this.current);
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.snake.draw(this.context);
        this.apple.draw(this.context, this.snake.score);
        this.snake.checkIfEat(this.apple);
        let lastIndex = this.snake.squares.length - 1;
        if(this.snake.gameOver()){
            clearInterval(this.interval);
            this.context.fillText("GAME OVER!!!!!!!!", 550, 250);
        }
        


        if (this.snake.squares[lastIndex].x >= window.innerWidth) {
            this.snake.squares[lastIndex].x = 0;
        }
        if (this.snake.squares[lastIndex].y >= window.innerHeight) {
            this.snake.squares[lastIndex].y = 0;
        }
        if (this.snake.squares[lastIndex].x < 0) {
            this.snake.squares[lastIndex].x = window.innerWidth;
        }
        if (this.snake.squares[lastIndex].y < 0) {
            this.snake.squares[lastIndex].y = (window.innerHeight / 20) * 20;
        }

    }


    handleKey(event) {
        let value = event.keyCode;
        let choice;

        if (value === 39 && this.current != 'left') {
            choice = 'right';
            this.current = 'right';
        }

        if (value === 40 && this.current != 'up') {
            choice = 'down';
            this.current = 'down';
        }

        if (value === 37 && this.current != 'right') {
            choice = 'left';
            this.current = 'left';
        }

        if (value === 38 && this.current != 'down') {
            choice = 'up';
            this.current = 'up';
        }

        if (value === 32) {
            this.paused = !this.paused;
            var snd = new Audio("arcade.wav"); // buffers automatically when created
            if (this.paused) {
                // snd.pause();
                // snd.currentTime = 0;
                clearInterval(this.interval);     
            }
            else {
                // snd.play();
                this.interval = setInterval(this.animate.bind(this), 100);
            }
        }
    }
}
