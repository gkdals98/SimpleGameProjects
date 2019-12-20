<template>
  <div id="player_setting_frame">
    <PlayerStatusFrame/>
    <TraitAndInventoryFrame/>
    <button class="setting_all_button" id="initial">시작상태로</button>
    <button class="setting_all_button" id="clear">전부 제거</button>
  </div>
</template>

<script>
import PlayerStatusFrame from './StatusUI/PlayerStatusFrame'
import TraitAndInventoryFrame from './TraitAndInventoryUI/TraitAndInventoryFrame'
export default{
  name : 'PlayerSettingFrame',
  components : {
    PlayerStatusFrame,
    TraitAndInventoryFrame
  }
}
</script>

<style scoped lang="scss">
@import "../common/button_common.scss";
#player_setting_frame{
  position: absolute;
  width: 700px;
  height: 520px;
  margin-left: -338px;
  margin-top: -260px;
  background : #1a000d;
  border-radius:9px;
  #clear{
    margin-left: 170px;
    margin-top: 420px;
  }
  #initial{
    margin-left: 0px;
    margin-top: 420px;
  }
}
</style>
