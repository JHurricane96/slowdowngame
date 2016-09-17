

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Leaderboard extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.div = document.getElementById("leaderboard");
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {
    this.div.style.display = "block";
    this.div.innerHTML += Handlebars.templates.leaderboard({scores:[{username:"hello", score:1}]});
    this.game.stage.backgroundColor = "#FFF";
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
    this.div.removeChild(this.div.getElementsByTagName("table")[0]);
    this.div.style.display = "none";
    this.game.stage.backgroundColor = "#000";
  }

}

export default Leaderboard;
