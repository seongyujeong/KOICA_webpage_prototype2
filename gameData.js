// 기후 난민의 지구촌 방탈출 - 게임 데이터 객체

window.CHARACTERS = [
  {
    id: "abebe",
    name: "아베베",
    job: "에티오피아의 38세 농부",
    theme: "가뭄 및 식량 부족 (농업/수자원 ODA - 6단계 시나리오)",
    emoji: "👨🏽‍🌾",
    illustrationUrl: "https://as1.ftcdn.net/jpg/07/72/86/12/1000_F_772861298_nn4Z88Jmfw6Wy5bVS4BbHv6TtPEoQ0kU.jpg",
    themeConfig: {
      key: "drought",
      primary: "from-amber-100 to-orange-200",
      accent: "text-amber-800",
      bgGradient: "from-amber-50 via-orange-100/40 to-stone-50",
      buttonActive: "bg-amber-600 hover:bg-amber-500 text-white",
      badgeBg: "bg-amber-100 border border-amber-300 text-amber-800",
      illustrationBg: "bg-amber-50/60 border-amber-200/40"
    },
    initialState: { health: 100, capital: 100 },
    stages: [
      {
        stageNum: 1,
        situation: "3년째 이어지는 긴 가뭄으로 대지가 갈라졌습니다. 기르던 작물은 모두 메말라 죽고 당장 마실 물조차 구하기 어렵습니다.",
        options: [
          {
            text: "이웃 마을 우물까지 왕복 4시간 걸어가서 식수 길어오기",
            effect: { health: -15, capital: 0 },
            resultText: "야볕 속에서 4시간 동안 걸어 물을 긷느라 체력이 소모되었지만 돈을 아꼈습니다."
          },
          {
            text: "마을에 들어온 비싼 사설 급수차 불러 식수 충당하기",
            effect: { health: 0, capital: -25 },
            resultText: "돈을 많이 지출해 자산은 줄어들었지만 체력 손실 없이 안전한 식수를 확보했습니다."
          }
        ]
      },
      {
        stageNum: 2,
        situation: "심각한 흉작으로 온 동네에 식량 부족 사태가 벌어졌고 물가가 폭등했습니다. 가족들이 끼니를 때우지 못해 굶주리고 있습니다.",
        options: [
          {
            text: "내년에 파종해야 할 소중한 씨앗 곡물 꺼내 먹기",
            effect: { health: 10, capital: -20 },
            resultText: "배고픔은 임시로 면하고 체력을 일부 회복했으나 내년 농사를 지을 씨앗을 상실해 경제적 손실이 큽니다."
          },
          {
            text: "식비를 극도로 아끼기 위해 온 가족이 하루 한 끼로 버티기",
            effect: { health: -30, capital: 0 },
            resultText: "돈은 아꼈으나 영양 부족과 극심한 굶주림으로 가족들의 건강과 생존력이 큰 타격을 받았습니다."
          }
        ]
      },
      {
        stageNum: 3,
        situation: "가뭄이 고착화되어 공용 우물이 바닥났고 웅덩이에는 흙탕물만 남았습니다. 주변에 오염되지 않은 정수가 급박합니다.",
        options: [
          {
            text: "웅덩이의 오염된 흙탕물을 끓여서 대용식수로 마시기",
            effect: { health: -25, capital: 0 },
            resultText: "돈 한 푼 들이지 않았으나 정수되지 않은 하수를 마셔 가족 모두 배탈과 기력 감퇴를 겪습니다."
          },
          {
            text: "수요 급증으로 매우 비싸진 소독 정수 알약 사서 물 정화하기",
            effect: { health: 0, capital: -30 },
            resultText: "식수 오염에 따른 전염병은 예방했으나 폭등한 의약품 가격으로 인해 자산이 크게 고갈되었습니다."
          }
        ]
      },
      {
        stageNum: 4,
        situation: "오염된 물을 섭취해 면역력이 약한 자녀가 갑자기 고열을 동반한 이질 증세로 신음하며 쓰러졌습니다.",
        options: [
          {
            text: "기르던 소와 염소를 헐값에 급히 팔아 큰 병원으로 수송하기",
            effect: { health: -5, capital: -25 },
            resultText: "마지막 생계 수단인 가축을 팔아 큰 손실을 입었지만 병원 치료 덕분에 자녀는 안정을 찾았습니다."
          },
          {
            text: "자금이 없으므로 민간요법에 기대며 집에서 낫기를 기도하기",
            effect: { health: -35, capital: 0 },
            resultText: "지출은 막았으나 증상이 악화되어 자녀와 가족 모두가 극도로 심각한 신체적, 정신적 위기에 처했습니다."
          }
        ]
      },
      {
        stageNum: 5,
        situation: "가뭄으로 물과 풀밭이 사라지자, 인근 부족 간에 한정된 목초지를 차지하기 위한 무력 충돌이 마을 주변까지 다다랐습니다.",
        options: [
          {
            text: "위험을 피해 정든 집과 밭을 두고 먼 정부 난민 수용소로 대피하기",
            effect: { health: -20, capital: 0 },
            resultText: "피난길을 도보로 횡단하느라 온몸이 쇠약해졌지만 당장의 무력 충돌 참화는 모면했습니다."
          },
          {
            text: "떠나면 아무것도 남지 않으니 집을 지키며 농장에 잔류하기",
            effect: { health: -35, capital: -5 },
            resultText: "충돌 속에서 습격을 당해 부상을 입고 재산에 손상을 당하며 극심한 생존 위험에 빠졌습니다."
          }
        ]
      },
      {
        stageNum: 6,
        situation: "가까스로 난민 수용소에 당도했으나 수많은 기후 난민이 몰려 기본 식량 배급과 물 공급이 턱없이 부족한 한계에 봉착했습니다.",
        options: [
          {
            text: "남아있는 최소한의 돈을 털어 국경 비행편이나 난민 비자 발급 신청하기",
            effect: { health: -10, capital: -20 },
            resultText: "자산은 바닥을 드러냈지만 합법적인 안전 국가로의 이주 기회를 모색하기 위한 서류를 접수했습니다."
          },
          {
            text: "수용소 구호봉사단에 자원 입단하여 활동하며 노동의 보상으로 특별 배급받기",
            effect: { health: -20, capital: 0 },
            resultText: "힘든 자원봉사 노동으로 몸은 피로하지만 추가 급식을 지원받아 자산을 지키며 동료 난민들과 버텨냅니다."
          }
        ]
      }
    ],
    endingKOICA: {
      projectName: "동아프리카 기후스마트 농업 및 청정 수자원 공급 ODA 사업",
      description: "기후변화로 인해 만성적인 가뭄과 식량 위기에 처한 에티오피아 지역을 위해 단순히 일회성 구호물자를 보내는 것에 그치지 않고, 근본적인 자립 인프라를 구축하고 있습니다. 가뭄에 말라버리는 얕은 우물 대신 태양광 발전을 활용해 지하 깊은 곳의 청정 수자원을 끌어올리는 관정 시설을 대거 건립하여 온 마을에 안정적인 식수와 농업용수를 공급합니다. 이에 더해 가뭄과 병충해를 견뎌내는 '기후스마트 종자'를 보급하고, 현지 농민들에게 선진 농업 기술 및 기후 예측 데이터 활용법을 교육하여 기후 난민들이 정든 고향을 떠나지 않고 삶의 터전을 스스로 지켜낼 수 있도록 돕고 있습니다.",
      linkUrl: "https://www.koica.go.kr"
    }
  },
  {
    id: "fatima",
    name: "파티마",
    job: "방글라데시의 14세 소녀",
    theme: "홍수 및 식수 오염 (보건/위생 ODA - 6단계 시나리오)",
    emoji: "👧🏽",
    illustrationUrl: "https://img.magnific.com/free-vector/hand-drawn-ethnic-beauty-illustration-with-woman_52683-109415.jpg?semt=ais_hybrid&w=740&q=80",
    themeConfig: {
      key: "flood",
      primary: "from-emerald-100 to-teal-200",
      accent: "text-emerald-800",
      bgGradient: "from-emerald-50 via-teal-100/40 to-slate-50",
      buttonActive: "bg-emerald-600 hover:bg-emerald-500 text-white",
      badgeBg: "bg-emerald-100 border border-emerald-300 text-emerald-800",
      illustrationBg: "bg-emerald-50/60 border-emerald-200/40"
    },
    initialState: { health: 100, capital: 80 },
    stages: [
      {
        stageNum: 1,
        situation: "이례적인 몬순 대홍수로 마을 전체가 침수되었고, 살던 집의 하부가 잠기며 학교가 긴급 폐쇄되었습니다.",
        options: [
          {
            text: "오염된 물 속으로 헤엄쳐 들어가 가재도구와 중요 집기 건져오기",
            effect: { health: -15, capital: 10 },
            resultText: "침수 집기를 지켜내 일부 자산을 절약했으나 날카로운 파편에 발을 찔려 상처와 감염 위험을 얻었습니다."
          },
          {
            text: "세간살이를 미련 없이 포기하고 안전한 지붕 위로 즉각 대피하기",
            effect: { health: 0, capital: -20 },
            resultText: "가구가 침수되어 자산 손실을 겪었지만 부상 없이 무사히 지붕 위로 대피하여 신체를 지겼습니다."
          }
        ]
      },
      {
        stageNum: 2,
        situation: "홍수가 장기화되며 화장실 정화조와 하수가 전면 역류하여 마을 전체에 콜레라 등 수인성 전염병이 돌기 시작합니다.",
        options: [
          {
            text: "지붕 위에서 빗물을 받아 버티며 공인 구호선이 오기를 기다리기",
            effect: { health: -25, capital: 0 },
            resultText: "비용은 안 들었으나 오랜 굶주림과 차가운 빗물 노출로 온몸에 오한이 들고 체력이 크게 떨어졌습니다."
          },
          {
            text: "모아둔 비상금을 지출해 사설 목선을 고용하여 안전 지대로 급히 탈출하기",
            effect: { health: -5, capital: -30 },
            resultText: "비싼 목선 비용 때문에 자산은 깎였지만 전염병 발원지로부터 빠르게 탈출하여 위생을 확보했습니다."
          }
        ]
      },
      {
        stageNum: 3,
        situation: "홍수로 인해 아버지가 일하시던 지역 섬유 공장이 영구 붕괴했고, 유일한 소득원이 끊겨 당장 저녁거리가 없습니다.",
        options: [
          {
            text: "소녀 파티마가 학업을 중단하고 인근 임시 의류 조립 공장에 아동 노동으로 취업하기",
            effect: { health: -20, capital: 20 },
            resultText: "매일 긴 시간의 야간 노동으로 건강은 크게 해쳤으나 당장 식구들을 부양할 급여 자산을 보탰습니다."
          },
          {
            text: "가지고 있던 유일한 결혼 패물 등 귀중품을 모두 전당포에 처분하여 임시 식비 마련하기",
            effect: { health: -10, capital: -25 },
            resultText: "가보를 잃어버려 자산 가치는 줄어들었지만 노동을 통한 체력 저하 없이 가족들의 당장의 굶주림을 막았습니다."
          }
        ]
      },
      {
        stageNum: 4,
        situation: "강한 폭우가 연이어 몰아쳐 임시 대피용 텐트 벽면이 붕괴하였고 축축한 습기 속에 심각한 저체온증 위기가 닥쳤습니다.",
        options: [
          {
            text: "고리대금업자에게 비싼 이자로 빚을 얻어 텐트 복구용 천막 자재 구입하기",
            effect: { health: 0, capital: -25 },
            resultText: "방수 천막을 마련하여 가족들은 온기를 유지했으나 막대한 이자 채무를 져 재정이 피폐해졌습니다."
          },
          {
            text: "돈이 전혀 없으므로 무너진 천막 아래서 서로의 체온에 의지하며 밤새 참아내기",
            effect: { health: -30, capital: 0 },
            resultText: "채무는 피했으나 뼈를 깎는 밤바람과 추위에 심한 고열 독감에 걸려 전 가족의 생존력이 위험해졌습니다."
          }
        ]
      },
      {
        stageNum: 5,
        situation: "매년 대형 홍수가 끊이지 않고 마을 기반이 무너지자, 이웃들 대다수가 수도 다카의 도시 슬럼가로의 기후 이주를 택하고 있습니다.",
        options: [
          {
            text: "위험을 무릅쓰고 사람이 가득 찬 기차 지붕 위에 매달려 도시 슬럼가로 동반 탈출하기",
            effect: { health: -25, capital: -10 },
            resultText: "이주비와 매달려 타는 고통으로 큰 체력 저하를 입었지만, 물바다가 된 고향을 등지고 수도 다카에 닿았습니다."
          },
          {
            text: "고향 마을에 잔류하여 무너진 둑길 보강과 제방 쌓기 복구 봉사 작업에 동참하기",
            effect: { health: -35, capital: 0 },
            resultText: "자산 유출은 없었으나 고된 중노동과 끊임없이 흙탕물 때문에 일상 생활 복구가 불가능한 지경에 빠집니다."
          }
        ]
      },
      {
        stageNum: 6,
        situation: "간신히 도착한 수도 다카의 빈민 슬럼가. 그곳은 오염된 간이 식수와 심각한 폭력 치안 부재라는 가혹한 현실을 마주합니다.",
        options: [
          {
            text: "구호단체가 무료 운영하는 임시 야간 학교를 다니며 미래의 기후 적응 기회와 공부 이어가기",
            effect: { health: -15, capital: 0 },
            resultText: "낮의 노동과 밤의 공부 병행으로 피로도가 심하지만, 공인 적응 지식과 극복 기회를 교육받아 내일을 도모합니다."
          },
          {
            text: "가혹하지만 당장의 생존을 위해 열악한 부둣가 건설 현장의 막노동 일용직 시작하기",
            effect: { health: -25, capital: 10 },
            resultText: "극심한 골절통과 근육통으로 몸은 망가졌지만 굶어 죽지 않고 지내기 위한 약간의 급전 자산을 움켜쥐었습니다."
          }
        ]
      }
    ],
    endingKOICA: {
      projectName: "방글라데시 취약지역 홍수 회복력 강화 및 식수위생 보건 ODA 사업",
      description: "매년 예측 불가능한 대홍수로 고통받는 방글라데시의 수해 취약 지역을 대상으로 재난에 꺾이지 않는 보건 인프라를 지원하고 있습니다. 홍수가 나도 물에 잠기지 않도록 해발고도를 높여 설계된 '홍수 방지형 공공 상수도 시설'과 오염 물질의 역류를 막는 친환경 위생 화장실을 건립하여 콜레라, 장티푸스 같은 수인성 감염병의 확산을 원천 차단합니다. 또한, 기후 재난 조기경보 시스템을 구축해 주민들이 홍수 피해에 미리 대피할 수 있도록 돕고, 수해로 무너진 지역 보건소와 학교의 복구를 지원하여 파티마와 같은 취약 계층 아동들이 재난 속에서도 건강과 배움의 권리를 잃지 않도록 든든한 버팀목이 되어주고 있습니다.",
      linkUrl: "https://www.koica.go.kr"
    }
  },
  {
    id: "tane",
    name: "타네",
    job: "남태평양 투발루의 청년 어부",
    theme: "해수면 상승 및 국토 소멸 (기후 난민 ODA - 6단계 시나리오)",
    emoji: "🛶",
    illustrationUrl: "https://thumbs.dreamstime.com/b/traditional-african-fisherman-paddling-canoe-water-vector-illustration-cultural-themes-depicts-skillfully-serene-373646283.jpg",
    themeConfig: {
      key: "seaLevel",
      primary: "from-teal-100 to-sky-200",
      accent: "text-cyan-800",
      bgGradient: "from-teal-50 via-sky-100/40 to-slate-50",
      buttonActive: "bg-cyan-600 hover:bg-cyan-500 text-white",
      badgeBg: "bg-cyan-100 border border-cyan-300 text-cyan-800",
      illustrationBg: "bg-cyan-50/60 border-cyan-200/40"
    },
    initialState: { health: 100, capital: 90 },
    stages: [
      {
        stageNum: 1,
        situation: "지구 온난화로 바다가 상승하여 만조 때마다 평생 살아온 바닷가 집 마당까지 짠 바닷물이 넘실거리며 들어옵니다.",
        options: [
          {
            text: "자비를 들여 집 마당 주위에 거친 시멘트 모래 방파제 인공벽 보강하기",
            effect: { health: -10, capital: -25 },
            resultText: "몸은 고단하고 자산 지출은 컸지만 당분간 집 마당이 바닷물에 통째 침수되는 최악의 사태는 저지했습니다."
          },
          {
            text: "바닷물이 도달하지 않는 섬 중심부의 친척 집 셋방을 구해 임시 거처 이사하기",
            effect: { health: -5, capital: -15 },
            resultText: "정든 바다 쪽 터전을 떠나 슬프고 임대료가 들어갔으나 신체 안전은 확보하였습니다."
          }
        ]
      },
      {
        stageNum: 2,
        situation: "지하수에 바닷물이 섞여 마실 물이 없음.",
        options: [
          {
            text: "대형 빗물 저장 탱크 구매",
            effect: { health: 0, capital: -35 },
            resultText: "매우 많은 가계 돈이 지출되었지만, 빗물을 이용한 안정적인 청정 음용 식수를 유지해 생존력을 보장받았습니다."
          },
          {
            text: "짠맛 나는 지하수 그냥 끓여 마시기",
            effect: { health: -30, capital: 0 },
            resultText: "식수 비용은 한 푼도 안 들었지만, 고농도 염분을 지속 섭취해 극심한 탈수 현상과 급성 신장염으로 쇠약해졌습니다."
          }
        ]
      },
      {
        stageNum: 3,
        situation: "해수면 온도 급상승으로 인근 산호초가 하얗게 죽어버리는 백화현상이 일어나 어족 자원이 급감하고 물고기가 잡히지 않습니다.",
        options: [
          {
            text: "기름값 지출을 감수하고 어선을 동원해 험난한 원해(먼바다)로 풍랑 조업 나가기",
            effect: { health: -25, capital: -15 },
            resultText: "높은 파도 속에서 조업하느라 목숨이 위태로운 피로를 겪었으며 유류비 지출도 컸지만 소량의 고기를 잡았습니다."
          },
          {
            text: "소중한 생계 어선을 헐값에 매각 처분하고 정부가 주는 공공 방파제 보수 근로에 참여하기",
            effect: { health: -15, capital: -5 },
            resultText: "어업을 포기해 생계 기반을 상실했으나 비교적 위험도가 덜한 건설 인부로서 소액의 노임을 받아 버텨냅니다."
          }
        ]
      },
      {
        stageNum: 4,
        situation: "엎친 데 덮친 격으로 태평양 온난화가 만들어 낸 슈퍼 태풍이 섬을 직격하여 온 마을의 전력망과 무선 통신망이 전파되었습니다.",
        options: [
          {
            text: "자가 비상 발전기를 소유한 부유층 이웃 집의 방 한 칸을 유료로 빌려 재해 대피하기",
            effect: { health: -10, capital: -20 },
            resultText: "피난 대피 비용 지출이 컸지만 비와 습기를 피하고 스마트폰 충전 및 구호 소식을 들으며 안전히 머물렀습니다."
          },
          {
            text: "파손된 전선과 지붕을 맨손으로 복구하다가 불어난 빗물과 강풍 파편에 부상 입기",
            effect: { health: -30, capital: 0 },
            resultText: "돈은 아꼈지만 심한 타박상과 염증성 부상을 얻어 약도 없이 대피소 좁은 방에서 신체적 큰 고통을 견디게 되었습니다."
          }
        ]
      },
      {
        stageNum: 5,
        situation: "투발루 정부가 공식적으로 국토 침수 소멸 시나리오를 시인하며, 다른 국가로의 전면 기후 이주 계획을 공식 선포했습니다.",
        options: [
          {
            text: "인접 연합 국가인 뉴질랜드/호주의 해외 계절 근로 이주 기후 비자 프로그램에 지원 신청하기",
            effect: { health: -15, capital: -20 },
            resultText: "이주 신청 행정 비용 때문에 자산은 깎였지만 조만간 고국을 떠날 준비를 하는 난민 신분이 시작됩니다."
          },
          {
            text: "이민을 포기하고 끝까지 고향에 남아 해안가 맹그로브 나무를 심는 환경 지킴이 자원봉사에 헌신하기",
            effect: { health: -35, capital: 0 },
            resultText: "국토 사랑과 명예는 높였으나 밀려드는 거친 바닷물 침수로 인하여 생업 활동이 막혀 생존 한계점에 도달합니다."
          }
        ]
      },
      {
        stageNum: 6,
        situation: "마침내 비행기에 몸을 싣고 도착한 차갑고 낯선 대도시 뉴질랜드 땅. 언어도 문화도 낯선 기후 난민으로서의 삶이 열렸습니다.",
        options: [
          {
            text: "정부 지원금을 보태 현지 기술직 교육원에 등록하여 기술직 자격증과 직업 훈련 이수하기",
            effect: { health: -15, capital: -15 },
            resultText: "학업과 낯선 지식 습득으로 두통과 피로를 겪고 자비가 지출되었으나 미래 직장을 향한 기반을 놓았습니다."
          },
          {
            text: "언어가 안 통하니 당장 시내 식당 설거지나 농장 청소 등 저임금 단순 육체 노동 시작하기",
            effect: { health: -25, capital: 10 },
            resultText: "허리디스크 통증 등 관절 쇠약이 생겼지만, 당장 낯선 대도시에서 월세를 보태고 가족을 굶기지 않을 자금을 벌어냅니다."
          }
        ]
      }
    ],
    endingKOICA: {
      projectName: "태평양 도서국 해안 생태계 복원 및 글로벌 기후 정의 실현 사업",
      description: "해수면 상승으로 국토 전체가 소멸할 위기에 처한 남태평양 도서국들을 위해 전 지구적 차원의 '기후 정의'를 실천하고 있습니다. 거센 파도와 해안선 침식을 막아주는 최고의 자연 방파제인 '맹그로브 숲'을 대규모로 조성하고 복원하여 주민들의 안전한 주거 환경을 확보합니다. 나아가 해수온 상승으로 파괴된 산호초 생태계를 복원하고 청정 해양 환경을 유지하기 위한 폐기물 관리 체계를 구축함으로써, 주민들의 주 생계수단인 어업 환경을 보호합니다. 이를 통해 타네와 같은 원주민들이 기후 난민이 되어 전 세계를 떠돌지 않고, 대대로 살아온 아름다운 섬나라에서 존엄한 삶을 지속할 수 있도록 국제 사회의 연대를 주도하고 있습니다.",
      linkUrl: "https://www.koica.go.kr"
    }
  }
];
