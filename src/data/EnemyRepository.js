class EnemyRepository{
  constructor(){
    const const_enemy_data = require('./EnemyData.json');
    this.enemy_datas = const_enemy_data.enemy_datas;
  }
}

EnemyRepository.prototype.getWholeData = function(){
  return this.enemy_datas;
}

EnemyRepository.prototype.getDataByIdentifyNumber = function(identify_number){
  return this.enemy_datas[identify_number];
}

export let enemy_repository = new EnemyRepository();
