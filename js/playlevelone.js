	var player;
	var platforms;
	var cursors;
	var clouds;
	var stars;
	var score = 0;
	var scoreText;
	var health = 3;
	var healthText;
	
var playLevelOneState = {


	
	create: function () {
		//We're going to be using physics, so enable the Arcade Physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
	
		//Set the size of the overall world -- this is different and should be larger than the canvas size. 
		game.world.setBounds(0, 0, 3639, 640);
	
		//Setting up other sounds for use later
		emeraldCollectSound = game.sound.add('emeraldSound');
		hitGuySound = game.sound.add('hitguy');
		endLevelSound = game.sound.add('endlevel');
   
	   //Setting up some sweet background music
		bgmusic = game.sound.add('music');
		bgmusic.volume = 0.5;
		bgmusic.loop = true;
		bgmusic.play();

		//  A simple background for our game
	//     game.add.sprite(0, 0, 'sky');

		game.stage.backgroundColor = "#4488AA";
	
		 //Adding some clouds to the background
		clouds = game.add.group();

		clouds.enableBody = true;

		for (var i = 0; i < 8; i++)
		{
			var cloud = clouds.create(i * 300, Math.random() * 300, 'cloud');

			cloud.body.gravity.y = 0;
		}

		//  The platforms group contains the ground and the 2 ledges we can jump on
		platforms = game.add.group();

		//  We will enable physics for any object that is created in this group
		platforms.enableBody = true;

		// Here we create the ground.
		// Here we create the ground.
		var ground = platforms.create(0, game.world.height - 32, 'ground');

		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		// ground.scale.setTo(25, 2);

		//  This stops it from falling away when you jump on it
		ground.body.immovable = true;
	
		ground = platforms.create(1213, game.world.height - 32, 'ground');
		ground.body.immovable = true;
	
		ground = platforms.create(2426, game.world.height - 32, 'ground');
		ground.body.immovable = true;

		//  Now let's create the ledges
		var ledge = platforms.create(400, 400, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(432, 400, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(464, 400, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(496, 400, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(640, 250, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(672, 250, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(100, 250, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(132, 250, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(164, 250, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(160, 490, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(192, 490, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(400, 160, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(432, 160, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(464, 160, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(1200, 300, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1232, 300, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1264, 300, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1296, 300, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1328, 300, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(1250, game.world.height - 32, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1282, game.world.height - 32, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1250, game.world.height - 64, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1282, game.world.height - 64, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1250, game.world.height - 96, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1282, game.world.height - 96, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(2200, 400, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(2232, 400, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(2400, 475, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(2432, 475, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(2464, 475, 'platform');
		ledge.body.immovable = true;
	
		ledge = platforms.create(2664, 320, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(2696, 320, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(2728, 320, 'platform');
		ledge.body.immovable = true;
	
		ledge.body.immovable = true;
		ledge = platforms.create(1000, 420, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1032, 420, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1064, 420, 'platform');
		ledge.body.immovable = true;
		ledge = platforms.create(1028, 420, 'platform');
		ledge.body.immovable = true;
	
	
		 // The player and its settings
		player = game.add.sprite(32, game.world.height - 150, 'dude');

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
		for (var i = 0; i < 15; i++)
		{
			//  Create a star inside of the 'stars' group
			var star = stars.create(i * 242, 0, 'star');

			//  Let gravity do its thing
			star.body.gravity.y = 100;

			//  This just gives each star a slightly random bounce value
			star.body.bounce.y = 0.5 + Math.random() * 0.2;
		}
	
		spiders = game.add.group();

		spiders.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
		for (var i = 0; i < 10; i++)
		{
			//  Create a star inside of the 'stars' group
			var spider = spiders.create(i * 350, 0, 'spider');

			//  Let gravity do its thing
			spider.body.gravity.y = 50;

			//  This just gives each star a slightly random bounce value
			spider.body.bounce.y = 0.8 + Math.random() * 0.2;
		}
	
	
		//  The score
		scoreText = game.add.text(16, 16, 'Emeralds: 0', { fontSize: '32px', fill: '#000' });
		healthText = game.add.text(16, 52, 'Health: 3', { fontSize: '32px', fill: '#000' });
	
		scoreText.fixedToCamera = true;
		scoreText.cameraOffset.setTo(16, 16);
		healthText.fixedToCamera = true;
		healthText.cameraOffset.setTo(16, 52);
	
		cursors = game.input.keyboard.createCursorKeys();

	
		//this allows the player to move off screen and reveal more of the world. 
		game.camera.follow(player);
	},
	update: function () {
		 //  Collide the player and the stars with the platforms
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(stars, platforms);
		game.physics.arcade.collide(spiders, platforms);

		//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
		game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
		game.physics.arcade.overlap(player, spiders, this.killHealth, null, this);

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
// 		
		else
		{
			//  Stand still
			player.animations.stop();

			player.frame = 6;
		}
	
		//  Allow the player to jump if they are touching the ground.
		if (cursors.up.isDown && player.body.touching.down)
		{
			player.body.velocity.y = -350;
		}
	
		if (health < 1) {
			player.kill();
			this.DiedLevelOne();
		}
		if (score > 14) {
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
	killHealth: function (player, spider) {
		spider.kill();
		hitGuySound.play();

		health += - 1;
		healthText.text = 'Health: ' + health;
	},
	Win: function () {
		game.state.start('winLevelOne');
	},
	DiedLevelOne: function () {
		game.state.start('replayLevelOne');
	}
};