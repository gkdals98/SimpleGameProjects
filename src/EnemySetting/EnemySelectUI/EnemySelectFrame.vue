<template>
  <div id="enemy_select_frame">
    <EnemyItem
      v-for="(enemy, index) in enemy_list"
      v-bind:key="index"
      v-bind:isChaser=false
      v-bind:enemy="enemy"
    />
    <EnemyItem v-bind:isChaser=true v-bind:enemy="current_chaser"/>
  </div>
</template>

<script>
import { current_on_battle } from "../../core/CurrentOnBattle.js";
import { world_repository } from "../../data/WorldRepository.js";
import { enemy_repository } from "../../data/EnemyRepository.js";
import { chaser_repository } from "../../data/ChaserRepository.js";
import EnemyItem from "./EnemyItem";
export default{
  name : 'EnemySelectFrame',
  components : {
    EnemyItem
  },
  computed : {
    area : function () {
      return world_repository.getDataByIdentifyNumber(
        current_on_battle.state.world_current_area_identifynum);
    },
    enemy_list : function () {
      var enemys = [];
      for(var i = 0; i < this.area.enemys.length; i++){
        enemys.push(enemy_repository.getDataByIdentifyNumber(this.area.enemys[i]));
      }
      return enemys;
    },
    current_chaser : function () {
      return chaser_repository.getDataByIdentifyNumber(
        this.area.chaser);
    }
  }
}
</script>

<style scoped lang="scss">
#enemy_select_frame{
  position: absolute;
  width: 330px;
  height: 500px;
  margin-left: 5px;
  margin-top: 5px;
  background : #ffffb3;
  border : 4px solid #000000;
  border-radius:9px;

  overflow: auto;
}
</style>
