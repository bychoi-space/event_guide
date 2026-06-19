// LFmall Exhibition Guide: H_DEAL
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["H_DEAL"] = {
  "cardKey": "H_DEAL",
  "name": "핫딜",
  "category": "PROD",
  "sourceFile": "frmPlanCardHotDeal.xfdl (어드민) / HotDealCard.tsx (프론트)",
  "moduleCode": "MD6",
  "desc": "기획전 본문 내에서 파격적인 단독 특가를 시간 제한(카운트다운) 및 한정 수량 진척도 바(Progress Bar) 요소와 결합하여 강력한 즉각 구매 결정을 유도해내는 최고 전환율의 핵심 프로모션 상품 카드입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 대표 패션 상품의 대형 썸네일과 실시간 째깍이는 카운트다운 타이머가 코랄 색상으로 시각화 노출됩니다. 또한 실시간으로 구매 진척도(판매 비율 %)를 차오르는 오렌지-골드 그라데이션 게이지 바로 보여주어 한정 수량 긴박감을 유도하는 프리미엄 레이아웃입니다. (PC 환경에서는 좌측 이미지 - 우측 상품 정보의 쾌적한 가로형 2분할 플렉스 배치, 모바일 환경에서는 가독성을 확보하기 위해 수직으로 적층되는 1열 풀 레이아웃으로 부드럽게 반응형 자동 전환됩니다.)",
  "backendSettings": [
    {
      "field": "전체 여백 설정",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "기획전 레이아웃 내에서 핫딜 구좌 상하단에 외부 여백(margin)을 유연하게 줄 것인지 여부입니다."
    },
    {
      "field": "배경 색상 코드",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "핫딜 카드 뒷배경을 우아하게 채울 HSL 테마 맞춤 컬러 코드 설정입니다. 기본값은 투명(Transparent)입니다."
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
  "codeSnippet": "// frmPlanCardHotDeal.xfdl.js - 핫딜 등록 시 전시 기간 정밀 시간 유효성 검사 스크립트\nthis.fnHotDealPeriodValidator = function() {\n    var startDt = this.dsHotDealInfo.getColumn(0, \"STRT_DT\");\n    var endDt = this.dsHotDealInfo.getColumn(0, \"END_DT\");\n    \n    // 시작 시간이 종료 시간보다 미래이거나 동일할 때 저장을 반려하는 정밀 안전 장치\n    if (startDt >= endDt) {\n        this.gfnMessage(\"핫딜 시작 시간은 종료 시간보다 미래이거나 같을 수 없습니다. 정확한 전시 기간을 입력해주세요.\", \"A\");\n        return false;\n    }\n    return true;\n};",
  "warnings": "1. [시간 유효성 엄격] 핫딜의 전시 시작 시간은 반드시 종료 시간보다 정밀히 이전이어야 하며, 위반 시 넥사크로 어드민 폼 검증 스크립트단에서 저장이 반려됩니다.\n2. [서버 기준 시간 동기화] 클라이언트-서버 간 시간차로 인해 종료 타이머 오차가 유발되는 사고를 사전에 차단하기 위해, 브라우저 로컬 PC 시스템 시계를 절대 직접 참조하지 않고 넥사크로 공통 백엔드 API 서버의 UTC 기준 라이브 서버 타임을 호출하여 카운트다운을 표시하도록 코딩되어야 합니다.\n3. [품절 및 종료 딤 처리] 준비된 한정 수량 소진 완료 시 즉각적으로 'SOLD OUT' 텍스트와 함께 검은색 반투명 딤드(Opacity 60%) 레이어가 상품 이미지를 뒤덮어야 하며, 핫딜 기간 종료 시 화면에서 컴포넌트가 자동으로 보이지 않도록 동적 렌더링 스위치가 제어됩니다.",
  "imageGuidelines": {
    "pcSize": "해당 없음",
    "moSize": "해당 없음",
    "allowTypes": "해당 없음",
    "maxSize": "해당 없음",
    "adminValidation": "핫딜 카드는 별도의 이미지 업로드 기능을 제공하지 않으며, 등록한 상품 코드를 기반으로 실물 상품 이미지 데이터를 시스템에서 자동으로 연계하여 노출합니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 2개",
    "tabMax": "최대 8개",
    "prodMin": "최소 4개",
    "prodMax": "최대 60개",
    "adminValidation": "어드민(NBOS) 저장 시 각 탭별로 매핑된 상품 개수가 최소 4개 미만이거나 최대 60개를 초과할 경우 Validation 오류 메시지와 함께 저장이 자동으로 반려됩니다. 탭은 최소 2개에서 최대 8개까지 생성 가능합니다."
  }
};
