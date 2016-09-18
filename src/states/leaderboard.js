

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Leaderboard extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    document.getElementById("leaderboardtologinpagebutton").addEventListener("click", () => {
      this.game.state.start("resumepage");
    });
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {
    this.div = document.getElementById("leaderboard");
    this.div.style.display = "block";
    this.game.stage.backgroundColor = "#FFF";
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          if (response.status_code === 200) {
            console.log(response);
            const scores = response.message.leaderboard.map(elt => {
              return {
                username: elt.user_fullname,
                score: elt.high_score
              }
            });
            this.div.insertAdjacentHTML("beforeend", Handlebars.templates.leaderboard({ scores: scores }));
          } 
        }
      }
    }

    request.open("POST", this.game.global.apiBaseUrl + "/games/leaderboard");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(
      "user_id=" + this.game.global.user_id +
      "&count=" + 10
    );
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
    const tables = this.div.getElementsByTagName("table");
    if (tables.length !== 0) {
      this.div.removeChild(tables[0]);
    }
    this.div.style.display = "none";
    this.game.stage.backgroundColor = "#000";
  }

}

export default Leaderboard;
