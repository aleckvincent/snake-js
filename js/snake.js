class Snake {

    constructor() {
        this.length = 0;
        this.speed = 0;

        this.score = 0;
        this.canvas = document.getElementById('myCanvas');
        this.square = new Square();
        this.coord = [
            { x: 0, y: 0 },
            { x: 25, y: 0 },
            { x: 50, y: 0 }
        ];

        this.appleCoord = [
            { x: 75, y: 75 }
        ];

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
        for (const c of this.coord) {
            this.square.draw(this.context, c);
        }
        this.context.closePath();
    }

    moveRight() {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.coord.shift();
        this.coord.push({
            x: this.coord[1].x + 25,
            y: this.coord[1].y
        });

        for (const c of this.coord) {
            this.square.draw(this.context, c);
        }
    }


    moveDown() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.coord.shift();
        this.coord.push({
            x: this.coord[1].x,
            y: this.coord[1].y + 25
        });

        for (const c of this.coord) {
            this.square.draw(this.context, c);
        }
    }


    moveLeft() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.coord.shift();
        this.coord.push({
            x: this.coord[1].x - 25,
            y: this.coord[1].y
        });

        for (const c of this.coord) {
            this.square.draw(this.context, c);
        }
    }

    moveUp() {        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.coord.shift();
        this.coord.push({
            x: this.coord[1].x,
            y: this.coord[1].y - 25
        });

        for (const c of this.coord) {
            this.square.draw(this.context, c);
        }
    }



    drawApple() {
        this.context.beginPath();
        this.context.arc(this.appleCoord[0].x, this.appleCoord[0].y, 10, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
    }



    checkIfEat() {

        if(this.coord[2].x === this.appleCoord[0].x) {
            if(this.coord[2].y === this.appleCoord[0].y) {
                this.score = this.score + 1;
                console.log('Score: '+ this.score)
            }
            
        }
      
    }

}