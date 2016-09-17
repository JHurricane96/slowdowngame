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
    else if(enemyType == "wave"){
      this.game.global.score+=100;
    }
    else if(enemyType == "boomerang"){
      this.game.global.score+=100;
    }
  }

  die() {
    this.game.global.score -= 10;
  }
}

export default Scoreboard;