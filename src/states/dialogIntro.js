import Dialog from "./dialog";

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class DialogIntro extends Dialog {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.dialogs = [
    "Once upon a time, there lived a panda. His name was Polo, Polo the Panda people called him.",
    "That time, like other times, had strife, war, and terrorism. Terrorism was on the rise, and it posed a problem to Polo, and his world.",
    "Polo the Panda did not like that.",
    "He felt that this would not end unless someone took some drastic measures and hunted the terrorists down.",
    "Pandas are were general peaceful creatures, and it is against their nature to cause violence.",
    "But Polo was no ordinary panda.",
    "He decided that he would put an end to the terrorism, and all the problems caused by people of different cultures' conflicting desires.",
    "His first thought was to go to a big city, where there was a high risk of terrorism, and figure out how to stop them.",
    "He decided he would be a good and kind ruler, and that he could take the people of the world to a peaceful time."
    ];
    this.nextLevel = "level1";
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

export default DialogIntro;
