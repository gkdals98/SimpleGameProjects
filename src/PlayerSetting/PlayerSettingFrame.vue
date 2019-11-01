<template>
  <div id="player_setting_frame">
    <PlayerStatusFrame/>
  </div>
</template>

<script>
import PlayerStatusFrame from './StatusUI/PlayerStatusFrame'
export default{
  name : 'PlayerSettingFrame',
  components : {
    PlayerStatusFrame
  }
}
</script>

<style scoped lang="scss">
#player_setting_frame{
  position: absolute;
  width: 700px;
  height: 520px;
  margin-left: -338px;
  margin-top: -260px;
  background : #A6A6A6;
  border-radius:9px;
}
</style>
