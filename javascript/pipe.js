class Pipe {
  constructor() {
    // aqui todas las propiedades de los tubos
    this.image = new Image();
    this.image.src = "./images/obstacle_top.png";
    this.x = canvas.width;
    this.y = 0;
    this.w = 50;
    this.h = canvas.height * 0.4;
    this.speed = 3;
  }

  // aqui todos los metodos de los tubos
  drawPipe = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  pipeMovement = () => {
    this.x = this.x - this.speed
  };
}
