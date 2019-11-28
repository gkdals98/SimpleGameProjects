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
        <div id="equipment_items">
          <ItemListTemplate
            v-for="(item, index) in items"
            v-bind:item="item"
            v-bind:key="index"
            @selected="item_selected"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { weapon_repository } from "../../../data/WeaponRepository.js";
import { armor_repository } from "../../../data/ArmorRepository.js";
import { backpack_repository } from "../../../data/BackpackRepository.js";
import { current_on_battle } from "../../../core/CurrentOnBattle.js";
import ItemListTemplate from "./ItemListTemplate";

export default{
  name : 'EquipmentModal',
  components : {
    ItemListTemplate
  },
  computed : {
    items : function(){
      if(this.current_modal == 0){
        return weapon_repository.getWholeData();
      }else if(this.current_modal == 1){
        return armor_repository.getWholeData();
      }else if(this.current_modal == 2){
        return backpack_repository.getWholeData();
      }
    }
  },
  methods : {
    close : function(){
      this.$emit('close');
    },
    item_selected : function(item){
      if(this.current_modal == 0){
        current_on_battle.commit( "setCurrentWeapon" , item );
      }else if(this.current_modal == 1){
        current_on_battle.commit( "setCurrentArmor" , item );
      }else if(this.current_modal == 2){
        current_on_battle.commit( "setCurrentBackpack" , item );
      }
      this.$emit('close');
    }
  },
  props : ["current_modal"]
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

#equipment_items{
  margin-top: 2px;
  background:#AAC2A3;
  width: 100%;
  height: 573px;
  overflow-y:scroll;
}
</style>
