import Vue from 'vue'
import Vuex from 'vuex'
import {trait_repository} from '../data/TraitRepository.js'
import {item_repository} from '../data/ItemRepository.js'
import {deep_copy_tool} from '../common/util/DeepCopyTool.js'

Vue.use(Vuex)

export const current_on_battle = new Vuex.Store({
  // 플레이어의 값들, 적의 값들,

  state : {
    world_current_km : 0,
    world_current_area_identifynum : 0,
    world_current_event_type : "event",
    world_current_event_identifynum : 0,

    //전투 진행은 Controller의 데이터지만 갱신을 위해 vue를 사용.
    battle_current_phase : 0,
    battle_current_text : "모의 전투 수행",
    battle_current_Choicable : [
      {
        text : "기습한다",
        link : 0
      },
      {
        text : "도망간다",
        link : 1
      }
    ],

    player_max_HP : 100,
    player_current_HP : 100,
    player_max_snt : 100,
    player_current_snt : 100,
    player_current_weapon : {
      item_name : "+"
    },
    player_current_armor : {
      item_name : "+"
    },
    player_current_backpack : {
      item_name : "+"
    },
    player_current_str_dices : 3,
    player_current_dex_dices : 3,
    player_current_int_dices : 3,
    player_current_def_dices : 3,
    player_current_traits : [],
    player_current_buffs : [],
    player_inventory : item_repository.getDummyData(),
    player_inventory_pointer : 0,

    amount_in_inventory_slot : {
      slot_0 : 1,
      slot_1 : 1,
      slot_2 : 1,
      slot_3 : 1,
      slot_4 : 1,
      slot_5 : 1,
      slot_6 : 1,
      slot_7 : 1,
      slot_8 : 1,
      slot_9 : 1,
      slot_10 : 1,
      slot_11 : 1,
      slot_12 : 1,
      slot_13 : 1,
      slot_14 : 1,
      slot_15 : 1
    },


    enemy_current_enemy : {},
    enemy_max_HP : 30,
    enemy_current_HP : 30,
    enemy_buffs : [],


    temp_int : 0,
    unapplied_traits : trait_repository.getWholeData()
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
    /*
    월드 컨트롤
    */
    //지역이 옮겨간 경우, 이동값이 0가 되고 현재 지역이 바뀐다.
    setArea (state, identify_number){
      state.world_current_km = 0;
      state.world_current_area_identifynum = identify_number;
    },
    //진행 시 km 증가.
    setProgress (state){
      state.world_current_km++;
    },
    // Event가 옮겨간 경우,
    setEvent (state, event_type, identify_number){
      state.world_current_event_type = event_type;
      state.world_current_event_identifynum = identify_number;
    },
    movePhase (state, phase){
      state.battle_current_phase = phase;
    },




    /*
    장비 설정
    */
    setCurrentWeapon ( state, weapon ) {
      state.player_current_weapon = weapon;
    },
    setCurrentArmor ( state, armor ) {
      state.player_current_armor = armor;
    },
    setCurrentBackpack ( state, backpack ) {
      state.player_current_backpack = backpack;
    },



    /*
    주사위 설정
    */
    strAdd ( state, backpack ) {
      if(state.player_current_str_dices < 9){
        state.player_current_str_dices++;
      }
    },
    strMinus ( state, backpack ) {
      if(state.player_current_str_dices > 1){
        state.player_current_str_dices--;
      }
    },
    dexAdd ( state, backpack ) {
      if(state.player_current_dex_dices < 9){
        state.player_current_dex_dices++;
      }
    },
    dexMinus ( state, backpack ) {
      if(state.player_current_dex_dices > 1){
        state.player_current_dex_dices--;
      }
    },
    intAdd ( state, backpack ) {
      if(state.player_current_int_dices < 9){
        state.player_current_int_dices++;
      }
    },
    intMinus ( state, backpack ) {
      if(state.player_current_int_dices > 1){
        state.player_current_int_dices--;
      }
    },
    defAdd ( state, backpack ) {
      if(state.player_current_def_dices < 9){
        state.player_current_def_dices++;
      }
    },
    defMinus ( state, backpack ) {
      if(state.player_current_def_dices > 0){
        state.player_current_def_dices--;
      }
    },



    /*
    트레잇 설정
    */
    addTraits( state, trait) {
      const idx = state.unapplied_traits.findIndex(
        function(item) {return item.trait_name === trait.trait_name});

      if (idx > -1){
        state.unapplied_traits.splice(idx, 1);
      }
      state.player_current_traits.push(trait);
    },
    removeTraits( state, trait) {
      state.unapplied_traits.push(trait);

      const idx = state.player_current_traits.findIndex(
        function(item) {return item.trait_name === trait.trait_name});
      if (idx > -1){
        state.player_current_traits.splice(idx, 1);
      }
    },
    cleanTriats( state ) {
      state.player_current_traits = [];
      state.unapplid_traits = trait_repository.getWholeData();
    },

    /*
    인벤토리 설정
    */
    addItem ( state, item ) {
      //소지 상한 16개, 따라서 아이템을 주을 수 있는건 가진 아이템이 15개 이하일 때만.
      var temp_item = deep_copy_tool.deep_copy(item);

      if(state.player_inventory_pointer < 15){
        state.amount_in_inventory_slot["slot_"+state.player_inventory_pointer] = 1;
        state.player_inventory[state.player_inventory_pointer] = temp_item;
        state.player_inventory_pointer++;
      }
    },

    addAmountOfItem ( state, inventory_point ) {
      for(var i in state.amount_in_inventory_slot){
        if(i === "slot_" + inventory_point){
          if(state.amount_in_inventory_slot[i] <
            state.player_inventory[inventory_point].limit){
              state.amount_in_inventory_slot[i]++;
          }
          break;
        }
      }
    },

    minAmountOfItem ( state, inventory_point ) {
      var is_removed = false;

      for(var i in state.amount_in_inventory_slot){

        if(i === "slot_" + inventory_point){
          state.amount_in_inventory_slot[i]--;
          if(state.amount_in_inventory_slot[i] === 0){
            //인벤토리상에서 해당 위치 오브젝트 제거
            state.player_inventory.splice(inventory_point, 1);
            is_removed = true;
          }
        }

        if(is_removed){
          //다음 값을 읽어서 한 칸씩 당기는 부분
          var cur_point = Number(i.slice(5));
          if(cur_point !== 15){
            var next_point = cur_point + 1;
            state.amount_in_inventory_slot[i] = state.amount_in_inventory_slot["slot_" + next_point];
          }
        }
      }

      //값이 제거되었다면 마지막 부분에 null object 삽입.
      if(is_removed){
        state.player_inventory.push({item_name : "null"});
        state.amount_in_inventory_slot.slot_15 = 1;
        state.player_inventory_pointer--;
      }
    },


    cleanInventory ( state ) {
      state.player_inventory = item_repository.getDummyData();
      state.player_inventory_pointer = 0;
      for(var i in state.amount_in_inventory_slot){
        state.amount_in_inventory_slot[i] = 0;
      }
    },



    resetRound ( state ) {
      this.state.battle_current_round = 0;
      this.state.battle_current_phase = 0;
      this.state.battle_current_text = "모의 전투 수행";

      this.state.battle_current_Choicable = {
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
      this.state.player_current_HP = 100;
      this.state.player_current_snt = 100;
    }
  },

  action : {

  }
});
