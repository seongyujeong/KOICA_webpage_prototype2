window.CHARACTERS = [
  {
    id: "abebe",
    name: "아베베",
    job: "에티오피아의 농부",
    emoji: "👨‍🌾",
    badgeBg: "bg-amber-100",
    textColor: "text-amber-900",
    themeColor: "amber",
    initialState: { health: 100, capital: 100 },
    stages: [
      {
        stageNum: 1,
        situation: "3년째 이어지는 가뭄으로 땅이 쩍 갈라졌습니다. 가축들이 목말라 쓰러지기 시작합니다.",
        options: [
          { text: "이웃 마을의 우물까지 왕복 4시간을 걸어 물을 길어온다.", effect: { health: -15, capital: 0 } },
          { text: "비싼 사설 급수차를 불러 당장 가축들에게 물을 먹인다.", effect: { health: 0, capital: -25 } }
        ]
      },
      {
        stageNum: 2,
        situation: "가뭄이 길어지자 식량 가격이 폭등해 온 가족이 굶주림에 시달립니다. 영양실조 증세가 나타납니다.",
        options: [
          { text: "종자용으로 남겨둔 내년도 씨앗 곡물까지 꺼내어 먹는다.", effect: { health: +10, capital: -20 } },
          { text: "하루 한 끼로 버티며 식비를 아끼고 버틴다.", effect: { health: -30, capital: 0 } }
        ]
      },
      {
        stageNum: 3,
        situation: "마을의 마지막 공용 우물마저 완전히 메말랐습니다. 이제 진흙이 섞인 고인 물만 남았습니다.",
        options: [
          { text: "웅덩이 물을 끓여서 마신다. 수인성 질병의 위험이 있습니다.", effect: { health: -25, capital: 0 } },
          { text: "먼 도시에서 정수 알약을 비싸게 구매해 물을 정화한다.", effect: { health: 0, capital: -30 } }
        ]
      },
      {
        stageNum: 4,
        situation: "결국 오염된 물로 인해 어린 자녀가 고열을 앓으며 쓰러졌습니다. 보건소는 멀리 있습니다.",
        options: [
          { text: "가축을 헐값에 처분해 도시의 큰 병원으로 데려간다.", effect: { health: -5, capital: -25 } },
          { text: "치료비가 없어 민간요법으로 집에서 간호하며 버틴다.", effect: { health: -35, capital: 0 } }
        ]
      },
      {
        stageNum: 5,
        situation: "가뭄을 견디지 못한 원주민들 간에 마지막 남은 비옥한 목초지를 두고 무력 충돌이 발생했습니다.",
        options: [
          { text: "위험을 감수하고 고향을 떠나 정부가 지정한 난민 수용소로 이동한다.", effect: { health: -20, capital: 0 } },
          { text: "치안이 불안하지만 정든 고향 집을 지키며 숨어 지낸다.", effect: { health: -35, capital: -5 } }
        ]
      },
      {
        stageNum: 6,
        situation: "난민 수용소에 도착했으나 배급이 턱없이 부족합니다. 이곳에서 살아남기 위한 마지막 선택은?",
        options: [
          { text: "남은 자산을 모두 털어 브로커를 통해 기후 난민 비자를 신청해 본다.", effect: { health: -10, capital: -20 } },
          { text: "열악한 환경이지만 수용소 내 자원봉사단에 합류해 구호물자를 지원받는다.", effect: { health: -20, capital: 0 } }
        ]
      }
    ],
    endingKOICA: `
      <div class='koica-container space-y-4 text-left p-4 bg-emerald-50 rounded-lg border border-emerald-200' style='margin-top: 20px;'>
        <h4 class='text-lg font-bold text-emerald-800' style='font-size: 1.2rem; margin-bottom: 8px;'>🌱 KOICA 대응 사업: 동아프리카 기후스마트 농업 및 청정 수자원 공급 ODA 사업</h4>
        <p class='text-gray-700' style='font-size: 1rem; line-height: 1.6; margin-bottom: 12px;'>
          가뭄이 일상화된 에티오피아 지역에 태양광 발전 지하수 관정을 설치하여 안정적인 식수를 공급합니다. 
          또한 가뭄을 견디는 종자 보급과 기후 예측 기술을 전수하여 농부들이 고향을 떠나지 않고 스스로 자립할 수 있는 단단한 방패를 만들고 있습니다.
        </p>
        <a href='https://www.koica.go.kr' target='_blank' class='inline-block px-4 py-2 bg-emerald-600 text-white font-semibold rounded shadow' style='background-color: #059669; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block;'>
          KOICA 기후 ODA 사업 자세히 보기
        </a>
      </div>
    `
  },
  {
    id: "fatima",
    name: "파티마",
    job: "방글라데시의 14세 소녀",
    emoji: "👧🏽",
    badgeBg: "bg-blue-100",
    textColor: "text-blue-900",
    themeColor: "blue",
    initialState: { health: 100, capital: 80 },
    stages: [
      {
        stageNum: 1,
        situation: "기습적인 대홍수로 인해 마을 전체가 허리까지 물에 잠겼습니다. 학교가 폐쇄되었습니다.",
        options: [
          { text: "물에 잠긴 가재도구를 건지기 위해 오염된 홍수 속으로 들어간다.", effect: { health: -15, capital: +10 } },
          { text: "재산을 포기하고 가족들과 함께 즉시 지붕 위로 대피한다.", effect: { health: 0, capital: -20 } }
        ]
      },
      {
        stageNum: 2,
        situation: "대피한 지 사흘째, 화장실과 하수가 역류해 마을에 콜레라 같은 전염병이 돌기 시작합니다.",
        options: [
          { text: "정부 구호선이 올 때까지 오염된 구역을 피해 지붕 위에서 버틴다.", effect: { health: -25, capital: 0 } },
          { text: "사비를 들여 소형 목선 배를 고용해 수해 지역을 탈출한다.", effect: { health: -5, capital: -30 } }
        ]
      },
      {
        stageNum: 3,
        situation: "홍수로 아버지가 일하시던 공장이 무너져 가계 수입이 완전히 끊겼습니다. 당장 내일 먹을 쌀이 없습니다.",
        options: [
          { text: "파티마가 학업을 중단하고 도시의 의류 공장에 취업해 돈을 번다.", effect: { health: -20, capital: +20 } },
          { text: "가진 귀중품을 모두 팔아 당장의 식비를 마련한다.", effect: { health: -10, capital: -25 } }
        ]
      },
      {
        stageNum: 4,
        situation: "지속되는 우기로 인해 임시 거처의 벽면이 무너져 내리고 한밤중에 저체온증 위기가 찾아왔습니다.",
        options: [
          { text: "임시 천막을 칠 자재를 사기 위해 빚을 낸다.", effect: { health: 0, capital: -25 } },
          { text: "젖은 옷을 입은 채 서로의 체온에 의지하며 밤을 견진다.", effect: { health: -30, capital: 0 } }
        ]
      },
      {
        stageNum: 5,
        situation: "기후 변화로 인해 매년 홍수가 반복되자, 마을 주민 대다수가 고향을 버리고 수도 다카의 슬럼가로 이주하기 시작합니다.",
        options: [
          { text: "기차 지붕에 매달려 위험하지만 수도 슬럼가로 이주를 감행한다.", effect: { health: -25, capital: -10 } },
          { text: "황폐해진 고향 마을에 끝까지 남아 수해 복구 작업을 돕는다.", effect: { health: -35, capital: 0 } }
        ]
      },
      {
        stageNum: 6,
        situation: "이주한 수도 슬럼가는 범죄와 열악한 위생으로 가득합니다. 파티마 가족의 마지막 생존 선택은?",
        options: [
          { text: "구호단체가 운영하는 임시 야간 학교에 다니며 미래를 도모한다.", effect: { health: -15, capital: 0 } },
          { text: "공사장에서 하루 벌어 하루 먹고사는 막노동을 시작한다.", effect: { health: -25, capital: +10 } }
        ]
      }
    ],
    endingKOICA: `
      <div class='koica-container space-y-4 text-left p-4 bg-emerald-50 rounded-lg border border-emerald-200' style='margin-top: 20px;'>
        <h4 class='text-lg font-bold text-emerald-800' style='font-size: 1.2rem; margin-bottom: 8px;'>🌊 KOICA 대응 사업: 방글라데시 취약지역 홍수 회복력 강화 ODA 사업</h4>
        <p class='text-gray-700' style='font-size: 1rem; line-height: 1.6; margin-bottom: 12px;'>
          매년 반복되는 홍수 속에서도 식수가 오염되지 않도록 해발고도를 높인 '홍수 방지형 공공 상수도'와 친환경 화장실을 건립합니다. 
          전염병 확산을 차단하고 조기경보 시스템을 구축해 파티마와 같은 아이들의 배움과 안전을 보호합니다.
        </p>
        <a href='https://www.koica.go.kr' target='_blank' class='inline-block px-4 py-2 bg-emerald-600 text-white font-semibold rounded shadow' style='background-color: #059669; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block;'>
          KOICA 기후 ODA 사업 자세히 보기
        </a>
      </div>
    `
  },
  {
    id: "tane",
    name: "타네",
    job: "투발루의 청년 어부",
    emoji: "🛶",
    badgeBg: "bg-cyan-100",
    textColor: "text-cyan-900",
    themeColor: "cyan",
    initialState: { health: 100, capital: 90 },
    stages: [
      {
        stageNum: 1,
        situation: "만조 때마다 바닷물이 차올라 마당과 집 안까지 소금물이 들어옵니다. 가구들이 썩어가고 있습니다.",
        options: [
          { text: "사비를 들여 집 주변에 시멘트로 임시 방파제를 세운다.", effect: { health: -10, capital: -25 } },
          { text: "집을 포기하고 섬 중심부의 친척 집으로 거처를 옮긴다.", effect: { health: -5, capital: -15 } }
        ]
      },
      {
        stageNum: 2,
        situation: "해수면 상승으로 지하수에 바닷물이 섞여 식수로 쓸 수 없게 되었고, 평생 키우던 과수나무도 다 죽었습니다.",
        options: [
          { text: "빗물을 받아 저장하는 대형 크기의 정수 탱크를 구매한다.", effect: { health: 0, capital: -35 } },
          { text: "정수되지 않은 짠맛이 나는 지하수를 그냥 끓여 마신다.", effect: { health: -30, capital: 0 } }
        ]
      },
      {
        stageNum: 3,
        situation: "해수온 상승으로 산호초가 하얗게 죽어버려(백화현상), 집 앞바다에서 물고기가 잡히지 않습니다. 어업 생계가 붕괴됩니다.",
        options: [
          { text: "기름값을 더 들여 먼 외해(먼바다)까지 목숨을 걸고 거친 고기잡이를 나간다.", effect: { health: -25, capital: -15 } },
          { text: "배를 처분하고 육지에서 정부 구호 공공근로(청소 등)에 참여한다.", effect: { health: -15, capital: -5 } }
        ]
      },
      {
        stageNum: 4,
        situation: "강력한 대형 태풍이 투발루를 관통하며 마을의 유일한 전력 시설과 통신망이 완전히 파괴되었습니다.",
        options: [
          { text: "고립된 상태에서 불안해하며 자가 발전기가 있는 이웃집에 돈을 내고 머문다.", effect: { health: -10, capital: -20 } },
          { text: "부서진 집 잔해를 치우고 맨손으로 복구 작업을 하다가 다치게 된다.", effect: { health: -30, capital: 0 } }
        ]
      },
      {
        stageNum: 5,
        situation: "투발루 정부가 국토 소멸 가능성을 공식 인정하고, 인근 국가(뉴질랜드 등)로의 환경 이주 계획을 발표했습니다.",
        options: [
          { text: "해외 이주 노동자 프로그램에 지원해 고향을 떠날 준비를 한다.", effect: { health: -15, capital: -20 } },
          { text: "조상 대대로 살아온 섬에 끝까지 남아 해안 생태계를 지키기로 결심한다.", effect: { health: -35, capital: 0 } }
        ]
      },
      {
        stageNum: 6,
        situation: "결국 기후 난민이 되어 낯선 타국 땅에 도착했습니다. 언어도 문화도 다른 이곳에서의 마지막 생존 선택은?",
        options: [
          { text: "기술 교육원에 등록하여 타국에서 살아남기 위한 새로운 기술을 배운다.", effect: { health: -15, capital: -15 } },
          { text: "우선 생계를 위해 임금이 매우 낮은 단순 임시직 노동을 시작한다.", effect: { health: -25, capital: +10 } }
        ]
      }
    ],
    endingKOICA: `
      <div class='koica-container space-y-4 text-left p-4 bg-emerald-50 rounded-lg border border-emerald-200' style='margin-top: 20px;'>
        <h4 class='text-lg font-bold text-emerald-800' style='font-size: 1.2rem; margin-bottom: 8px;'>🏝️ KOICA 대응 사업: 태평양 도서국 해안 생태계 복원 및 글로벌 기후 정의 실현 사업</h4>
        <p class='text-gray-700' style='font-size: 1rem; line-height: 1.6; margin-bottom: 12px;'>
          해수면 상승으로 침식 위기에 처한 남태평양 섬나라들을 위해 최고의 자연 방파제인 '맹그로브 숲 복원 사업'을 대규모로 전개합니다. 
          주민들의 생계 수단인 산호초 해양 생태계를 지키고, 대대로 살아온 터전에서 존엄성을 유지하며 살아가도록 국제사회 연대를 주도합니다.
        </p>
        <a href='https://www.koica.go.kr' target='_blank' class='inline-block px-4 py-2 bg-emerald-600 text-white font-semibold rounded shadow' style='background-color: #059669; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block;'>
          KOICA 기후 ODA 사업 자세히 보기
        </a>
      </div>
    `
  }
];
