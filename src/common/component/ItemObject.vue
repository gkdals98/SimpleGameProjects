<template>
  <div class="item_object">
    <div class="item-not-empty" v-show="!is_empty">
      <div class="item-name" @click="item_selected">
        {{item.item_name}}
      </div>
      <div class="amount_controll" v-show="in_inventory">
        <button class="amount amount-button" @click="add_amount" v-show="is_setting">+</button>
        <div class="amount" v-show="!is_setting"></div>
        <div class="amount">{{amount}}</div>
        <button class="amount amount-button" @click="min_amount">-</button>
      </div>
    </div>

    <div class="item-empty text_center_button" v-show="is_empty" @click="show_modal">
      +
    </div>
  </div>
</template>

<script>
import { current_on_battle } from "../../core/CurrentOnBattle.js";
export default{
  name : 'ItemObject',
  props : {item : Object, in_inventory : Boolean, is_setting : Boolean, inventory_point : Number},
  computed : {
    is_empty : function () {
      if(this.item.item_name==="null"){
        return true;
      }else {
        return false;
      }
    },
    amount : function () {
      var key = "slot_" + this.inventory_point;
      return current_on_battle.state.amount_in_inventory_slot[key];
    }
  },
  methods : {
    show_modal : function(){
      this.$emit('show_modal', this.inventory_point);
    },
    add_amount : function(){
      this.$emit('add', this.inventory_point);
    },
    min_amount : function(){
      this.$emit('min', this.inventory_point);
    },
    item_selected : function(){
      this.$emit('item_selected', this.item, this.inventory_point);
    }
  }
}
</script>
<style scoped lang="scss">
@import "../button_common.scss";
.item_object{
  width: 55px;
  height: 55px;
  border : 4px solid;
  border-radius:9px;
  margin-left: 5px;
  padding: 1px;
  font-weight: bolder;
  background : #D6D5B8;
  &:hover{
    border-color: grey;
  }
  .item-empty{
    width: 100%;
    height: 100%;
  }

  .item-not-empty{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item-name{
      width: 35px;
      height: 55px;
      display: flex;
      align-items: center;
    }
    .amount_controll{
      .amount{
        color : #333EB5;
        width: 17px;
        height: 17px;
        font-size: 6px;
        border: none;
      }
      .amount-button{
        color : white;
        border-radius:4px;
        background-color: #66654A;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
}
</style>
