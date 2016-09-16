
//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Stalagmite extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name,frame) {
    super(game, x, y, 'crosshairs',frame);
    this.name=name;
    this.x=x;
    this.y=y;
    this.game.physics.arcade.enableBody(this);
    this.body.immovable=true;
    this.body.allowGravity=false;


  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {

  }

  //Code ran on each frame of game
  update() {


  }

  fallOnPlayer()
  {
    this.body.allowGravity=true;
  }
  killstalag()
  {
   this.kill();
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

export default Stalagmite;
