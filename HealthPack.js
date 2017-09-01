var pack = new Image();
var count = 0;
function HealthPack()
{
	xPos = 310; // innerwindow.width / 4
	yPos = 300;
	w = 50;
	h = 50;
	pack.src = "Images/health_pack.png";
}

HealthPack.prototype.Draw = function()
{
		app.ctx.drawImage(pack, xPos, yPos, w, h);	
}

HealthPack.prototype.move = function()
{
	count++;
	if(app.health.currentHealth() <= 400 && count < 2000)
	{
		xPos = -2000;
	}
	if(app.health.currentHealth() < 400 && count > 2000)
	{
		xPos = 310;
		if(xPos === app.player.X())
		{
			app.health.healUp();
			xPos = -2000;
			count = 0;
		}
	}
}

HealthPack.prototype.hX = function()
{
	return xPos;
}