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
    graphics.lineStyle(thickness, color, alpha);
    graphics.strokeRect(x, y, this.width, this.height);
    this.storage=new Array(limit).fill({"filled":false,item:""});
    //construct boxes max limit 7 according to resolution
    for(let i = 0; i< limit; i++) {
    let graphics = scene.add.graphics();
    graphics.strokeRect((i*40)+2, y + 2, 40, 42)
}

    
}

  
addItem(item){
//gets blank location
  
let _location=this.getBlankLocation();  
let topleftcornerX=((_location)*40)+3;
let y=244;
let height=38;
let width=38;
this.scene.add.sprite(topleftcornerX,y,item).setOrigin(0,0)
  //add to this.storage JSON
  this.storage[_location]={"filled":true,"item":item}}
  


  
getBlankLocation() { return this.storage.findIndex(item=>!item.filled);
                   } ///wasted 30 min on this single line
    
getItemLocation(type){return this.storage.findIndex(item=>type==item["item"]);
                     }

  


}

    
