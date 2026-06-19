// LFmall Exhibition Guide: EMP_PROD
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["EMP_PROD"] = {
  "cardKey": "EMP_PROD",
  "name": "강조상품",
  "category": "PROD",
  "sourceFile": "frmPlanCardFeaturedProduct.xfdl (어드민) / FeaturedProduct.tsx (프론트)",
  "moduleCode": "MD6",
  "desc": "일반 리스트 중에서 메인으로 가장 많이 소구할 단독 강조형 딜 레이아웃입니다.",
  "layoutDescription": "사용자 프론트 영역에서 일반적인 3열/4열 격자 레이아웃을 탈피하여, 단 하나의 메인 추천 상품을 전면에 와이드하게(가로 100% 비주얼 배너급 크기로) 노출하고 상품명, 혜택, 상세 소개 글을 우측 또는 하단에 시원하게 배치하는 프리미엄 강조 구좌입니다.",
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
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (30byte)",
      "desc": "노출할 버튼의 텍스트 이름입니다."
    }
  ],
  "warnings": "1. 단독으로 상품을 극대화 소구하므로, 고화질의 정비율 상품 비주얼 컷이 확보되어 있어야 고급스러운 브랜드 감성을 유지할 수 있습니다.\n2. 추천 강조 문구는 한글 30자(60byte)를 초과해 등록할 경우 모바일 뷰에서 개행 오버플로우가 생기므로 글자 수 제약에 특별히 주의해야 합니다.",
  "imageGuidelines": {
    "pcSize": "가로 800px × 세로 800px 권장 (1:1 정비율 비주얼 컷)",
    "moSize": "가로 600px × 세로 600px 권장 (1:1 정비율 비주얼 컷)",
    "allowTypes": "JPG, JPEG, PNG, GIF",
    "maxSize": "200KB 이하",
    "adminValidation": "강조상품의 대표 썸네일은 200KB를 초과할 수 없으며, 어드민 업로드 시 용량 체크 필터에 의해 초과분은 업로드가 원천 차단됩니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 1개 상품 매핑",
    "tabMax": "최대 1개 상품만 구성 가능 (단독 강조 구좌)",
    "prodMin": "최소 1자 (추천 문구)",
    "prodMax": "최대 60byte (한글 30자)",
    "adminValidation": "어드민 저장 시 단 1개의 상품 코드만 입력해야 하며, 2개 이상의 코드를 기재하거나 공백인 경우 저장 유효성 오류 메시지와 함께 저장이 자동으로 반려됩니다."
  }
};
