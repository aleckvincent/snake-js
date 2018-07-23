class Control {
    
    getKeyDown(snake) {
        document.addEventListener("keydown", function (event) {
            
            let value = event.keyCode;
            if(value === 39) {              
                snake.moveX();
            }
            if(value === 40) {
                snake.moveY();
            }
        });
    }
}
