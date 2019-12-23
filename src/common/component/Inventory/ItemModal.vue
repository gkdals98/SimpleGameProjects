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
            v-for="(item, index) in item_list"
            v-bind:item="item"
            v-bind:key="index"
            v-bind:inventory_point="index"
            v-bind:in_inventory=false
            v-bind:is_setting=false
            @item_selected="item_selected"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { item_repository } from "../../../data/ItemRepository.js";
import { current_on_battle } from "../../../core/CurrentOnBattle.js";
import ItemObject from "../../../common/component/ItemObject";

export default{
  name : 'ItemModal',
  props : {selected_inventory_point : Number, visible : Boolean},
  components : {
    ItemObject
  },
  data : function () {
    return {
      item_list : item_repository.getWholeData()
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
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../common/modal_common.scss";
.modal-header{
  text-align: right;

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
}

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
