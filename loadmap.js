function loadtiled_map(scene) {


  const map = scene.make.tilemap({ key: "map2" });
  const tileset = map.addTilesetImage("17170spc", "tiles")
  const layer1 = map.createLayer("mainlayer", tileset, 0, 0);
  layer1.setCollisionByProperty({ collides: true });
  // layer1.setCollison
  map.setCollision([38]);

  scene.physics.add.collider(player, layer1);
  //trying to add reverse functionality in backward tiles
  layer1.setTileIndexCallback([171, 172], reverse)

}
function reverse() {
  player.body.velocity.x -= 81;
}