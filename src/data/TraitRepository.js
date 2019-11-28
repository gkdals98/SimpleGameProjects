class TraitRepository{
  constructor(){
    const const_trait_data = require('./TraitData.json')
    this.trait_datas = const_trait_data.trait_datas;
  }
}

//전체 데이터를 참조한다.
TraitRepository.prototype.getWholeData = function(){
  return this.trait_datas;
}

export let trait_repository = new TraitRepository();
