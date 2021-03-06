# 밸런싱용 간단한 시뮬레이터 제작.

### 테스트 목적
+ 얼마만큼의 스텟을 가졌을 때 플레이어가 어디까지 버틸 수 있는지 수치 조정.
+ 초기 적들, 후반 적들은 얼마나 강해야 하는지 수치 조정.
+ 게임을 직접 해보면서 어떤 패턴이 나와야 더 재밌는지를 연구.
+ 게임을 직접 해보며 재미없는 부분을 보완



### 각 UI의 기능 설계
#### Battle UI
+ 전투의 가장 기본적인 기능만을 구현.
+ 준비단계 - 드랍된 아이템을 장착하거나 드랍된 소비템을 사용 가능.
+ 전투도입 - 기습 혹은 도망을 선택 가능. 라운드 1 증가.
+ 전투단계 (전투 종료까지 루프)
    * 턴 시작 : 공격, 도주를 선택한다.
    * 플레이어 턴 : 자신이 사용할 기술을 고른다.
    * 적 턴 : 적이 공격하는 것을 지켜본다.
+ 전투종료 - 드랍된 아이템을 확인 후 챙긴다.
+ Modal을 이용해 현재 Trait과 inventory 확인 가능.
#### Player UI
+ 플레이어의 세팅을 담당.
+ 플레이어의 스텟을 설정한다.
+ 중간 난이도의 난이도 실험을 위해 장착 아이템, 소지 아이템, trait을 조정할 수 있다.
#### Enemy UI
+ 난이도 설정을 담당.
+ 적들이 강한 순서대로 나열되어있으며 어느 적으로부터 게임을 시작할 지 정할 수 있다.
+ 각 적들의 주사위 수치를 조정할 수 있다.

### Core System
#### WorldController
+ 난이도 상승 곡선을 담당
+ Trait들의 해금조건 채크
+ 시간, 날씨 등 진행 단계에 따라 바뀌며 게임에 영향을 주는 외부요인들을 설정.
+ 다음 이벤트를 선택하는 기능.
#### BattleController
+ 전투의 페이즈를 담당하며 각 단계별 효과 발동을 확인한다.
+ 적, 또는 아군 스킬 사용 시 buff, debuff, trait등을 합산해 적과 아군의 최종 상태값을 내준다.
+ 추가적으로 이벤트에서 트레잇이 발동되는 경우까지 고려했을 때, EventController를 따로 두지 않고 BattleController를 합치는 쪽이 나을 수도.

### 전투 설계
#### 러프한 설계
+ 추후 수정될 수 있는 사항으로 전투는 1대 1~3이다. 플레이어가 1. 적들이 1~3
+ 적이 무슨 행동을 할 지 얼추 표시된다. 정보를 어디까지 보여줘야할 지는 고려대상.
+ 무기별로 공격 선택지는 공격기, 방어기, 특수기로 나뉜다.
+ 가방에 달린 패시브 스킬중 전투보조는 일반적으론 이런 효과에 대한 강화를 담당한다. + (추가 효과 혹은 기술이 있을지 고민중)
+ 무기에 계통(봉, 창, 총 등)을 넣어 사용 빈도에 따라 각 계통별 트레잇을 얻게 한다. 주요 효과는 해당 계통 무기장착 시 플레이어 주사위 추가. 또한 추가 패시브 획득.
+ 공격 계통은 크게 근접형, 원거리형 두 가지로 나뉜다. 계통을 적을 때 근접형은 붉은 배경, 원거리형은 초록 배경.
+ 장비엔 모딩도 넣고싶다. 희망사항으로 분량상 감당이 안된다면 가장 먼저 포기할 기획안. 무기의 경우, 보통 소소하게 주사위를 늘려주는 정도로 무기 등급에 따라 같은 효과를 보기위해 더 높은 등급의 모드가 들어간다.
+ 소모성 아이템은 어느정도 낭비를 해도 괜찮도록 재료를 통해 조달할 수도 있게 한다. 이 또한 크레프팅 요소.


#### 진행 방식
+ 적을 발견하며, 혹은 기습당하며 전투가 시작된다.
+ 전투의 전체 페이즈는 아래와 같다.
    * 조우 - 전투 진행 - 루팅
+ 전투 진행은 아래 행동들의 반복이다.
    * 공격 선택 - 플레이어 공격 - 적들의 공격(앞에 있는 순서대로) - 턴 엔드(판정을 위해 존재하며 플레이어가 하는 건 없음)

+ 이 중 조우 페이즈와 전투 진행에 대한 상세를 적자면 아래와 같다.
+ 조우 페이즈 - 적을 먼저 발견할 시 (기습당한 경우 또는 추적자 전투는 해당 안됨)
    * 기습한다 (공격하며 전투 시작)
    * 도망간다 (도주 확률 올라감)
+ 전투 진행 페이즈 - 적과 전투 시
    * 적이 무엇을 할 지 대략적으로 보인다.
    * 플레이어는 공격, 아이템 사용, 도주 세 가지의 선택지 중 하나를 고른다. 아이템 사용은 턴을 소비하지 않지만 한 턴 사용 수는 하나로 한정된다.
    * 공격을 고른 경우, 플레이어는 장착한 무기의 공격 방법 세 가지 중 한 가지를 선택한 뒤 대상을 지정한다.
    * 무기의 공격방법 세 가지는 (공격기, 방어기, 특수기) 의 카테고리로 나뉜다.
    * 선택한 기술에 따라 다른 효과가 발생하며 공격한다.
    * 이후 적들의 공격턴. 플레이어는 각각의 공격에 대해 방어주사위를 굴린다.
    * 전투는 위의 텍스트의 반복이며 중첩되는 시너지와 아이템 사용을 통해 전략을 짜도록 설계한다.

+ 적은 어떤 공격을 할 것인가? AI는어떻게 될 것인가?
    * 적의 스킬도 3가지. 적들은 처음엔 지정된 패턴대로 행동하며 이후 가진 스킬들을 랜덤으로 사용한다.
    * 적의 최대 수는? - 아마 넷?

+ 추가 고려사항
    * 가방에 달린 보조도구를 사용한단 설정으로 가방에 추가 스킬을 줄까? 무기 + 가방의 조합으로 빌드가 가능하도록.
    * 추가로... 전투 중 뭔가 랜덤으로 얻어지는 요소가 하나 필요하다... 그 때 그 때 대처를 하는 용도로....
    * 공격기, 방어기, 특수기 이외의 선택지를 부여하는 데 고려할 점 - 지금같은 시스템에선 공격 선택지는 최대 4개가 딱임. 더 많아봐야 난잡하기만 하고. 나머지는 아이템으로 해결하게 한다.

## 추가적인 기획사항들
#### 전투중의 연출에 대해.
* 버프, 트레잇에 의해 추가판정이 필요한 경우 Trait, 버프의 이름이 가운데 크게 출력된 뒤, 판정에 들어간다.
* 주로 적의 주사위 수치와 플레이어의 주사위 수치를 비교한다.
* 총기 구현 - 탄창 아이템을 사용해야 공격 가능. 스택형으로 장전 상태이상을 얻는다.(무기 탄정 정보를 봐야되는게 난점) 장전 이후엔 스택을 소비해 공격. 장전 상태이상의 효과는 전투 종료시 수량만큼 탄을 얻는 것으로 구현.


#### 이벤트에 대해
+ 무조건 발생하는 이벤트가 있어야한다.
+ 특정 지역에선 몇 번 째 진행 시 발생하는 이벤트도 있어야한다.


#### 상태이상에 대해
+ 고려해야할 것을 정해보자.
+ 발동 타입 - 즉발, 지속, 스택
+ 생성 타이밍 - 아이템 사용, 전투 시작 시, P 공격 전, P 공격 후, E 공격 전, E 공격 후, 이벤트 시작 시, 이벤트 선택지 선택 후.
+ 효과 계산 타이밍 - 이벤트 시작 시, 이벤트 선택지 선택 후, 턴 시작 시, P 공격 전, P 공격 후, E 공격 전, E 공격 후, 아이템 사용.
    * 위 둘은 겹치는 타이밍이 많지만 생성은 경로가 다양하다. Trait, 아이템, 이벤트.
+ 대상이 될 수 있는 수치들 - 전투중엔 HP, snt, hunger, str, dex, int, def, buffs, inventory, 스킬 사용 가능 여부. 루팅 시 아이템 수량.
+ 변동시킬 이벤트 - 기습당하지 않는다, 다치지 않는다, 추가 아이템을 얻는다, 판정 주사위가 늘어난다 등, 이동거리가 늘어난다 등 효과가 다양하다. 정형적이지도 않다.
    * 이벤트가 변동시킬 수 있는 값들이 정의되고 그것들이 같은 함수를 통해 들어오도록 해야한다. 혹은 이벤트의 rooting에 테그가 있어야겠지....
+ 스택형의 수치가 감소하는 타이밍 - 별도 효과계산없이 감소하지 않음, 효과 적용
+ 각각을 어디서 정의할 지, 정의할 장소를 정해보자.

+ 상태이상의 종류는 세 가지 있다.
+ 즉발형.
    * ui상에선 hide상태. 발동한 순간 효과가 처리된다.
    * 제한 - 전투중의 즉시 계산형 효과, 인벤토리에서 사용했을 때 즉시 발동되는 단순 효과

+ 지속시간형.
    * 효과 발동 : 턴 시작, 플레이어 공격 전, 플레이어 공격 후, 적 공격 전, 적 공격 후, 턴 종료
    * 턴 시작시 카운트가 1 줄어든다.
    * 인벤토리 상에서 사용된 경우 다음 전투의 전투페이즈시 발동.
    * 제한 - 전투 중 스킬 선택으로 걸린 효과.

+ 스택형.
    * 지속시간이 없으며 수치가 중요하다.
    * 지속시간 대신 수량이 표시되며 조건에 따라 수량이 증가 또는 감소한다.
    * 인벤토리 상에서 사용된 경우 다음 전투 시작 시, 혹은 즉시 효과가 발동한다.
    * 제한 - 전투 시작과 동시에 상대 또는 자신에게 효과 부여, 스킬 스택, 수치 증가, 이벤트에서 발동되는 효과,

+ 다만 고려할 점. 스택같은거나 종류가 다양해도 되는거고 기본 상태이상은 공,순,지,방 증감소, 출혈, 치유, 혼란, 격분 등 일정 범주를 가지고 있어야한다. 가급적 한 캐릭터에게 상태이상이 6개 이상 걸리는 일은 없었으면 해.

## 실제 제작하며 이슈들 요약하는 부분
#### Player UI 러프
+ 플레이어 설정 메뉴 - 스텟 설정, 트레잇 설정, 장비 설정, 무기 설정
+ 필요한 값들은 방식에 상관없이 공통적으로 아래와 같다.
+ 플레이어 설정 메뉴 - 스텟 설정, 트레잇 설정, 장비 설정, 무기 설정
+ 스텟은 다시 아래와 같이 나뉨
    * HP
    * 힘주사위
    * 민첩주사위
    * 지능주사위
    * 버프 디버프


#### Player UI 고민...
+ 트레잇은 +버튼을 클릭하면 리스트가 쭉 뜨고 그 중에 클릭하는 식으로?
+ 장비도 마찬가지. 해당 슬롯을 클릭하고 리스트가 쭉 뜨면 그 중 선택한다.
+ 무기도 마찬가지.

#### Trait같은 경우는....
+ 작은 태그로 나오고 설명은 마우스를 올리면 팝업으로 뜨면 좋겠다.
+ 처음엔 '+' 버튼 하나만 있음. + 누를 시 모달로 트레잇 리스트 나옴.
+ 트레잇의 +버튼 누르면 클릭됨.

+ 트레잇의 theme 적용.
    * scss를 이용해서 하고 싶은데.

+ 트레잇은 지금처럼 단순 data로 관리하는거보다는 isApplied로 관리하는게 나을 것 같은데.    


#### 스킬의 효과 구현에 대해
+ 대부분의 특수 효과들은 buff, debuff를 통해 구현하자.
+ buff, debuff 데이터는 javascript function으로 구현, 보관한다.
+ 일시적인 효과들 또한 buff, debuff로 어떻게든 구현해 보려함. hide 옵션을 만들어서 표시되는 buff, debuff를 구분해보자.
+ 연타계는 배제한다.
+ 결국 이게 시작돼야 다음으로 넘어가는 단계까지 왔구만.
+ 적과 내 버프디버프 스택을 가지고있고, 매 턴 시작 전, 발동 순서 알고리즘으로 정렬해야겠다.
+ 그렇다면 최종적으로 스킬을 통해 영향을 미치는 과정은 아래와 같이 되는데.

1. 지정된 수만큼 지정된 주사위를 원래 스텟에 +해서 굴림.
2. 성공 판정이 뜨면 버프 혹은 디버프를 대상의 버프디버프 스택에 밀어넣음.

+ 따라서 스킬에 필요한 데이터
    * 스킬 명
    * 스킬 타입
    * 활성화 여부. 총이 있는 이상 어쩔 수 없음. 예열 비슷한 시스템을 가진 무기도 있을지 모르고 적의 스킬을 봉인했다면 이걸로 구분하기도 해야하고.
    * 굴릴 주사위 타입 (배열)
    * 추가 제공 주사위 수 (배열)
    * 성공 주사위 타입 (배열)
    * 성공 주사위 값 (배열)
    * 대상에게 발동시킬 효과
    * 턴 수 (즉발형 효과는 0 처리. 주로 hide되어 겉보기엔 스킬의 효과로 보이는 것들이 해당)
    * ???? 추가 수치 오브젝트 (이건 스킬이 직접 CurrentOnBattle을 참조해서 작업해야할 것 같은데.)

### 인벤토리 UI
+ 인벤토리 UI는 인게임에서도 쓸 것을 상정하고 만들어야함.
+ 더미 데이터 슬롯을 채우고 교체하는 방식으로.
+ 인벤토리는 몇 칸? - 우선 15.
+ 더미데이터를 정의해야한다.
+ 인벤토리 칸 형태가 총 다섯 가지가 있는데요....
    * 세팅 화면에서 비어있음 - 누를 시 모달 출력
    * 세팅 화면에서 차있음 - 누를 시 모달 출력, + - 버튼 추가 표시 및 수량 조절 (- 결과로 0가 되면 제거)
    * 플레이어 화면에서 비어있음 - 아무 반응 없음
    * 플레이어 화면에서 아이템 있음 - 누르면 아이템 소모, -버튼을 두고 버리기 가능 (정말 버릴지는 안물어봄).
    * 모달 화면에 출력 - 누를 시 모달 닫히고 인벤토리에 추가.
+ 그러면 동작은 밖에서 한다 치고 실질적으로 있어야 하는 기능은
    * 더미 데이터일 때와 정상 데이터일 때 UI 다르게 표시.
    * 자체 클릭 기능
    * 숨길 수 있는 +, - 버튼 및 클릭 기능
    * 수량 표시 기능
+ 표시해야할 데이터에 대해 다시 고민해보자.


+ 결론 - 정적인 정보들 말고 동적인 정보들은 오브젝트 안에서 보관하면 안된다....
+ 배열로 해도 똑같네...? 최신형 javascript의 한계로, vue는 오브젝트 내부를 감시할 수는 없으시다 한다....
+ 그래서 object key로 이거 해결함 ㅎㅎ 이거 원래 되는건데 왜 잊고있었지.

+ 근데 이렇게 하니까 아이템의 입수순 자동정렬이 안돼요.
+ 그래서.... 버블소트했어요... 인생

+ 속도가 느려진 것도 문제다... 속도가 느리니까 복수클릭되고있어 지금....
+ 어떻게든 복수 클릭을 막아야함.
+ 일단 click이 한 번 들어오면 is_selected같은걸 false로 만들고... 문제는 창 다시 열리는 순간에 true로 바꿀 방법인데.


#### 추가 이슈
+ 아이템 자동 합치기 이슈
    * 게임 중추가 생기면 고민시작하려는데, 같은 아이템을 또 입수했으면 아이템 수량이 늘어나야지 칸을 하나 더 먹어선 안됩니다.
+ 아이템 및 트레잇 정보 툴 팁
    * 무기, 아이템, 트레잇 object에 마우스를 올리면 설명이 나와야해요.



### Enemy UI 러프
+ 좌측에는 지역을 리스트로 쭉 띄운다.
+ 우측에는 지역을 눌렀을 시 해당 지역의 적들이 나온다.
+ 우 하단에는 리스트 아래에 시작 지점으로 버튼이 있다.
+ 지역만 눌렀을 때는 지역이 설정에 적용된다.
+ 적까지 눌렀을 경우, 해당 적을 지정해서 전투가 시작된다.
+ 즉, 선택했다면 선택된 곳이 강조되어야함.

+ 탈출 시점은 어떻게 정할지도 좀 의문이네.




### 제작시 참고하는 링크들
+ Modal 관련 링크 세 개.
+ https://medium.com/@jeongwooahn/vue-js-%EC%96%91%EB%B0%A9%ED%96%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%94%EC%9D%B8%EB%94%A9-%ED%99%9C%EC%9A%A9-%EB%AA%A8%EB%8B%AC-%EB%A0%88%EC%9D%B4%EC%96%B4%ED%8C%9D%EC%97%85-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0%EB%A5%BC-%ED%86%B5%ED%95%98%EC%97%AC-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-sync-4e2a5cf70dc4
+ https://m.blog.naver.com/PostView.nhn?blogId=jjoommnn&logNo=221102686590&proxyReferer=https%3A%2F%2Fwww.google.com%2F
+ 요건 지난번 캠버스에 데이터 바인딩할 때도 도움받은 상당히 믿을만한 사이트인데 이걸로 주로 참조 - https://alligator.io/vuejs/vue-modal-component/
