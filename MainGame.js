class MainGame extends Phaser.Scene {//Creates the class for this scene

  constructor() {//the constructor for the class
    super({ key: 'MainGame' });
  }

  preload() {
    this.load.image('background', "assets/ai_gen_bck.jpg");
    this.load.image('tiles', "assets/tileset_coll.png");
    this.load.tilemapTiledJSON("map", "assets/level1.json");
    this.load.spritesheet("coin", "assets/coin.png", { frameHeight: 17, frameWidth: 17 });
    this.load.spritesheet("character", "assets/char33x47.png", { frameHeight: 47, frameWidth: 33 });
 //loading powerups
        this.load.image('bag', "assets/bag.png");
        this.load.image('ball', "assets/ball.png");
        this.load.image('bottle', "assets/bottle.png");
        this.load.image('flower', "assets/flower.png");
        this.load.image('phone', "assets/phone.png");
      
  }
  

  create() {
    //adding the flying emo code
   scoreNumberfly=new FlyingEmo(this,16) ;
    
    //adding coin and animating it
    this.add.image(0, 0, "background").setOrigin(0, 0).setScale(2);
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tiles_of_mario", "tiles")
    const layer1 = map.createLayer("mainlayer", tileset, 0, 0);
    

    //creating a player 
    player = this.add.sprite(17, 67, "character",2);
    this.physics.add.existing(player);
  player.body.setSize(20,42)
    
    player.body.collideWorldBounds= true;
    this.physics.add.collider(player, layer1);
    layer1.setCollisionByProperty({ collides: true });
    // layer1.setCollison
    map.setCollision([38]);
    cursors = this.input.keyboard.createCursorKeys();

    jumpAbility() //jump ability
    allAnimations(this); //coin animation
    //making the coin
    this.coin=this.add.sprite(150,100,"coin").play("turn");
     this.physics.add.existing(this.coin,true);
    //making scoreboard
    scoreboard=this.add.text(12,12,"Score : 0");
    //player eats coin
    playerCoinCollision(this);
    
  }

  update() {
    
    playerMovement() //normal player movement code


  }

}