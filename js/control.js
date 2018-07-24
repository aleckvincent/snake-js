class Control {

    
    constructor(){
        this.current = "a";
    }
    

    getKeyDown(snake) {
        document.addEventListener("keydown", function (event) {

            let value = event.keyCode;
            if (value === 39) {
                snake.moveRight();
            }

            if(value === 40) {
              
                snake.moveDown();
            }

            if(value === 37) {
                snake.moveLeft();
            }

            if(value === 38) {
                snake.moveUp();
            }

            snake.drawApple();
            snake.checkIfEat();
        });

        
    }
}
