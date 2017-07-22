	var player;
	var torches;
	var eggs;
	var platforms;
	var cursors;
	var clouds;
	var stars;
	var score;
	var attack;
	var scoreText;
	var health = 3;
	var healthText;
	var timerText;
	var creeperKill = 0;
	var eggScore = 0;
	var flag;
	
var playLevelFiveState = {

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

		//  The platforms group contains the ground and the 2 ledges we can jump on
		platforms = game.add.group();

		//  We will enable physics for any object that is created in this group
		platforms.enableBody = true;

		// Here we create the ground.
		// Here we create the ground.
		var ground = platforms.create(0, game.world.height - 48, 'groundFive');

		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		// ground.scale.setTo(25, 2);

		//  This stops it from falling away when you jump on it
		ground.body.immovable = true;
	
		ground = platforms.create(1450, game.world.height - 48, 'groundFive');
		ground.body.immovable = true;
		
		ground = platforms.create(2880, game.world.height - 48, 'groundFive');
		ground.body.immovable = true;
		
		ground = platforms.create(4100, game.world.height - 48, 'groundFive');
		ground.body.immovable = true;


		//  Now let's create the ledges

		var ledge = platforms.create(0, 420, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(64, 420, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(264, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(328, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(328, game.world.height-176, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(392, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(392, game.world.height-176, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(392, game.world.height-240, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(500, 200, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(564, 200, 'coolblock');
		ledge.body.immovable = true;
		

		var ledge = platforms.create(720, 350, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(784, 350, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(848, 350, 'coolblock');
		ledge.body.immovable = true;

		
		var ledge = platforms.create(1000, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(1000, game.world.height-176, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(1000, game.world.height-240, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1250, 360, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(1314, 360, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(1650, 400, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(1714, 400, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(2400, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(2464, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(2528, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3000, 400, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(3064, 400, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(3128, 400, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3600, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(3664, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(3728, game.world.height-112, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(3664, game.world.height-176, 'coolblock');
		ledge.body.immovable = true;
		
		var ledge = platforms.create(3800, 350, 'coolblock');
		ledge.body.immovable = true;
		var ledge = platforms.create(3864, 350, 'coolblock');
		ledge.body.immovable = true;
		
		flag = game.add.image(4000, game.world.height - 152, 'flag');
		flag.enableBody = true;
		// The player and its settings
		player = game.add.sprite(32, game.world.height - 150, 'dudeSword');
		

		//  We need to enable physics on the player
		game.physics.arcade.enable(player);

		//  Player physics properties. Give the little guy a slight bounce.
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

		//  Our two animations, walking left and right.
		player.animations.add('left', [2, 3, 4, 5], 15, true);
		player.animations.add('right', [7, 8, 9, 10], 15, true);
		player.animations.add('attack', [11, 12], 10, true);
	
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

		
		spiders = game.add.group();

		spiders.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
		for (var i = 0; i < 14; i++)
		{
			//  Create a star inside of the 'stars' group
			var spider = spiders.create(i * 300, 200, 'spidersheet');
			spider.animations.add('moving', [0, 1, 2], 5, true);
			//  Let gravity do its thing
			spider.body.gravity.y = 500;
			spider.animations.play('moving');

			//  This just gives each star a slightly random bounce value
			spider.body.bounce.y = 0;
		}
		


	
		//  The score
		scoreText = game.add.text(16, 16, 'Emeralds: ' + score, { fontSize: '32px', fill: '#fff' });
		healthText = game.add.text(16, 52, 'Health: 3', { fontSize: '32px', fill: '#fff' });
	
		scoreText.fixedToCamera = true;
		scoreText.cameraOffset.setTo(16, 16);
		healthText.fixedToCamera = true;
		healthText.cameraOffset.setTo(16, 52);
// 	
		cursors = game.input.keyboard.createCursorKeys();
	
		//this allows the player to move off screen and reveal more of the world. 
		game.camera.follow(player);
	},
	update: function () {
		 //  Collide the player and the stars with the platforms
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(stars, platforms);
		game.physics.arcade.collide(spiders, platforms);
// 		game.physics.arcade.collide(creepers, platforms);
// 		game.physics.arcade.collide(eggs, platforms);

		//  Checks to see if the player overlaps with any of the other items, if he does call the correct function
		game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
		game.physics.arcade.overlap(player, flag, this.Win, null, this);
		// game.physics.arcade.overlap(player, creepers, this.killCreeper, null, this);
// 		game.physics.arcade.overlap(player, eggs, this.collectEgg, null, this);

		var tween = game.add.tween(spiders).to( { x: 75 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    //  When the tween loops it calls descend
   		 tween.onLoop.add(this.descend, this);

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
		else if (cursors.down.isDown) {
			player.animations.play('attack');
			player.body.velocity.x = 150;
		}
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
			this.DiedLevelFive();
		}
		
		if (player.y > game.world.height - 20) {
			player.kill();
			this.DiedLevelFive();
		}
		
		if (player.x > 4000) {
			this.Win();
		}
		
		if (cursors.down.isDown) {
			game.physics.arcade.overlap(player, spiders, this.killSpider, null, this);
		}
		else {
			game.physics.arcade.overlap(player, spiders, this.killHealth, null, this);
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
	
	descend: function() {

    spiders.x += -75;

	},
	
	killSpider: function (player, spider) {
		spider.kill();
	},
	
	killHealth: function (player, spider) {
		spider.kill();
		hitGuySound.play();

		health += - 1;
		healthText.text = 'Health: ' + health;
	},
	
	
	Win: function () {
		game.state.start('winLevelFive');
	},
	
	DiedLevelFive: function () {
		game.state.start('replayLevelFive');
	},
};