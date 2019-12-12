<template>
  <div class="trait_item"
    v-bind:style="trait_theme">
    {{trait.trait_name}}
    <button id="trait_select" @click="selected" v-bind:style="trait_theme">{{is_applied}}</button>
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
    },
    trait_theme : function() {
      if(this.trait.trait_type==="str"){
        return {
          "color" : "white",
          "background" : "red",
          "border-color" : "grey"
        }
      }else if(this.trait.trait_type==="dex"){
        return {
          "color" : "white",
          "background" : "blue",
          "border-color" : "grey"
        }
      }else if(this.trait.trait_type==="inteli"){
        return {
          "color" : "white",
          "background" : "green",
          "border-color" : "grey"
        }
      }else if(this.trait.trait_type==="def"){
        return {
          "color" : "white",
          "background" : "purple",
          "border-color" : "grey"
        }
      }else if(this.trait.trait_type==="buff"){
        return {
          "color" : "#222624",
          "background" : "white",
          "border-color" : "grey"
        }
      }else if(this.trait.trait_type==="debuff"){
        return {
          "color" : "#222624",
          "background" : "yellow",
          "border-color" : "grey"
        }
      }else if(this.trait.trait_type==="penalty"){
        return {
          "color" : "red",
          "background" : "black",
          "border-color" : "red"
        }
      }else if(this.trait.trait_type==="chaser"){
        return {
          "color" : "red",
          "background" : "brown",
          "border-color" : "red"
        }
      }else if(this.trait.trait_type==="world"){
        return {
          "color" : "white",
          "background" : "teal",
          "border-color" : "grey"
        }
      }else {
        return {
          "color" : "white",
          "background" : "red",
          "border-color" : "grey"
        }
      }
    }
  }

}
</script>
<style scoped lang="scss">
.trait_item{
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
