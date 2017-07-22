var winLevelSixState = {
	create: function () {
		var winLabel = game.add.text(40, 80, "You beat the final level!!", {font: '50px Impact', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		
		var startLabel = game.add.text(80, 250, '', {font: '25px Courier', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		var button = game.add.button(game.world.centerX - 184.5, 500, 'button', this.actionOnClick, this, 0);
		
		winLabel.fixedToCamera = true;
		winLabel.cameraOffset.setTo(80, 80);
		startLabel.fixedToCamera = true;
		startLabel.cameraOffset.setTo(80, 250);
		button.fixedToCamera = true;
		button.cameraOffset.setTo(game.world.centerX - 184.5, 500);
		
		// var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		
		score = 0;
		health = 3;
		dragonHealth = 5;
		// wKey.onDown.addOnce(this.restart, this);
	}, 
	
	// restart: function () {
// 		game.state.start('playLevelFive');
// 	},
	
	actionOnClick: function () {
		game.state.start('playLevelSix');
	}
};