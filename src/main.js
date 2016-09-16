 import Boot from './states/boot';
 import Gameover from './states/gameover';
 import Preloader from './states/preloader';
 import Level3 from './states/level3/level3';
 import Level2 from './states/level2/level2';
 import Level1 from './states/level1/level1';
 import Dialog from './states/dialog';
 import Cold from './states/cold/coldcountry';


const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'panda-game');

 game.state.add('boot', new Boot());
 game.state.add('gameover', new Gameover());
 //game.state.add('nextlevel', new Nextlevel());

 game.state.add('preloader', new Preloader());
 game.state.add('level3', new Level3());
 game.state.add('level2', new Level2());
 game.state.add('level1', new Level1());
 game.state.add('dialog', new Dialog());
 game.state.add('cold', new Cold());

game.state.start('boot');
