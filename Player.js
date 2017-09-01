var lft = new Image();   // Create new img element
var rt = new Image();
var falling = new Image();
var rightPunch = new Image();
var leftPunch = new Image();
var first = new Image();
var second = new Image();
var third = new Image();
var img = new Image();


function Player()
{
	first.src = "Images/first.png";
	second.src = "Images/second.png";
	third.src = "Images/third.png";
	lft.src = 'Images/walkingLeft.png'; // Set source path
	rt.src = 'Images/walkingRight.png';
	rightPunch.src = 'Images/punchRight.png';
	leftPunch.src = 'Images/punchLeft.png';
	falling.src = "Images/falling.png"
	img = rt;
	sx = 0;		// current frame of animation
	sy = 0;
	sw = 58;	
	sh = 118;
	dx = 50;	//position on screen
	dy = 300;
	dw = 58;
	dh = 118;
	posX = 0;

	pw = 80;
	ph = 118;

	level = 1;
	tick = 1;
	fTick = 0;
}

function keyDownHandler (e)
{
	
    //code triggered when UP arrow is pressed
    if(e.keyCode === 38 && dy > 270)
    	{
	    	dy-=20; 
	    	sx = sx + 60; 
	    }
	if(e.keyCode === 39) //right && enemies remain
	    {
	    		//if pos < width
	    	dx+=20;
	    	sx = sx + 60;  
	    	img = lft;		
	   	}
	 if(e.keyCode === 40 && dy < 360) //down
	    {
	    	dy+=20; 
	    	sx = sx + 60; 	   		
	    }
	 if(e.keyCode === 37 && dx > -10) //left
	    {
	    	dx-=20;
	    	sx = sx + 60; 
	    	img = rt;
	    }
	 if(sx > 256)
	    {
	    	sx = 0;
	    }

	 if(e.keyCode === 80 && img == lft) //right punch
	    {
	    	sx = 0;
	    	img = rightPunch;
	    }

	 if(e.keyCode === 80 && img == rt) //left punch
	    {
	    	sx = 0;
	    	img = leftPunch;
	    }
	 if(dx < 10)
	    {
	    	dx = 10
	    }
	 if(dx > app.canvas.width)
	    {
	    	dx = 1600;
	    }
	    document.body.scroll = "no"; // ie onl
}

Player.prototype.Draw = function()
{

		app.ctx.clearRect(0,0,app.canvas.width, app.canvas.height);
		if(level === 1)
		{
			app.ctx.drawImage(first, 0, 0, 1600, 600);
		}
		if(level === 2)
		{
			app.ctx.drawImage(second, 0, 0, 1600, 600);
			app.enemy.Dead();
		}
		if(level === 3)
		{
			app.ctx.drawImage(third, 0, 0, 1600, 600);
			app.proEnemy.Deaded();
		}
		
		else if (img != rightPunch && img != leftPunch)
		{
    		app.ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);	
    	}  
    	if (img === rightPunch || img === leftPunch)
		{
			if((app.player.X() + dw) === app.enemy.EX())
	    	{
	    		app.health.changeEnemyHealth();
	    	}
	    	if((app.player.X() + dw) === app.proEnemy.PEX())  // NOT WORKING 
	    	{
	    		app.health.changeEnemyHealth();
	    	}
    		app.ctx.drawImage(img, posX, sy, pw, ph, dx, dy, pw, ph);
    		tick ++;
    		if (tick > 10)
    		{
    			posX += 80;
    			tick = 0;
    		}
    		if(posX > 240 && img === rightPunch)
    		{
    			posX = 0;
    			img = lft;
    		}
    		if(posX > 240 && img === leftPunch)
    		{
    			posX = 0;
    			img = rt;
    		}
    	}  
}
Player.prototype.Lvl = function()
{
	if(level < 3)
	{
		return level = level + 1;
	}
	if(level === 3)
	{
		app.health.hp = 400;

	}
}
Player.prototype.resetLevels = function()
{
	//return level = 1;
}
Player.prototype.X = function()
{
	return dx;
}

Player.prototype.Y = function()
{
	return dy; 
}
Player.prototype.Level = function()
{
	return level;
}
Player.prototype.Bounce = function()
{
	return dx = dx - 120;
}
function onTouchEnd(e)
{
	if(app.currentScene == app.main)
	{
			var xPos = e.changedTouches[0].clientX;
			var yPos = e.changedTouches[0].clientY; 
	}
	else
	{
	  	touch = e.changedTouches;

    	if(e.touches != null)
    	{
    		app.endX =  touch[0].clientX;
    		app.endY =  touch[0].clientY;
		}
	}
};
