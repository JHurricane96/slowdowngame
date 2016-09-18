class Scoreboard {
  constructor(game) {
    this.game = game;
  }

  getScore() {
    return this.game.global.score;
  }

  killEnemy(enemyType) {
    if (enemyType === "basic") {
      this.game.global.score += 50;
    }
    else if (enemyType === "wave") {
      this.game.global.score += 100;
    }
    else if (enemyType === "boomerang") {
      this.game.global.score += 100;
    }
  }

  die() {
    this.game.global.score = this.game.global.beginScore - 10;
    this.sendScore();
  }

  advanceLevel() {
    this.game.global.level++;
    this.game.global.beginScore = this.game.global.score;
    this.sendScore();
  }

  resetLevel() {
    this.game.global.level = 1;
  }

  resetScore() {
    this.game.global.score = 0;
    this.game.global.beginScore = 0;
  }

  sendScore() {
    const request = new XMLHttpRequest();
    /*request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          if (response.status_code === 200) {
            console.log(response);
          } 
        }
      }
    }*/

    request.open("POST", this.game.global.apiBaseUrl + "/user/updategamescore");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(
      "user_id=" + this.game.global.user_id +
      "&user_score" + this.game.global.score +
      "&user_level" + this.game.global.level +
      "&token=" + this.game.global.token
    );
  }
}

export default Scoreboard;