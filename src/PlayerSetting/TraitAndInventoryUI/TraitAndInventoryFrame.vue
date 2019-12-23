<template>
  <div id="trait_and_inventory_main_frame">
    <TraitFrame/>
    <div id="frame_item">
      <InventoryFrame/>
    </div>
  </div>
</template>

<script>
import TraitFrame from '../../common/component/Trait/TraitFrame';
import InventoryFrame from '../../common/component/Inventory/InventoryFrame';
export default{
  name : 'TraitAndInventoryFrame',
  components : {
    TraitFrame,
    InventoryFrame
  }
}
</script>

<style scoped lang="scss">
#trait_and_inventory_main_frame{
  position: absolute;
  width: 330px;
  height: 400px;
  margin-left: 350px;
  margin-top: 5px;
  background : #5F856F;
  border : 4px solid #000000;
  border-radius:9px;
  #frame_item{
    border : 4px solid #000000;
    border-radius:9px;
    position: absolute;
    width: 310px;
    height: 180px;
    margin-left: 5px;
    margin-top: 205px;
    overflow: auto;

  }
}
</style>
