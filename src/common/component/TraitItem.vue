<template>
  <div id="trait_item">
    {{trait.trait_name}}
    <button>-</button>
  </div>
</template>

<script>
export default{
  name : 'TraitItem',
  props : {trait : Object}
}
</script>
<style scoped lang="scss">
#trait_item{
  background : #5F856F;
  border : 4px solid #000000;
  border-radius:9px;

  display: flex;
  flex-wrap: wrap;
}
</style>
