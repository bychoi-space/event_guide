// LFmall Exhibition Guide: ENTCODE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["ENTCODE"] = {
  "cardKey": "ENTCODE",
  "name": "입장코드",
  "category": "NAV",
  "sourceFile": "frmPlanCardAccessCode.xfdl (어드민) / EntryCode.tsx (프론트)",
  "moduleCode": "MD13",
  "desc": "프라이빗 기획전 진입을 위해 전용 입장 암호코드를 넣어야 하는 차단 영역입니다.",
  "layoutDescription": "사용자 프론트 영역 전체를 딤드 블러 처리하거나 차단 팝업 형태로 렌더링하며, 중앙에 입장코드 입력창과 확인 버튼을 배치하여 올바른 비밀코드를 입력한 경우에만 하위 컨텐츠를 공개하도록 제어합니다.",
  "backendSettings": [
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
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (30byte)",
      "desc": "노출할 버튼의 텍스트 이름입니다."
    },
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
      "field": "버튼 색상",
      "id": "BTN_CLR_VAL",
      "type": "Radio (B/W)",
      "desc": "B: 블랙 버튼 / W: 화이트 버튼 색상을 선택합니다."
    },
    {
      "field": "텍스트 정렬",
      "id": "TEXT_SORT_VAL",
      "type": "Radio (CC/LC)",
      "desc": "CC: 중앙정렬 / LC: 좌측정렬을 지정합니다."
    },
    {
      "field": "텍스트 색상",
      "id": "TEXT_CLR_TYPE_VAL",
      "type": "Radio (BK/WH)",
      "desc": "BK: 블랙 텍스트 / WH: 화이트 텍스트 테마를 선택합니다."
    },
    {
      "field": "카테고리명",
      "id": "CAT_BRAND_NM",
      "type": "String",
      "desc": "상단에 노출되는 대표 브랜드 또는 카테고리 명칭입니다."
    },
    {
      "field": "진행 기간",
      "id": "EXHB_PERD_TEXT_VAL",
      "type": "String",
      "desc": "이벤트의 상시 진행 여부 또는 특정 시작/종료 일시 텍스트 설정입니다."
    }
  ],
  "warnings": "1. 입장코드는 대소문자를 구분하므로 기획전 홍보물 제작 시 대소문자를 명확히 구분하여 고객에게 고지해야 합니다.\n2. 보안을 위해 최소 4글자 이상의 복잡한 문자열로 코드를 세팅할 것을 강하게 가이드 권장합니다.",
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "최소 4글자",
    "prodMax": "최대 12글자",
    "adminValidation": "입장 암호코드는 공백을 포함할 수 없으며, 4자 미만이거나 12자를 초과하는 경우 넥사크로 유효성 검사에서 저장 반려됩니다."
  }
};
