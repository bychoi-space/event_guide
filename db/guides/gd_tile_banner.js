// LFmall Exhibition Guide: TILE_BANNER
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["TILE_BANNER"] = {
  "cardKey": "TILE_BANNER",
  "name": "타일배너",
  "category": "BANNER",
  "sourceFile": "frmPlanCardTileBanner.xfdl (어드민) / TileBanner.tsx + TileBannerItem.tsx (프론트)",
  "moduleCode": "MD12",
  "desc": "기획전 본문에서 다양한 테마와 카테고리를 바둑판 형태로 유연하게 배치하여 시각적 흥미와 숏 배너의 역할을 충실히 수행하는 프리미엄 그리드형 배너 카드입니다.",
  "layoutDescription": "원형(Circle) 및 사각형(Square)의 두 가지 기본 형태를 지원하며, 어드민 설정에 따라 '3단 스와이프(9개 단위 SwiperSlide 구성)', '2단 기본 리스트(PC 2단/MO 2단)', '스와이프(3단 슬라이드 구성)' 총 3가지 레이아웃 유형으로 다채롭게 전시됩니다. 개별 타일은 링크 랜딩 정보, 뱃지(텍스트 뱃지, 이미지 뱃지) 오버레이를 유기적으로 포함할 수 있습니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "배경 영역의 Hex 컬러 코드 값을 지정합니다. (예: #757575)"
    },
    {
      "field": "뱃지 텍스트",
      "id": "BDG_TEXT",
      "type": "String (20byte 한도)",
      "desc": "텍스트 뱃지(T) 선택 시 타일 상단에 표기될 뱃지 문구입니다."
    },
    {
      "field": "타일 텍스트",
      "id": "BNR_DETL_TITL_TEXT",
      "type": "String (20byte 한도)",
      "desc": "타일 배너 하단에 노출될 명칭 텍스트입니다. 최대 20byte를 초과할 수 없습니다."
    },
    {
      "field": "타일 링크",
      "id": "LINK_URL_VAL",
      "type": "String (선택)",
      "desc": "개별 타일을 클릭했을 때 강제 이동할 랜딩 PC URL 주소입니다."
    },
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 바깥쪽 상단 여백 유무를 설정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 안쪽 상단 여백 유무를 설정합니다. 기본값 Y."
    },
    {
      "field": "이미지 표현 형식",
      "id": "IMG_WIDE_TYPE_VAL",
      "type": "Combo (S/W)",
      "desc": "S: 기본형 (1240px 중앙 정렬) / W: 와이드형 (1920px 화면 가득 채움)을 선택합니다."
    },
    {
      "field": "배너 타입",
      "id": "BNR_TYPE_VAL",
      "type": "Radio (B1/S1)",
      "desc": "B1: 기본형 배너 / S1: Swiper 회전 슬라이드 배너 타입을 정의합니다."
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
    }
  ],
  "codeSnippet": "// frmPlanCardTileBanner.xfdl.js - 텍스트 입력 시 실시간 바이트 제한 스크립트\nthis.limitInputTo20Bytes = function(obj:nexacro.Edit, e:nexacro.KeyEventInfo) {\n    var textVal = obj.value;\n    var byteCount = this.asciiByteCount(textVal);\n    \n    // 타일 배너 명칭 및 텍스트 뱃지는 최대 20byte (한글 10자, 영문 20자) 한도\n    if (byteCount > 20) {\n        this.gfnMessage(\"타일 텍스트 입력값은 최대 20byte(한글 기준 10자, 영문/기호 기준 20자)를 초과할 수 없습니다.\", \"A\");\n        obj.set_value(this.asciiByteSubstring(textVal, 20));\n    }\n};",
  "warnings": "1. [텍스트 자수 제한 엄격] 개별 타일의 텍스트 및 텍스트 뱃지는 **최대 20byte (한글 10자, 영문 20자)** 한도 제약이 있어, 입력 시 즉각 차단 경고음과 함께 초과 텍스트가 강제 잘림 처리됩니다.\n2. [홀수 개수 등록 시 빈 타일 채움] '2단 리스트(T2/T3)' 레이아웃 적용 시, 등록한 타일의 개수가 홀수일 경우 UI 레이아웃 무너짐을 방지하기 위해 프론트 컴포넌트 내부에서 **자동으로 1개의 빈 타일 구좌(emptyItem)**를 생성하여 짝수를 맞추어 줍니다.\n3. [랜덤 정렬 설정 주의] 랜덤 정렬 여부(RNDM_SORT_YN)가 'Y'로 설정되어 있으면 프론트 Swiper 렌더링 시 타일들의 순서가 페이지 로드 시마다 실시간으로 무작위 셔플되므로 순서 고정이 필요한 경우 'N'으로 지정하십시오.",
  "imageGuidelines": {
    "pcSize": "가로 280px × 세로 280px 권장 (1:1 정비율)",
    "moSize": "가로 100px × 세로 100px 권장 (1:1 정비율) *원형/사각형 크롭 처리가 자동 수행됨",
    "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "타일 배너 이미지는 넥사크로 UI 파일업로드 핸들러에서 **200KB를 1바이트라도 초과 시 업로드를 즉시 반려**하고 에러를 호출합니다. 업로드 전 사전에 이미지를 리사이징하는 것이 필수입니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 2개 이상",
    "tabMax": "최대 24개 이하 (2단 리스트 및 슬라이더 스크롤 지원 한도)",
    "prodMin": "최소 1자 이상 기입",
    "prodMax": "최대 20byte (한글 10자 / 영문 20자) *타일 텍스트 및 텍스트 뱃지",
    "adminValidation": "타일의 완성도와 심미성을 위해 **최소 2개 이상의 타일을 무조건 등록**하여 저장해야 합니다. 타일을 1개만 매핑한 상태에서는 저장 유효성 검증을 통과하지 못해 기획전 발행이 반려되며, 최대 등록 한도는 24개로 고정되어 있습니다."
  }
};
