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
    header { visibility: hidden; height: 0px !important; }
    footer { visibility: hidden; }
    #MainMenu { visibility: hidden; }
    .block-container {
        padding-top: 0.5rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
    iframe {
        width: 100% !important;
        height: 92vh !important;
        border: none !important;
    }
    </style>
""", unsafe_allow_html=True)

# 3. 로컬 파일 로드 및 경로 설정
current_dir = os.path.dirname(os.path.abspath(__file__))

# index.html 파일 읽기
with open(os.path.join(current_dir, "index.html"), "r", encoding="utf-8") as f:
    html_content = f.read()

# style.css 파일 읽기
with open(os.path.join(current_dir, "style.css"), "r", encoding="utf-8") as f:
    css_content = f.read()

# 🔴 [치트키] 파이썬 따옴표 에러 방지를 위해 gameData.js 파일을 직접 텍스트로 읽어옵니다.
with open(os.path.join(current_dir, "gameData.js"), "r", encoding="utf-8") as f:
    js_content = f.read()

# 4. 강제 인라인 데이터 주입 (HTML 태그 매칭 안정화)
html_content = html_content.replace(
    '</head>',
    f'<script>{js_content}</script></head>'
)

html_content = html_content.replace(
    '<link rel="stylesheet" href="style.css">',
    f'<style>{css_content}</style>'
)

# 5. iframe으로 인라인 통합된 HTML 게임 구동
components.html(html_content, height=850, scrolling=True)
