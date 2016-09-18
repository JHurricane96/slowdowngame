import Player from "../../prefabs/player";
import Obstacle from "../../prefabs/obstacle";
import Trap from "../../prefabs/obstacle2";
import EnemyBoomerang from "../../prefabs/enemy2";
import EnemyNav from "../../prefabs/enemyNav";
import Goal from "../../prefabs/goal";
import EnemyBasic from "../../prefabs/enemyBasic";
import Sword from "../../prefabs/sword";
import obstacles from "./obstacles.js";
import traps from './traps.js';
import enemyNavs from "./enemyNavs";
import enemies from "./enemies";
import spl from "./enemy1";
import Score from "../../utils/scoreboard";


var flag =0 , bgm;

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Level2 extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);

  }

  //Load operations (uses Loader), method called first
  preload() {

    this.game.load.audio('raygun', '../../../assets/audio/dropSword.mp3');
    this.game.load.audio('loudbang', '../../../assets/audio/loudBang.mp3');
    this.game.load.audio('bgm', '../../../assets/audio/desert.mp3');
    //console.log("GGGGGGGGG");

  }

  //Setup code, method called after preload
  create() {
    this.game.world.setBounds(0, 0, 4000, 3500);
    this.world.width = 5000;
    this.world.height = 5080;
    this.game.physics.arcade.gravity.y = 1400;
    this.game.add.tileSprite(0,0,4000,3500,'desert');

    var raygun = this.game.add.audio('raygun');
    var loudbang = this.game.add.audio('loudbang');
    bgm = this.game.add.audio('bgm');

    this.game.sound.setDecodedCallback([ bgm ], () => {
      bgm.loopFull();
      console.log("GGGGGGGGG");
    }, this);

    this.game.sound.setDecodedCallback([ raygun , loudbang ], () => {
    var key = this.game.input.keyboard.addKeys({ raygun: Phaser.Keyboard.X });
      key.raygun.onDown.add(() => { raygun.play(); }, this);
    }, this);
    this.bitmap = this.game.add.bitmapData(window.innerWidth, window.innerHeight);
    this.bitmapImg = this.bitmap.addToWorld(0, 0);

    this.player = new Player(this.game,50,650);//50700
    this.game.add.existing(this.player);
    this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);

    this.score=new Score(this.game);

    const sword = new Sword(this.game, Math.abs(this.player.width / 2), this.player.height / 2);
    sword.x += sword.width / 2;
    sword.kill();
    this.player.sword = sword;
    this.player.addChild(sword);

    this.obstacles = [];
    for (const obstacle of obstacles) {
      const newObstacle = new Obstacle(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "platform");
      this.game.add.existing(newObstacle);
      this.obstacles.push(newObstacle);
    }
    this.traps = [];
    for (const obstacle of traps) {
      const newTrap = new Trap(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "crosshairs");
      this.game.add.existing(newTrap);
      this.traps.push(newTrap);
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

    this.goal= [];
    const goal = new Goal(this.game , 1800 , 2900 , 146 , 88 , "goal");
    this.game.add.existing(goal);
    this.goal.push(goal);

    for (const enemy of spl) {
      const newEnemy = new EnemyBoomerang(this.game, enemy.x, enemy.y, enemy.vel);
      newEnemy.cacheObstacles(this.obstacles);
      newEnemy.cachePlayer(this.player);
      this.game.add.existing(newEnemy);
      this.enemies.push(newEnemy);
    }

    this.bullets = [];
    
  }
  //Code ran on each frame of game
  update() {
    this.bitmapImg.x = this.game.camera.x;
    this.bitmapImg.y = this.game.camera.y;
    this.handleBulletCollisions();
    this.game.physics.arcade.overlap(this.enemies, this.player, this.player.handleOverlap, null, this.player);
    this.player.isGrounded = false;
    this.game.physics.arcade.collide(this.player, this.obstacles, this.player.grounded, null, this.player);
    this.game.physics.arcade.overlap(this.player, this.traps, this.player.trapped, null, this.player);
    this.game.physics.arcade.collide(this.enemies, this.obstacles);
    this.game.physics.arcade.collide(this.enemies, this.enemyNavs, (enemy, enemyNav) => {
      enemy.reverseDirection(enemyNav);
    });

    this.game.physics.arcade.collide(this.player, this.goal, () => {
      this.score.advanceLevel();
      this.game.state.start("level3");
    }, null, this);

    const remainingEnemies = [];

    for (const enemy of this.enemies) {
      if (this.game.physics.arcade.overlap(this.player.sword, enemy, (sword, enemy) => {
          enemy.eliminate();
          if(enemy.constructor.name == "EnemyBasic"){
            this.score.killEnemy("basic");
          }
          else if(enemy.constructor.name == "EnemyBoomerang"){
            this.score.killEnemy("boomerang");
          }
        }) === false) {
        remainingEnemies.push(enemy);
      }
    }

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
      if( enemy.constructor.name == "EnemyBoomerang" || enemy.isShooting == true ){ 
          console.log(enemy.constructor.name , enemy.isShooting);
          this.game.physics.arcade.collide(enemy.weapon.bullets, this.obstacles, (obstacle, bullet) => {
            if(this.player.body.position.x > enemy.body.position.x )
              bullet.body.velocity.x = -3000;
            else
              bullet.body.velocity.x = 3000;
            if(!flag){
              bullet.body.velocity.y *= -1 ;
              flag =1 ;
            }
            console.log(bullet.body.velocity.y);
        });
      }

      else if(enemy.isShooting == true){
        this.game.physics.arcade.collide(enemy.weapon.bullets, this.obstacles, (obstacle, bullet) => {
          bullet.kill();
        });
      }

      if(!enemy.isShooting){
        enemy.weapon.bulletSpeed = 3000;
        flag =0 ;
        this.game.physics.arcade.collide(enemy.weapon.bullets, this.obstacles, (obstacle, bullet) => {
          bullet.kill();
        });
      }
      this.game.physics.arcade.collide(enemy.weapon.bullets, this.player, (player, bullet) => {
        bullet.kill();
        this.score.die();
        this.game.state.start("gameover");
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

export default Level2;
