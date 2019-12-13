<template>
  <div class="area_div" v-bind:style="area.theme.title" v-bind:class="{ is_selected : is_selected }" @click="selectArea">
    <div class="area_name">{{area.area_name}}{{area.difficulty}}</div>
    <TraitItem v-bind:trait="area_trait"></TraitItem>
  </div>
</template>

<script>
import { current_on_battle } from "../../core/CurrentOnBattle.js";
import { chaser_repository } from "../../data/ChaserRepository.js";
import { trait_repository } from "../../data/TraitRepository.js";
import TraitItem from '../../common/component/TraitItem';
export default{
  name : 'AreaItem',
  props : {area : Object},
  components : {
    TraitItem
  },
  computed : {
    chaser : function () {
      return chaser_repository.getDataByIdentifyNumber(this.area.chaser);
    },
    chaser_trait : function () {
      return trait_repository.getWorldTraitDataByIdentifyNumber(this.chaser.chaser_trait);
    },
    area_trait : function () {
      return trait_repository.getWorldTraitDataByIdentifyNumber(this.area.area_trait);
    },
    is_selected : function () {
      return (current_on_battle.state.world_current_area_identifynum === this.area.identify_number);
    }
  },
  methods : {
    selectArea : function () {
      this.$emit('area_selected', this.area.identify_number);
    },
  }
}
</script>
<style scoped lang="scss">
.area_div{
  width: 295px;
  height: 40px;
  display: inline-flex;
  justify-content: space-between;
  border : 4px solid;
  border-radius:9px;
  margin-top: 2px;
  margin-left: 2px;
  padding: 1px;
  font-weight: bolder;
  border-color : grey;
  .area_name{
    font-size: 26px;
    margin-left: 10px;
  }
  &.is_selected{
    border-color : red;
  }
}
</style>
