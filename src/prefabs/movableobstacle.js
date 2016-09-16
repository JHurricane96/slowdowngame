
//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Movableobstacle extends Phaser.TileSprite {

  //initialization code in the constructor
  constructor(game, x, y, width, height,name) {
    super(game, x, y, width, height, name);
    this.name = name;
    this.right=1;
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
    this.body.velocity.set(50, 0);
    //this.body.moves=false;


    this.edges = [
      new Phaser.Line(x, y, x + width, y),
      new Phaser.Line(x, y, x, y + height),
      new Phaser.Line(x + width, y, x + width, y + height),
      new Phaser.Line(x, y + height, x + width, y + height)
    ];
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {

  }

  //Code ran on each frame of game
  update() {
    this.body.velocity.y=0;

  }

  reverseDirection(obsNav) {
    if(this.body.position.x < obsNav.body.position.x && this.vel > 0)
      this.vel = -200;
    if(this.body.position.x > obsNav.body.position.x && this.vel < 0)
      this.vel = 200;

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

export default Movableobstacle;
