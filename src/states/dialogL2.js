import Dialog from "./dialog";

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class DialogL2 extends Dialog {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.dialogs = [
      "Polo, now having put an end to a significant amount of criminals in the world, expected peace.",
      "However, he was disappointed. There was no peace.",
      "The situation was the same as before.",
      "People still fought over land, water and other resources.",
      "He thought that he was on the path to peace but suddenly, he felt doubt.",
      "What if he was not leading the world to peace?",
      "What if he was becoming the kind of person he was trying to stop?",
      "Pondering his actions, he proceeded to the Asian Jungle, to take the Yakuza's lands."
    ];
    this.nextLevel = "level3";
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

export default DialogL2;
