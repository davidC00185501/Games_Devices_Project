app = {};
var audio = new Audio('Music/music.mp3');


function main()
{
	app.mainMenu = new MainMenu();
	app.optionsMenu = new OptionsMenu();
	app.manager = new SceneManager();
	app.manager.addScene(app.mainMenu);
	app.manager.addScene(app.optionsMenu);
	app.game = new Game();
	app.player = new Player();
	app.enemy = new Enemy();
	app.proEnemy = new ProjectileEnemy();
	app.health = new HealthBar();
	app.heal = new HealthPack();

	app.canvas = document.createElement("canvas");
	document.addEventListener("keydown", keyDownHandler);
	document.addEventListener("touchend", onTouchEnd);
	document.addEventListener("touchmove", onTouchMove);
	document.body.appendChild(app.canvas);
	app.endX =  0;
    app.endY =  0;
    app.manager.goToScene("main");
	app.canvas.height = window.innerHeight;
	app.canvas.width = window.innerWidth;
	app.ctx = app.canvas.getContext("2d");
	app.game.init();
	app.game.update();
	document.body.scroll = "no"; // ie onl
	
	if (typeof audio.loop == 'boolean')
	{
		audio.loop = true;
	}
	else
	{
		audio.addEventListener('ended', function() {
			this.currrentTime = 0;
			this.play();
		}, false);
	}
	audio.play();

}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}




