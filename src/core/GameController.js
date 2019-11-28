
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
  this.current_phase = phase;

  if(this.current_phase === INTRO_PHASE)
  {
    this.intro_phase();
  }
  else if (this.current_phase === READY_PHASE)
  {
    this.ready_phase();
  }
  else if (this.current_phase === PLAYER_PHASE)
  {
    this.player_phase();
  }
  else if (this.current_phase === ENEMY_PHASE)
  {
    this.enemy_phase();
  }
  else if (this.current_phase === END_PHASE)
  {
    this.end_phase();
  }
  else if (this.current_phase === OUTRO_PHASE)
  {
    this.outro_phase();
  }
}

/*
각 페이즈별 진행해야하는 작업을 진행하는 컨트롤러.
*/


GameController.prototype.intro_phase = function(){

}

GameController.prototype.ready_phase = function(){

}

GameController.prototype.player_phase = function(){

}

GameController.prototype.enemy_phase = function(){

}

GameController.prototype.end_phase = function(){

}

GameController.prototype.outro_phase = function(){

}

GameController.prototype.phase_check = function( phase ){

}


/**
*
*  export
*
**/

export let game_controller = new GameController();
