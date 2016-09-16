class Preloader extends Phaser.State {

  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    //setup loading bar
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.setPreloadSprite(this.asset);

    //Setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  loadResources() {
    this.game.load.image('crosshairs', 'assets/crosshair_red_small.png');
    this.game.load.image('floor', 'assets/floor3.png');
    this.game.load.image('top', 'assets/top3.png');
    this.game.load.image('leaves', 'assets/final.png');
    this.game.load.image('crosshairs2', 'assets/crosshair_red_small2.png');
    this.game.load.image('tree', 'assets/tree.png');
    this.game.load.image('block2', 'assets/block2.png');
    this.game.load.image("bullet", "assets/bullet.png");
    this.game.load.image("target", "assets/target.png");
  }

  onLoadComplete() {
    this.game.state.start('level3');
  }
}

export default Preloader;
