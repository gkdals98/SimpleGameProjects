<template>
  <div id="player_status_frame">
  </div>
</template>

<script>
import PlayerEquipmentFrame from './Equipment/PlayerEquipmentFrame'
export default{
  name : 'PlayerStatusFrame'
}
</script>

<style scoped lang="scss">
#player_status_frame{
  position: absolute;
  width: 330px;
  height: 500px;
  margin-left: 5px;
  margin-top: 5px;
  background : #5F856F;
  border : 4px solid #000000;
  border-radius:9px;
}
</style>
