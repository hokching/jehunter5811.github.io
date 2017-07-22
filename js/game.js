var game = new Phaser.Game(800, 640, Phaser.AUTO, '');

game.state.add('boot', bootState);
game.state.add('loadLevelOne', loadLevelOneState);
game.state.add('menu', menuState);
game.state.add('storyOne', storyOneState);
game.state.add('storyTwo', storyTwoState);
game.state.add('playLevelOne', playLevelOneState);
game.state.add('playLevelTwo', playLevelTwoState);
game.state.add('playLevelThree', playLevelThreeState);
game.state.add('playLevelFour', playLevelFourState);
game.state.add('playLevelFive', playLevelFiveState);
game.state.add('playLevelSix', playLevelSixState);
game.state.add('winLevelOne', winLevelOneState);
game.state.add('winLevelTwo', winLevelTwoState);
game.state.add('winLevelThree', winLevelThreeState);
game.state.add('winLevelThree', winLevelThreeState)
game.state.add('winLevelFour', winLevelFourState);
game.state.add('winLevelFive', winLevelFiveState);
game.state.add('winLevelSix', winLevelSixState);
game.state.add('replayLevelOne', replayLevelOneState);
game.state.add('replayLevelTwo', replayLevelTwoState);
game.state.add('replayLevelThree', replayLevelThreeState);
game.state.add('replayLevelFour', replayLevelFourState);
game.state.add('replayLevelFive', replayLevelFiveState);
game.state.add('replayLevelSix', replayLevelSixState);

game.state.start('boot');