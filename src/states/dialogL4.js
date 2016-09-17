import Dialog from "./dialog";

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class DialogL4 extends Dialog {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.dialogs = [
      `So now, after putting an end to rebellions, and terrorism, Polo returned to the Kingdom.`,
      `There was still unrest. People considered him to be a tyrant, rather than a savior.`,
      `"You can't change the world without getting your hands dirty.", he thought to himself.`,
      `Then one day, he announced a parade, to announce to the world that he was their ruler.`,
      `During the parade, there was a sudden unrest, and a man emerged from the crowd, a man wearing a Guy Fawkes mask.`,
      `He raced towards Polo, and killed all the guards that stood in his way.`,
      `Then, he faced Polo. Polo, then faced his opponent. In an instant, it was over.`,
      `Polo looked down. There was a sword sticking into his chest, and a red stain rapidly spreading.`,
      `Polo the Panda fell at last.`,
      `The world was glad their "Tyrant King" had died, and rejoiced.`,
      `There was peace, at last.`
    ];
    this.nextLevel = "gameover";
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

export default DialogL4;
