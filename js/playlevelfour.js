	var player;
	var torches;
	var eggs;
	var platforms;
	var cursors;
	var clouds;
	var stars;
	var score;
	var scoreText;
	var health = 3;
	var healthText;
	var timerText;
	var creeperKill = 0;
	var eggScore = 0;
	
var playLevelFourState = {

	create: function () {
		//We're going to be using physics, so enable the Arcade Physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
	
		//Set the size of the overall world -- this is different and should be larger than the canvas size. 
		game.world.setBounds(0, 0, 4170, 640);
	
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

		game.stage.backgroundColor = "#4d4d4d";
		
		//Adding some clouds to the background
		torches = game.add.group();

		torches.enableBody = true;

		for (var i = 0; i < 20; i++)
		{
			var torch = torches.create(i * 210, game.world.height - 200, 'torch');

			torch.body.gravity.y = 0;
			torch.body.bounce.y = 0;
		}

		//  The platforms group contains the ground and the 2 ledges we can jump on
		platforms = game.add.group();

		//  We will enable physics for any object that is created in this group
		platforms.enableBody = true;

		// Here we create the ground.
		// Here we create the ground.
		var ground = platforms.create(0, game.world.height - 32, 'groundFour');

		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		// ground.scale.setTo(25, 2);

		//  This stops it from falling away when you jump on it
		ground.body.immovable = true;
	
		ground = platforms.create(1380, game.world.height - 32, 'groundFour');
		ground.body.immovable = true;
		
		ground = platforms.create(2740, game.world.height - 32, 'groundFour');
		ground.body.immovable = true;
		
		ground = platforms.create(4020, game.world.height - 32, 'groundFour');
		ground.body.immovable = true;


		//  Now let's create the ledges

		var ledge = platforms.create(400, 400, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(450, 400, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(400, 450, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(450, 450, 'sandstone');
		ledge.body.immovable = true;
		
		
		var ledge = platforms.create(600, 475, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(650, 475, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(700, 475, 'sandstone');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(900, 375, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(950, 375, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1000, 375, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(900, 325, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(950, 325, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1000, 325, 'sandstone');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1200, 415, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1250, 415, 'sandstone');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1375, 380, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1425, 380, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1375, 330, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1425, 330, 'sandstone');
		ledge.body.immovable = true;
		
		
		var ledge = platforms.create(1500, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1500, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1500, game.world.height-182, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1500, game.world.height-232, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1500, game.world.height-282, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1500, game.world.height-332, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1500, game.world.height-382, 'sandstone');
		ledge.body.immovable = true;

		var ledge = platforms.create(1550, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1550, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1550, game.world.height-182, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1550, game.world.height-232, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1550, game.world.height-282, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1550, game.world.height-332, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(1550, game.world.height-382, 'sandstone');
		ledge.body.immovable = true;
		
		
		var ledge = platforms.create(2000, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2050, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2100, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2150, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2000, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2050, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2100, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2150, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
// 	
		var ledge = platforms.create(2500, 500, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2550, 500, 'sandstone');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2700, 400, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2750, 400, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(2800, 400, 'sandstone');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3000, 325, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3050, 325, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3100, 325, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3150, 325, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3000, 275, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3050, 275, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3100, 275, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3150, 275, 'sandstone');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3450, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3500, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3550, game.world.height-82, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3450, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3500, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
		var ledge = platforms.create(3550, game.world.height-132, 'sandstone');
		ledge.body.immovable = true;
		
		
		// The player and its settings
		player = game.add.sprite(32, game.world.height - 150, 'dude');
		

		//  We need to enable physics on the player
		game.physics.arcade.enable(player);

		//  Player physics properties. Give the little guy a slight bounce.
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds.x = true;

		//  Our two animations, walking left and right.
		player.animations.add('left', [0, 1, 2, 3], 15, true);
		player.animations.add('right', [5, 6, 7, 8], 15, true);
	
		stars = game.add.group();

		stars.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
		for (var i = 0; i < 101; i++)
		{
			//  Create a star inside of the 'stars' group
			var star = stars.create(i * 40, Math.random() * 80 , 'star');

			//  Let gravity do its thing
			star.body.gravity.y = 300;

			 //This just gives each star a slightly random bounce value
			star.body.bounce.y = 0;
		}
		
		// creepers = game.add.group();
// 		creepers.enableBody = true;
// 		
// 		for (var i = 0; i < 8; i++)
// 		{
// 			//  Create a star inside of the 'stars' group
// 			var creeper = creepers.create(i * 475, game.world.height-1500, 'creep');
// 
// 			//  Let gravity do its thing
// 			creeper.body.gravity.y = 100;
// 
// 			//  This just gives each star a slightly random bounce value
// 			creeper.body.bounce.y = 0;
// 			
// 			creeper.body.velocity.x = Math.random() * -100;
// 		}
// 		
// 		spiders = game.add.group();
// 
// 		spiders.enableBody = true;
// 
// 		//  Here we'll create 12 of them evenly spaced apart
// 		for (var i = 0; i < 12; i++)
// 		{
// 			//  Create a star inside of the 'stars' group
// 			var spider = spiders.create(i * 300, game.world.height - 640, 'spider');
// 
// 			//  Let gravity do its thing
// 			spider.body.gravity.y = 50;
// 
// 			//  This just gives each star a slightly random bounce value
// 			spider.body.bounce.y = 0.8 + Math.random() * 0.2;
// 		}
// 		
// 		eggs = game.add.group();
// 		eggs.enableBody = true;
// 		for (var i=0; i < 1; i++){
// 			var egg = eggs.create(3735, game.world.height-1506, 'egg');
// 			egg.body.gravity.y = 100;
// 			egg.body.bounce.y = 0;
// 		}
// 		
			
		game.time.events.add(Phaser.Timer.SECOND * 90, this.DiedLevelFour, this);

	
		//  The score
		scoreText = game.add.text(16, 16, 'Emeralds: ' + score, { fontSize: '32px', fill: '#fff' });
		healthText = game.add.text(16, 52, 'Health: 3', { fontSize: '32px', fill: '#fff' });
	
		scoreText.fixedToCamera = true;
		scoreText.cameraOffset.setTo(16, 16);
		healthText.fixedToCamera = true;
		healthText.cameraOffset.setTo(16, 52);
// 		timerText.fixedToCamera = true;
// 		timerText.cameraOffset.setTo(16, 100);
// 	
		cursors = game.input.keyboard.createCursorKeys();
	
		//this allows the player to move off screen and reveal more of the world. 
		game.camera.follow(player);
	},
	update: function () {
		 //  Collide the player and the stars with the platforms
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(stars, platforms);
		// game.physics.arcade.collide(spiders, platforms);
// 		game.physics.arcade.collide(creepers, platforms);
// 		game.physics.arcade.collide(eggs, platforms);

		//  Checks to see if the player overlaps with any of the other items, if he does call the correct function
		game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
		// game.physics.arcade.overlap(player, spiders, this.killHealth, null, this);
		// game.physics.arcade.overlap(player, creepers, this.killCreeper, null, this);
// 		game.physics.arcade.overlap(player, eggs, this.collectEgg, null, this);

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
		if (score > 99) {
			endLevelSound.play();
			bgmusic.stop();
			this.Win();	
		}
		
		if (player.y > game.world.height - 20) {
			player.kill();
			this.DiedLevelFour();
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
	
	// killCreeper: function (player, creeper) {
// 		creeper.kill();
// 		creeperKill =+ 1;
// 	},
	
	killHealth: function (player, spider) {
		spider.kill();
		hitGuySound.play();

		health += - 1;
		healthText.text = 'Health: ' + health;
	},
	
// 	collectEgg: function (player, eggs) {
// 		eggs.kill();
// 		eggScore += 1;
// 	},
	
	Win: function () {
		game.state.start('winLevelFour');
	},
	
	DiedLevelFour: function () {
		game.state.start('replayLevelFour');
	},

render: function() {
	game.debug.text('Time Left: ' + game.time.events.duration, 16, 100, { fontSize: '36px', fill: '#ffffff' });
}, 
};