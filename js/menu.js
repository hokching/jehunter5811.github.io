var menuState = {
	create: function () {
		
		game.add.image(0,0, 'background');
		
		var nameLabel = game.add.text(80, 80, 'Herobrine Returns', {font: '50px Courier', fill: '#ffffff'});
		
		var startLabel = game.add.text(80, game.world.height-160, '- Press the "S" key for the story.', {font: '25px Courier', fill: '#ffffff'});
		// var startLabel = game.add.text(80, game.world.height-80, '- Press the "W" key to start', {font: '25px Courier', fill: '#ffffff'});
		
		var button = game.add.button(game.world.centerX - 184.5, 500, 'button', this.actionOnClick, this, 0);
		var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		wKey.onDown.addOnce(this.start, this);
		
		var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
		sKey.onDown.addOnce(this.storyOne, this);
		
		var aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		aKey.onDown.addOnce(this.levelTwo, this);
		
		var fKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
		fKey.onDown.addOnce(this.levelThree, this);
		
		var gKey = game.input.keyboard.addKey(Phaser.Keyboard.G);
		gKey.onDown.addOnce(this.levelFour, this);
		
		var hKey = game.input.keyboard.addKey(Phaser.Keyboard.H);
		hKey.onDown.addOnce(this.levelFive, this);
		
		var jKey = game.input.keyboard.addKey(Phaser.Keyboard.J);
		jKey.onDown.addOnce(this.levelSix, this);
		
	}, 
	
	actionOnClick: function () {
		game.state.start('playLevelOne');
	},
	start: function () {
		game.state.start('playLevelOne');
	},
	
	storyOne: function () {
		game.state.start('storyOne');	
	},
	
	levelTwo: function () {
		game.state.start('playLevelTwo');
	},
	
	levelThree: function () {
		game.state.start('playLevelThree');
	},
	
	levelFour: function () {
		game.state.start('playLevelFour');
	},
	
	levelFive: function () {
		game.state.start('playLevelFive');
	},
	
	levelSix: function () {
		game.state.start('playLevelSix');
	},
};