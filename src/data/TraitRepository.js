import { current_on_battle } from "../core/CurrentOnBattle.js";

class TraitRepository{
  constructor(){
    const const_trait_data = require('./TraitData.json')
    this.trait_datas = const_trait_data.trait_datas;
  }
}

//적용되지 않은 트레잇 데이터들
TraitRepository.prototype.getWholeData = function(){
  return this.trait_datas;
}


export let trait_repository = new TraitRepository();
