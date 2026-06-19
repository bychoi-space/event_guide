// LFmall Exhibition Guide: ATTENDANCE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["ATTENDANCE"] = {
  "cardKey": "ATTENDANCE",
  "name": "출석체크",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardStamp.xfdl (어드민) / AttendanceStamp.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "기획전 본문에서 일 단위로 출석체크 스탬프를 찍어 브랜드 방문 리텐션을 확보하고 구매 혜택 및 마일리지를 지급하는 마케팅 특화용 구좌입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 달력형 7일/14일/30일 등의 스탬프 도장판을 노출합니다. 사용자가 '출석 도장 찍기' 버튼 클릭 시 실시간 API 통신을 통해 해당 일자에 완료 도장(Checked)이 날인되며, 누적 출석 일수에 따라 혜택 달성률 게이지 바(Progress bar)가 실시간으로 차오릅니다. (PC 화면에서는 가로 3개(3.3개 수준 슬라이더 구조)의 큼직한 출석 카드형 아이템을 Swiper 슬라이드로 배치하며, 모바일 화면에서는 세로 1열 풀 레이아웃 그리드로 유연하게 캘린더 격자 형태의 30일 출석판이 렌더링됩니다.)",
  "backendSettings": [
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 Padding 여부를 결정합니다. 기본값 Y."
    },
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 여백(Margin) 노출 여부를 제어합니다."
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
    },
    {
      "field": "링크 타겟",
      "id": "LINK_TRGE_VAL",
      "type": "Combo (S/B)",
      "desc": "S: 현재창(_self) / B: 새창(_blank)으로 링크 타겟 페이지를 띄우도록 설정합니다."
    },
    {
      "field": "eTAG 랜딩구분",
      "id": "LINK_DIV_VAL",
      "type": "Combo (필수)",
      "desc": "배너 클릭 로깅 및 성과 추적을 위한 eTAG 분류 코드 매핑값입니다."
    },
    {
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (30byte)",
      "desc": "노출할 버튼의 텍스트 이름입니다."
    }
  ],
  "codeSnippet": "// frmPlanCardStamp.xfdl.js - 기획전 전시 기간과 출석체크 캠페인 기간의 불일치를 방어하기 위한 정밀 유효성 스크립트 일부\nthis.fnStampPeriodValidator = function() {\n    var exhbStart = this.dsExhbInfo.getColumn(0, \"STRT_DT\");\n    var exhbEnd = this.dsExhbInfo.getColumn(0, \"END_DT\");\n    var stampStart = this.dsStampCampaign.getColumn(0, \"STRT_DT\");\n    var stampEnd = this.dsStampCampaign.getColumn(0, \"END_DT\");\n    \n    if (stampStart > exhbStart || stampEnd < exhbEnd) {\n        this.gfnMessage(\"출석체크 캠페인 기간은 기획전 전체 전시 기간을 포함(시작일은 같거나 이전, 종료일은 같거나 이후)해야 안전하게 동작합니다.\", \"A\");\n        return false;\n    }\n    return true;\n};",
  "warnings": "1. [캠페인 기간 종속성] 출석체크 캠페인 기간이 기획전 전시 기간보다 짧을 경우, 고객이 기획전에 진입했으나 출석체크 API가 조기 차단되어 프론트 템플릿 오류가 발생합니다. 반드시 캠페인 운영 기간을 기획전 전시 기간보다 여유 있게 설정하십시오.\n2. [어뷰징 및 동시성 락] 기획전 선착순 및 완주 혜택 마일리지 지급 시 매크로를 통한 다중 호출 공격을 차단하기 위해, 프론트 다운로드 액션 시 트랜잭션 락(isSubmitting 상태 분기)을 엄격히 적용해야 합니다.",
  "imageGuidelines": {
    "pcSize": "가로 1240px × 세로 330px 권장 (PC 상단 메인 비주얼 배너 적용 시)",
    "moSize": "가로 710px × 세로 240px 권장 (Mobile 상단 메인 비주얼 배너 적용 시)",
    "allowTypes": "JPG, JPEG, PNG, GIF",
    "maxSize": "파일당 최대 500KB 이하",
    "adminValidation": "기본적으로 LFmall의 고급 시그니처 캘린더 디자인이 자동 적용되며, 상단 배너 이미지 변경 등록 시 파일 사이즈가 500KB를 초과하면 넥사크로 UI 업로드가 강제 차단됩니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 5일 구성",
    "tabMax": "최대 30일 구성 (5/7/10/14/30일 분기)",
    "prodMin": "보너스 리워드 최소 1구간 이상 설정 필수",
    "prodMax": "보너스 리워드 최대 3구간 이하 설정 제약",
    "adminValidation": "스탬프 전체 일수는 마케팅 성격에 따라 5일, 7일, 10일, 14일, 30일 중 콤보박스 형태로만 조절하여 세팅이 가능합니다. 어드민(NBOS) 저장 시 구간별 보너스 혜택 지급 설정(dsStampReward)이 단 1구간도 등록되지 않았거나 3구간을 초과하면 Validation 위반 에러와 함께 저장이 거부됩니다."
  }
};
