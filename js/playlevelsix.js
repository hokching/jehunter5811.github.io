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
	var dragonHealthText;
	var timerText;
	var creeperKill = 0;
	var eggScore = 0;
	var flag;
	var enemyBullets;
	var dragonHealth = 5;
	var firingTimer;
	var bulletTime = 0;
	var bullet;
	var dragonSprite;
	var timeCheck;
	var bosshealth;
	
var playLevelSixState = {

	create: function () {
		//We're going to be using physics, so enable the Arcade Physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
	
		//Set the size of the overall world -- this is different and should be larger than the canvas size. 
		game.world.setBounds(0, 0, 800, 640);
	
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

		// var ledge = platforms.create(0, 420, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(64, 420, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(264, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(328, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(328, game.world.height-176, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(392, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(392, game.world.height-176, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(392, game.world.height-240, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(500, 200, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(564, 200, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 
// 		var ledge = platforms.create(720, 350, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(784, 350, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(848, 350, 'coolblock');
// 		ledge.body.immovable = true;
// 
// 		
// 		var ledge = platforms.create(1000, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(1000, game.world.height-176, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(1000, game.world.height-240, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(1250, 360, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(1314, 360, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(1650, 400, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(1714, 400, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(2400, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(2464, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(2528, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(3000, 400, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(3064, 400, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(3128, 400, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(3600, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(3664, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(3728, game.world.height-112, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(3664, game.world.height-176, 'coolblock');
// 		ledge.body.immovable = true;
// 		
// 		var ledge = platforms.create(3800, 350, 'coolblock');
// 		ledge.body.immovable = true;
// 		var ledge = platforms.create(3864, 350, 'coolblock');
// 		ledge.body.immovable = true;
		
		// weapon = game.add.weapon(1, 'arrow');
// 		weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
// 		weapon.bulletAngleOffset = 90;
// 		weapon.bulletSpeed = 400;

	// 	bullets = game.add.group();
// 		bullets.enableBody = true;
// 		bullets.physicsBodyType = Phaser.Physics.ARCADE;
// 		bullets.createMultiple(30, 'arrow');
// 		bullets.setAll('anchor.x', 0.5);
// 		bullets.setAll('anchor.y', 1);

		bullets = game.add.group();
    	bullets.enableBody = true;
    	bullets.physicsBodyType = Phaser.Physics.ARCADE;	
		for (var i = 0; i < 20; i++)
		{
			var b = bullets.create(0, 0, 'arrow');
			b.name = 'arrow' + i;
			b.exists = false;
			b.visible = false;
			b.checkWorldBounds = true;
			b.events.onOutOfBounds.add(this.resetBullet, this);
		}
		
		explosion = game.add.image(300, 0, 'explosion2');
		explosion.visible = false;
		
		bosshealth = game.add.image(310, 150, 'bosshealth');
		bosshealth.animations.add('bosshealth', [0,1,2,3,4], 3, true);
		
		bosshealth.frame = 4;
		
		dragonSprite = game.add.sprite(300, 0, 'dragon');
		dragonSprite.animations.add('moving', [0,1,2,3], 3, true);
		dragonSprite.animations.play('moving');
		// The player and its settings
		dragon = game.add.group();
    	dragon.enableBody = true;
    	dragon.physicsBodyType = Phaser.Physics.ARCADE;
    	dragon.visible = false;
    	

		for (var i = 0; i < 1; i++)
		{
			var c = dragon.create(300, 0, 'dragon', game.rnd.integerInRange(0, 36));
			// dragon.animations.add('moving', [0,1,2,3], 3, true);
// 			dragon.animations.play('moving');
			c.name = 'dragon' + i;
			c.body.immovable = true;

		}
	
		
		enemyBullets = game.add.group();
		enemyBullets.enableBody = true;
		enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
		enemyBullets.createMultiple(1, 'fireball');
		enemyBullets.setAll('anchor.x', 0.5);
		enemyBullets.setAll('anchor.y', 1);
		enemyBullets.setAll('outOfBoundsKill', true);
		enemyBullets.setAll('checkWorldBounds', true);
		
		player = game.add.sprite(32, game.world.height - 300, 'arrowDude');
		

		//  We need to enable physics on the player
		game.physics.arcade.enable(player);

		//  Player physics properties. Give the little guy a slight bounce.
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

		//  Our two animations, walking left and right.
		player.animations.add('left', [0, 1, 2, 3], 15, true);
		player.animations.add('right', [5, 6, 7, 8], 15, true);
	
		// stars = game.add.group();
// 
// 		stars.enableBody = true;
// 
// 		//  Here we'll create 12 of them evenly spaced apart
// 		for (var i = 0; i < 101; i++)
// 		{
// 			//  Create a star inside of the 'stars' group
// 			var star = stars.create(i * 40, Math.random() * 80 , 'star');
// 
// 			//  Let gravity do its thing
// 			star.body.gravity.y = 300;
// 
// 			 //This just gives each star a slightly random bounce value
// 			star.body.bounce.y = 0;
// 		}
		
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

		
// 		spiders = game.add.group();
// 
// 		spiders.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
// 		for (var i = 0; i < 14; i++)
// 		{
// 			//  Create a star inside of the 'stars' group
// 			var spider = spiders.create(i * 300, 200, 'spidersheet');
// 			spider.animations.add('moving', [0, 1, 2], 5, true);
// 			//  Let gravity do its thing
// 			spider.body.gravity.y = 500;
// 			spider.animations.play('moving');
// 
// 			//  This just gives each star a slightly random bounce value
// 			spider.body.bounce.y = 0;
// 		}
		


	
		//  The score
		// scoreText = game.add.text(16, 16, 'Emeralds: ' + score, { fontSize: '32px', fill: '#fff' });
		healthText = game.add.text(16, 16, 'Health: 3', { fontSize: '32px', fill: '#fff' });
		// dragonHealthText = game.add.text(16, 52, 'Dragon Health: ' + dragonHealth, { fontSize: '32px', fill: '#fff' });
		
	
		// scoreText.fixedToCamera = true;
// 		scoreText.cameraOffset.setTo(16, 16);
		healthText.fixedToCamera = true;
		healthText.cameraOffset.setTo(16, 16);
		// dragonHealthText.fixedToCamera = true;
// 		dragonHealthText.cameraOffset.setTo(16, 52);
// 	
		cursors = game.input.keyboard.createCursorKeys();
		fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		timeCheck = game.time.now;
	
		//this allows the player to move off screen and reveal more of the world. 
		game.camera.follow(player);
	},
	update: function () {
		 //  Collide the player and the stars with the platforms
		game.physics.arcade.collide(player, platforms);
		
// 		game.physics.arcade.collide(spiders, platforms);

		

		//  Checks to see if the player overlaps with any of the other items, if he does call the correct function
		// game.physics.arcade.overlap(player, creepers, this.killCreeper, null, this);
		// game.physics.arcade.overlap(player, dragon, this.killHealth, null, this);
		// game.physics.arcade.overlap(dragon, bullets, this.collisionHandler, null, this);
		// game.physics.arcade.collide(weapon, dragon, function(bullet, dragon){bullet.kill(); collisionHandler();});
		game.physics.arcade.overlap(enemyBullets, player, this.killHealth, null, this);
		game.physics.arcade.overlap(bullets, dragon, this.collisionHandler, null, this);
	

		// var tween = game.add.tween(spiders).to( { x: 75 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
// 
//     //  When the tween loops it calls descend
//    		 tween.onLoop.add(this.descend, this);

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

			player.frame = 4;
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
		enemyBullet = enemyBullets.getFirstExists(false);
		if (enemyBullet) // && dragonHealth > 0)
    {

        // randomly select one of them
        
        // And fire the bullet from this enemy
        enemyBullet.reset(350, 107);

        game.physics.arcade.moveToObject(enemyBullet,player,250);
        firingTimer = game.time.now + 2000;
    }
    	bullet = bullets.getFirstExists(false);
    	if (fireButton.isDown)
        {
            // bullet.reset(player.x, player.y);

        	this.fireBullet();
            
        }
        
        if (dragonHealth == 4){
        	bosshealth.frame = 3;
        }
        
         if (dragonHealth == 3){
        	bosshealth.frame = 2;
        }
        
        if (dragonHealth == 2){
        	bosshealth.frame = 1;
        }
        if (dragonHealth == 1){
        	bosshealth.frame = 0;
        }
        
    	if (dragonHealth < 1) {
    		dragonSprite.visible = false;
    		// explosion.visible = true;
    		this.Win();
    	}

	},
	
	fireBullet: function () {

    //  To avoid them being allowed to fire too fast we set a time limit
   //  if (game.time.now > bulletTime)
//     {
//         //  Grab the first bullet we can from the pool
//         bullet = bullets.getFirstExists(false);
// 
//         if (bullet)
//         {
//             //  And fire it
//             bullet.reset(player.x, player.y + 8);
//             bullet.body.velocity.y = -400;
//             bulletTime = game.time.now + 200;
//         }
//     }
		if (game.time.now > bulletTime)
		{
			bullet = bullets.getFirstExists(false);

			if (bullet)
			{
				bullet.reset(player.x + 6, player.y - 8);
				bullet.body.velocity.y = -300;
				bulletTime = game.time.now + 150;
			}
		}

},
	
	resetBullet: function (bullet) {

    bullet.kill();

	},
	
	collisionHandler: function(bullet, dragon) {
		
		dragonHealth = dragonHealth - 1;
		dragonHealthText = 'Dragon Health: ' + dragonHealth - 1;
		bullet.kill();
	},
	
	killHealth: function (player, enemyBullet) {
		enemyBullet.kill();

		health += - 1;
		healthText.text = 'Health: ' + health;
	},
	
	Win: function () {
		dragon.killAll();
		dragonSprite.kill();
		
		game.state.start('winLevelSix');
	},
	
	DiedLevelFive: function () {
		game.state.start('replayLevelSix');
	},
};