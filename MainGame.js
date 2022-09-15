class MainGame extends Phaser.Scene {//Creates the class for this scene

  constructor() {//the constructor for the class
    super({ key: 'MainGame' });
  }

  preload() {
    this.load.image('money', "assets/money.png");
    this.load.image('jump', "assets/jump.png");
    this.load.image('shop','assets/shop.png');
    this.load.image('background', "assets/ai_gen_bck.jpg");
    this.load.image('tiles', "assets/transparent_tiles.png");
     this.load.tilemapTiledJSON("map2", "assets/newmap3.json");

    this.load.spritesheet("coin", "assets/coin.png", { frameHeight: 17, frameWidth: 17 });
    this.load.spritesheet("character", "assets/char33x47.png", { frameHeight: 47, frameWidth: 33 });
 //loading powerups
        this.load.image('bag', "assets/bag.png");
        this.load.image('ball', "assets/ball.png");
        this.load.image('bottle', "assets/bottle.png");
        this.load.image('flower', "assets/flower.png");
        this.load.image('phone', "assets/phone.png");
      this.load.image("flag",'assets/flag.png');
  }
  

  create() {
    
    this.totalcoins=20;
    //adding the flying emo code
   scoreNumberfly=new FlyingEmo(this,16) ;
    
    //adding background and animating it
    // this.add.image(0, 0, "background").setOrigin(0, 0).setScale(2);

      
    //creating a player 
    player = this.add.sprite(17, 67, "character",2);
    this.physics.add.existing(player);
  player.body.setSize(20,42)
    
    player.body.collideWorldBounds= true;
    loadtiled_map(this);  

    
    cursors = this.input.keyboard.createCursorKeys();

    jumpAbility() //jump ability
    allAnimations(this); //all animation
  
    //making hud
    showHud(this);
  
  //random 10 coins
    for(let i=1;i<10;i++){
        let coin=new Coins(this,(i*20)+100,20)
    }
 //calling inventory and 1 item showing
   inventory=new Inventory(this,config.height-55,7);
  let p1=new Powerups(this,130,100,"flower");
  inventory.addItem("flower");
    
    //adding shop 
shop=this.add.image(170,130,"shop").setDepth(-1);
        renderFlag(this,this.totalcoins,635,100);

}

  update() {
     playerMovement() //normal player movement code
    playerDeath();


  }

}