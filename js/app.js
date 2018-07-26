window.onload = function () {

    let canvas = document.getElementById('myCanvas');

    if (!canvas) {
        alert('Impossible de récupérer le canvas');
        return;
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let context = canvas.getContext('2d');
    if (!context) {
        alert('Impossible de récupérer le context du canvas');
        return;
    }

    let control = new Control(context);
    let snake = new Snake(context);
    control.getKeyDown();

    if(control.paused) {
        context.font = "15px Arial";
        context.fillText("PRESS SPACE TO START", (window.innerWidth / 3), window.innerHeight - 10);
    }
};