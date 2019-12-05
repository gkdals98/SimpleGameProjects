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
            v-for="(trait, index) in unapplied_traits"
            v-bind:trait="trait"
            v-bind:key="index"
            @trait_selected="trait_selected"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { item_repository } from "../../../data/ItemRepository.js";
import ItemObject from "../../../common/component/ItemObject";

export default{
  name : 'ItemModal',
  components : {
    ItemObject
  },
  data : function () {
    return {
      item_list : current_on_battle.state.etc.unapplied_traits
    }
  },
  methods : {
    close : function(){
      this.$emit('close');
    },
    trait_selected : function(trait){
      current_on_battle.commit( "addTraits", trait );
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

#equipment_items{
  margin-top: 2px;
  background:#AAC2A3;
  width: 100%;
  height: 573px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
</style>
