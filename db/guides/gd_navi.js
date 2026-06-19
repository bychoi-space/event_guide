// LFmall Exhibition Guide: NAVI
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["NAVI"] = {
  "cardKey": "NAVI",
  "name": "네비게이션",
  "category": "NAV",
  "sourceFile": "frmPlanCardNavigation.xfdl (어드민) / Navigation.tsx (프론트)",
  "moduleCode": "MD13",
  "desc": "기획전 내부의 특정 섹션이나 상품 코너 영역으로 스크롤 이동을 돕는 유기적인 스크롤 앵커 메뉴바 컴포넌트입니다.",
  "layoutDescription": "PC 및 모바일의 사용자 화면에서 상단 고정(Sticky) 형태로 작동하며, 사용자가 메뉴명 클릭 시 해당 카드가 노출되는 본문 위치로 부드러운 애니메이션 효과와 함께 자동 스크롤 앵커 포커싱이 수행됩니다. 모바일에서는 가로 드래그 스크롤링 형태의 1단 스크롤 또는 바둑판 배열의 2단 고정 형태로 레이아웃 분기가 처리됩니다.",
  "backendSettings": [
    {
      "field": "메뉴 유형",
      "id": "LCTI_PATH_DIV_VAL",
      "type": "Combo (C/P)",
      "desc": "C: 카드형 (기획전 내 등록된 특정 카드를 타겟팅) / P: 상품형 (등록된 코너 상품 영역을 타겟팅)을 선택 매핑합니다."
    },
    {
      "field": "PC메뉴 넓이",
      "id": "WIDE_YN",
      "type": "Radio (Y/N)",
      "desc": "N: 기본형 (1240px 너비로 본문 중앙에 제한) / Y: 와이드형 (1920px 전체 폭으로 꽉 차게 확장 렌더링)을 설정합니다."
    },
    {
      "field": "네비게이션 형태",
      "id": "LCTI_PATH_LINE_TYPE_VAL",
      "type": "Radio (1/2)",
      "desc": "1: 1단 스크롤형 (개수 제한 없이 가로 스크롤링 메뉴바 작동) / 2: 2단 고정형 (5~8개 전용 바둑판 고정 배열로 노출)을 지정합니다."
    }
  ],
  "codeSnippet": "// frmPlanCardNavigation.xfdl.js - 2단 고정 형태 검증 및 메뉴명 Byte 제한 일부\nthis.checkValidation = function() {\n    var chkVal = 0;\n    var gridVal = this.dsCardMenuList.rowcount > 0 ? this.divCardNavi.form.grdCardList : this.divCornerNavi.form.grdCornerList;\n    var chkCnt = 0;\n    var overCnt = 0;\n    var bindDs = gridVal.getBindDataset();\n    \n    for(var i=0; i < bindDs.rowcount; i++){\n        if(bindDs.getColumn(i, \"USE_YN_CHK\") == 1){\n            chkCnt += 1;\n            if(this.asciiByteCount(bindDs.getColumn(i, \"MENU_NM\")) > 10) overCnt += 1;\n        }\n    }\n    \n    if((this.divCardNavi.form.rdoNaviDispType.value == 2 || this.divCornerNavi.form.rdoNaviDispType.value == 2) && (chkCnt < 5 || chkCnt > 8)) {\n        this.gfnMessage(\"2단 고정 형태는 메뉴 5개 이상 ~ 8개 이하로만 등록할 수 있습니다.\", \"A\");\n        return false;\n    }\n    if((this.divCardNavi.form.rdoNaviDispType.value == 2 || this.divCornerNavi.form.rdoNaviDispType.value == 2) && overCnt > 0) {\n        this.gfnMessage(\"2단 고정 형태는 메뉴명이 한글 기준 5자, 영문기준 10자 이내로만 가능합니다\", \"A\");\n        return false;\n    }\n    return true;\n};",
  "warnings": "1. [2단 고정 제약] 2단 고정 네비게이션 적용 시 메뉴 개수가 무조건 5개 이상 8개 이하여야 저장이 가능하며, 그 외 수량 범위에서는 어드민 검증에 걸려 저장이 원천 거부됩니다.\n2. [글자 수 자동 잘림 경고] 메뉴명은 10byte(한글 5자, 영문 10자)를 1byte라도 초과할 시, 넥사크로 UI 및 프론트 레이아웃 깨짐을 방어하기 위해 입력한 텍스트가 자동으로 잘려 저장이 초기화되니 등록 전 글자 수를 사전에 확인해야 합니다.\n3. [코너 상품 필수성] 상품형(P) 네비게이션을 활성화하려면 기획전 내에 상품 코너 카드가 사전에 반드시 구성 및 저장되어 있어야 매핑이 가능합니다.",
  "qtyGuidelines": {
    "tabMin": "최소 5개 (2단 고정 시)",
    "tabMax": "최대 8개 (2단 고정 시) *1단 스크롤 무제한",
    "prodMin": "최대 10byte (한글 5자)",
    "prodMax": "최대 10byte (영문 10자) *2단 고정 메뉴명에 적용",
    "adminValidation": "2단 고정(2) 형태를 세팅할 경우, 활성화된 메뉴(USE_YN_CHK) 개수가 5개 미만이거나 8개를 초과하면 Validation 반려가 수행됩니다. 또한, 2단 고정 메뉴명(MENU_NM)은 한글 기준 최대 5자(10byte)를 초과하여 저장할 시 UI 단에서 강제 차단 얼럿이 작동합니다. 1단 가로 스크롤형(1)은 별도의 수량 및 글자 수 Validation을 제한하지 않아 유연하게 사용 가능합니다."
  }
};
