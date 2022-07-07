class Pollito {
  constructor() {
    // aqui todas las propiedades del pollito
    this.image = new Image()
    this.image.src = "./images/flappy.png"
    this.x = 100; // posición eje X
    this.y = 100; // posición eje Y
    this.w = 50; // width: ancho
    this.h = 40; // height: alto
    this.speed = 2;
  }

  // aqui todos los metodos del pollito

  drawPollito = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }

  // gravedad del pollo
  
  // salto del pollo

}