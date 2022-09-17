var side="";
var joyStick;
//all  animation
function allAnimations(scene) {
  scene.anims.create({
    key: "turn",
    frames: scene.anims.generateFrameNumbers("coin"),
    frameRate: 10,
    repeat: -1
  })
  scene.anims.create({
    key: "left",
    frames: scene.anims.generateFrameNumbers("character", { frames: [4, 5, 6, 7] }),
    frameRate: 10,
    repeat: -1
  })
  scene.anims.create({
    key: "right",
    frames: scene.anims.generateFrameNumbers("character", { frames: [8, 9, 10, 11] }),
    frameRate: 10,
    repeat: -1
  })



}
//player jump ability
function jumpAbility() {
  cursors.up.on('down', function() {
    doJump()
  }, this);
}

//playermovement function
function playerMovement() {

  if (cursors.right.isDown || side.includes("right")) {
    moveRight();
  }
  else if (cursors.left.isDown || side.includes("left")) {
    moveLeft();
  }
  else { 
    player.body.setVelocityX(0);
    player.anims.stop(null, true);

  }
}

//showing hud function
function showHud(scene) {
  scene.add.image(10, 12, "money");
  scoreboard = scene.add.text(20, 6, "0");
  scene.add.image(50, 12, "jump");
  jumpBoard = scene.add.text(57, 6, jumpCount);
}
function increaseScore(amount) {
  score = score + amount;
  scoreboard.text = `${score}`;
  scoreNumberfly.fly(player.x, player.y - 20, player.x, player.y - 70, "+ 1$", 1000);
}

//check overlap
function checkOverlap(spriteA, spriteB) {
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();
  return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
}
function playerDeath() {
  if (player.y > 315) {
    player.scene.scene.start("MainGame");


  }
}
function moveLeft() {
  player.body.setVelocityX(-80);
  player.play("left", true)

}
function moveRight() {
  player.body.setVelocityX(80);
  player.play("right", true)
}
function doJump() {
  if (jumpCount > 0) {
    
    player.body.setVelocityY(-260);
    jumpCount--;
    jumpBoard.text = `${jumpCount}`;
  }
}
function renderFlag(scene, totalcoins, x, y) {
  let flag_ = scene.add.image(x, y, "flag").setScale(2);
  scene.add.text(x - 21, y + 22, totalcoins);
  scene.physics.add.existing(flag_, true);
  let mycollider=scene.physics.add.overlap(player, flag_, gameWin);

}
function gameWin(bodyA) {
  if (score>=bodyA.scene.totalcoins)
  {swal("You won the game ", "success");
bodyA.scene.scene.remove("MainGame")
   document.write("goodbye")
}}

function createJoystick(scene,x,y){
  joyStick = scene.plugins.get('rexvirtualjoystickplugin').add(this, {
                x: x,
                y: y,
                radius: 50,
                base: scene.add.circle(0, 0, 50, 0x888888),
                thumb: scene.add.circle(0, 0, 20, 0xcccccc),
            })
            .on('update',dumpJoyStickState, this);
}

function dumpJoyStickState(){
    var cursorKeys = joyStick.createCursorKeys();
        side = 'Key down: ';
        for (var name in cursorKeys) {
            if (cursorKeys[name].isDown) {
                side += `${name}`;
              console.log(side)
            }
        }
}