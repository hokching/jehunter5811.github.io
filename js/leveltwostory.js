var levelTwoStoryState = {
	create: function () {
		
		game.add.image(0,0, 'dragonBackground');
		
		var nameLabel = game.add.text(80, 80, 'Herobrine Returns', {font: '50px Courier', fill: '#ffffff'});
		
		var startLabel = game.add.text(80, game.world.height-250, 'Herobine, long considered a myth by many, tried to battle the Ender Dragon a long time ago. But he lost, and he was cast out of the Minecraft world.', {font: '25px Courier', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		
		var startLabel = game.add.text(80, game.world.height-80, '- Press the "S" key to continue the story...', {font: '25px Courier', fill: '#ffffff'});
		
		var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
		sKey.onDown.addOnce(this.storyTwo, this);
	}, 
	
	storyTwo: function () {
		game.state.start('playLevelThree');
	},
};