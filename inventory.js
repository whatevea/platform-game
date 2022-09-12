class Inventory {
  constructor(scene,y_location, limit) {
    this.scene = scene;
    this.height = 47;
    this.width = config.width - 4;
    this.limit = limit;
    let x = 2
    this.y_location=y_location;
    //make a box of height and width 
    let graphics = scene.add.graphics();
    var thickness = 1;
    var color = 0x00ff00;
    var alpha = 1;
    graphics.lineStyle(thickness, color, alpha);
    graphics.strokeRect(x, y_location, this.width, this.height);
    this.storage=new   Array(limit).fill({"filled":false,"item":"","sprite":""});
    //construct boxes max limit 7 according to resolution
    for(let i = 0; i< limit; i++) {
    let graphics = scene.add.graphics();
    graphics.strokeRect((i*40)+2, y_location + 2, 40, 42)
}

    
}

  
addItem(item){
//gets blank location
  
let _location=this.getBlankLocation();  
let topleftcornerX=((_location)*40)+3;
let y=this.y_location+4;
let height=38;
let width=38;

//add the item picture
let _item=this.scene.add.sprite(topleftcornerX,y,item).setOrigin(0,0)
  
//make the picture Interactive to click
  _item.setInteractive();
  
  _item.on("pointerdown",()=>{
    itemClicked(item,_location);
    
  })
  //update the json
  this.storage[_location]={"filled":true,"item":item ,"sprite":_item}
  

  
}
removeItem(_location)
  {
    //destroy the sprite
    this.storage[_location]["sprite"].destroy()
    //update the json
    this.storage[_location]={"filled":false,"item":"","sprite":""}
  }

  
getBlankLocation() { return this.storage.findIndex(item=>!item.filled);
                   } ///wasted 30 min on this single line
    
getItemLocation(type){return this.storage.findIndex(item=>type==item["item"]);
                     }

  }

//class ended

function itemClicked(item,location){
  
  //check if player-shop is touched and display the Sell button if touched
  let _buttons= checkOverlap(player,shop) ?
{
    btn1:{text:"Do Nothing",value:"nothing"},
    btn2:{text:"Drop",value:"drop"}, btn3:{text:"Sell",value:"sell"}   
  } :  {
    btn1:{text:"Do Nothing",value:"nothing"},
    btn2:{text:"Drop",value:"drop"}  
  }


  swal(`You selected ${item.toUpperCase()} What do you want to do`, {
  buttons:_buttons }
  )
.then((value) => {
  switch (value) {
 
    case "drop":
      inventory.removeItem(location);

      swal(`You dropped ${item.toUpperCase()}`);
      break;
 
    case "sell":
      swal({text:`Successsfully Sold ${item.toUpperCase()} for ${items_json[item]["cost"]} Gold `, icon:"success"});
      //increase money
  increaseScore(items_json[item]["cost"]);
     //remove data from the this.storage
      inventory.removeItem(location);
      break;
    case "nothing":
      break;
  }
});


  
                                        
  
}
    
