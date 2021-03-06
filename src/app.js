import 'bootstrap';
import 'pixi.js';

import LOMSRenderer from './render/lomsRenderer';
import MainMenu from './view/mainMenu';
import Window from './module/window';

export default class LOMS {
	constructor() {
		this._renderer = null;
	}
	
	beginGame() {
		Window.enterFullscreen();
		
		setTimeout(() => {
			try{
				this._renderer = new LOMSRenderer;
				this._renderer.renderScene(new MainMenu);
				this._renderer.render();
			}catch (error){
				console.error(error);
			}
			
		}, 1000);
	}
}
