function SceneManager(){

	//dictonary of scenes
	app.scenes = {};

	//variable for the scene the game is currently on
	app.currentScene;
}

/**
*Funtion to add a scene
*@param {object} scene
*/
SceneManager.prototype.addScene = function(scene){
	var key = scene.name;
	var ref = scene;
	app.scenes[key] = ref;
}

/**
*Funtion to add a scene
*@param {string} title of scene
*/
SceneManager.prototype.goToScene = function(title){

	//assign current scene
	app.currentScene = app.scenes[title];
	
}

//function to render the appropriate scene
SceneManager.prototype.render = function(){

	if(app.currentScene === app.mainMenu){
		app.mainMenu.render();
	}

	if(app.currentScene === app.optionsMenu){
		app.optionsMenu.render();
	}	
	if(app.currentScene === game){
		game.draw();
	}

}