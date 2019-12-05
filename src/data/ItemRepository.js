class ItemRepository{
  constructor(){
    const const_item_data = require('./ItemData.json');
    this.item_datas = const_item_data.item_datas;
  }
}

ItemRepository.prototype.getWholeData = function(){
  return this.item_datas;
}


export let item_repository = new ItemRepository();
