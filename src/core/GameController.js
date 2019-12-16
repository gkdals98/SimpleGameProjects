
import { current_on_battle } from './CurrentOnBattle.js';

const INTRO_PHASE = 0;
const READY_PHASE = 1;
const PLAYER_PHASE = 2;
const ENEMY_PHASE = 3;
const END_PHASE = 4;
const OUTRO_PHASE = 5;

class GameController{
  constructor(){
    this.name = "Game Controller"
  }
}

//다음 페이즈로 게임을 진행.
GameController.prototype.tryProgress = function( phase ){
  console.log(this.name + " : Go to Next Phase. - " + phase);
}

/**
*
*  export
*
**/

export let game_controller = new GameController();
