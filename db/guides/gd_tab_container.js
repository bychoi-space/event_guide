// LFmall Exhibition Guide: TAB_CONTAINER
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["TAB_CONTAINER"] = {
  "cardKey": "TAB_CONTAINER",
  "name": "탭 컨테이너",
  "category": "PROD",
  "sourceFile": "frmPlanTempTabContainer.xfdl",
  "moduleCode": "MD13",
  "desc": "다수의 상품 카테고리나 하위 템플릿들을 탭 형태로 조립하여 전시 상태를 유기적으로 전환해주는 복합 연동 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC/Mobile 기획전 상세페이지)에서는 다단 Depth를 지원하는 탭 메뉴바로 노출됩니다. 사용자가 탭 클릭 시 페이지 전체 새로고침 없이 비동기 방식으로 내부 컨텐츠(강조상품 리스트, 배너 등)를 즉시 교체하여 최적의 쇼핑 탐색 흐름을 만들어 냅니다.",
  "backendSettings": [
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 여백(Margin) 노출 여부를 제어합니다."
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
    },
    {
      "field": "버튼 유형",
      "id": "BTN_TYPE_VAL",
      "type": "Radio (O/S)",
      "desc": "O: 아웃라인만 그리는 고스트 버튼 / S: 채우기 단색 버튼 스타일을 지정합니다."
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
    }
  ],
  "codeSnippet": "// PopupDtl::frmPlanTempTabContainerTopDepth.xfdl (내부 2단 템플릿 로직 일부)\nthis.frmPlanTempTabContainerTopDepth_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo) {\n    trace(\"== frmPlanTempTabContainerTopDepth_onload start ==\");\n    partsDiv.set_url(\"PopupDtl::frmPlanTempTabContainerLeafDepth.xfdl\");\n};",
  "warnings": "NEW 템플릿에 추가 가능한 카드는 최대 20장입니다. 탭 컨테이너 하위에 들어가는 내부 데이터 역시 전체 카드 수 제한에 걸려 있는지 꼼꼼하게 유의해야 하며, 탭 단계가 2단계 이상 늘어날 시 화면 로딩 부하가 생길 수 있으므로 상품 데이터 수를 탭당 50개 이하로 제한할 것을 권장합니다. 또한, 탭 배경 및 배너 이미지 업로드 시 파일 용량 제한은 기존 200KB에서 500KB 이하로 상향 조정되었으므로, 초과 시 업로드가 반려되는 점에 유의해야 합니다.",
  "imageGuidelines": {
    "pcSize": "1240px × (세로 높이 제한 없음)",
    "moSize": "750px × (세로 높이 제한 없음)",
    "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
    "maxSize": "파일당 최대 500KB 이하",
    "adminValidation": "넥사크로 어드민에서 탭 이미지 업로드 시 파일별 500KB 초과인 경우 경고 메시지와 함께 업로드가 차단 및 초기화됩니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 2개",
    "tabMax": "최대 15개 (대분류) / 8개 (소분류)",
    "prodMin": "최소 4개",
    "prodMax": "최대 48개",
    "adminValidation": "2단 탭 구조는 선택사항(Optional)으로 1단 단일 카테고리 탭으로만 간소하게 사용하거나, 대분류-소분류가 분기되는 2단 탭 구조를 세팅해 고도화할 수 있습니다.<br>어드민(NBOS) 저장 시 각 탭별로 매핑된 상품 개수가 최소 4개 미만이거나 최대 48개를 초과할 경우 Validation 오류 메시지와 함께 저장이 자동으로 반려됩니다. 또한, 하위 2단 탭(소분류)은 최대 8개까지, 1단 탭은 최대 15개까지 스피너(Spin)를 통해 유연하게 추가 및 조절 가능합니다."
  }
};
