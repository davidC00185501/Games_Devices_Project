/**
*Funtion to create button boundinf box
*@param {float} x position of box
*@param {float} y position of box
*@param {float} width of box
*@param {float} height of box
*/
function buttons(x,y,width,height){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

}

//detects the collision of the button 
buttons.prototype.isClicked = function (){
	clickCollision = false;

	if(app.endX > this.x && app.endX < (this.x + this.width) && app.endY > this.y && app.endY < (this.y + this.height)){
		clickCollision = true;
	}

	return clickCollision;
}

//detects the collision of the button 
buttons.prototype.ClickArea = function (){
	clickCollision = false;

	if(app.changeX > this.x && app.changeX < (this.x + this.width) && app.changeY > this.y && app.changeY < (this.y + this.height)){
		clickCollision = true;
	}
	

	return clickCollision;
}

buttons.prototype.detectFirstPress = function (){
	clickCollision = false;

	 if(app.startX > this.x && app.startX < (this.x + this.width) && app.startY > this.y && app.startY < (this.y + this.height)){
		clickCollision = true;
	}

	return clickCollision;
}




