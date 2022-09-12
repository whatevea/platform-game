const config = {
    type: Phaser.CANVAS,//There is also phaser.canvas and phaser.webgl, but phaser.auto just does whatever is available. So it will try to do webgl, and if that doesn't work, it will do canvas. 
    width: 752,
    height: 416,
    backgroundColor: 0x000000,
  pixelArt:true,
  scale:{mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH},
   physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 640 },
          debug:false
        }
    },
    scene: 
      [ MainGame ]
    }//this create a variable called "config"


var game = new Phaser.Game(config);
var player;
var cursors;
var score=0;
var scoreboard;
var scoreNumberfly;
var inventory;
var jumpCount=8;
var jumpBoard;
// var playertouchingshop;
var shop;
//"config" is then used to specify the properties of the game. 
