 import Boot from './states/boot';
 import Cold from './states/cold/coldcountry';
 import Dialog from './states/dialog';
 import DialogIntro from './states/dialogIntro';
 import Gameover from './states/gameover';
 import Level1 from './states/level2/level2';
 import Level2 from './states/level2/level2';
 import Level3 from './states/level3/level3';
 import Preloader from './states/preloader';
 import DialogL1 from './states/dialogL1';
 import DialogL2 from './states/dialogL2';
 import DialogL3 from './states/dialogL3';
 import DialogL4 from './states/dialogL4';
 import Leaderboard from './states/leaderboard';
 import Loginpage from './states/loginpage';
 require("./hbs/leaderboard");

const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'panda-game');

 game.state.add('boot', new Boot());
 game.state.add('cold', new Cold());
 game.state.add('dialog', new Dialog());
 game.state.add('dialogIntro', new DialogIntro());
 game.state.add('gameover', new Gameover());
 game.state.add('level1', new Level1());
 game.state.add('level2', new Level2());
 game.state.add('level3', new Level3());
 game.state.add('preloader', new Preloader());
 game.state.add('dialogL1', new DialogL1());
 game.state.add('dialogL2', new DialogL2());
 game.state.add('dialogL3', new DialogL3());
 game.state.add('dialogL4', new DialogL4());
 game.state.add('leaderboard', new Leaderboard());
 game.state.add('loginpage', new Loginpage());

game.state.start('boot');
