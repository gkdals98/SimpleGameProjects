<template>
  <div id="inventory_frame">
    <ItemModal
      v-show="isItemModalVisible"
      v-bind:selected_inventory_point="selected_inventory_point"
      v-bind:visible="isItemModalVisible"
      @close="closeModal"
    />
    <ItemObject
      v-for="(item, index) in inventory_items"
      v-bind:key="index"
      v-bind:inventory_point="index"
      v-bind:item="item"
      v-bind:in_inventory=true
      v-bind:is_setting=true
      @add="add_item_amount"
      @min="min_item_amount"
      @show_modal="open_itemlist"
    />
  </div>
</template>

<script>
import ItemModal from "./ItemModal";
import ItemObject from "../../../common/component/ItemObject";
import { current_on_battle } from "../../../core/CurrentOnBattle.js";
export default{
  name : 'InventoryFrame',
  components : {
    ItemModal,
    ItemObject
  },
  data : function(){
    return {
      isItemModalVisible : false,
      selected_inventory_point : 0
    }
  },
  computed : {
    inventory_items : function () {
      return current_on_battle.state.player_inventory;
    },
    amounts : function () {
      return current_on_battle.state.player_item_amount;
    }
  },
  methods : {
    open_itemlist : function(inventory_point){
      this.selected_inventory_point = inventory_point;
      this.isItemModalVisible = true;
    },
    add_item_amount : function( inventory_point ){
      current_on_battle.commit( "addAmountOfItem", inventory_point );

    },
    min_item_amount : function( inventory_point ){
      current_on_battle.commit( "minAmountOfItem", inventory_point );

    },
    closeModal : function(){
      this.isItemModalVisible = false;
    }
  }
}
</script>

<style scoped lang="scss">
#inventory_frame{
  position: absolute;
  width: 310px;
  height: 180px;
  margin-left: 5px;
  margin-top: 205px;
  background : #1a000d;
  border : 4px solid #000000;
  border-radius:9px;

  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
</style>
