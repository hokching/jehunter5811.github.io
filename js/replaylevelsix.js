var replayLevelSixState = {
	create: function () {
		// var diedLabel = game.add.text(80, 80, "Ouch, you just died!", {font: '50px Impact', fill: '#00ff00'});
		
		game.add.image(0,0, 'respawn');
		
		var startLabel = game.add.text(80, game.world.height-80, '- Press the "R" key to restart', {font: '25px Courier', fill: '#ffffff'});
		// diedLabel.fixedToCamera = true;
// 		diedLabel.cameraOffset.setTo(80, 80);
		startLabel.fixedToCamera = true;
		startLabel.cameraOffset.setTo(80, game.world.height-80);
		
		var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
		
		rKey.onDown.addOnce(this.restart, this);
		
		health = 3;
		score = 0;
	}, 
	
	restart: function () {
		game.state.start('playLevelSix');
	},
};