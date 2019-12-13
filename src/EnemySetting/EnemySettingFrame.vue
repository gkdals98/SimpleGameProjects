<template>
  <div id="enemy_setting_frame">
    <EnemySelectFrame @enemy_specified="enemySpecified" @chaser_selected="chaserSelected"/>
    <AreaSelectFrame @area_selected="areaSelected"/>
    <button id="initial">시작상태로</button>
    <button id="clear">전부 제거</button>
  </div>
</template>

<script>
import { current_on_battle } from "../core/CurrentOnBattle.js";
import { world_repository } from "../data/WorldRepository.js";
import EnemySelectFrame from './EnemySelectUI/EnemySelectFrame';
import AreaSelectFrame from './AreaSelectUI/AreaSelectFrame';
export default{
  name : 'EnemySettingFrame',
  components : {
    EnemySelectFrame,
    AreaSelectFrame
  },
  data : function () {
    return {
      current_area : 0
    }
  },
  computed : {
    emenys : function () {
      return world_repository.getDataByIdentifyNumber(this.current_area).enemys;
    }
  },
  methods : {
    areaSelected : function (identify_number){
      current_on_battle.commit("setArea", identify_number);
    },
    chaserSelected : function (chaser_identify_number){
      current_on_battle.commit("setEvent", "chaser", chaser_identify_number);
    },
    enemySpecified : function (identify_number){
      current_on_battle.commit("setEvent", "battle", identify_number);
    }
  }
}
</script>

<style scoped lang="scss">
#enemy_setting_frame{
  position: absolute;
  width: 700px;
  height: 520px;
  margin-left: -328px;
  margin-top: -260px;
  background : #1a000d;
  border-radius:9px;
  #clear{
    margin-left: 170px;
    margin-top: 420px;
    position: absolute;
    width: 165px;
    height: 90px;
    border : 4px solid #000000;
    border-radius:9px;
    font-weight:bolder;
    font-size: 20px;
    &:hover{
      border : 4px solid #b3b3cc;
    }
  }
  #initial{
    margin-left: 0px;
    margin-top: 420px;
    position: absolute;
    width: 165px;
    height: 90px;
    border : 4px solid #000000;
    border-radius:9px;
    font-weight:bolder;
    font-size: 20px;
    &:hover{
      border : 4px solid #b3b3cc;
    }
  }
}
</style>
