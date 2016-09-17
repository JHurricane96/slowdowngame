import Player from "../../prefabs/player";
import Obstacle from "../../prefabs/obstacle";
import EnemyNav from "../../prefabs/enemyNav";
import EnemyBasic from "../../prefabs/enemyBasic";
import Sword from "../../prefabs/sword";
import obstacles from "./obstacles";
import enemyNavs from "./enemyNavs";
import enemies from "./enemies";
import Fire from "../../prefabs/fire"
import fires from "./fires"
import WaveEnemy from "../../prefabs/waveEnemy"
import waveEnemies from "./waveEnemies"
//import GroupEnemy from "../../prefabs/groupEnemy"
//import groupEnemies from "./groupEnemies"

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Level1 extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);

  }

  //Load operations (uses Loader), method called first
  preload() {
     this.game.load.audio('raygun', '../../../assets/audio/dropSword.mp3');
     this.game.load.audio('loudbang', '../../../assets/audio/loudBang.mp3');
  }

  //Setup code, method called after preload
  create() {
    this.game.world.setBounds(0, 0, 2575, 7000);
    this.world.width = 2575;
    this.world.height = 7000;
    this.game.physics.arcade.gravity.y = 1900;

    this.bitmap = this.game.add.bitmapData(window.innerWidth, window.innerHeight);
    //this.game.add.image(0, 0, this.bitmap);
    this.bitmapImg = this.bitmap.addToWorld(0, 0);

     var raygun = this.game.add.audio('raygun');
    var loudbang = this.game.add.audio('loudbang');

    this.game.sound.setDecodedCallback([ raygun , loudbang ], () => {
    var key = this.game.input.keyboard.addKeys({ raygun: Phaser.Keyboard.X });

    key.raygun.onDown.add(() => { raygun.play(); }, this);

  }, this);

    this.player = new Player(this.game, 900, 6800);
    this.game.add.existing(this.player);
    this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);

    const sword = new Sword(this.game, Math.abs(this.player.width / 2), this.player.height / 2);
    sword.x += sword.width / 2;
    sword.kill();
    this.player.sword = sword;
    this.player.addChild(sword);

    this.obstacles = [];
    for (const obstacle of obstacles) {
      if(obstacle.type == "tree")
      	var newObstacle = new Obstacle(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "tree");
     
      else if (obstacle.type == "floor")
      	var newObstacle = new Obstacle(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "floor");
      else if(obstacle.type == "top")
		var newObstacle = new Obstacle(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "top");      
	  else {
		var newObstacle = new Obstacle(this.game, obstacle.x, obstacle.y, obstacle.width, obstacle.height, "leaves");
        newObstacle.body.checkCollision.down = false;
	  }

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

    this.waveEnemies = [];
    for (const enemy of waveEnemies) {
      const newEnemy = new WaveEnemy(this.game, enemy.position1.x, enemy.position1.y, enemy.vel, enemy.position1, enemy.position2, 1);
      newEnemy.cacheObstacles(this.obstacles);
      newEnemy.cachePlayer(this.player);
      this.game.add.existing(newEnemy);
      this.waveEnemies.push(newEnemy);
    }    


  //ADD GROUP ENEMIES CODE


    this.fires = [];
    for (const fire of fires) {
      const newFire = new Fire(this.game, fire.x, fire.y);
      this.game.add.existing(newFire);
      this.fires.push(newFire);    	
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

    this.game.physics.arcade.collide(this.player, this.fires, (player, fires) => {
        fires.kill();
        this.game.state.start("gameover");
      }, null, this);

    this.game.physics.arcade.collide(this.enemies, this.obstacles);
    this.game.physics.arcade.collide(this.enemies, this.enemyNavs, (enemy, enemyNav) => {
      enemy.reverseDirection(enemyNav);
    });
    this.game.physics.arcade.collide(this.waveEnemies, this.obstacles);
    this.game.physics.arcade.collide(this.waveEnemies, this.enemyNavs, (enemy, enemyNav) => {
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

    for (const waveEnemy of this.waveEnemies) {

      this.game.physics.arcade.collide(waveEnemy.weapon.bullets, this.player, (player, bullet) => {
        bullet.kill();
        this.game.state.start("gameover");
      }, null, this);    	
      
      this.game.physics.arcade.collide(waveEnemy.weapon.bullets, this.obstacles, (obstacle, bullet) => {
        bullet.kill();
        if(waveEnemy.currentPos == 1) {
        	waveEnemy.x = waveEnemy.pos2.x;
        	waveEnemy.y = waveEnemy.pos2.y;
        	waveEnemy.currentPos = 2;
        } else {
        	waveEnemy.x = waveEnemy.pos1.x;
        	waveEnemy.y = waveEnemy.pos1.y;
        	waveEnemy.currentPos = 1;        	
        }

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
