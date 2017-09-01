var pEnemyRt = new Image();
var pEnemyLft = new Image();
var pShootLft = new Image();
var pShootRt = new Image();
var pEmy = new Image();


function ProjectileEnemy()
{
	pEnemyRt.src = 'Images/PEnemyRight.png';
	pEnemyLft.src = 'Images/PEnemyLeft.png';
	pShootLft.src = 'Images/ShootLeft.png';
	pShootRt.src = 'Images/ShootRight.png';

	pEmy = pEnemyRt;

	pEnemySX = 0;		// current frame of animation
	pEnemySY = 0;
	pEnemySW = 40;	
	pEnemySH = 80;
	pEnemyDX = Math.floor(Math.random() * 1500);	//position on screen 
	pEnemyDY = 300;
	pEnemyDW = 58;
	pEnemyDH = 118;
	
	pShootSW = 70;
	pETick = 1;

	hit = Math.floor(Math.random() * 10, 6);
	console.log(hit);

}

ProjectileEnemy.prototype.Draw = function()
{	
	if(pEmy === pShootLft || pEmy === pShootRt)
	{
		app.ctx.drawImage(pEmy, pEnemySX, pEnemySY, pShootSW, pEnemySH, pEnemyDX, pEnemyDY, pEnemyDW, pEnemyDH);
			pETick++;
    	if (pETick > 10)
    	{
    		pEnemySX += 70;
    		pETick = 0;
    	}
    	if(pEnemySX > 349)
    	{
    		pETick = 0;
    		pEnemySX = 0;
    		if(pEmy === pShootLft)
    		{
    			pEmy = pEnemyLft;
    		}
    		else
    		{
    			pEmy = pEnemyRt;
    		}
    		//app.ctx.drawImage(pEmy, pEnemySX, pEnemySY, pEnemySW, pEnemySH, pEnemyDX, pEnemyDY, pEnemyDW, pEnemyDH);	
    	}  
	}
	else
	{
		app.ctx.drawImage(pEmy, pEnemySX, pEnemySY, pEnemySW, pEnemySH, pEnemyDX, pEnemyDY, pEnemyDW, pEnemyDH);	
			pETick++;
    	if (pETick > 10)
    	{
    		pEnemySX += 40;
    		pETick = 0;
    	}
    	if(pEnemySX > 319)
    	{
    		pEnemySX = 0;
    	}  
    }
}
ProjectileEnemy.prototype.PEX = function()
{
	return pEnemyDX;
}

ProjectileEnemy.prototype.Deaded = function()
{
	return pEnemyDX = -6000;
}
ProjectileEnemy.prototype.move = function()
{
	if (pEnemyDX >= 0 && pEmy == pEnemyLft)
	{
		pEnemyDX--;
	}
	if (pEnemyDX < 1500 && pEmy == pEnemyRt)
	{
		pEnemyDX++;
	}
	if(pEnemyDX === 0)
	{
		pEmy = pEnemyRt;
	}
	if(pEnemyDX ===1500)
	{
		pEmy = pEnemyLft;
	}
	
		if (pEnemyDX - 200 === app.player.X())
		{
			if (hit === 4)
			{
				 app.health.changeHealth();
			}
			hit = Math.floor(Math.random() * 10, 6);
			enemySX = 0;
			pEmy = pShootLft;
		}
		if (pEnemyDX + 200 === app.player.X())
		{
			if (hit === 4)
			{
				 app.health.changeHealth();
			}
			hit = Math.floor(Math.random() * 10, 6);
			enemySX = 0;
			pEmy = pShootRt;
		}
}