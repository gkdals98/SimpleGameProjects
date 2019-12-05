<template>
  <div class="equipment_list_component" v-on:click="selected">
    {{item.item_name}}
  </div>
</template>

<script>
export default{
  name : 'EquipmentListTemplate',
  methods : {
    selected : function(){
      this.$emit("selected", this.item);
    }
  },
  props : ["item"]
}
</script>

<style scoped lang="scss">
.equipment_list_component{
  margin-top: 2px;
  width: 100%;
  height: 55px;
  background:#303030;
  color : #C93A3A;
  text-align: center;
  vertical-align: middle;

  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
</style>
