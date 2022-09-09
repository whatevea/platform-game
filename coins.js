//making static object 
class Coins extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, "coin");
    scene.add.existing(this); //adding coin to screen
    scene.physics.add.existing(this,true);//static physics added
    this.play("turn"); //animation
    //overlap
    scene.physics.add.overlap(player,this,this.coinplayercollide)
  }
  coinplayercollide(bodyA,bodyB){
    bodyB.destroy(); //destroy body
    score++;
    scoreboard.text=`Score : ${score}`;
   scoreNumberfly.fly(player.x,player.y-20,player.x,player.y-70,"+ 1$",1000);
    player.alpha-=0.1;
  }

}