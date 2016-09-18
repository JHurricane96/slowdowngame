
//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Fire extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {
    super(game, x, y, 'fire', frame);

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
    this.animations.add('playing',[0,1],10);
    this.edges = [
      new Phaser.Line(x, y, x + 25, y),
      new Phaser.Line(x, y, x, y + 25),
      new Phaser.Line(x + 25, y, x + 25, y + 25),
      new Phaser.Line(x, y + 25, x + 25, y + 25)
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
    this.animations.play('playing');
  }

  //Returns edges
  getEdges() {
    return this.edges;
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

export default Fire;
