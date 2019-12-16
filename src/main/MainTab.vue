<template>
  <div id="main_tab">
    <div class="container">
      <input type="radio" name="tabs" id="tab_3" v-model="tab_number" value="3"/>
      <label for="tab_3">
        <div class="content">Hello, I'm #</div>
      </label>
      <input type="radio" name="tabs" id="tab_2" v-model="tab_number" value="2"/>
      <label for="tab_2">
        <div class="content"><EnemySettingFrame/></div>
      </label>
      <input type="radio" name="tabs" id="tab_1" v-model="tab_number" value="1"/>
      <label for="tab_1">
        <div class="content"><PlayerSettingFrame/></div>
      </label>
      <input type="radio" name="tabs" id="tab_0" v-model="tab_number" value="0"/>
      <label for="tab_0">
        <div class="content"><BattleFrame/></div>
      </label>
    </div>
  </div>
</template>

<script>
import BattleFrame from '../Battle/BattleFrame';
import PlayerSettingFrame from '../PlayerSetting/PlayerSettingFrame';
import EnemySettingFrame from '../EnemySetting/EnemySettingFrame';

export default {
  name: 'MainTab',
  components: {
    BattleFrame,
    PlayerSettingFrame,
    EnemySettingFrame
  },
  data : function (){
    return {
      tab_number : 0
    }
  },
  watch : {
    tab_number : function (newVal, oldVal){
      if(newVal == 1 || newVal == 2){
        this.tabOut();
      }
    }
  },
  methods : {
    tabOut : function() {
      console.log("진행 데이터를 전부 날리는 동작 수행")
    }
  }
}
</script>

<style scoped lang="scss">
@import "../common/frame_var.scss";
//https://codepen.io/_massimo/pen/oYWbqL/
$bg: #000;
$tabs: 4;
$c-height: 550px;
$marker-width: 24px;
$indent: 6px;
$marker-height: $c-height/$tabs;
$tab-color: #850D41 #424242 #554487 #753E59;
$slide-time: 0.9s;
$content-fadeout-time: $slide-time/3;
$content-fadein-time: 0.7s;

#main_tab {
    overflow: hidden;
    background: $bg;

    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: $c-width;
        height: $c-height;
        margin: -$c-height/2 0 -$c-width/2;
        counter-reset: tab-counter $tabs + 1;

        input[type=radio] {
            display: none;

            // &:checked + label {
            //   & .content {
            //     @include transition_step_end(opacity, $content-fadein-time);
            //     opacity: 1;
            //     pointer-events: none;
            //   }
            // }
            @for $i from 1 through $tabs {
                &:checked + label ~ label:nth-child(#{2*$i}) {
                    width: ($tabs - $i)*$marker-width + $indent;

                    & .content {
                        @include transition_ease(opacity, $content-fadeout-time);
                        opacity: 0;
                        pointer-events: none;
                    }
                }
                & + label {
                    position: absolute;
                    height: 100%;
                    box-shadow: 2px 0px 4px -2px $bg;
                    //cursor: pointer;
                    @include transition_ease(width, $slide-time);

                    &:nth-child(2) {
                        box-shadow: none;
                    }

                    &:nth-child(#{2*$i}) {
                        $color: nth($tab-color, $tabs - $i + 1);
                        width: $c-width - ($i - 1)*$marker-width;
                        background: $color;

                        @if ($i > 1) {
                            &:after {
                                position: absolute;
                                content: '';
                                top: percentage(($tabs - $i)*(100/$tabs)/100);
                                left: 100%;
                                width: $marker-width - $indent;
                                height: $marker-height;
                                border-radius: 0 $marker-height/10 $marker-height/10 0;
                                background: $color;
                                box-shadow: 3px 0px 6px -3px $bg;
                            }
                        }
                    }

                    .content {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: $c-width/2;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
