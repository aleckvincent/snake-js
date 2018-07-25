class Control {


    constructor() {
        this.snake = new Snake();
        this.current = 'right';
    }


    getKeyDown() {
        document.addEventListener('keydown', this.handleKey.bind(this));
    }

    animate() {
        this.snake.move(this.current);
        this.snake.checkIfEat();
        this.snake.checkIfOut();
    }


    handleKey(event) {
        let value = event.keyCode;
        
        let choice = 'right';
        if (value === 39) {
            if(this.current === 'left') {
                return;
            }
            if (choice !== this.current) {
                choice = 'right';
                this.current = 'right';
                this.snake.move(this.current);
            }

        }

        if (value === 40) {
            if(this.current === 'up') {
                return;
            }
            choice = 'down';
            if (choice !== this.current) {
                this.current = 'down';
                this.snake.move(this.current);
            }
        }

        if (value === 37) {
            if(this.current === 'right') {
                return;
            }
            choice = 'left';
            if (choice !== this.current) {
                this.current = 'left';
                this.snake.move(this.current);
            }
        }

        if (value === 38) {
            if(this.current === 'down') {
                return;
            }
            choice = 'up';
            if (choice !== this.current) {
                this.current = 'up';
                this.snake.move(this.current);
            }
        }
        // this.snake.drawApple();
        // this.snake.checkIfEat();
        // this.snake.checkIfOut();
    }
}
