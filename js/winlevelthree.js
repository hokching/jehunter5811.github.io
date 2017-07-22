var winLevelThreeState = {
	create: function () {
		var winLabel = game.add.text(40, 80, "You beat the third level!", {font: '50px Impact', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		
		var startLabel = game.add.text(80, game.world.height-80, 'Congratulations! You are not yet sure what to do with the Ender Drago Egg, but you know it is important. So you keep it in your inventory. Now, you must collect as many emeralds as you can in 90 seconds. Press "W" to continue!', {font: '25px Courier', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		winLabel.fixedToCamera = true;
		winLabel.cameraOffset.setTo(80, 80);
		startLabel.fixedToCamera = true;
		startLabel.cameraOffset.setTo(80, game.world.height-80);
		
		var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		
		score = 0;
		health = 3;
		wKey.onDown.addOnce(this.restart, this);
	}, 
	
	restart: function () {
		game.state.start('playLevelFour');
	},
};