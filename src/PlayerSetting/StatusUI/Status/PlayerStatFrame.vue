<template>
  <div class="flex-container" id="player_stat_frame">
    <StatItem v-bind:dice="current_str" v-bind:dice_type="dice_list[0]"
      v-bind:class="dice_list[0]" @add="add_dice"  @minus="minuse_dice"/>
    <StatItem v-bind:dice="current_dex" v-bind:dice_type="dice_list[1]"
      v-bind:class="dice_list[1]" @add="add_dice"  @minus="minuse_dice"/>
    <StatItem v-bind:dice="current_int" v-bind:dice_type="dice_list[2]"
      v-bind:class="dice_list[2]" @add="add_dice"  @minus="minuse_dice"/>
    <StatItem v-bind:dice="current_def" v-bind:dice_type="dice_list[3]"
      v-bind:class="dice_list[3]" @add="add_dice"  @minus="minuse_dice"/>
  </div>
</template>

<script>
import { current_on_battle } from "../../../core/CurrentOnBattle.js";
import StatItem from "./StatItem";
export default{
  name : 'PlayerStatFrame',
  components : {
    StatItem
  },
  data : function (){
    return {
      dice_list : [
        "str",
        "dex",
        "int",
        "def"
      ]
    }
  },
  computed : {
    current_str : function () {
      return current_on_battle.state.player.current_str_dices;
    },
    current_dex : function () {
      return current_on_battle.state.player.current_dex_dices;
    },
    current_int : function () {
      return current_on_battle.state.player.current_int_dices;
    },
    current_def : function () {
      return current_on_battle.state.player.current_def_dices

      f_dices;
    }
  },
  methods : {
    add_dice : function(type){
      if(type==="str"){
        this.strAdd()
      }
      if(type==="dex"){
        this.dexAdd()
      }
      if(type==="int"){
        this.intAdd()
      }
      if(type==="def"){
        this.defAdd()
      }
    },
    minuse_dice : function(type){
      if(type==="str"){
        this.strMinus()
      }
      if(type==="dex"){
        this.dexMinus()
      }
      if(type==="int"){
        this.intMinus()
      }
      if(type==="def"){
        this.defMinus()
      }
    },
    strAdd : function(){
      current_on_battle.commit( "strAdd" );
    },
    strMinus : function(){
      current_on_battle.commit( "strMinus" );
    },
    dexAdd : function(){
      current_on_battle.commit( "dexAdd" );
    },
    dexMinus : function(){
      current_on_battle.commit( "dexMinus" );
    },
    intAdd : function(){
      current_on_battle.commit( "intAdd" );
    },
    intMinus : function(){
      current_on_battle.commit( "intMinus" );
    },
    defAdd : function(){
      current_on_battle.commit( "defAdd" );
    },
    defMinus : function(){
      current_on_battle.commit( "defMinus" );
    },
  }
}
</script>

<style scoped lang="scss">
// #player_stat_frame{
//   position: absolute;
//   width: 312px;
//   height: 235px;
//   margin-left: 5px;
//   margin-top: 250px;
//   background : #6E6E6E;
//   border : 4px solid #000000;
//   border-radius:9px;
// }
#player_stat_frame {
  display: flex;
  position: absolute;
  flex-direction: column;
  align-content: space-around;
  width: 312px;
  height: 235px;
  margin-left: 5px;
  margin-top: 250px;
  border : 4px solid #000000;
  border-radius:9px;
  background: #60B99A;
}
.flex-item {
  display: inline-flex;
  margin: 3px;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  background: #4584b1;
}
</style>
