<template>
  <div class="stat_item">
    <div class="stat_title">{{dice_type}}</div>
    <div id="stat_setting_box">
      <div class="stat_button" v-on:click="minus">◀</div>
      <div class="stat_count">{{dice}}</div>
      <div class="stat_button" v-on:click="add">▶</div>
    </div>
  </div>
</template>

<script>
export default{
  name : 'StatItem',
  methods : {
    add : function(){
      this.$emit('add', this.dice_type);
    },
    minus : function(){
      this.$emit('minus', this.dice_type);
    }
  },
  props : {dice : Number, dice_type : String}
}
</script>

<style scoped lang="scss">
.stat_item {
  display: inline-flex;
  margin: 3px;
  padding: 5px;
  border-radius: 5px;
  justify-content: space-between;
}

.str{
  background:  #cc0000;

}
.dex{
  background:  #668cff;

}
.int{
  background:  #008000;

}
.def{
  background:  #990073;

}

#stat_setting_box{
  display: inline-flex;

}

.stat_title{
  font-size: 36px;
  margin-left: 10px;
  color: #fff;
}
.stat_button{
  font-size: 32px;
  margin-left: 25px;

  &:hover{
    cursor: pointer;
  }
}
.stat_count{
  color: #fff;
  font-size: 36px;
  margin-left: 25px;
  width: 45px;
}
</style>
