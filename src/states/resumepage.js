

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Resumepage extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.div = document.getElementById("resumepage");
    document.getElementById("resumepageresumebutton").addEventListener("click", () => {
      document.getElementById("scoreboard").innerHTML = this.game.global.score;
      this.game.state.start("level" + this.game.global.level);
    });
    document.getElementById("resumepagenewbutton").addEventListener("click", () => {
      this.game.global.level = 1;
      this.game.global.score = 0;
      document.getElementById("scoreboard").innerHTML = 0;
      this.game.state.start("dialogIntro");
    });
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {
    this.div.style.display = "block";
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
    this.div.style.display = "none";
  }

}

export default Resumepage;
