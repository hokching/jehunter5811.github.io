	var player;
	var house;
	var platforms;
	var cursors;
	var clouds;
	var stars;
	var score;
	var scoreText;
	var health = 3;
	var healthText;
	
var playLevelTwoState = {


	
	create: function () {
		//We're going to be using physics, so enable the Arcade Physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
	
		//Set the size of the overall world -- this is different and should be larger than the canvas size. 
		game.world.setBounds(0, 0, 4315, 640);
	
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
	
		 //Adding some stars to the background
		skystars = game.add.group();

		skystars.enableBody = true;

		for (var i = 0; i < 400; i++)
		{
			var skystar = skystars.create(i * 300, Math.random() * 640, 'skystar');

			skystar.body.gravity.y = 0;
		}

		//  The platforms group contains the ground and the 2 ledges we can jump on
		platforms = game.add.group();

		//  We will enable physics for any object that is created in this group
		platforms.enableBody = true;

		// Here we create the ground.
		// Here we create the ground.
		var ground = platforms.create(0, game.world.height - 16, 'groundTwo');

		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		// ground.scale.setTo(25, 2);

		//  This stops it from falling away when you jump on it
		ground.body.immovable = true;
	
		///more ground after 100px gap
		ground = platforms.create(1465, game.world.height - 16, 'groundTwo');
		ground.body.immovable = true;
		
		///more ground after 120px gap
		ground = platforms.create(2950, game.world.height - 16, 'groundTwo');
		ground.body.immovable = true;


		//  Now let's create the ledges

		var ledge = platforms.create(400, 400, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(416, 400, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(432, 400, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(448, 400, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(464, 400, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(480, 400, 'block');
		ledge.body.immovable = true;
		
		
		var ledge = platforms.create(220, 520, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(236, 520, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(252, 520, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(268, 520, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(284, 520, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(300, 520, 'block');
		ledge.body.immovable = true;
// 	
		var ledge = platforms.create(1000, game.world.height-32, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(1016, game.world.height-32, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(1000, game.world.height-48, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(1016, game.world.height-48, 'block');
		ledge.body.immovable = true;
		
		
		var ledge = platforms.create(250, 300, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(266, 300, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(250, 316, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(266, 316, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(620, 200, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(636, 200, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(652, 200, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(620, 216, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(636, 216, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(652, 216, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2200, game.world.height-32, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2216, game.world.height-32, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2200, game.world.height-48, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2216, game.world.height-48, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2200, game.world.height-64, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2216, game.world.height-64, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2400, 416, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2416, 416, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2432, 416, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2448, 416, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2464, 416, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2480, 416, 'block');
		ledge.body.immovable = true;
		
		
		var ledge = platforms.create(2000, 500, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2016, 500, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2032, 500, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2800, 210, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2816, 210, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2831, 210, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2800, 226, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2816, 226, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2831, 226, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2700, 410, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2716, 410, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2731, 410, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2700, 426, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2716, 426, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(2731, 426, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3200, game.world.height-32, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3216, game.world.height-32, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3200, game.world.height-48, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3216, game.world.height-48, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3200, game.world.height-64, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3216, game.world.height-64, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3200, game.world.height-80, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3216, game.world.height-80, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3200, game.world.height-96, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3216, game.world.height-96, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3200, game.world.height-112, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3216, game.world.height-112, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3700, game.world.height-32, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3716, game.world.height-32, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3700, game.world.height-48, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3716, game.world.height-48, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3700, game.world.height-64, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3716, game.world.height-64, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3700, game.world.height-80, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3716, game.world.height-80, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3700, game.world.height-96, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3716, game.world.height-96, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3700, game.world.height-112, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3716, game.world.height-112, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3000, 350, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3016, 350, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3032, 350, 'block');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3500, 420, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3516, 420, 'block');
		ledge.body.immovable = true;
		var ledge = platforms.create(3532, 420, 'block');
		ledge.body.immovable = true;
	
	
		 // The player and its settings
		player = game.add.sprite(32, game.world.height - 150, 'dude');
		house = game.add.image(3963, game.world.height - 289, 'house');

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
		for (var i = 0; i < 20; i++)
		{
			//  Create a star inside of the 'stars' group
			var star = stars.create(i * 202, 0, 'star');

			//  Let gravity do its thing
			star.body.gravity.y = 100;

			//  This just gives each star a slightly random bounce value
			// star.body.bounce.y = 0.5 + Math.random() * 0.2;
		}
		
		creepers = game.add.group();
		creepers.enableBody = true;
		
		for (var i = 0; i < 8; i++)
		{
			//  Create a star inside of the 'stars' group
			var creeper = creepers.create(i * 475, 0, 'creep');

			//  Let gravity do its thing
			creeper.body.gravity.y = 100;

			//  This just gives each star a slightly random bounce value
			creeper.body.bounce.y = 0;
			
			creeper.body.velocity.x = Math.random() * -100;
		}
	
		explosives = game.add.group();

		explosives.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
		for (var i = 0; i < 10; i++)
		{
			//  Create a star inside of the 'stars' group
			var tnt = explosives.create(i * 350, 0, 'tnt');

			//  Let gravity do its thing
			tnt.body.gravity.y = Math.random() * 100;

			//  This just gives each star a slightly random bounce value
			tnt.body.bounce.y = 0;
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
	},
	update: function () {
		 //  Collide the player and the stars with the platforms
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(stars, platforms);
		game.physics.arcade.collide(explosives, platforms);
		game.physics.arcade.collide(creepers, platforms);
		game.physics.arcade.collide(house, platforms);

		//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
		game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
		game.physics.arcade.overlap(player, explosives, this.killHealth, null, this);
		game.physics.arcade.overlap(player, creepers, this.killHealth, null, this);

		//  Reset the players velocity (movement)
		player.body.velocity.x = 0;
		
		if (player.y > game.world.height - 20) {
			player.kill();
			this.DiedLevelOne();
		}

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
			this.DiedLevelOne();
		}
		if (player.x > 3962 && score > 14) {
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
	killHealth: function (player, tnt) {
		tnt.kill();
		hitGuySound.play();

		health += - 1;
		healthText.text = 'Health: ' + health;
	},
	Win: function () {
		game.state.start('winLevelTwo');
	},
	DiedLevelOne: function () {
		game.state.start('replayLevelTwo');
	}
};