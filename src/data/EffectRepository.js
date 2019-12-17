class EffectRepository{
  constructor(){
    this.effect_data = {};

    /*
    Eval 쓰기 싫다.
    따라서 무식할지언정 상태이상은 오브젝트 내의 함수로 들고있자....

    기본적으로 상태이상이 접근 가능한 항목은
    Hp, Stress, Hunger, str, dex, int, default, buffs(스택쌓는 계통)
    Player inventory 로 한정한다.

    상태이상의 종류는 세 가지 있다.
    1. 즉발형.
    - ui상에선 hide상태. 발동한 순간 효과가 처리된다.
    ex) 전투중의 즉시 계산형 효과, 인벤토리에서 사용했을 때 즉시 발동되는 단순 효과

    2. 지속시간형.
    - 효과 발동 : 턴 시작, 플레이어 공격 전, 플레이어 공격 후, 적 공격 전, 적 공격 후, 턴 종료
    - 턴 시작시 카운트가 1 줄어든다.
    - 인벤토리 상에서 사용된 경우 다음 전투의 전투페이즈시 발동.
    ex) 전투 중 스킬 선택으로 걸린 효과.

    3. 스택형.
    - 지속시간이 없으며 수치가 중요하다.
    - 지속시간 대신 수량이 표시되며 조건에 따라 수량이 증가 또는 감소한다.
    - 인벤토리 상에서 사용된 경우 다음 전투 시작 시, 혹은 즉시 효과가 발동한다.
    ex) 전투 시작과 동시에 상대 또는 자신에게 효과 부여, 스킬 스택, 데미지 증가,
        이벤트에서 발동되는 효과,

    => 스킬에는 상태이상을 부여하는 타이밍 (공격전, 공격후) 가 있어야한다.
    => 트레잇, 미리 사용된 아이템, 이벤트가 [세 가지 케이스로 한정] 다음 전투, 이벤트 시작 시 발동할
       상태이상을 넣어둘 수 있도록, buffs_when_start 큐를 만든다. 큐에는 적용 횟수도 들어간다.
    => 전투 또는 이벤트 종료시 무조건 트레잇으로부터 큐에 넣을 상태이상을 읽는다.
    */


    //단순 HP 회복.
    this.effect_data.HP_Change = {
      type : "now",
      tag : "HP_Recover",
      effect : function ( target, values ) {
        var changed = target.current_HP + values[0];

        if( changed > target.max_HP){
          return target.max_HP;
        }else if ( changed <= 0 ){
          return 0;
        }else {
          return changed;
        }
      }
    };

    //지속형 HP 회복.
    this.effect_data.HP_Recover = {
      type : "duration",
      tag : "HP_Recover",
      effect : function ( target, values ) {
        var changed = target.current_HP + values[0];

        if( changed > target.max_HP){
          return target.max_HP;
        }else if ( changed <= 0 ){
          return 0;
        }else {
          return changed;
        }
      }
    };

    this.effect_data.Hunger_Change = function ( target, values ) {

    };

    this.effect_data.Stress_Change = function ( target, values ) {

    };
  }
}

EffectRepository.prototype.getWholeData = function(){
  return this.effect_data;
}

EffectRepository.prototype.getDataByIdentifyNumber = function(identify_number){
  return this.effect_data[identify_number];
}

export let effect_repository = new EffectRepository();
