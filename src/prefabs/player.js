
//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Player extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {
    super(game, x, y, 'crosshairs', frame);

    //custom attributes
    this.accelerationMagnitude = 1400;
    this.jumping = false;
    this.keyPressCount = 0;
    this.isFacingRight = true;

    //physics initialization
    this.game.physics.arcade.enableBody(this);
    this.body.maxVelocity = new Phaser.Point(400, 1000);
    this.friction = 1400;
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
    this.game.camera.follow(this);
    const controls = this.game.global.controls;
    if (controls.down.isDown) {
      this.body.velocity.y += this.accelerationMagnitude * this.game.time.physicsElapsed;
    }
    if (controls.left.isDown && (controls.right.isUp || (controls.left.timeDown > controls.right.timeDown))) {
      this.body.velocity.x -= this.accelerationMagnitude * this.game.time.physicsElapsed;
      this.isFacingRight = false;
    }
    else if (controls.right.isDown) {
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
    }
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
