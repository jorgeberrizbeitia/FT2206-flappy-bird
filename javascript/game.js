// aqui estará la clase del juego con todos los elementos que afecte el juego

class Game {
  constructor() {
    // todas las propiedades del juego (ej: todas las variables globales de pong)

    // imagen de fondo
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    // el pollo (y todas sus propiedades)
    this.pollito = new Pollito() // aqui creo un nuevo OBJ de la clase Pollito
    // los tubos (y todas sus propiedades)
    // velocidad de los elementos

    this.isGameOn = true;
    // el score (BONUS)
  }

  // .todos los metodos del juego (ej: las funciones que teniamos ayer en el pong)

  pollitoFloorCollision = () => {
    if (this.pollito.y + this.pollito.h > canvas.height) {
      console.log("El pollito llegó al suelo")
      // ok, el juego se termina. isGameOn = false
      this.isGameOn = false
    }
  }

  gameLoop = () => {
    // console.log("juego andando");
    // 1. Limpiamos el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Movimientos y acciones de los elementos
    this.pollito.pollitoGravity()
    this.pollitoFloorCollision()
    // let collitionCheck = this.pollito.pollitoFloorCollision()
    // if (collitionCheck === true) {
    //   this.isGameOn = false
    // }
    // this.isGameOn = this.pollito.pollitoFloorCollision()

    // 3. Dibujar los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.pollito.drawPollito()

    // 4. Efecto de recursión
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  
  // colision pollo tube
  
  // efecto de gameover
  // los tubos aleatorios (cuando apareceran ) Spawn

  // boton de Pausa (MEGA BONUS)
}
