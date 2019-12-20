<template>
  <div id="status_main_frame">
    <div id="status_frame">
      <PlayerStatusCanvas style="width: 100%; height: 130px;">
        <PlayerStatusBar
          :x1="((0 / 3) * 100)"
          :x2="((0 / 3) * 100) + (100 / 3)-2"
          :y1="100"
          :y2="100 - current_hp"
          :color="hp_color"
          :value="current_hp"
        />
        <PlayerStatusBar
          :x1="((1 / 3) * 100)"
          :x2="((1 / 3) * 100) + (100 / 3) -2"
          :y1="100"
          :y2="100 - current_snt"
          :color="snt_color"
          :value="current_snt"
        />
        <PlayerStatusBar
          :x1="((2 / 3) * 100)"
          :x2="((2 / 3) * 100) + (100 / 3)-2"
          :y1="100"
          :y2="100 - current_hunger"
          :color="hunger_color"
          :value="current_hunger"
        />
      </PlayerStatusCanvas>
    </div>
    <div id="icons_frame">
      <div id="inventory_button">인벤토리</div>
      <div id="traits_button">Trait</div>
    </div>
  </div>
</template>

<script>
import { current_on_battle } from "../../core/CurrentOnBattle.js";
import PlayerStatusCanvas from "./PlayerStatusCanvas";
import PlayerStatusBar from "./PlayerStatusBar";
export default{
  name : 'StatusMainFrame',

  components: {
    PlayerStatusCanvas,
    PlayerStatusBar
  },
  data : function () {
    return {
      hp_color : "#C71E3D",
      snt_color : "#BFB64B",
      hunger_color : "#3D735A"
    }
  },

  computed : {
    current_hp: function (){
      return current_on_battle.state.player.current_HP;
    },
    current_snt: function (){
      return current_on_battle.state.player.current_snt;
    },
    current_hunger : function() {
      return current_on_battle.state.player.current_hunger;
    }
  },

  // Randomly selects a value to randomly increment or decrement every 16 ms.
  // Not really important, just demonstrates that reactivity still works.
}
</script>

<style scoped lang="scss">
#status_main_frame{
  position: absolute;
  width: 330px;
  height: 140px;
  margin-left: 5px;
  margin-top: 365px;
  background : #524d69;
  border : 4px solid #000000;
  border-radius:9px;
  overflow: auto;
  display: flex;

  #status_frame {
    margin-left: 5px;
    margin-top: 5px;
    width : 220px;
  }
  #icons_frame{
    width : 90px;
    height: 130px;
    margin-left: 5px;
    margin-top: 5px;
    #inventory_button {
      width : 90px;
      height: 55px;
      background : #AD7013;
      border-radius:4px;
      border : 4px solid #9E9E9E;
      display: flex;
      align-items: center;
      font-weight:bolder;
      font-size: 20px;
      justify-content: center;
    }
    #traits_button {
      width : 90px;
      height: 55px;
      background : #AD7013;
      margin-top: 5px;
      border-radius:4px;
      border : 4px solid #9E9E9E;
      display: flex;
      align-items: center;
      font-weight:bolder;
      font-size: 20px;
      justify-content: center;
    }
  }
}
</style>
