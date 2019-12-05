<template>
  <div id="item">
    {{item.item_name}}
    <div id="on_setting" v-show="on_setting">
      {{item.ammount}}
      <button id="add_amount" @click="add_amount">+</button>
      <button id="min_amount" @click="min_amount">-</button>
    </div>
  </div>
</template>

<script>
export default{
  name : 'ItemObject',
  props : {item : Object, on_setting : Boolean},
  methods : {
    add_amount : function(){
      this.$emit('add_item', this.item);
    },
    min_amount : function(){
      this.$emit('min_item', this.item);
    }
  }
}
</script>
<style scoped lang="scss">
#item{
  border : 4px solid;
  border-radius:9px;
  height: 30px;
  margin-left: 5px;
  margin-top: 5px;
  padding: 1px;
  font-weight: bolder;

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
</style>
