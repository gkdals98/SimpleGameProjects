class ItemRepository{
  constructor(){
    const const_item_data = require('./ItemData.json');
    this.item_datas = const_item_data.item_datas;
    this.const_dummy_data = [
      {item_name : "null"},{item_name : "null"},{item_name : "null"},{item_name : "null"},
      {item_name : "null"},{item_name : "null"},{item_name : "null"},{item_name : "null"},
      {item_name : "null"},{item_name : "null"},{item_name : "null"},{item_name : "null"},
      {item_name : "null"},{item_name : "null"},{item_name : "null"},{item_name : "null"}
    ];
  }
}

ItemRepository.prototype.getWholeData = function(){
  return this.item_datas;
}

ItemRepository.prototype.getDummyData = function(){
  return this.const_dummy_data;
}

ItemRepository.prototype.getDataByIdentifyNumber = function(identify_number){
  return this.item_datas[identify_number];
}

export let item_repository = new ItemRepository();
