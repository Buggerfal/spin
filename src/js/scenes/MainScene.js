import starter from "../engine/Starter";
import GraphicsHelper from "../utils/GraphicsHelper";
import Resizable from "../engine/Resizable";
import appSettings from "../settings/appSettings";
import { Boy } from "../components/Boy";

import * as PIXI from 'pixi.js';
window['PIXI'] = PIXI;
require('pixi-spine');

class MainScene extends Resizable {
    constructor() {
        super();

        this._container = null;
        this._substrate = null;
        this._button = null;
        
        this._buttonText = null;

        this._countPlayersInTeam = 3;

        this._players = {
            1: [],
            2: [],
        };

        this._drawScene();
        this._drawStage();
    }

    loadResources() {
        if(!this._resources) {
            this._resources = new Promise(resolve => {
                app.loader
                .add('spineboypro', 'spine/spineboy-pro.json')
                .load((_, result)=> {
                    resolve(result);
                });
            });
        }

        return this._resources;
    }

    onResize(data) {
        const { w, h } = data;

        this._substrate.width = w;
        this._substrate.height = h;
    }

    _drawStage() {
        const app = starter.app;
        app.stage.interactive = true;

        this.loadResources().then(_el => {
            this._addPlayers();
        });
    }

    randomInteger(min, max) {
        let rand = Math.floor(min + Math.random() * (max + 1 - min));
        return rand;
    }

    _addPlayers() {
        const xOffSet = 150;
        const yOffSet = 180;
        const appHeight = starter.app.screen.height;
        
        for (let i = 1; i <= 2; i++) {
            for(let j = 0; j < this._countPlayersInTeam; j++) {
                const direction = i === 1 ? 1: -1;
                const minX = i === 1 ? xOffSet : starter.app.screen.width * 0.75 - xOffSet;
                const maxX = i === 1 ? starter.app.screen.width * 0.25 : starter.app.screen.width - xOffSet;
                const minY = appHeight / this._countPlayersInTeam * j + yOffSet;
                const maxY = minY + appHeight / this._countPlayersInTeam - yOffSet;

                const settings = {
                    x: this.randomInteger(minX, maxX),
                    y: this.randomInteger(minY, maxY),
                    direction,
                    team: i,
                    id: j+1
                };

                const boy = new Boy(settings);

                boy.on('checkКeadiness', (obj) => {
                    this._checkКeadiness(obj);
                })

                this._players[`${i}`].push(boy);
            }
        }
    }

    _movePlayers() {
        const isReady = (el) => {
            return el.isReady;
        };

        const firstPlayer = this._players['1'].find(isReady);
        const secondPlayer = this._players['2'].find(isReady);

        const center = this._getCenter(firstPlayer, secondPlayer);

        firstPlayer.moveTo(center);
        secondPlayer.moveTo(center);
    }

    _getCenter(obj1, obj2){
        return {
            x: (obj1.coords.x + obj2.coords.x) / 2,
            y: (obj1.coords.y + obj2.coords.y) / 2,
        }
    }

    _checkКeadiness(data) {
        const { id, team } = data;

        this._players[team].forEach((el) => {
            el.hideArrow();
        });

        this._players[team][id].showArrow();

        if (this._isPlayersAreReady()) {
            this.showButton();
        }
    }

    _isPlayersAreReady(){
        const isReady = (el) => {
            return el.isReady;
        };

        const isReadyPlayerInFirstTeam = this._players['1'].some(isReady);
        const isReadyPlayerInSecondTeam = this._players['2'].some(isReady);

        if (isReadyPlayerInFirstTeam && isReadyPlayerInSecondTeam) {
            return true;
        }
    }

    _resetAllPlayersStatus() {
        this._players['1'].forEach(el => el.resetActiveStatus());
        this._players['2'].forEach(el => el.resetActiveStatus());
    }

    _drawScene() {
        const { width, height } = starter.app.screen;

        this._container = GraphicsHelper.createContainer({});
        this._container.setParent(starter.app.stage);

        this._substrate = GraphicsHelper.createColorContainer({
            width: width,
            height: height,
            color: appSettings.colors.mainSceneBg,
        });

        this._substrate.setParent(this._container);

        const textStyle = {
            fill: `0xffffff`,
            fontSize: 20,
        };

        this._button = GraphicsHelper.createColorContainer({
            width: 200,
            height: 75,
            color: `0x660000`,
            x: width / 2 - 100,
            y: height - 95,
            text: 'Introduce players',
            textStyle,
            onClick: () => {
                this._movePlayers();
                this._resetAllPlayersStatus();
                this.hideButton();
            }
        });
        this._button.setParent(this._container);

        this.hideButton();
    }

    show() {
        this._container.alpha = 1;
    }

    hide() {
        this._container.alpha = 0;
    }

    showButton() {
        this._button.visible = true;
    }

    hideButton() {
        this._button.visible = false;
    }
}

export default MainScene;
