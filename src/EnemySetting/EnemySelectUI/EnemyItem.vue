<template>
  <div class="enemy_item">
    <div class="enemy_profile">
      <div class="enemy_icon_div">{{enemy.enemy_name}}</div>
      <div class="enemy_stat_div">
        <div>
          <div class="status_hp"> hp : {{enemy.hp}} </div>
          <TraitItem v-show="isChaser" v-bind:applied=true  v-bind:trait="chaser_trait"/>
        </div>
        <div>
          <div class="status"> str : {{enemy.str_dices}} </div>
          <div class="status"> dex : {{enemy.dex_dices}} </div>
          <div class="status"> def : {{enemy.def_dices}} </div>
        </div>
      </div>
    </div>
    <div class="enemy_skill">
      <div class="enemy_skill_component enemy_skill_div"
        v-for="(skill, index) in enemy.skills"
        v-bind:key="index"
        >
        {{skill.skill_name}}
      </div>
      <div class="enemy_skill_component select_enemy_button" @click="selectEnemy">
        Select
      </div>
    </div>
  </div>
</template>

<script>
import { current_on_battle } from "../../core/CurrentOnBattle.js";
import { chaser_repository } from "../../data/ChaserRepository.js";
import { enemy_repository } from "../../data/EnemyRepository.js";
import { trait_repository } from "../../data/TraitRepository.js";
import TraitItem from '../../common/component/TraitItem';
export default{
  name : 'EnemyItem',
  props : {enemy : Object, isChaser : Boolean},
  components : {
    TraitItem
  },
  computed : {
    chaser_trait : function () {
      if(this.isChaser){
        return trait_repository.getWorldTraitDataByIdentifyNumber(this.enemy.chaser_trait);
      }else {
        return { trait_type : "str"}
      }
    }
  },
  methods : {
    selectEnemy : function () {
      this.$emit('enemy_specified', this.isChaser, this.enemy.identify_number);
    },

  }
}
</script>
<style scoped lang="scss">
.enemy_item{
  width: 295px;
  height: 150px;
  margin: 1px;
  padding: 3px;
  border : 4px solid;
  border-radius:9px;
  font-weight: bolder;
  background : #D6D5B8;

  display: flex;
  flex-direction: column;
  align-content: space-around;

  .enemy_profile{
    display: inline-flex;
    justify-content: space-between;
    .enemy_icon_div{
      width: 70px;
      height: 70px;
      border : 4px solid;
      border-radius:9px;
      border-color : grey;
      background-color: #5C183E;
      color: #C7BFD6;
      display: flex;
      align-items: center;
    }
    .enemy_stat_div{
      width: 205px;
      height: 70px;
      border : 4px solid;
      border-radius:9px;
      border-color : grey;
      background-color: #C7C7C7;

      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      .status_hp{
        height: 25px;
        width: 95px;
        margin-top: 5px;
        margin-left: 5px;
        font-weight: bolder;
        text-align: left;
      }
      .status{
        height: 20px;
        width: 95px;
        margin-left: 5px;
        font-weight: bolder;
        text-align: left;
      }
    }
  }

  .enemy_skill{
    display: inline-flex;
    justify-content: space-between;
    margin-top: 4px;
    .enemy_skill_component{
      width: 60px;
      height: 60px;
      border : 4px solid;
      border-radius:9px;
      border-color : grey;
      display: flex;
      align-items: center;
    }
    .enemy_skill_div{
      background-color : #454545;
      color : #ED6B6B;
    }
    .select_enemy_button{
      background-color : #B3B3B3;
    }
  }
/*

.chaser_div{
  display: inline-flex;
  margin: 3px;
  padding: 5px;
  border-radius: 5px;
  justify-content: space-between;
  border : 4px solid;
  border-radius:9px;
  margin-top: 1px;
  padding: 1px;
  font-weight: bolder;

  color : white;
  background : #5C3527;
  border-color : red;
  .chaser_name{
    font-size: 26px;
  }
}
*/
}
</style>
