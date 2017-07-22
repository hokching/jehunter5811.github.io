var winLevelFourState = {
	create: function () {
		game.add.image(0,0, 'storyTwoBackground');
		
		var winLabel = game.add.text(40, 80, "You beat the fourth level!", {font: '50px Impact', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		
		var startLabel = game.add.text(80, 200, 'You can feel yourself getting closer to the Minecraft world. Because of your speed, and because you have so many emeralds, you have been able to buy a sword. Prepare to kill some spiders.', {font: '25px Courier', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		var gameplayLabel = game.add.text(80, game.world.height-150, 'To attack with your sword, make sure you are facing right and press the down arrow. Press "W" to continue!', {font: '25px Courier', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		winLabel.fixedToCamera = true;
		winLabel.cameraOffset.setTo(80, 80);
		startLabel.fixedToCamera = true;
		startLabel.cameraOffset.setTo(80, 200);
		gameplayLabel.fixedToCamera = true;
		gameplayLabel.cameraOffset.setTo(80, game.world.height-150);
		
		var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		
		score = 0;
		health = 3;
		wKey.onDown.addOnce(this.restart, this);
	}, 
	
	restart: function () {
		game.state.start('playLevelThree');
	},
};