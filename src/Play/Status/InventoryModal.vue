<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
            x
            </button>
          </slot>
        </header>
        <div id="items">
          <ItemObject
            v-for="(item, index) in inventory_items"
            v-bind:key="index"
            v-bind:inventory_point="index"
            v-bind:item="item"
            v-bind:in_inventory=true
            v-bind:is_setting=true
            @min="min_item_amount"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { current_on_battle } from "../../core/CurrentOnBattle.js";
import ItemObject from "../../common/component/ItemObject";

export default{
  name : 'InventoryModal',
  props : {visible : Boolean},
  components : {
    ItemObject
  },
  computed : {
    inventory_items : function () {
      return current_on_battle.state.player_inventory;
    }
  },
  methods : {
    close : function(){
      this.$emit('close');
    },
    item_selected : function(item, inventory_point){
      //성능문제상 UI가 제 때 닫히지 않아 필요.
      if(this.visible){
        current_on_battle.commit( "addItem", item );
      }
      this.$emit('close');
    },
    min_item_amount : function( inventory_point ){
      current_on_battle.commit( "minAmountOfItem", inventory_point );
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../common/modal_common.scss";

#items{
  margin-top: 2px;
  background:#1a000d;
  width: 100%;
  height: 573px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
</style>
