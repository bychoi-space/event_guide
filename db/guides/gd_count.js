// LFmall Exhibition Guide: COUNT
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["COUNT"] = {
  "cardKey": "COUNT",
  "name": "카운트",
  "category": "NAV",
  "sourceFile": "frmPlanCardCountTime.xfdl (어드민) / CountTime.tsx (프론트)",
  "moduleCode": "MD2",
  "desc": "기획전 내에 실시간 디데이(D-Day) 및 시간/분/초 카운트다운 타이머를 구성하여, 타임특가 행사나 쿠폰 소진 임박 등의 마케팅적 긴박감을 조성하는 기능형 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 지정된 종료 일시까지 실시간으로 차감되는 숫자판 위젯입니다. 어드민 스타일 설정에 따라, 일/시/분/초 숫자가 개별 박스(Flipboard 형태) 안에 강조되어 표시되는 **'박스형 레이아웃'**과 심플하게 텍스트로만 흐르는 **'플랫형 레이아웃'**으로 자동 분기됩니다. 타이머 상단에는 기획자가 커스텀 기입한 소제목(TMR_TITL_TEXT)이 표시됩니다.",
  "backendSettings": [
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 Margin 여부"
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 Padding 여부 (기본값 Y)"
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 하단 여백(Margin) 노출 여부를 제어합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 하단 여백(Padding) 노출 여부를 제어합니다."
    }
  ],
  "codeSnippet": "// CountTime.tsx - Front-end React 정밀 서버시간 동기화 카운트다운 컴포넌트 일부\nexport const CountTime = ({ templateDetail }) => {\n  const [remainTime, setRemainTime] = useState({ d: 0, h: 0, m: 0, s: 0 });\n  const timerRef = useRef<NodeJS.Timeout>();\n\n  useEffect(() => {\n    // 1. 디바이스 로컬 조작 시간을 방어하기 위한 API 서버 타임 획득\n    fetchServerTime().then((serverTime) => {\n      const targetTime = new Date(templateDetail.tmrEndDt).getTime();\n      let diff = Math.max(0, targetTime - serverTime);\n\n      timerRef.current = setInterval(() => {\n        diff = Math.max(0, diff - 1000);\n        if (diff <= 0) {\n          clearInterval(timerRef.current);\n          // 타임아웃 이벤트 콜백 실행 (기획전 영역 비활성화/노출 제외)\n          if (templateDetail.onTimeout) templateDetail.onTimeout();\n        }\n\n        const d = Math.floor(diff / (1000 * 60 * 60 * 24));\n        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));\n        const s = Math.floor((diff % (1000 * 60)) / 1000);\n        setRemainTime({ d, h, m, s });\n      }, 1000);\n    });\n    return () => clearInterval(timerRef.current);\n  }, [templateDetail.tmrEndDt]);\n\n  return (\n    <div style={{ backgroundColor: templateDetail.bkgdClr }}>\n      <FlipTimer remain={remainTime} title={templateDetail.tmrTitlText} color={templateDetail.tmrClr} />\n    </div>\n  );\n};",
  "warnings": "1. [정밀 시각 D-Day 동기성] 기획전 특가 유입 유도를 위한 컴퓨터 시계 수정을 방어하기 위해, 디바이스의 로컬 시간 new Date()를 배제하고 API 서버 응답 시각 동기화를 활용하여 가상 틱을 구동하도록 프론트 설계가 유지되어야 합니다.\n2. [날짜 논리 오류 예방] 시작 일시가 종료 일시보다 미래일 경우 저장 유효성 검사 규칙에 의해 저장이 반려되며 프론트 렌더링 시 강제로 00:00:00 종료 포맷으로 강제 차단됩니다.",
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "최소 1자 이상 기입",
    "prodMax": "최대 50byte (한글 약 25자 한도, 소제목 명칭에 적용)",
    "adminValidation": "본 카드는 상품 전시나 직접적인 이미지 업로드를 요구하지 않는 기능형 순수 정보 컴포넌트입니다. 어드민(NBOS) 저장 시 시작 일시(TMR_STRT_DT)가 종료 일시(TMR_END_DT)보다 1초라도 미래인 논리적 오류가 감지되면 저장 유효성 검증 단에서 차단 메시지와 함께 저장이 거부됩니다."
  }
};
