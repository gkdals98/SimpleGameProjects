<template>
  <div id="player_equipment_frame">
    <EquipmentModal
      v-show="isEquipModalVisible"
      @close="closeModal"
      v-bind:current_modal="current_modal"
    />
    <div id="user_profile">('ㅂ')</div>
    <button class="item_select_button" v-on:click="weaponModal">{{current_weapon.item_name}}</button>
    <button class="item_select_button" v-on:click="armorModal">{{current_armor.item_name}}</button>
    <button class="item_select_button" v-on:click="backpackModal">{{current_backpack.item_name}}</button>
  </div>
</template>

<script>
import EquipmentModal from "./EquipModalUI";
import { current_on_battle } from "../../../core/CurrentOnBattle.js";
export default{
  name : 'PlayerEquipmentFrame',
  components : {
    EquipmentModal
  },
  data : function(){
    return {
      isEquipModalVisible : false,
      current_modal : 0,
    }
  },
  computed : {
    current_weapon : function () {
      return current_on_battle.state.player.current_weapon;
    },
    current_armor : function () {
      return current_on_battle.state.player.current_armor;
    },
    current_backpack : function () {
      return current_on_battle.state.player.current_backpack;
    }
  },
  methods : {
    weaponModal : function(){
      this.isEquipModalVisible = true;
      this.current_modal = 0;
    },
    armorModal : function(){
      this.isEquipModalVisible = true;
      this.current_modal = 1;
    },
    backpackModal : function(){
      this.isEquipModalVisible = true;
      this.current_modal = 2;
    },
    closeModal : function(){
      this.isEquipModalVisible = false;
    }
  }
}
</script>

<style scoped lang="scss">
#player_equipment_frame{
  position: absolute;
  width: 312px;
  height: 230px;
  margin-left: 5px;
  margin-top: 5px;
  background : #6E6E6E;
  border : 4px solid #000000;
  border-radius:9px;
  #user_profile{
    margin-left: 2px;
    margin-top: 2px;
    border : 4px solid #000000;
    border-radius:9px;
    width: 300px;
    height: 120px;
    background : #AAC2A3;
    font-size: 40px;
    font-weight: bold;
    color: #0A0D09;
    vertical-align: middle;
  }
  .item_select_button{
    cursor: pointer;
    width: 90px;
    height: 90px;
    background : #36522D;
    border : 4px solid #000000;
    border-radius:9px;
    margin-left: 4px;
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
    color: #4AAE9B;
    &:hover{
      background : #20331A;
      border : 4px solid #404040;

    }
  }
}
</style>
