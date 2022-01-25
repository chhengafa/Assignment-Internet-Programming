class Dinosaur {
    appearance = null;
    width = 10;
    height = 20;
    speed = 10;
    ctx = null;
    positionX = null;
    positionY = null;
    frameIndex = 0;
  
    constructor(gameContext) {
      this.gameContext = gameContext;
      this.positionX = 10;
      this.positionY = 200;
  
      this.appearance = new Image();
      this.appearance.src = "assets/img/dino.png";
  
      this.appearance.onload = (() => {
        this.gameContext.ctx.drawImage(this.appearance, 0, 0, 88, 94, this.positionX, this.positionY, 100, 100);
      })
    }

    move = (() => {
        if (this.frameIndex > 5) {
            this.frameIndex = 0;
          }
          setTimeout(() => {
              //this.gameContext.ctx.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
              this.gameContext.ctx.drawImage(
                this.appearance, 
                this.frameIndex * 88, 0, 88, 94, // Source image
                this.positionX, this.positionY, 100, 100 // Destination
              );
              console.log("hi");
              requestAnimationFrame(this.move)
              this.frameIndex++;  // the same as: this.frameIndex = this.frameIndex + 1;
              },100)
              
    })
    setSpeed(baseSpeed, level) {
      this.speed = baseSpeed + level;
    }
    jump() {
        this.gameContext.ctx.drawImage(this.appearance, 0, 0, 88, 94, this.positionX, this.positionY-120, 100, 100);
      console.log('dinosaur is jumping!!');
    }
  }