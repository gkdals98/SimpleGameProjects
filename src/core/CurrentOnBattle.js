import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const current_on_battle = new Vuex.Store({
  // 플레이어의 값들, 적의 값들,
  state: {
    battle : {
      current_round : 0,
      current_phase : 0,
      current_text : "모의 전투 수행",
      current_Choicable : {
        choices : [
          {
            text : "기습한다",
            link : 0
          },
          {
            text : "도망간다",
            link : 1
          }
        ]
      }
    },
    player : {
      max_HP : 100,
      current_HP : 100,
      max_snt : 100,
      current_snt : 100,
      current_weapon : {
        item_name : "+"
      },
      current_armor : {
        item_name : "+"
      },
      current_backpack : {
        item_name : "+"
      },
      current_str_dices : 3,
      current_dex_dices : 3,
      current_int_dices : 3,
      current_def_dices : 3,
      current_traits : [],
      current_buffs : [],
    },
    enemy : {
      current_enemy : {},
      enemy_max_HP : 30,
      enemy_current_HP : 30,
      enemy_buffs : [],
    }
  },
  getters: {
    weapon_skill : state => {
      state.current_weapon.skills
    },
    enemy_skill : state => {
      state.current_enemy.skills
    }
  },
  mutations: {
    movePhase (state, phase){
      state.battle.current_phase = phase;
    },




    setCurrentWeapon ( state, weapon ) {
      state.player.current_weapon = weapon;
      console.log(this.state.player.current_weapon);
    },
    setCurrentArmor ( state, armor ) {
      state.player.current_armor = armor;
      console.log(this.state.player.current_armor);
    },
    setCurrentBackpack ( state, backpack ) {
      state.player.current_backpack = backpack;
      console.log(this.state.player.current_backpack);
    },




    strAdd ( state, backpack ) {
      if(state.player.current_str_dices < 9){
        state.player.current_str_dices++;
      }
    },
    strMinus ( state, backpack ) {
      if(state.player.current_str_dices > 1){
        state.player.current_str_dices--;
      }
    },
    dexAdd ( state, backpack ) {
      if(state.player.current_dex_dices < 9){
        state.player.current_dex_dices++;
      }
    },
    dexMinus ( state, backpack ) {
      if(state.player.current_dex_dices > 1){
        state.player.current_dex_dices--;
      }
    },
    intAdd ( state, backpack ) {
      if(state.player.current_int_dices < 9){
        state.player.current_int_dices++;
      }
    },
    intMinus ( state, backpack ) {
      if(state.player.current_int_dices > 1){
        state.player.current_int_dices--;
      }
    },
    defAdd ( state, backpack ) {
      if(state.player.current_def_dices < 9){
        state.player.current_def_dices++;
      }
    },
    defMinus ( state, backpack ) {
      if(state.player.current_def_dices > 0){
        state.player.current_def_dices--;
      }
    },



    addTraits( state, trait) {
      state.player.current_traits.add(trait);
    },
    addTraits( state, trait) {
      const idx = state.player.current_traits.findIndex(
        function(item) {return item.trait_name === trait.trait_name});
      if (idx > -1){
        state.player.current_traits.splice(idx, 1);
      }
    },


    resetRound ( state ) {
      this.state.battle.current_round = 0;
      this.state.battle.current_phase = 0;
      this.state.battle.current_text = "모의 전투 수행";

      this.state.battle.current_Choicable = {
        choices : [
          {
            text : "기습한다",
            link : 0
          },
          {
            text : "도망간다",
            link : 1
          }
        ]
      };
      this.state.player.current_HP = 100;
      this.state.player.current_snt = 100;
    }
  }
});
