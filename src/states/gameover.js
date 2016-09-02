class Gameover extends Phaser.State {

  constructor() {
    super();
  }

  create() {

    //add text
    this.gameoverText = this.add.text(this.game.camera.width / 2, this.game.camera.height / 2, "You died :(\nClick to restart", {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    this.gameoverText.anchor.set(0.5);

    this.input.onDown.add(this.onInputDown, this);

    //prevent accidental click-thru by not allowing state transition for a short time
    this.canContinueToNextState = false;
    this.game.time.events.add(Phaser.Timer.SECOND * .5, function(){ this.canContinueToNextState = true; }, this);
  }

  update() {}

  onInputDown () {
    if(this.canContinueToNextState){
      this.game.state.start('level1');
    }
  }
}

export default Gameover;
