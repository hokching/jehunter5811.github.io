var winLevelOneState = {
	create: function () {
		
		game.add.image(0,0, 'winLevelOneBackground');
		
		var winLabel = game.add.text(40, 80, "You beat the first level!", {font: '50px Courier', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		
		var startLabel = game.add.text(80, game.world.height-80, 'Press the "w" key to move on to level two.', {font: '25px Impact', fill: '#ffffff'});
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
		game.state.start('playLevelTwo');
	},
};