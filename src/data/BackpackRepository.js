class BackpackRepository{
  constructor(){
    const const_backpack_data = require('./BackpackData.json')
    this.backpack_datas = const_backpack_data.backpack_datas;
  }
}

//전체 데이터를 참조한다.
BackpackRepository.prototype.getWholeData = function(){
  return this.backpack_datas;
}

BackpackRepository.prototype.getDataByIdentifyNumber = function(identify_number){
  return this.backpack_datas[identify_number];
}

export let backpack_repository = new BackpackRepository();
