

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Dialog extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.dialogs = ["hello", "bye"];
    this.nextLevel = "level1";
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {
    //add text
    this.currentText = this.add.text(this.game.camera.width / 2, this.game.camera.height / 2, this.dialogs[0], {
      font: '42px Arial', fill: '#ffffff', align: 'center', wordWrap: true, wordWrapWidth: window.innerWidth * 3 / 4
    });
    this.currentText.anchor.set(0.5);
    this.currentTextIndex = 0;

    this.input.onDown.add(this.onInputDown, this);

    //prevent accidental click-thru by not allowing state transition for a short time
    this.canContinueToNextState = true;
    //this.game.time.events.add(Phaser.Timer.SECOND * .5, function(){ this.canContinueToNextState = true; }, this);
  }

  update() {

  }

  onInputDown () {
    if (this.currentTextIndex >= this.dialogs.length) {
      this.game.state.start(this.nextLevel);
    }
    else {
      this.currentTextIndex++;
      this.currentText.setText(this.dialogs[this.currentTextIndex]);
    }
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

export default Dialog;
