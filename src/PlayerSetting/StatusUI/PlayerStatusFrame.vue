<template>
  <div id="player_status_frame">
    <PlayerEquipmentFrame/>
      <PlayerStatFrame/>
  </div>
</template>

<script>
import PlayerEquipmentFrame from './Equipment/PlayerEquipmentFrame';
import PlayerStatFrame from './Status/PlayerStatFrame';
export default{
  name : 'PlayerStatusFrame',
  components : {
    PlayerEquipmentFrame,
    PlayerStatFrame
  }
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
