// LFmall Exhibition Guide: BADGE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["BADGE"] = {
  "cardKey": "BADGE",
  "name": "행사뱃지",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardBadge.xfdl (어드민) / PromoBadge.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "기획전 고유 행사 아이콘이나 특별 혜택 뱃지들을 전시하는 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역에서 행사 전용 비주얼 뱃지(예: L+Day 등)를 타이틀 영역 근처 혹은 기획전 전용 배너 영역에 겹쳐서 또는 나란히 노출하여, 기획전 혜택을 강조하고 시각적인 소구 효과를 제공합니다.",
  "backendSettings": [
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 외부 마진 여부"
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 내부 패딩 여부"
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
      "field": "텍스트 정렬",
      "id": "TEXT_SORT_VAL",
      "type": "Radio (CC/LC)",
      "desc": "CC: 중앙정렬 / LC: 좌측정렬을 지정합니다."
    }
  ],
  "warnings": "1. 행사뱃지는 기획전 성격에 따라 L+Day 또는 특정 행사 규격을 준수하여 등록해야 합니다. 이미지 업로드 시 배경 투명(PNG) 포맷 처리가 필수적입니다.\n2. 모바일 화면에서 뱃지가 깨지거나 텍스트가 줄바꿈되어 잘리지 않도록 글자 수를 한글 10자 이내로 제어해 주세요.",
  "imageGuidelines": {
    "pcSize": "가로 120px × 세로 120px 권장 (1:1 비율 PNG)",
    "moSize": "가로 80px × 세로 80px 권장 (1:1 비율 PNG)",
    "allowTypes": "PNG, JPG, JPEG",
    "maxSize": "50KB 이하",
    "adminValidation": "넥사크로 어드민 업로드 시 투명 배경(PNG) 형태가 아닌 경우, 배경 흰색이 그대로 노출되어 레이아웃이 어색해질 수 있으므로 디자이너 제작 표준 가이드를 반드시 확인하고 등록해야 합니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 1개",
    "tabMax": "최대 3개",
    "prodMin": "최소 1자 이상",
    "prodMax": "최대 20자",
    "adminValidation": "뱃지는 한 화면 구좌 내 최대 3개까지 구성하여 저장이 가능하며, 초과 시 저장 유효성 검증 단에서 반려 얼럿이 작동합니다."
  }
};
