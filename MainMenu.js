var menuCount = 0;

function MainMenu()
{
	this.name = "MainMenu"

	playPosX = 170;
	playPosY = window.innerHeight / 3;

	optionsPosX = 170;
	optionsPosY = window.innerHeight/2 - 40;

	quitPosX = 170;
	quitPosY = window.innerHeight - 400;

	this.playImg = new Image(); 
	this.playImg.src = 'Images/Play.png';  

	this.optionImg = new Image(); 
	this.optionImg.src = 'Images/options.png'; 

	this.quitImg = new Image(); 
	this.quitImg.src = 'Images/quit.png';  

	this.backgroundImg = new Image(); 
	this.backgroundImg.src = 'Images/mainBG.png';

	this.playButton = new buttons(playPosX,playPosY,this.playImg.width,this.playImg.height);
	this.optionsButton = new buttons(optionsPosX,optionsPosY,this.optionImg.width,this.optionImg.height);
	this.quitButton = new buttons(quitPosX,quitPosY,this.quitImg.width,this.quitImg.height);

}

MainMenu.prototype.Draw=function(){

	app.ctx = app.canvas.getContext("2d");
	app.ctx.font = "30px arial";
	app.ctx.clearRect(0,0,app.canvas.width, app.canvas.height);

   app.ctx.drawImage(this.backgroundImg, 0, 0, app.canvas.width, app.canvas.height); 

  	app.ctx.drawImage(this.playImg,playPosX,playPosY);

  	app.ctx.drawImage(this.optionImg, optionsPosX,optionsPosY);

  	app.ctx.drawImage(this.quitImg, quitPosX, quitPosY);
  	app.ctx.fillStyle = "red";
  	app.ctx.fillText("Press Enter to Start Game", 800, 350);
  	app.ctx.fillText("Press 'O' to change Sound Options", 800, 500);
  	app.ctx.fillText("Press 'Q' to quit the Game", 800, 600);
  	
  	app.manager.goToScene("main");
		 
}

MainMenu.prototype.buttonClick = function(){

	if(app.currentScene === app.mainMenu)
		{
			if(e.keyCode === 13)
    		{
	    		app.manager.goToScene("main");
	    	}
		}
		else
			{
				this.playImg.src = 'Images/play.png';  
				playPosX = 170;
			}
		if(this.playButton.ClickArea() || this.playButton.detectFirstPress())
		{

			//this.playImg.src = 'play-button-clicked.png';  
			playPosX = 170;
		}
		else
			{
				this.playImg.src = 'Images/play.png';  
				playPosX = 170;
			}

		if(this.optionsButton.isClicked())
		{

			//app.manager.goToScene("options");
			//app.soundManager.playSound('Click');
			app.changeX = 0;
			app.changeY = 0;
		}
		if(this.optionsButton.ClickArea() || this.optionsButton.detectFirstPress()){

			optionsPosX = 170;
			this.optionImg.src = 'Images/options.png';  
		}
		else
			{
				optionsPosX = 170;
				this.optionImg.src ='Images/options.png'; 
			}	 
	 	app.endX =0; 
  		app.endY = 0;

}


/**
*Funtion to draw line to moved position
*@param {string} event listener
*/
function onTouchMove(e){

	//creates variable for change in touch position
	changedTouches = e.changedTouches;
	app.startX = 0;
	app.startY = 0;
	app.changeX = changedTouches[0].clientX;
	app.changeY = changedTouches[0].clientY;

}