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
  }

  die() {
    this.game.global.score -= 10;
  }
}

export default Scoreboard;