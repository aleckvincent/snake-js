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
        this.startMusic = false;
        this.speedInterval;
        this.interval;
        this.gameOver = false;
        this.myAudio = new Audio('arcade.wav');
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
        this.speedInterval = this.speed(this.snake.score);
        this.checkIfOut();
        console.log(this.snake.gameOver());
        if (this.snake.gameOver() === true) {
            clearInterval(this.interval);
            this.context.fillText('GAME OVER - PRESS ENTER', (window.innerWidth / 2) - 200, 250);
            this.gameOver = true;
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
            if (this.paused) {
                clearInterval(this.interval);
                this.context.fillText('PAUSE', 580, 300);

            }
            else {
                this.interval = setInterval(this.animate.bind(this), 80);
                
                if(!this.startMusic) {
                    this.myAudio.play();
                    this.myAudio.volume = 0.4;
                }
                this.startMusic = true;
                this.myAudio.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
        }
        if (value === 13 && this.gameOver == true) {
            this.gameOver == false;
            location.reload();
        }
    }


    checkIfOut() {
        let lastIndex = this.snake.squares.length - 1;

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

    speed(score) {

        return (score / 2) * 100;
    }
}
