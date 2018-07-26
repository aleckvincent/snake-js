/* exported Apple */
class Apple {

    constructor(){
        this.appleX = (Math.floor(Math.random() * (window.innerWidth / 20))) * 20;
        this.appleY = (Math.floor(Math.random() * (window.innerHeight / 20))) *20;  
    }


    draw(context, score) {
        context.beginPath();
        context.arc(this.appleX + 10, this.appleY + 10, 10, 0, 2 * Math.PI);
        context.fillStyle = "#F58426";
        context.fill();
        context.font = "15px Arial";
        context.fillText("SCORE "+ score, 10, window.innerHeight - 10);
        context.closePath();
    }

}