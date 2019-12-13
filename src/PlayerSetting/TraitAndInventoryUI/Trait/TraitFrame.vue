<template>
  <div id="trait_frame">
    <TraitModal
      v-show="isTraitModalVisible"
      @close="closeModal"
    />
    <TraitItem
      v-for="(trait, index) in applied_traits"
      v-bind:key="index"
      v-bind:trait="trait"
      v-bind:applied=true
      v-bind:buttonVisible=true
      @trait_selected="dispose_trait"
    />
    <div id="add_trait" @click="open_traitlist">
      +
    </div>
  </div>
</template>

<script>
import TraitItem from '../../../common/component/TraitItem';
import TraitModal from './TraitModal';
import { current_on_battle } from "../../../core/CurrentOnBattle.js";
export default{
  name : 'TraitFrame',
  components : {
    TraitItem,
    TraitModal
  },
  data : function(){
    return {
      isTraitModalVisible : false
    }
  },
  computed : {
    applied_traits : function () {
      return current_on_battle.state.player_current_traits;
    }
  },
  methods : {
    open_traitlist : function(){
      this.isTraitModalVisible = true;
    },
    closeModal : function(){
      this.isTraitModalVisible = false;
    },
    dispose_trait : function(trait) {
      current_on_battle.commit("removeTraits", trait);
    }
  }
}
</script>

<style scoped lang="scss">
#trait_frame{
  position: absolute;
  width: 310px;
  height: 185px;
  margin-left: 5px;
  margin-top: 5px;
  background : #1a000d;
  border : 4px solid #000000;
  border-radius:9px;
  align-content: flex-start;

  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  #add_trait{
    border : 4px solid;
    border-radius:9px;
    width: 25px;
    height: 25px;
    margin-left: 5px;
    margin-top: 3px;
    padding: 1px;
    color : white;
    border-color : grey;
    background : red;

    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
