<template>
  <div id="player_setting_frame">
    <PlayerStatusFrame/>
    <TraitAndInventoryFrame/>
    <button id="initial">시작상태로</button>
    <button id="clear">전부 제거</button>
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
    position: absolute;
    width: 165px;
    height: 90px;
    border : 4px solid #000000;
    border-radius:9px;
    font-weight:bolder;
    font-size: 20px;
    &:hover{
      border : 4px solid #b3b3cc;
    }
  }
  #initial{
    margin-left: 0px;
    margin-top: 420px;
    position: absolute;
    width: 165px;
    height: 90px;
    border : 4px solid #000000;
    border-radius:9px;
    font-weight:bolder;
    font-size: 20px;
    &:hover{
      border : 4px solid #b3b3cc;
    }
  }
}
</style>
