class WorldRepository{
  constructor(){
    const const_world_data = require('./WorldData.json');
    this.world_datas = const_world_data.world_datas;
  }
}

WorldRepository.prototype.getWholeData = function(){
  return this.world_datas;
}

WorldRepository.prototype.getDataByIdentifyNumber = function(identify_number){
  return this.world_datas[identify_number];
}

export let world_repository = new WorldRepository();
