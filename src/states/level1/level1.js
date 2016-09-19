import Player from "../../prefabs/player";
import Obstacle from "../../prefabs/obstacle";
import EnemyNav from "../../prefabs/enemyNav";
import EnemyBasic from "../../prefabs/enemyBasic";
import Sword from "../../prefabs/sword";
import Crate from "../../prefabs/crate";
import Building from "../../prefabs/building";
import Satellite from "../../prefabs/satellite";
import Goal from "../../prefabs/goal";
import Score from "../../utils/scoreboard";

import obstacles from "./obstacles";
import enemyNavs from "./enemyNavs";
import enemies from "./enemies";
import crates from "./crates";
import buildings from "./buildings";
import satellites from "./satellites";
import goals from "./goals";

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Level1 extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);

  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preloa
  create() {
    this.game.world.setBounds(0, 0, 14800, 1080);
    this.world.width = 1920;
    this.world.height = 1080;
    this.game.physics.arcade.gravity.y = 1400;

    this.bitmap = this.game.add.bitmapData(window.innerWidth, window.innerHeight);
    this.bitmapImg = this.bitmap.addToWorld(0, 0);
  	this.game.stage.backgroundColor = "#02AEF0";
    this.player = new Player(this.game, 500, this.game.world.centerY);
    this.game.add.existing(this.player);
    this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);
    const sword = new Sword(this.game, Math.abs(this.player.width / 2), this.player.height / 2);
    sword.x += sword.width / 2;
    sword.kill();
    this.player.sword = sword;
    this.player.addChild(sword);
    this.score = new Score(this.game);
    //this.game.add.existing(sword);
    var loudbang = this.game.add.audio('loudbang');
    var raygun = this.game.add.audio('raygun');
    var urBGM = this.game.add.audio('urBGM');




  this.game.sound.setDecodedCallback([ raygun , loudbang ], () => {
    var key = this.game.input.keyboard.addKeys({ raygun: Phaser.Keyboard.X });
    key.raygun.onDown.add(() => { raygun.play(); }, this);
    this.game.sound.setDecodedCallback([ urBGM ], () => { 
      urBGM.loopFull();
    },this);
  }, this);

    this.satellites = [];
    for (const satellite of satellites) {
      const newSatellite = new Satellite(this.game, satellite.x, satellite.y, satellite.width, satellite.height, "crossbow");
      this.game.add.existing(newSatellite);
      this.satellites.push(newSatellite);
    }

    this.obstacles = [];
    for (const obstacle of obstacles.slice(0,16)) {
      const newObstacle = new Obstacle(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "brick");
      this.game.add.existing(newObstacle);
      this.obstacles.push(newObstacle);
    }
    
    this.obstacles = [];
    for (const obstacle of obstacles) {
      const newObstacle = new Obstacle(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "brick");
      this.game.add.existing(newObstacle);
      this.obstacles.push(newObstacle);
    }

    this.crates = [];
    for (const crate of crates) {
      const newCrate = new Crate(this.game, crate.x, crate.y, crate.width, crate.height, "crate");
      this.game.add.existing(newCrate);
      this.crates.push(newCrate);
    }
    this.buildings = [];
    for (const building of buildings) {
      const newBuilding = new Building(this.game, building.x, building.y, building.width, building.height, "building");
      this.game.add.existing(newBuilding);
      this.buildings.push(newBuilding);
    }
    
    this.goals = [];
    for (const goal of goals) {
      const newGoal = new Goal(this.game, goal.x, goal.y, goal.width, goal.height, "goal");
      this.game.add.existing(newGoal);
      this.goals.push(newGoal);   
    }
    this.enemyNavs = [];
    for (const enemyNav of enemyNavs) {
      const newEnemyNav = new EnemyNav(this.game, enemyNav.x, enemyNav.y, enemyNav.width, enemyNav.height);
      this.game.add.existing(newEnemyNav);
      this.enemyNavs.push(newEnemyNav);
    }

    this.enemies = [];
    for (const enemy of enemies) {
      const newEnemy = new EnemyBasic(this.game, enemy.x, enemy.y, enemy.vel, "bullet2");
      newEnemy.cacheObstacles(this.obstacles);
      newEnemy.cachePlayer(this.player);
      this.game.add.existing(newEnemy);
      this.enemies.push(newEnemy);

//    this.game.add.tileSprite(0,0,1920,1080,'background');

    this.bullets = [];
  }
}
  //Code ran on each frame of game
  update() {
    this.bitmapImg.x = this.game.camera.x;
    this.bitmapImg.y = this.game.camera.y;
    this.handleBulletCollisions();
    this.player.isGrounded = false;
    this.game.physics.arcade.collide(this.player, this.obstacles, (player, obstacle) => {
      player.grounded(player, obstacle);
      player.resetVel(player, 400, 1000);
    });
    this.game.physics.arcade.collide(this.enemies, this.obstacles);
    this.game.physics.arcade.collide(this.player, this.crates);
    this.game.physics.arcade.collide(this.player, this.buildings);
    this.game.physics.arcade.collide(this.player, this.satellites, (player, satellites) => {
      player.setVel(player,8000,23000);
    });
    this.game.physics.arcade.collide(this.goals, this.player, () => {
      this.game.advanceLevel();
      this.game.sound.stopAll();
      this.game.state.start('dialogL1');
    }, null, this);

    this.game.physics.arcade.collide(this.enemies, this.enemyNavs, (enemy, enemyNav) => {
      enemy.reverseDirection(enemyNav);
    });
    const remainingEnemies = [];
    for (const enemy of this.enemies) {
      if (this.game.physics.arcade.overlap(this.player.sword, enemy, (sword, enemy) => {
          enemy.eliminate();
          this.score.killEnemy("basic");

        }) === false) {
        remainingEnemies.push(enemy);
      }
    }
    //this.game.physics.arcade.collide
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
        this.score.die(); 
        this.game.sound.stopAll();
      }, null, this);
      this.game.physics.arcade.collide(enemy.weapon.bullets, this.obstacles, (obstacle, bullet) => {
        bullet.kill();
      });
    }
  }

  //Draws LOS's to player
  drawLines(linesToPlayer) {
    this.bitmap.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const line of linesToPlayer) {
      this.bitmap.context.strokeStyle = "red";
      this.bitmap.context.beginPath();
      this.bitmap.context.moveTo(line.start.x - this.game.camera.x, line.start.y - this.game.camera.y);
      this.bitmap.context.lineTo(line.end.x - this.game.camera.x, line.end.y - this.game.camera.y);
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
