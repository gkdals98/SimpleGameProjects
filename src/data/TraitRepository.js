class TraitRepository{
  constructor(){
    const const_trait_data = require('./TraitData.json');
    this.trait_datas = const_trait_data.selectable_trait_datas;
    this.world_trait_datas = const_trait_data.world_trait_datas;
  }
}

//선택 가능한 트레잇 데이터들
TraitRepository.prototype.getWholeData = function(){
  return this.trait_datas;
}
//Game Controller가 월드 환경에 따라 서치할 수 있는 world trait들
TraitRepository.prototype.getWorldData = function(){
  return this.world_trait_datas;
}

TraitRepository.prototype.getTraitDataByIdentifyNumber = function(identify_number){
  return this.trait_datas[identify_number];
}

TraitRepository.prototype.getWorldTraitDataByIdentifyNumber = function(identify_number){
  return this.world_trait_datas[identify_number];
}
export let trait_repository = new TraitRepository();
