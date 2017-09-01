function OptionsMenu()
{
	this.name = "OptionsMenu"

	this.backgroundImg = new Image(); 
	this.backgroundImg.src = 'Images/mainBG.png';

	this.volUPImg = new Image(); 
	this.volUPImg.src = 'Images/Volumn UP.png';  

	this.volDownImg = new Image(); 
	this.volDownImg.src = 'Images/Volumn Down.png'; 
}

OptionsMenu.prototype.Draw=function(){
	
	app.ctx = app.canvas.getContext("2d");
	app.ctx.font = "30px arial";
	//app.ctx.clearRect(0,0,app.canvas.width, app.canvas.height);

  app.ctx.drawImage(this.backgroundImg, 0, 0, app.canvas.width, app.canvas.height); 

   app.ctx.drawImage(this.volUPImg,170, 450);

  	app.ctx.drawImage(this.volDownImg, 170, 550);

  	app.ctx.fillStyle = "red";
  	app.ctx.fillText("Press Enter to Start Game", 800, 350);
  	app.ctx.fillText("Press 'O' to change Sound Options", 800, 500);
  	app.ctx.fillText("Press 'Q' to quit the Game", 800, 600);
}