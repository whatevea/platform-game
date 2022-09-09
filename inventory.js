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
    this.storage=new     Array(limit).fill({"filled":false,item:""});
    this.location=1;
    for(let i = 0; i< limit; i++) {
    let graphics = scene.add.graphics();
    graphics.strokeRect((i*40)+2, y + 2, 40, 42)
}

    
}

  
addItem(item){
  
if(!this.storage[this.location-1]['filled'])
let topleftcornerX=((this.location-1)*40)+3;
let y=244;
let height=38;
let width=38;
this.scene.add.sprite(topleftcornerX,y,item).setOrigin(0,0)
  //add to this.storage JSON
  this.storage[this.location-1]={"filled":true,"item":item}
this.location++;  
}

  else{
    console.log(`${this.location} is filled with ${this.storage[this.location-1]["item"]}`)
  }}
}
