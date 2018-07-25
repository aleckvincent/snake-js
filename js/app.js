window.onload = function () {


    let control = new Control();
   
    let snake = new Snake();

    control.getKeyDown();
    
    
    let animate = control.animate.bind(control);
 
   
    setInterval(animate, 500);
    snake.drawApple();
    
    
};