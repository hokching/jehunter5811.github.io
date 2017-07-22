	var player;
	var eggs;
	var platforms;
	var cursors;
	var clouds;
	var stars;
	var score;
	var scoreText;
	var health = 3;
	var healthText;
	var creeperKill = 0;
	var eggScore = 0;
	var timeCheck;
	
var playLevelThreeState = {

	create: function () {
		//We're going to be using physics, so enable the Arcade Physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
	
		//Set the size of the overall world -- this is different and should be larger than the canvas size. 
		game.world.setBounds(0, 0, 3834, 2500);
	
		//Setting up other sounds for use later
		emeraldCollectSound = game.sound.add('emeraldSound');
		hitGuySound = game.sound.add('hitguy');
		endLevelSound = game.sound.add('endlevel');
   
	   //Setting up some sweet background music
		bgmusic = game.sound.add('music');
		bgmusic.volume = 0.5;
		bgmusic.loop = true;
		// bgmusic.play();

		//  A simple background for our game
	//     game.add.sprite(0, 0, 'sky');

		game.stage.backgroundColor = "#4488AA";
		
		//Adding some clouds to the background
		clouds = game.add.group();

		clouds.enableBody = true;

		for (var i = 0; i < 20; i++)
		{
			var cloud = clouds.create(i * 192, game.world.height - Math.random() * 2500, 'cloud');

			cloud.body.gravity.y = 0;
			cloud.body.bounce.y = 0;
		}

		//  The platforms group contains the ground and the 2 ledges we can jump on
		platforms = game.add.group();

		//  We will enable physics for any object that is created in this group
		platforms.enableBody = true;

		// Here we create the ground.
		// Here we create the ground.
		var ground = platforms.create(0, game.world.height - 16, 'groundThree');

		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		// ground.scale.setTo(25, 2);

		//  This stops it from falling away when you jump on it
		ground.body.immovable = true;
	
		ground = platforms.create(639, game.world.height - 16, 'groundThree');
		ground.body.immovable = true;
		
		ground = platforms.create(1278, game.world.height - 16, 'groundThree');
		ground.body.immovable = true;
		
		ground = platforms.create(1917, game.world.height - 16, 'groundThree');
		ground.body.immovable = true;
		
		ground = platforms.create(2556, game.world.height - 16, 'groundThree');
		ground.body.immovable = true;
		
		ground = platforms.create(3195, game.world.height - 16, 'groundThree');
		ground.body.immovable = true;


		//  Now let's create the ledges

		var ledge = platforms.create(3514, 250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3594, 250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3674, 250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3754, 250, 'brick');
		ledge.body.immovable = true;
		
		
		var ledge = platforms.create(80, game.world.height - 128, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(160, game.world.height - 128, 'brick');
		ledge.body.immovable = true;
		
// 	
		var ledge = platforms.create(400, game.world.height-320, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(480, game.world.height-320, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(560, game.world.height-320, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(640, game.world.height-320, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(720, game.world.height-460, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(800, game.world.height-460, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(880, game.world.height-460, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1000, game.world.height-620, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1080, game.world.height-620, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1160, game.world.height-620, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1240, game.world.height-620, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1400, game.world.height-780, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1480, game.world.height-780, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1780, game.world.height-900, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1860, game.world.height-900, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1940, game.world.height-900, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2080, game.world.height-1100, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(2160, game.world.height-1100, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2400, game.world.height-1250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(2480, game.world.height-1250, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2700, game.world.height-1250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(2780, game.world.height-1250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(2860, game.world.height-1250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(2940, game.world.height-1250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3020, game.world.height-1250, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3160, game.world.height-1400, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3240, game.world.height-1400, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3320, game.world.height-1400, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3400, game.world.height-1400, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3480, game.world.height-1400, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3560, game.world.height-1400, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3640, game.world.height-1400, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3754, game.world.height-1400, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(690, game.world.height-200, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(780, game.world.height-200, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(860, game.world.height-200, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1000, game.world.height-32, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1080, game.world.height-32, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1160, game.world.height-32, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1240, game.world.height-32, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1500, game.world.height-180, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1580, game.world.height-180, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(1660, game.world.height-180, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2000, game.world.height-225, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(2080, game.world.height-225, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2480, game.world.height-250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(2560, game.world.height-250, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(2640, game.world.height-250, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3000, game.world.height-32, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3080, game.world.height-32, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3160, game.world.height-32, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3000, game.world.height-48, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3080, game.world.height-48, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3160, game.world.height-48, 'brick');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3340, game.world.height-275, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3420, game.world.height-275, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3500, game.world.height-275, 'brick');
		ledge.body.immovable = true;
		var ledge = platforms.create(3580, game.world.height-275, 'brick');
		ledge.body.immovable = true;
		
		// The player and its settings
		player = game.add.sprite(32, game.world.height - 150, 'dudeArmor');
		creeper = game.add.sprite(50, 400, 'creeperboom');

		//  We need to enable physics on the player
		game.physics.arcade.enable(player);

		//  Player physics properties. Give the little guy a slight bounce.
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

		//  Our two animations, walking left and right.
		player.animations.add('left', [0, 1, 2, 3], 15, true);
		player.animations.add('right', [5, 6, 7, 8], 15, true);
	
		stars = game.add.group();

		stars.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
		for (var i = 0; i < 20; i++)
		{
			//  Create a star inside of the 'stars' group
			var star = stars.create(i * 202, game.world.height - 1640, 'star');

			//  Let gravity do its thing
			star.body.gravity.y = 300;

			 //This just gives each star a slightly random bounce value
			star.body.bounce.y = 0.1 + Math.random() * 0.1;
		}
		
		creepers = game.add.group();
		creepers.enableBody = true;
		
		for (var i = 0; i < 8; i++)
		{
			//  Create a star inside of the 'stars' group
			var creeper = creepers.create(i * 475, game.world.height-1500, 'creeperboom');

			//  Let gravity do its thing
			creeper.body.gravity.y = 100;

			//  This just gives each star a slightly random bounce value
			creeper.body.bounce.y = 0;
			
			creeper.body.velocity.x = Math.random() * -100;
			creeper.frame = 0;
		}
		
		spiders = game.add.group();

		spiders.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
		for (var i = 0; i < 12; i++)
		{
			//  Create a star inside of the 'stars' group
			var spider = spiders.create(i * 300, game.world.height - 640, 'spider');

			//  Let gravity do its thing
			spider.body.gravity.y = 50;

			//  This just gives each star a slightly random bounce value
			spider.body.bounce.y = 0.8 + Math.random() * 0.2;
		}
		
		eggs = game.add.group();
		eggs.enableBody = true;
		for (var i=0; i < 1; i++){
			var egg = eggs.create(3735, game.world.height-1506, 'egg');
			egg.body.gravity.y = 100;
			egg.body.bounce.y = 0;
		}
		
			
		

	
		//  The score
		scoreText = game.add.text(16, 16, 'Emeralds: ' + score, { fontSize: '32px', fill: '#000' });
		healthText = game.add.text(16, 52, 'Health: 3', { fontSize: '32px', fill: '#000' });
	
		scoreText.fixedToCamera = true;
		scoreText.cameraOffset.setTo(16, 16);
		healthText.fixedToCamera = true;
		healthText.cameraOffset.setTo(16, 52);
	
		cursors = game.input.keyboard.createCursorKeys();
	
		//this allows the player to move off screen and reveal more of the world. 
		game.camera.follow(player);
		
		timeCheck = game.time.now;
	},
	
	update: function () {
		 //  Collide the player and the stars with the platforms
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(stars, platforms);
		game.physics.arcade.collide(spiders, platforms);
		game.physics.arcade.collide(creepers, platforms);
		game.physics.arcade.collide(eggs, platforms);

		//  Checks to see if the player overlaps with any of the other items, if he does call the correct function
		game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
		game.physics.arcade.overlap(player, spiders, this.killHealth, null, this);
		game.physics.arcade.overlap(player, creepers, this.killCreeper, null, this);
		game.physics.arcade.overlap(player, eggs, this.collectEgg, null, this);

		//  Reset the players velocity (movement)
		player.body.velocity.x = 0;

		if (cursors.left.isDown)
		{
			//  Move to the left
			player.body.velocity.x = -150;

			player.animations.play('left');
		}
		else if (cursors.right.isDown)
		{
			//  Move to the right
			player.body.velocity.x = 150;

			player.animations.play('right');
		}
		else
		{
			//  Stand still
			player.animations.stop();

			player.frame = 4;
		}
	
		//  Allow the player to jump if they are touching the ground.
		if (cursors.up.isDown && player.body.touching.down)
		{
			player.body.velocity.y = -350;
		}
	
		if (health < 1) {
			player.kill();
			this.DiedLevelThree();
		}
		if (eggScore > 0) {
			endLevelSound.play();
			bgmusic.stop();
			this.Win();	
		}
	}, 
	collectStar: function (player, star) {
		// Removes the star from the screen
		star.kill();
		emeraldCollectSound.play();

		//  Add and update the score
		score += 1;
		scoreText.text = 'Emeralds: ' + score;
	}, 
	
	killCreeper: function (player, creeper) {
		creeper.frame = 1;
		if (timeCheck > game.time.now) {
		creeper.kill();
		}
		timeCheck = game.time.now + 250;
	},
	
	killHealth: function (player, spider) {
		spider.kill();
		hitGuySound.play();

		health += - 1;
		healthText.text = 'Health: ' + health;
	},
	
	collectEgg: function (player, eggs) {
		eggs.kill();
		eggScore += 1;
	},
	
	Win: function () {
		game.state.start('winLevelThree');
	},
	
	DiedLevelThree: function () {
		game.state.start('replayLevelThree');
	},
};