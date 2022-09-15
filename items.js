const items_json = {
  "bag": {
    "cost": 10, "use": function() {
      inventory.addSlot()
    }, "usedText": "Added 1 extra slot"



  },
  "phone": { "cost": 20 },
  "flower": {
    "cost": 4, "use": function() {
      player.setAlpha(1);
    },
      "usedText": "Added full visibility"


  },
  "bottle": { "cost": 6 },
  "ball": { "cost": 10 }


}

