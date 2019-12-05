<template>
  <div id="trait_item"
    v-bind:style="trait.trait_theme">
    {{trait.trait_name}}
    <button id="trait_select" @click="selected">{{is_applied}}</button>
  </div>
</template>

<script>
export default{
  name : 'TraitItem',
  props : {trait : Object, applied : Boolean},
  methods : {
    selected : function(){
      this.$emit('trait_selected', this.trait);
    }
  },
  computed : {
    is_applied : function () {
      if(this.applied) {
        return "-";
      }else{
        return "+";
      }
    }
  }

}
</script>
<style scoped lang="scss">
#trait_item{
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
  #trait_select{
    background: transparent;
    border : none;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
