class Apple {

    constructor() {
        this.length;
        this.speed;
        this.position;
        this.score;
        this.canvas = document.getElementById('myApple');
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
        this.context.arc(100,75,10,0,2*Math.PI);  
        this.context.stroke();
        this.context.closePath();
    }


}