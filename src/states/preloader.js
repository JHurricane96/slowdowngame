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
    this.game.load.image('goal', 'assets/goal.png');
    this.game.load.image('floor', 'assets/floor3.png');
    this.game.load.image('top', 'assets/top3.png');
    this.game.load.image('leaves', 'assets/final.png');
    this.game.load.image('leavesSmall', 'assets/final_100.png');
    this.game.load.image('crosshairs2', 'assets/crosshair_red_small2.png');
    this.game.load.image('tree', 'assets/tree.png');
    this.game.load.image('block2', 'assets/block2.png');
    this.game.load.image("bullet", "assets/bullet.png");
    this.game.load.spritesheet('snowflakes', 'assets/snowflakes.png', 16, 16);
    this.game.load.spritesheet('snowflakes_large', 'assets/snowflakes_large.png', 64, 64);
    this.game.load.spritesheet('panda','assets/pandawalk.png', 41.75,80.5);
    this.game.load.audio('bullet', 'assets/audio/bullet.mp3');
    this.game.load.spritesheet('fire','assets/fire.png',37,50);
    this.game.load.image('crate','assets/crate.jpg');
    this.game.load.image("building","assets/building.jpg");
    this.game.load.image("brick","assets/brick.jpg");
    this.game.load.image('crossbow',"assets/crossbow2.png");
    //this.game.load.image('fire2',)
    this.game.load.spritesheet('enemybasic','assets/normalenemy1backup.png',39.33,70);
    this.game.load.spritesheet('waveenemy','assets/waveenemybackup.png',39.33,70);
    this.game.load.image('waves','assets/waves.png',16,25);

    this.game.load.image('stalagmite','assets/stalagmite1.png',42,35);
     this.game.load.image('snowplatform','assets/snowplatform.jpg',219,111);
    this.game.load.image('bg snow','assets/snowback.jpg',1322,1080);
    this.game.load.image('snowobstacle','assets/snow.jpg',110,108);
    this.game.load.image('vanishingobstacle','assets/block.jpg',110,108);
    this.game.load.image('desert','assets/desert2.jpg',3508,2480);
    this.game.load.image('bullet2','assets/bullet2.jpg',25,25);

    this.game.load.image('platform','assets/platform2.png',30,27);
    this.game.load.image('background','assets/backdrop2.jpg',1920,1080);

    this.game.load.audio('raygun', 'assets/audio/dropSword.mp3');
    this.game.load.audio('loudbang', 'assets/audio/loudBang.mp3');
    this.game.load.audio('bgm', 'assets/audio/desert.mp3');
    this.game.load.audio('coldbgm','assets/Blue-Ridge.mp3');
    this.game.load.audio('forestBgm','assets/audio/Lost-Jungle.mp3');
    this.game.load.audio('urBGM','assets/audio/level1.mp3');
  }

  onLoadComplete() {
    this.game.state.start('loginpage');
  }
}

export default Preloader;
