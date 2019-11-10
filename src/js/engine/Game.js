import starter from "./Starter";
import SceneManager from "../scenes/SceneManager";
import IntroScene from "../scenes/IntroScene";
import MainScene from "../scenes/MainScene";

class Game {
    constructor() {
        starter.initiated.then(() => {
            this.introScene = new IntroScene();
            this.mainScene = new MainScene();
            
            // SceneManager.registerScene(`intro`, this.introScene);
            SceneManager.registerScene(`main`, this.mainScene);

            SceneManager.showScene(`main`);
            
            starter.resize();
        });
    }
}

export default Game;
