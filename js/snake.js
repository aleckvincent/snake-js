class Snake {

    constructor() {
        this.length = 0;
        this.speed = 0;
        this.positionX = 0;
        this.positionY = 100;
        this.score = 0;
        this.canvas = document.getElementById('myCanvas');
        if (!this.canvas) {
            alert("Impossible de récupérer le canvas");
            return;
        }

        this.context = this.canvas.getContext('2d');
        if (!this.context) {
            alert("Impossible de récupérer le context du canvas");
            return;
        }
    }

    draw() {
        this.context.beginPath();
        this.context.fillRect(this.positionX, this.positionY, 20, 20);
        this.context.fillRect(this.positionX+25, this.positionY, 20, 20);
        this.context.fillRect(this.positionX+50, this.positionY, 20, 20);
        this.context.closePath();
    }

    moveX() {        
        this.positionX = this.positionX + 15;
        console.log(this.positionX);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw(this.positionX);
    }

    moveY() {       
        this.positionY = this.positionY + 75;
        console.log(this.positionY);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw(this.positionX);
    }
}