class Snake {

    constructor() {
        this.length = 0;
        this.speed = 0;
        this.score = 0;
        this.canvas = document.getElementById('myCanvas');
        this.square = new Square();
        this.coord = [
            { x: 0, y: 20 },
            { x: 25, y: 20 },
            { x: 50, y: 20 }
        ];

        this.appleX = (Math.floor(Math.random() * (window.innerWidth / 20))) * 20;
        this.appleY = (Math.floor(Math.random() * (window.innerHeight / 20))) *20;      

        if (!this.canvas) {
            alert('Impossible de récupérer le canvas');
            return;
        }
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.context = this.canvas.getContext('2d');
        if (!this.context) {
            alert('Impossible de récupérer le context du canvas');
            return;
        }
    }



    run(){
       
    }

    resetY(y) {

        return this.coord = [
            { x: 0, y: y[0] },
            { x: 25, y: y[1] },
            { x: 50, y: y[2] }
        ];
    }

    resetX(x){
        return this.coord = [
            { x: x[0], y: 10 },
            { x: x[1], y: 10 },
            { x: x[2], y: 10 }
        ];
    }

    draw() {
        this.context.beginPath();
        for (const c of this.coord) {
            this.square.draw(this.context, c);
        }
        this.context.closePath();
    }


    move(direction) {
        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawApple();
        this.coord.shift();
        if(direction === 'right') {
            this.coord.push({
                x: this.coord[1].x + 20,
                y: this.coord[1].y
            });
        } else if (direction === 'down') {
            this.coord.push({
                x: this.coord[1].x,
                y: this.coord[1].y + 20
            });
        } else if (direction === 'left') {
            this.coord.push({
                x: this.coord[1].x - 20,
                y: this.coord[1].y
            });
        } else if (direction === 'up') {
            this.coord.push({
                x: this.coord[1].x,
                y: this.coord[1].y - 20
            });
        }

        for (const c of this.coord) {
            this.square.draw(this.context, c);
        }

        console.log(this.coord);
    }


    drawApple() {
        this.context.beginPath();
        this.context.arc(this.appleX +10, this.appleY +10, 10, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
    }



    checkIfEat() {

        console.log(this.appleX, this.appleY);
        if(this.coord[2].x === this.appleX) {
            if(this.coord[2].y === this.appleY) {
                this.score = this.score + 1;
                //console.log('Score: '+ this.score);
                this.appleX = (Math.floor(Math.random() * (window.innerWidth / 20))) * 20;
                this.appleY = (Math.floor(Math.random() * (window.innerHeight / 20))) *20;
               // console.log(this.appleX);
                this.drawApple();
                //console.log('Pomme:' + this.appleX + ' & ' + this.appleY);
            }            
        }     
    }


    checkIfOut() {

        if(this.coord[2].x >= window.innerWidth || this.coord[2].x <= 0) {
           
            let yCoord = [];
            for(let i = 0; i < this.coord.length; i++) {
                yCoord.push(this.coord[i].y);
            }
            this.resetY(yCoord);
            this.draw();
        }

        if(this.coord[2].y >= window.innerHeight || this.coord[2].y <= 0) {           
            let xCoord = [];
            for(let i = 0; i < this.coord.length; i++) {
                xCoord.push(this.coord[i].x);
            }
            this.resetX(xCoord);
            this.draw();
        }
    }   
}