var winLevelTwoState = {
	create: function () {
		game.add.image(0,0, 'villagerBackground');
		
		var winLabel = game.add.text(40, 80, "You beat the second level!", {font: '50px Impact', fill: '#ffffff', wordWrapWidth: 550});
		
		var startLabel = game.add.text(80, 200, 'You have been given special armor by the thankful villagers. It will protect you against creepers, but not spiders. Kill creepers and collect emeralds in the next level. Oh, and look for an Ender Dragon Egg. Press W to continue...', {font: '25px Courier', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		winLabel.fixedToCamera = true;
		winLabel.cameraOffset.setTo(80, 80);
		startLabel.fixedToCamera = true;
		startLabel.cameraOffset.setTo(80, 200);
		
		var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		
		score = 0;
		health = 3;
		
		wKey.onDown.addOnce(this.restart, this);
	}, 
	
	restart: function () {
		game.state.start('playLevelThree');
	},
};