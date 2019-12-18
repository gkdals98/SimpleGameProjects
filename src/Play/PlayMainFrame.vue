<template>
  <div id="play_main_frame">
    <TextMainFrame/>
    <SceneMainFrame/>
    <StatusMainFrame/>
  </div>
</template>

<script>
import TextMainFrame from "./Text/TextMainFrame"
import SceneMainFrame from "./Scene/SceneMainFrame"
import StatusMainFrame from "./Status/StatusMainFrame"
export default{
  name : 'PlayMainFrame',
  components : {
    TextMainFrame,
    SceneMainFrame,
    StatusMainFrame
  }
}
</script>

<style scoped lang="scss">
#play_main_frame{
  position: absolute;
  width: 700px;
  height: 520px;
  margin-left: -350px;
  margin-top: -260px;
  background : #A6A6A6;
  border-radius:9px;
}
</style>
