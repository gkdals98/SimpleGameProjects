class EffectRepository{
  constructor(){
    this.effect_data = [];
  }
}

EffectRepository.prototype.getWholeData = function(){
  return this.effect_data;
}

EffectRepository.prototype.getDataByIdentifyNumber = function(identify_number){
  return this.effect_data[identify_number];
}

export let effect_repository = new EffectRepository();
