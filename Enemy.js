var enemyLft = new Image();   // Create new img element
var enemyRt = new Image();
var attackLft = new Image();
var attackRt = new Image();
var emy = new Image();


function Enemy()
{
		enemyLft.src = 'Images/MEnemyLeft.png'; // Set source path
		enemyRt.src = 'Images/MEnemyRight.png';
		attackLft.src = 'Images/enemyAttackLft.png';
		attackRt.src = 'Images/enemyAttackRt.png';
		
		emy = enemyRt;

		enemySX = 0;		// current frame of animation
		enemySY = 0;
		enemySW = 76;	
		enemySH = 80;
		
		enemyDY = 300;
		enemyDW = 58;
		enemyDH = 118;
	
		aSW = 120;
		eTick = 1;  
		
		enemyDX = Math.floor(Math.random() * 1500);
}


Enemy.prototype.Draw = function()
{	
	if(emy === attackRt || emy === attackLft)
	{
		app.ctx.drawImage(emy, enemySX, enemySY, aSW, enemySH, enemyDX, enemyDY, aSW, enemyDH);	
		eTick++;

		if (eTick > 10)
    	{
    		enemySX += 120;
    		eTick = 0;
    	}
    	if(enemySX > 479)
    	{
    		emy = enemyRt;
    		enemySX = 0;
    		app.ctx.drawImage(emy, enemySX, enemySY, enemySW, enemySH, enemyDX, enemyDY, enemyDW, enemyDH);	
    	}  
    }
	else
	{
		app.ctx.drawImage(emy, enemySX, enemySY, enemySW, enemySH, enemyDX, enemyDY, enemyDW, enemyDH);	
		eTick++;
		if (eTick > 10)
    	{
    		enemySX += 76;
    		eTick = 0;
    	}
    	if(enemySX > 450)
    	{
    		enemySX = 0;
    	} 
    }	
}

Enemy.prototype.move = function()
{
	if (enemyDX > 0 && emy === enemyLft)
	{
		enemyDX = enemyDX - 1;
	}
	if (enemyDX < 1500 && emy === enemyRt)
	{
		enemyDX = enemyDX + 1;
	}
	if(enemyDX <= 1)
	{
		emy = enemyRt;
	}
	if(enemyDX > 1499)
	{
		emy = enemyLft;
	}
	if (enemyDX === app.player.X())
	{
	    enemySX = 0;
	    emy = attackRt;
	    app.health.changeHealth();
	    app.player.Bounce();
	}
			
}
Enemy.prototype.Dead = function()
{
	return enemyDX = -6000;
}

Enemy.prototype.EX = function()
{
	return enemyDX;
}

Enemy.prototype.EY = function()
{
	return enemyDY; 
}