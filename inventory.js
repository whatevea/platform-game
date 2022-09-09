class Inventory {
  constructor(scene, limit) {
    this.scene = scene;
    this.height = 47;
    this.width = config.width - 4;
    this.limit = limit;
    let x = 2
    let y = 240
    //make a box of height and width 
    let graphics = scene.add.graphics();
    var thickness = 1;
    var color = 0x00ff00;
    var alpha = 1;
    graphics.lineStyle(thickness, color, alpha)
    graphics.strokeRect(x, y, this.width, this.height)
  

  for(let i = 0; i< limit; i++) {
  let graphics = scene.add.graphics();
  graphics.strokeRect((i*40)+2, y + 2, 40, 42)
}

    
}

  
addItem(location,item){
let topleftcornerX=((location-1)*40)+3;
let y=244;
let height=38;
let width=38;
this.scene.add.sprite(topleftcornerX,y,item).setOrigin(0,0)
}

  
}

// document.canvas.addEventListener("click", () => {
//   let mousex = event.clientX; // Gets Mouse X
//   let mousey = event.clientY; // Gets Mouse Y
//   console.log([mousex, mousey]); // Prints data
// });

  