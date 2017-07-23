var storyTwoState = {
	create: function () {
		
		game.add.image(0,0, 'storyTwoBackground');
		
		var nameLabel = game.add.text(80, 80, 'Herobrine Returns', {font: '50px Courier', fill: '#ffffff'});
		
		var startLabel = game.add.text(80, game.world.height-300, 'Now, with no weapons and an unfamiliar world around him, Herobrine must battle his way back to his home in Minecraft. In level one, collect all emeralds and avoid spiders.', {font: '25px Courier', fill: '#ffffff', wordWrap: true, wordWrapWidth: 550});
		
		var startLabel = game.add.text(80, game.world.height-70, 'Press the "W" key to start', {font: '25px Courier', fill: '#ffffff'});
		
		var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		wKey.onDown.addOnce(this.storyTwo, this);
	}, 
	
	storyTwo: function () {
		game.state.start('playLevelOne');
	},
};