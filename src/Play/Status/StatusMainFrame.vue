<template>
  <div id="status_main_frame">
    <InventoryModal
      v-show="isInventoryVisible"
      v-bind:visible="isInventoryVisible"
      @close="closeModal"
    />
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
      <div class="text_center_button user_button" @click="show_inventory">가방</div>
      <div id="traits_button" class="text_center_button user_button">Trait</div>
    </div>
  </div>
</template>

<script>
import { current_on_battle } from "../../core/CurrentOnBattle.js";
import PlayerStatusCanvas from "./PlayerStatusCanvas";
import PlayerStatusBar from "./PlayerStatusBar";
import InventoryModal from "./InventoryModal";

export default{
  name : 'StatusMainFrame',

  components: {
    PlayerStatusCanvas,
    PlayerStatusBar,
    InventoryModal
  },
  data : function () {
    return {
      isInventoryVisible : false,
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
  methods : {
    show_inventory : function() {
      console.log("haha");
      this.isInventoryVisible = true;
    },
    closeModal : function(){
      this.isInventoryVisible = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../common/button_common.scss";
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

    #traits_button {
      margin-top: 5px;
    }
    .user_button {
      width : 90px;
      height: 55px;
      background : #AD7013;
      border-radius:4px;
      border : 4px solid #9E9E9E;
      font-size: 20px;
    }
  }
}
</style>
