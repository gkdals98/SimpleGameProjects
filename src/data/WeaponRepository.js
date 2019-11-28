class WeaponRepository{
  constructor(){
    const const_weapon_data = require('./WeaponData.json')
    this.weapon_datas = const_weapon_data.weapon_datas;
  }
}

//전체 데이터를 참조한다.
WeaponRepository.prototype.getWholeData = function(){
  return this.weapon_datas;
}

export let weapon_repository = new WeaponRepository();
