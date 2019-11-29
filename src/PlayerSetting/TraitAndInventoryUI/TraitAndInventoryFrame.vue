<template>
  <div id="trait_and_inventory_main_frame">
    <TraitFrame/>
    <InventoryFrame/>
  </div>
</template>

<script>
import TraitFrame from './Trait/TraitFrame';
import InventoryFrame from './Inventory/InventoryFrame';
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
}
</style>
