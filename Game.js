function Game()
{
	
}

Game.prototype.init = function()
{
	console.log("Initialising game");
}

Game.prototype.update = function()
{
	if(app.currentScene == app.main)
	{

		app.player.Draw();
		app.health.Draw();
		app.heal.Draw();
		app.heal.move();

		if(app.player.Level() === 1)
		{
			app.enemy.move();
			app.enemy.Draw();
		}
		if(app.player.Level() === 2)
		{
			app.proEnemy.move();
			app.proEnemy.Draw();
		}
		if(app.player.Level() === 3)
		{

		}
		
	}

	else if(app.currentScene === app.mainMenu)
		{
			app.mainMenu.Draw();
		}
	if(app.currentScene === app.optionsMenu){
		app.optionsMenu.Draw(); 
		//app.option.buttonClick();
	}
	//if(app.currentScene == app.gameover)
	//{
		//app.gameover.Draw(); 
		//app.gameover.buttonClick();
	//}
		window.requestAnimationFrame(app.game.update);

}