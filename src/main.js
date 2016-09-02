 import Boot from './states/boot';
 import Game from './states/game';
 import Gameover from './states/gameover';
 import Menu from './states/menu';
 import Preloader from './states/preloader';
 import Level1 from './states/level1/level1';


const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'panda-game');

 game.state.add('boot', new Boot());
 game.state.add('game', new Game());
 game.state.add('gameover', new Gameover());
 game.state.add('menu', new Menu());
 game.state.add('preloader', new Preloader());
 game.state.add('level1', new Level1());

game.state.start('boot');
