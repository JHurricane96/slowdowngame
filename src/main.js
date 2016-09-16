 import Boot from './states/boot';
 import Gameover from './states/gameover';
 import Preloader from './states/preloader';
 import Level1 from './states/level3/level3';


const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'panda-game');

 game.state.add('boot', new Boot());
 game.state.add('gameover', new Gameover());
 game.state.add('preloader', new Preloader());
 game.state.add('level3', new Level1());

game.state.start('boot');
