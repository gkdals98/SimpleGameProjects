class ChaserRepository{
  constructor(){
    const const_chaser_datas = require('./ChaserData.json');
    this.chaser_datas = const_chaser_datas.chaser_datas;
  }
}

ChaserRepository.prototype.getWholeData = function(){
  return this.chaser_datas;
}

ChaserRepository.prototype.getDataByIdentifyNumber = function(identify_number){
  return this.chaser_datas[identify_number];
}


export let chaser_repository = new ChaserRepository();
