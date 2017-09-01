var x, y, width, height;
var hp = 400;
var eHP = 400;
function HealthBar()
{
	x = 100; // innerwindow.width / 4
	y = 100;
	width = 400;
	height = 40;

	x2 = 1000;
}

HealthBar.prototype.Draw = function()
{
	app.ctx.fillRect(x, y, hp, height);
	app.ctx.fillStyle = '#ff0000';
	app.ctx.fill();

	app.ctx.strokeRect(x,y, width, height);
	app.ctx.strokeStyle = ("#ff0000");
	app.ctx.stroke();


	app.ctx.fillRect(x2, y, eHP, height);
	app.ctx.fillStyle = '#ff0000';
	app.ctx.fill();


	app.ctx.strokeRect(x2,y, width, height);
	app.ctx.strokeStyle = ("#ff0000");
	app.ctx.stroke();
}

HealthBar.prototype.changeHealth = function()
{
	if(hp > 30)
	{
		return hp = hp - 40;
	}
	if(hp <= 0)
	{
		app.manager.goToScene("MainMenu");
		app.player.resetLevels();
		return hp = 400;
	}

}

HealthBar.prototype.healUp = function()
{
	if(hp <= 360)
	{
		return hp = hp + 40;
	}
}

HealthBar.prototype.currentHealth = function()
{
	return hp;
}
HealthBar.prototype.changeEnemyHealth = function()
{
	if(eHP > 30)
	{
		return eHP = eHP - 40;
	}
	if(eHP <= 0)
	{
			app.player.Lvl();
			app.player.dx = 10;
			return eHP = 400;
	}
}

HealthBar.prototype.resetHealth = function()
{
	return hp = 400, eHP = 400;
	app.enemy.resetPosition();
}