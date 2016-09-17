
//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Player extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {
    super(game, x, y, 'panda', frame);
    this.animations.add('right',[4,5,6,7],10);
    //custom attributes
    this.accelerationMagnitude = 3000;
    this.jumping = false;
    this.keyPressCount = 0;
    this.isFacingRight = true;
    this.friction = 2000;

    //physics initialization
    this.game.physics.arcade.enableBody(this);
    this.body.maxVelocity = new Phaser.Point(400, 1000);
    this.body.collideWorldBounds = true;
    this.anchor.setTo(0.5, 0);

    //add controls
    this.game.global.controls.up.onDown.add(() => {
      this.increaseKeyPressCount();
      if (this.jumping === false) {
        this.jumping = true;
        this.body.velocity.y = -this.body.maxVelocity.y;
      }
    }, this);
    this.game.global.controls.attack.onDown.add(() => {
      this.increaseKeyPressCount();
      this.sword.revive();
    }, this);
    this.game.global.controls.down.onDown.add(this.increaseKeyPressCount, this);
    this.game.global.controls.left.onDown.add(this.increaseKeyPressCount, this);
    this.game.global.controls.right.onDown.add(this.increaseKeyPressCount, this);
    this.game.global.controls.attack.onUp.add(() => {
      this.decreaseKeyPressCount();
      this.sword.kill();
    }, this);
    this.game.global.controls.up.onUp.add(this.decreaseKeyPressCount, this);
    this.game.global.controls.down.onUp.add(this.decreaseKeyPressCount, this);
    this.game.global.controls.left.onUp.add(this.decreaseKeyPressCount, this);
    this.game.global.controls.right.onUp.add(this.decreaseKeyPressCount, this);
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {
  }

  //Code ran on each frame of game
  update() {
    //console.log(this.body.position.x,this.body.position.y);
    this.game.camera.follow(this);
    const controls = this.game.global.controls;
    if (controls.down.isDown) {
      this.body.velocity.y += this.accelerationMagnitude * this.game.time.physicsElapsed * 2.5;
    }
    if (controls.left.isDown && (controls.right.isUp || (controls.left.timeDown > controls.right.timeDown))) {
      this.animations.play('right');
      this.body.velocity.x -= this.accelerationMagnitude * this.game.time.physicsElapsed;
      this.isFacingRight = false;
    }
    else if (controls.right.isDown) {
      this.animations.play('right');
      this.body.velocity.x += this.accelerationMagnitude * this.game.time.physicsElapsed;
      this.isFacingRight = true;
    }
    else if (controls.left.isUp && this.body.velocity.x < 0) {
      this.body.velocity.x = Math.min(0, this.body.velocity.x + this.friction * this.game.time.physicsElapsed);
    }
    else if (controls.right.isUp && this.body.velocity.x > 0) {
      this.body.velocity.x = Math.max(0, this.body.velocity.x - this.friction * this.game.time.physicsElapsed);
    }

    if (this.keyPressCount === 0) {
      this.game.time.slowMotion = this.game.global.slowdown;
      this.game.global.isSlowdown = true;
    }
    else {
      this.game.time.slowMotion = 1;
      this.game.global.isSlowdown = false;
    }

    if (this.isFacingRight === false) {
      this.scale.x = -1;
    }
    else {
      this.scale.x = 1;
    }
    this.sword.update();
  }

  //Get center of player
  getCenter() {
    const pos = this.body.position.clone();
    pos.x += Math.abs(this.width / 2);
    pos.y += this.height / 2;
    return pos;
  }

  grounded(player, obstacle) {
    if (obstacle.body.position.y >= player.body.bottom) {
      this.jumping = false;
      this.body.maxVelocity = new Phaser.Point(400, 1000);
    }
  }
  setVel(player,vx,vy){
    this.body.maxVelocity = new Phaser.Point(4000, 10000);
    this.body.velocity.x=vx;
    this.body.velocity.y=-vy*this.game.time.physicsElapsed;
  }
  trapped(player, obstacle) {
    if (obstacle.body.position.y >= player.body.top) {
      //this.jumping = false;
      this.game.input.enabled = false;
      console.log(this.game.input.enabled);
      setTimeout( () => { this.game.input.enabled = true; console.log(this.game.input.enabled);} , 4000);
      
    }
  }

  handleOverlap(obstacle) {
    const width = Math.abs(this.width);
    if (obstacle.world.x > this.world.x) {
      this.world.x = obstacle.world.x - width - 1;
      this.body.velocity.x = 0;
    }
    else {
      this.world.x = obstacle.world.x + width + 1;
      this.body.velocity.x = 0;
    }
    this.body.position.copyFrom(this.toLocal(this.world, this));
  }

  increaseKeyPressCount() {
    this.keyPressCount++;
  }

  decreaseKeyPressCount() {
    this.keyPressCount--;
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

export default Player;
