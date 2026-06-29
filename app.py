import streamlit as st
import streamlit.components.v1 as components
import os

# 1. Streamlit 페이지 설정
st.set_page_config(
    page_title="Climate Escape (지구촌 방 탈출)", 
    layout="wide",
    initial_sidebar_state="collapsed"
)

# 2. 풀스크린 연출을 위해 Streamlit 기본 여백/헤더 숨김 CSS 주입
st.markdown("""
    <style>
    /* Streamlit 기본 헤더 및 여백 제거 */
    header { visibility: hidden; height: 0px !important; }
    footer { visibility: hidden; }
    #MainMenu { visibility: hidden; }
    
    /* 패딩 제거 및 스크롤바 최적화 */
    .block-container {
        padding-top: 0.5rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
    
    /* iframe 꽉 차게 연출 */
    iframe {
        width: 100% !important;
        height: 92vh !important;
        border: none !important;
    }
    </style>
""", unsafe_allow_html=True)

# 3. 로컬 파일 로드 및 JS 데이터 직접 주입을 위한 경로 설정
current_dir = os.path.dirname(os.path.abspath(__file__))

# index.html 파일 읽기
with open(os.path.join(current_dir, "index.html"), "r", encoding="utf-8") as f:
    html_content = f.read()

# style.css 파일 읽기
with open(os.path.join(current_dir, "style.css"), "r", encoding="utf-8") as f:
    css_content = f.read()

# 인라인 주입용 기후 난민 6단계 확장 데이터 및 KOICA 상세 매칭 데이터
js_content = """
window.CHARACTERS = [
  {
    id: "abebe",
    name: "아베베",
    job: "에티오피아의 농부",
    emoji: "👨‍🌾",
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
          { text: "남은 자산을 모두 털어 브로커를 통해 기후 난민 비자가 신청해 본다.", effect: { health: -10, capital: -20 } },
          { text: "열악한 환경이지만 수용소 내 자원봉사단에 합류해 구호물자를 지원받는다.", effect: { health: -20, capital: 0 } }
        ]
      }
    ],
    endingKOICA: `
      <div class='koica-container space-y-4 text-left p-4 bg-emerald-50 rounded-lg border border-emerald-200'>
        <h4 class='text-lg md:text-xl font-bold text-emerald-800'>🌱 KOICA 대응 사업: 동아프리카 기후스마트 농업 및 청정 수자원 공급 ODA 사업</h4>
        <p class='text-base md:text-lg text-gray-700 leading-relaxed'>
          가뭄이 일상화된 에티오피아 지역에 태양광 발전 지하수 관정을 설치하여 안정적인 식수를 공급합니다. 
          또한 가뭄을 견디는 종자 보급과 기후 예측 기술을 전수하여 농부들이 고향을 떠나지 않고 스스로 자립할 수 있는 단단한 방패를 만들고 있습니다.
        </p>
        <a href='https://www.koica.go.kr' target='_blank' class='inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded shadow transition mt-2 text-sm md:text-base'>
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
    initialState: { health: 100, capital: 80 },
    stages:
