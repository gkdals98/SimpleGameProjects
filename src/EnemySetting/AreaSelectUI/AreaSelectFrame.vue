<template>
  <div id="area_select_frame">
    <AreaItem
      v-for="(area, index) in world_data"
      v-bind:key="index"
      v-bind:area="area"
      @area_selected="areaSelected"
    />
  </div>
</template>

<script>
import { world_repository } from "../../data/WorldRepository.js";
import AreaItem from './AreaItem';
export default{
  name : 'AreaSelectFrame',
  components : {
    AreaItem
  },
  computed : {
    world_data : function () {
      return world_repository.getWholeData();
    }
  },
  methods : {
    areaSelected : function (identify_number){
      this.$emit('area_selected', identify_number);
    }
  }
}
</script>

<style scoped lang="scss">
#area_select_frame{
  position: absolute;
  width: 330px;
  height: 400px;
  margin-left: 350px;
  margin-top: 5px;
  background : #cccc00;
  border : 4px solid #000000;
  border-radius:9px;
  font-weight: bolder;

  display: flex;
  flex-direction: column;
  align-content: space-around;

  overflow: auto;
}
</style>
