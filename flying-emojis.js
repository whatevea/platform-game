class FlyingEmo{

	constructor(scene,size){
		this.scene=scene;
		this.size=size;
		

	}

	fly(x,y,finalX,finalY,emoji,time){
	var emoji= this.scene.add.text(x, y, emoji, { fontFamily: 'Arial', fontSize: this.size, fill: '#ff0000' });
    var tween = this.scene.tweens.add({
        targets:emoji,
        x:finalX,
        y:finalY,
        alpha:0,
        ease: 'Power1',
        duration: time,
        yoyo: false,
        repeat:0,
        onComplete: function () { console.log('onComplete');
        emoji.destroy()
    }

    });

	}




}