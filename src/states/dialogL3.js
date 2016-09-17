import Dialog from "./dialog";

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class DialogL3 extends Dialog {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.dialogs = [
      `Polo, having defeated the Yakuza, proceeded on his conquest.`,
      `He now held control over a large portion of the world, with the help of his courtesans.`,
      `The court asked him often, why he went on these missions by himself, instead of getting millitary assistance.`,
      `His reply was always "I'm in the military because I don't want people to die.".`,
      `He now was off to his final freezing area, and he knew...`,
      `He finally realized what was to be done, if true peace was to be obtained.`,
    ];
    this.nextLevel = "cold";
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

export default DialogL3;
