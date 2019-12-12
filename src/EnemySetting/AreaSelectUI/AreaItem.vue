<template>
  <div class="area_item">
    <div class="area_div" v-bind:style="area.theme.title" @click="selectArea">
      <div class="area_name">{{area.area_name}}</div>
      <div class="area_difficulty">{{area.difficulty}}</div>
    </div>
    <div class="chaser_div">
      <div class="chaser_name">{{chaser.chaser_name}}</div>
      <TraitItem v-bind:applied=true  v-bind:trait="chaser_trait"></TraitItem>
    </div>
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
.area_item{
  width: 290px;
  height: 110px;
  margin-left: 1px;
  padding: 1px;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  align-content: space-around;


  .area_div{
    display: inline-flex;
    margin: 3px;
    padding: 5px;
    border-radius: 5px;
    justify-content: space-between;
    border : 4px solid;
    border-radius:9px;
    margin-top: 1px;
    padding: 1px;
    font-weight: bolder;
    background : #D6D5B8;
    .area_name{
      font-size: 26px;
      margin-left: 10px;
      color: #fff;
    }
  }
  .chaser_div{
    display: inline-flex;
    margin: 3px;
    padding: 5px;
    border-radius: 5px;
    justify-content: space-between;
    border : 4px solid;
    border-radius:9px;
    margin-top: 1px;
    padding: 1px;
    font-weight: bolder;

    color : white;
    background : #5C3527;
    border-color : red;
    .chaser_name{
      font-size: 26px;
    }
  }
}
</style>
