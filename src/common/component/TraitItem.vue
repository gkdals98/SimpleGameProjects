<template>
  <div id="trait_item">
    {{trait.trait_name}}
    <button @click="selected">{{is_applied}}</button>
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
  background : #5F856F;
  border : 4px solid #000000;
  border-radius:9px;
  height: 30px;
  margin-left: 5px;
  margin-top: 5px;
  padding: 1px;

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
</style>
