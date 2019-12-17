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
      return current_on_battle.state.player.str;
    },
    current_dex : function () {
      return current_on_battle.state.player.dex;
    },
    current_int : function () {
      return current_on_battle.state.player.int;
    },
    current_def : function () {
      return current_on_battle.state.player.def;
    }
  },
  methods : {
    add_dice : function(type){
      current_on_battle.commit( "playerStatusChange", {
        type : type,
        value : 1
      });
    },
    minuse_dice : function(type){
      current_on_battle.commit( "playerStatusChange", {
        type : type,
        value : -1
      });
    }
  }
}
</script>

<style scoped lang="scss">
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
  background: #1a000d;
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
