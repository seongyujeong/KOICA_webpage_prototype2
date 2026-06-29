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

# 3. 로컬 파일 로드 (index.html, style.css, gameData.js)
current_dir = os.path.dirname(os.path.abspath(__file__))


# 4. Streamlit components.html은 iframe에서 실행되므로 외부 파일 연결이 불가능합니다.
# 따라서 로컬 CSS와 JS 코드를 HTML 파일 안에 동적으로 직접 주입(Inline)합니다.
html_content = html_content.replace(
    '<link rel="stylesheet" href="style.css">',
    f'<style>{css_content}</style>'
)
html_content = html_content.replace(
    '<script src="gameData.js"></script>',
    f'<script>{js_content}</script>'
)

# 5. iframe으로 인라인 통합된 HTML 게임 구동
components.html(html_content, height=800, scrolling=True)
