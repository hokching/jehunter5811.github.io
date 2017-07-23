var loadLevelOneState = {
	preload: function () {
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Impact', fill: '#ffffff'});
		
		game.load.image('sky', 'assets/skynew.png');
		game.load.image('ground', 'assets/mapnew.png');
		game.load.image('groundTwo', 'assets/leveltwomap.png');
		game.load.image('groundThree', 'assets/levelthreemap.png')
		game.load.image('groundFour', 'assets/levelfourmap.png');
		game.load.image('groundFive', 'assets/levelfivemap.png');
		game.load.image('brick', 'assets/brick.png');
		game.load.image('cloud', 'assets/Cloud.png');
		game.load.image('platform', 'assets/grass.png');
		game.load.image('block', 'assets/rockblock.png');
		game.load.image('coolblock', 'assets/coolblock.png');
		game.load.image('button', 'assets/continue.png');
		game.load.image('flag', 'assets/flag.png');
		game.load.image('sandstone', 'assets/sandstone.png');
		game.load.image('fireball', 'assets/enderdragonfireball.png');
		game.load.image('tnt', 'assets/tnt.png');
		game.load.image('star', 'assets/emerald.png');
		game.load.image('spider', 'assets/spidersmall.png');
		game.load.image('creep', 'assets/creeper.png');
		game.load.image('villagerBackground', 'assets/villager.png');
		game.load.image('egg', 'assets/enderdragonegg.png');
		game.load.image('torch', 'assets/torch.png');
		game.load.image('respawn', 'assets/respawn.png');
		game.load.image('skystar', 'assets/star.png');
		game.load.image('winLevelOneBackground', 'assets/levelonewinbackground.png');
		game.load.image('background', 'assets/herobrineBackground.png');
		game.load.image('dragonBackground', 'assets/dragonBackground.png');
		game.load.image('storyTwoBackground', 'assets/storyTwoBackground.png');
		game.load.image('house', 'assets/house.png');
		game.load.image('arrow', 'assets/arrow.png');
		game.load.image('explosion', 'assets/explosion.png');
		game.load.spritesheet('dude', 'assets/spritesheet.png', 48.888, 86);
		game.load.spritesheet('creeperboom', 'assets/creeperboomsheet.png', 56.5, 75);
		game.load.spritesheet('dudeArmor', 'assets/diamondarmorsprite.png', 48, 86);
		game.load.spritesheet('dudeSword', 'assets/spritesheetsword.png', 67.38, 86);
		game.load.spritesheet('spidersheet', 'assets/spidersprite.png', 112, 85);
		game.load.spritesheet('arrowDude', 'assets/arrowsprite.png', 75.1, 120);
		game.load.spritesheet('dragon', 'assets/dragonsprite.png', 221, 111);
		game.load.spritesheet('bosshealth', 'assets/bosshealth.png', 188.8, 10);
		game.load.spritesheet('heart', 'assets/heartsprite.png', 133.66, 53);
		game.load.audio('music','assets/Theyre-Closing-In_Looping.mp3');
		game.load.audio('emeraldSound','assets/collectcoin.wav');
		game.load.audio('hitguy','assets/hitguy.wav');
		game.load.audio('endlevel','assets/endLevel.mp3');
		}, 
	
	create: function () {
		game.state.start('menu');
	}
};