//all  animation
function allAnimations(scene){
scene.anims.create({
  key:"turn",
  frames:scene.anims.generateFrameNumbers("coin"),
  frameRate:10,
  repeat:-1
})
scene.anims.create({
  key:"left",
  frames:scene.anims.generateFrameNumbers("character",{frames:[4,5,6,7]}),
  frameRate:10,
  repeat:-1
})
  scene.anims.create({
  key:"right",
  frames:scene.anims.generateFrameNumbers("character",{frames:[8,9,10,11]}),
  frameRate:10,
  repeat:-1
})


  
}
//player jump ability
function jumpAbility(){
      cursors.up.on('down', function() {
      if (player.body.blocked.down) {

        player.body.setVelocityY(-260);
      }
    }, this);
}

//playermovement function
function playerMovement(){
  
    if (cursors.right.isDown) {
      player.body.setVelocityX(80);
      player.play("right",true)
    }
   else if (cursors.left.isDown) {
      player.body.setVelocityX(-80);
            player.play("left",true)

    }
  else{
			    player.anims.stop(null, true);
		player.body.setVelocityX(0);
		
		}
}
//player and coin collision
function playerCoinCollision(scene){
scene.physics.add.overlap(player,scene.coin,coinplayercollide)

}



function coinplayercollide(bodyA,bodyB){
 //destroy the game object
  bodyB.destroy();
  //increase the score
  score++;
  scoreboard.text=`Score : ${score}`;
 scoreNumberfly.fly(player.x,player.y-20,player.x,player.y-70,"+1",2000);
}

