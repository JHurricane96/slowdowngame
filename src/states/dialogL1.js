import Dialog from "./dialog";

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class DialogL1 extends Dialog {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.dialogs = [
      "So now, Polo, after discovering information about the terrorists' main hideouts, decided to hunt them all down, and kill them at the source.",
      "The first place, was in the Australian Desert, known for the Calabrian Mafia."
    ];
    this.nextLevel = "level2";
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Code ran on each frame of game
  update() {

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

export default DialogL1;
