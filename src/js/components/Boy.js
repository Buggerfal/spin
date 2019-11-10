import starter from "../engine/Starter";
import GraphicsHelper from "../utils/GraphicsHelper";
import TWEEN from "tween.js";
import Emitter from "component-emitter";

export class Boy{
  constructor(settings) {
    this._resources = starter.app.loader.resources;
    this._settings = settings;

    this._container = null;
    this._sprite = null;
    this._arrow = null;

    this._hintTween = null;
    this._moveTween = null;
    this._revertTween = null;

    this._data = {
      positions: {
        arrowXOffset: 150,
        arrowYOffset: 60,
        boyXOffSetForMeeting: 90,
        boyYOffSetForMeeting: 50,
      },

      elementSettings: {
        arrowRotation: 1,
        arrowAnimationXBias: 30,
        arrowAnimationYBias: 10,
        arrowScale: 0.3,
        boyScale: 0.35,
      },

      times: {
        arrowAnimationTime: 500,
        moveBoyAnimationTime: 1000,
        awaitTime: 1000,
      }
    };
    new Emitter(this);

    this._init();
    this._addEvents();
  }

  _init() {
    const {x, y, direction, team, id} = this._settings;
    const { arrowXOffset, arrowYOffset } = this._data.positions;
    const { arrowRotation, arrowScale, boyScale } = this._data.elementSettings;

    this._container = GraphicsHelper.createContainer({});
    this._container.setParent(starter.app.stage);
    this._container.x = x;
    this._container.y = y;

    this._sprite = new PIXI.spine.Spine(this._resources.spineboypro.spineData);
    this._sprite.scale.set(boyScale);
    this._container.addChild(this._sprite);
    this._sprite.width = direction === 1 ? this._sprite.width : -this._sprite.width;
    
    this._arrow = GraphicsHelper.createSprite({name: 'arrow'});
    this._arrow.anchor.set(0.5);
    this._arrow.scale.set(arrowScale);
    this._arrow.x = arrowXOffset * direction;
    this._arrow.y = -this._sprite.height / 2 - arrowYOffset;
    this._arrow.rotation = arrowRotation * direction;
    this._container.addChild(this._arrow);

    this.hideArrow();
    // 'portal' - creating
    // 'idle' - stay
    this._sprite.stateData.setMix('portal', 'idle', 0.2);
    this._sprite.stateData.setMix('idle', 'portal', 0.2);

    this._sprite.state.setAnimation(0, 'portal', false);
    this._sprite.state.addAnimation(0, 'idle', true, 0);

    this._data['team'] = team;
    this._data['id'] = id;
    this._data['isActive'] = false;

    this._initArrowAnimation();
    console.log(this._sprite.state)
  }

  _initArrowAnimation() {
    const { arrowAnimationTime } = this._data.times;
    const { arrowAnimationXBias, arrowAnimationYBias } = this._data.elementSettings;

    const { direction } = this._settings;
    const endYPoint = this._arrow.y + (arrowAnimationYBias * direction);

    this._hintTween = new TWEEN.Tween(this._arrow)
      .to({ x: this._arrow.x - arrowAnimationXBias, y: endYPoint }, arrowAnimationTime)
      .yoyo(true)
      .repeat(Infinity)
      .start();
  }

  _addEvents() {
    this._sprite.interactive = true;

    this._sprite.on('pointerdown', () => {
      this._data.isActive = true;

      this.emit("checkКeadiness", {
        team: this._data.team,
        id: this._data.id - 1
      });
    });
  }

  _playAnimation(name, isLoop) {
    this._sprite.state.setAnimation(0, name, isLoop);
  }

  resetActiveStatus() {
    this._data.isActive = false;
    this.hideArrow();
  }

  moveTo(coords) {
    const {x, y} = coords;
    const { direction } = this._settings;
    const { boyXOffSetForMeeting, boyYOffSetForMeeting } = this._data.positions;
    const { moveBoyAnimationTime, awaitTime } = this._data.times;

    this._playAnimation('hoverboard', true);

    this._moveTween = new TWEEN.Tween(this._container)
      .to({ x: x - (boyXOffSetForMeeting * direction), y: y - boyYOffSetForMeeting }, moveBoyAnimationTime)
      .repeat(1)
      .yoyo(true)
      .repeatDelay(awaitTime)
      .onComplete(() => {
        this._playAnimation('idle', true);
      })
      .start();

    this._revertTween = new TWEEN.Tween(this._sprite)
      .to({ width: -this._sprite.width  }, 10)
      .delay(1500)
      .repeat(1)
      .yoyo(true)
      .start();
  }


  showArrow() {
    this._arrow.alpha = 1;
  }

  hideArrow() {
    this._arrow.alpha = 0;
  }

  get isReady() {
    return this._data.isActive;
  }

  get coords() {
    const container = this._container;
    const sprite = this._sprite;

    return {
      x: container.x + sprite.width / 2,
      y: container.y + sprite.height / 2,
    }
  }

}