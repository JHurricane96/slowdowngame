
//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Snow extends Phaser.Sprite {
  //var back_emitter,i;
  //initialization code in the constructor
  constructor(game, x, y, frame) {
    super(game, x, y, 'snowflakes', frame);
   // super();
    //this.back_emitter;
    this.i=0;
    this.update_interval = 4 * 60;
    this.max=0;

    this.back_emitter = game.add.emitter(game.world.centerX, -32, 10000);
    this.back_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    this.back_emitter.maxParticleScale = 0.6;
    this.back_emitter.minParticleScale = 0.2;
    this.back_emitter.setYSpeed(20, 100);
    this.back_emitter.gravity = 0;
    this.back_emitter.width = game.world.width * 1.5;
    this.back_emitter.minRotation = 0;
    this.back_emitter.maxRotation = 40;

    this.mid_emitter = game.add.emitter(game.world.centerX, -32,10000);
    this.mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    this.mid_emitter.maxParticleScale = 0.6;
    this.mid_emitter.minParticleScale = 0.4;
    this.mid_emitter.setYSpeed(50, 150);
    this.mid_emitter.gravity = 0;
    this.mid_emitter.width = game.world.width * 1.5;
    this.mid_emitter.minRotation = 0;
    this.mid_emitter.maxRotation = 40;

    this.front_emitter = game.add.emitter(game.world.centerX, -32, 10000);
    this.front_emitter.makeParticles('snowflakes_large', [0, 1, 2, 3, 4, 5]);
    this.front_emitter.maxParticleScale = 0.4;
    this.front_emitter.minParticleScale = 0.2;
    this.front_emitter.setYSpeed(100, 200);
    this.front_emitter.gravity = 0;
    this.front_emitter.width = game.world.width * 1.5;
    this.front_emitter.minRotation = 0;
    this.front_emitter.maxRotation = 40;


    this.changeWindDirection();

    this.back_emitter.start(false, 14000, 2);
    this.mid_emitter.start(false, 12000, 4);
    this.front_emitter.start(false, 6000, 1);
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {

  }

  //Code ran on each frame of game
  update() {


    this.i++;

    if (this.i === this.update_interval)
    {
      this.changeWindDirection();
      this.update_interval = Math.floor(Math.random() * 20) * 60; // 0 - 20sec @ 60fps
      this.i = 0;
    }

  }


   changeWindDirection() {

  var multi = Math.floor((this.max + 200) / 4),
      frag = (Math.floor(Math.random() * 100) - multi);
  this.max = this.max + frag;

  if (this.max > 200) this.max = 150;
  if (this.max < -200) this.max = -150;

  this.setXSpeed(this.back_emitter, this.max);
  this.setXSpeed(this.mid_emitter, this.max);
  this.setXSpeed(this.front_emitter, this.max);


}

  setXSpeed(emitter, max) {

  emitter.setXSpeed(max - 20, max);
  emitter.forEachAlive(this.setParticleXSpeed, this, max);

}

  setParticleXSpeed(particle, max) {

  particle.body.velocity.x = max - Math.floor(Math.random() * 30);

}
  //Called when game is paused
  paused() {

  }

  //You're able to do any final post-processing style effects here.
  render() {

  }

  //Called when switching to a new state
  shutdown() {

  }

}

export default Snow;
