// LFmall Exhibition Guide: T_DEAL
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["T_DEAL"] = {
  "cardKey": "T_DEAL",
  "name": "타임특가",
  "category": "PROD",
  "sourceFile": "frmPlanCardTimeDeal.xfdl (어드민) / TimeDealCard.tsx (프론트)",
  "moduleCode": "MD6",
  "desc": "기획전 본문 내에서 지정된 제한 시간 동안만 파격적인 할인가로 상품을 노출하여, 고객의 심리적 마감 임박 효과를 유도하는 시간 한정형 마케팅 핵심 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 개별 상품 카드마다 상단 모서리에 째깍이는 실시간 카운트다운 타이머 배지(⏳ 04:12:35)가 브랜드 포인트 코랄 컬러로 역동적 노출됩니다. 또한 실시간 판매율 진행 상태바(Progress Bar)를 적용하여 시각적 소진 속도를 직관적으로 인지시킵니다. (PC 화면에서는 가로 2열 배치로 시원한 와이드 룩을 연출하며, 모바일 화면에서는 세로 1열 풀 레이아웃 그리드로 유연하게 반응형 렌더링 전환됩니다.)",
  "backendSettings": [
    {
      "field": "전시 시작 일자",
      "id": "SDT",
      "type": "Date (필수)",
      "desc": "타임특가 판매가 시작될 연월일 설정입니다. (YYYYMMDD)"
    },
    {
      "field": "전시 시작 시간",
      "id": "STM",
      "type": "Time (필수)",
      "desc": "타임특가 판매가 시작될 시분초 설정입니다. (HHMMSS)"
    },
    {
      "field": "전시 종료 일자",
      "id": "EDT",
      "type": "Date (필수)",
      "desc": "타임특가 판매가 종료될 연월일 설정입니다. (YYYYMMDD)"
    },
    {
      "field": "전시 종료 시간",
      "id": "ETM",
      "type": "Time (필수)",
      "desc": "타임특가 판매가 종료될 시분초 설정입니다. (HHMMSS)"
    },
    {
      "field": "전체 여백 설정",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "기획전 레이아웃 내에서 타임특가 구좌 상하단에 외부 여백(margin)을 유연하게 줄 것인지 여부입니다."
    },
    {
      "field": "배경 색상 코드",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "타임특가 카드 뒷배경을 우아하게 채울 HSL 테마 맞춤 컬러 코드 설정입니다. 기본값은 투명(Transparent)입니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 여백(Padding) 노출 여부를 제어합니다. 기본값 Y."
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
  "codeSnippet": "// frmPlanCardTimeDeal.xfdl.js - 타임특가 등록 시 전시 시작일시-종료일시 정밀 선후 관계 검증 스크립트\nthis.fnTimeDealPeriodValidator = function() {\n    var startDt = this.dsTimeDealInfo.getColumn(0, \"SDT\") + this.dsTimeDealInfo.getColumn(0, \"STM\");\n    var endDt = this.dsTimeDealInfo.getColumn(0, \"EDT\") + this.dsTimeDealInfo.getColumn(0, \"ETM\");\n    \n    // 시작 시간이 종료 시간보다 미래이거나 동일할 때 저장을 반려하는 정밀 안전 장치\n    if (startDt >= endDt) {\n        this.gfnMessage(\"타임특가 시작 시간은 종료 시간보다 미래이거나 같을 수 없습니다. 정확한 전시 기간을 입력해주세요.\", \"A\");\n        return false;\n    }\n    return true;\n};",
  "warnings": "1. [시간 유효성 엄격] 타임특가의 시작 일시(SDT+STM)는 반드시 종료 일시(EDT+ETM)보다 정밀히 이전 시점이어야 하며, 1초라도 어긋날 시 넥사크로 어드민 폼 검증 단에서 에러 경고와 함께 저장이 반려됩니다.\n2. [서버 기준 시간 동기화] 클라이언트-서버 간 시간차로 인해 종료 타이머 오차가 유발되는 사고를 사전에 차단하기 위해, 브라우저 로컬 PC 시스템 시계를 절대 직접 참조하지 않고 넥사크로 공통 백엔드 API 서버의 UTC 기준 라이브 서버 타임을 호출하여 카운트다운을 표시하도록 코딩되어야 합니다.\n3. [종료 시 자동 미노출] 설정된 전시 종료 시간이 도달하면 화면에서 컴포넌트 전체가 자동으로 보이지 않도록 동적 렌더링 스위치가 제어됩니다.",
  "imageGuidelines": {
    "pcSize": "해당 없음",
    "moSize": "해당 없음",
    "allowTypes": "해당 없음",
    "maxSize": "해당 없음",
    "adminValidation": "타임특가 카드는 별도의 이미지 업로드 기능을 제공하지 않으며, 등록한 상품 코드를 기반으로 실물 상품 이미지 데이터를 시스템에서 자동으로 연계하여 노출합니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 2개",
    "tabMax": "최대 16개",
    "prodMin": "최소 4개",
    "prodMax": "최대 60개",
    "adminValidation": "어드민(NBOS) 저장 시 각 탭별로 매핑된 상품 개수가 최소 4개 미만이거나 최대 60개를 초과할 경우 Validation 오류 메시지와 함께 저장이 자동으로 반려됩니다. 탭은 최소 2개에서 최대 16개까지 생성 가능합니다."
  }
};
