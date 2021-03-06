class ArmorRepository{
  constructor(){
    const const_armor_data = require('./ArmorData.json')
    this.armor_datas = const_armor_data.armor_datas;
  }
}

//전체 데이터를 참조한다.
ArmorRepository.prototype.getWholeData = function(){
  return this.armor_datas;
}

ArmorRepository.prototype.getDataByIdentifyNumber = function(identify_number){
  return this.armor_datas[identify_number];
}

export let armor_repository = new ArmorRepository();
