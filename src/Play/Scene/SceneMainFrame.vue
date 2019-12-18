<template>
  <div id="scene_main_frame">
  </div>
</template>

<script>
export default{
  name : 'SceneMainFrame'
}
</script>

<style scoped lang="scss">
#scene_main_frame{
  position: absolute;
  width: 330px;
  height: 500px;
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
