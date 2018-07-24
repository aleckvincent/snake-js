window.onload = function () {


    let snake = new Snake();
    let control = new Control();
    let apple = new Apple();

    control.getKeyDown(snake);
    snake.drawApple();
   

}