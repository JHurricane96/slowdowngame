import Player from "../../prefabs/player";
import Obstacle from "../../prefabs/obstacle";
import EnemyNav from "../../prefabs/enemyNav";
import EnemyBasic from "../../prefabs/enemyBasic";
import Sword from "../../prefabs/sword";
import obstacles from "./obstacles";
import enemyNavs from "./enemyNavs";
import enemies from "./enemies";

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Level1 extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);

  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {
    this.game.world.setBounds(0, 0, 19200, 1080);
    this.world.width = 1920;
    this.world.height = 1080;
    this.game.physics.arcade.gravity.y = 1400;

    this.bitmap = this.game.add.bitmapData(this.world.width, this.world.height);
    this.game.add.image(0, 0, this.bitmap);

    this.player = new Player(this.game, this.game.world.centerX, this.game.world.centerY);
    this.game.add.existing(this.player);
    this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);

    //const sword = new Sword(this.game, this.player.body.position.x + this.player.width, this.player.body.position.y);
    const sword = new Sword(this.game, Math.abs(this.player.width / 2), this.player.height / 2);
    sword.y -= sword.height / 2;
    sword.kill();
    this.player.sword = sword;
    this.player.addChild(sword);
    //this.game.add.existing(sword);

    this.obstacles = [];
    for (const obstacle of obstacles) {
      const newObstacle = new Obstacle(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "crosshairs");
      this.game.add.existing(newObstacle);
      this.obstacles.push(newObstacle);
    }

    this.enemyNavs = [];
    for (const enemyNav of enemyNavs) {
      const newEnemyNav = new EnemyNav(this.game, enemyNav.x, enemyNav.y, enemyNav.width, enemyNav.height);
      this.game.add.existing(newEnemyNav);
      this.enemyNavs.push(newEnemyNav);
    }

    this.enemies = [];
    for (const enemy of enemies) {
      const newEnemy = new EnemyBasic(this.game, enemy.x, enemy.y, enemy.vel);
      newEnemy.cacheObstacles(this.obstacles);
      newEnemy.cachePlayer(this.player);
      this.game.add.existing(newEnemy);
      this.enemies.push(newEnemy);
    }

    this.bullets = [];
  }

  //Code ran on each frame of game
  update() {
    this.handleBulletCollisions();
    this.game.physics.arcade.collide(this.player, this.obstacles, this.player.grounded, null, this.player);
    this.game.physics.arcade.collide(this.enemies, this.obstacles);
    this.game.physics.arcade.collide(this.enemies, this.enemyNavs, (enemy, enemyNav) => {
      enemy.reverseDirection(enemyNav);
    });
    const remainingEnemies = [];
    for (const enemy of this.enemies) {
      if (this.game.physics.arcade.overlap(this.player.sword, enemy, (sword, enemy) => {
          enemy.eliminate();
        }) === false) {
        remainingEnemies.push(enemy);
      }
    }
    //this.game.physics.arcade.collide(this.player, this.enemies);

    const linesToPlayer = [];
    for (const enemy of this.enemies) {
      if (enemy.losToPlayer !== null && enemy.isShooting === false) {
        linesToPlayer.push(enemy.losToPlayer);
      }
    }
    this.drawLines(linesToPlayer);
    this.enemies = remainingEnemies;
  }

  //Handles bullet collisions with obstacles and player
  handleBulletCollisions() {
    for (const enemy of this.enemies) {
      this.game.physics.arcade.collide(enemy.weapon.bullets, this.player, (player, bullet) => {
        bullet.kill();
        this.game.state.start("gameover");
      }, null, this);
      this.game.physics.arcade.collide(enemy.weapon.bullets, this.obstacles, (obstacle, bullet) => {
        bullet.kill();
      });
    }
  }

  //Draws LOS's to player
  drawLines(linesToPlayer) {
    this.bitmap.context.clearRect(0, 0, this.world.width, this.world.height);
    for (const line of linesToPlayer) {
      this.bitmap.context.strokeStyle = "red";
      this.bitmap.context.beginPath();
      this.bitmap.context.moveTo(line.start.x, line.start.y);
      this.bitmap.context.lineTo(line.end.x, line.end.y);
      this.bitmap.context.stroke();
    }
    this.bitmap.dirty = true;
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

export default Level1;
