import { current_on_battle } from "../../../core/CurrentOnBattle.js";

class TraitRepository{
  constructor(){
    const const_trait_data = require('./TraitData.json')
    this.trait_datas = const_trait_data.trait_datas;
    this.unapplyed_traits = this.trait_datas;
    this.applyed_traits = [];
  }
}

//전체 데이터를 참조한다.
TraitRepository.prototype.getUnApplyedTraits = function(){
  return this.unapplyed_traits;
}

//전체 데이터를 참조한다.
TraitRepository.prototype.getApplyedTraits = function(){
  return this.applyed_traits;
}

TraitRepository.prototype.cleanApplyedTraits = function(){
  this.unapplyed_traits = this.trait_datas;
  this.applyed_traits = [];
}

TraitRepository.prototype.addApplyedTraits = function(trait){
  const idx = this.unapplyed_traits.findIndex(
    function(item) {return item.trait_name === trait.trait_name});
  if (idx > -1){
    this.unapplyed_traits.splice(idx, 1);
  }

  current_on_battle.commit('addTraits', trait)
}

TraitRepository.prototype.removeApplyedTraits = function(trait){
  this.unapplyed_traits.add(trait);

  current_on_battle.commit('removeTraits', trait)
}



export let trait_repository = new TraitRepository();
