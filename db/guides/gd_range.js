// LFmall Exhibition Guide: RANGE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["RANGE"] = {
  "cardKey": "RANGE",
  "name": "레인지",
  "category": "PROD",
  "sourceFile": "frmPlanCardRange.xfdl (어드민) / RangeCard.tsx, RangeContent.tsx (프론트)",
  "moduleCode": "MD13",
  "desc": "가격대/할인율/사이즈별 필터 칩과 1단/2단 분류 탭을 지원하는 지능형 상품 레인지 필터링 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 다단 Depth를 지원하는 분류 탭 메뉴바가 노출됩니다. 사용자는 1단 및 2단 탭을 통해 카테고리/브랜드를 탐색할 수 있으며, 탭별로 지정된 배경색상 및 텍스트 문구가 반영됩니다. 하단에는 할인율/가격대/사이즈 기준의 필터 칩(Chip)들이 나열되어 사용자가 선택한 범위 내의 상품 목록만을 최대 50개(viewCount)까지 동적으로 필터링하여 화면에 즉시 노출합니다. 또한, 모바일 화면에서는 SW3_1(3x1 Swiper), SW3_2(3x2 그리드 Swiper), SW2_1, SW2_2, SW1_2, SW1_3 등의 복합 Swiper 레이아웃이 적용되고, PC 화면에서는 SW4_1(4x1), SW4_2(4x2) Swiper 레이아웃으로 유연하게 반응형 렌더링 전환됩니다. 뒤로가기 시 이전 탐색 상태를 복구하기 위해 세션 스토리지(rangePrevTabInfo, rangePrevOption, rangePrevSlide, eventTemplateV3ScrollPosition)에 탭 정보, 선택된 옵션 필터 및 슬라이드 스크롤 위치를 캐싱하여 자연스러운 UX를 유지합니다.",
  "backendSettings": [
    {
      "field": "전체탭 사용",
      "id": "ALL_TAB_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "필터 옵션을 미선택한 기본 상태의 '전체' 보기 탭을 노출할지 여부를 결정합니다. 기본값 Y."
    }
  ],
  "warnings": "1. [배경색상 제한] 배경색상은 '#'을 포함한 정교한 Hex Code 양식(예: #FFFFFF)으로 입력해야 하며, 정규식을 벗어나거나 포맷이 불일치할 시 저장이 반려됩니다.\n2. [텍스트 상호 배타성] 상단 설명 문구와 하단 설명 문구는 어드민 시스템 설계 제약 상 동시에 입력할 수 없습니다. 하나가 입력되면 다른 하나는 비어있어야 Validation 에러가 발생하지 않습니다.\n3. [타이틀 제한] 타이틀(EVNT_MAIN_TEXT)은 최대 22byte(한글 약 11자) 이내로 입력해야 하며, 줄바꿈(\\n)은 2줄까지만 허용됩니다. 초과 시 오류 메시지와 함께 저장이 거부됩니다.\n4. [탭 코드 중복 불가] 1단 탭 분류코드와 2단 탭 분류코드에 서로 동일한 값을 매핑할 수 없습니다. 콤보 박스 선택 시 이미 매핑된 분류는 필터링되어 중복 선택이 원천 방지됩니다.\n5. [옵션 구간 규칙] 할인율/가격대 옵션 설정 시 각 구간의 시작값은 종료값보다 작아야 하며, (i-1)번째 옵션의 종료값이 i번째 옵션의 시작값 이상으로 겹쳐서 기입될 경우 중복 에러로 반려됩니다.\n6. [탭 상태 변경 후 분류 필수] 1단/2단 탭 사용여부가 변경될 경우 화면 레이아웃과 데이터 불일치를 막기 위해, 반드시 어드민에서 '엑셀 업로드' 혹은 '자동 분류'를 새로 수행하여 탭 매핑 상태를 동기화한 뒤에만 저장이 승인됩니다.\n7. [용량 제한] 업로드하는 상품 정보와 탭 정보는 서버 전체 트랜잭션 용량 한도 내에서 안전하게 관리되어야 합니다.",
  "qtyGuidelines": {
    "tabMin": "1단 탭 미사용 시 1개 (전체), 사용 시 최소 2개 이상의 분류 탭 구성 필요",
    "tabMax": "1단 탭 최대 15개, 2단 탭 최대 8개까지 추가 및 롤링 가능",
    "prodMin": "각 분류 탭별 최소 4개 이상의 유효 상품 매핑 필수",
    "prodMax": "각 분류 탭별 최대 48개 상품 등록 한도 (필터 적용 시 최대 50개까지 노출)",
    "adminValidation": "어드민(NBOS) 저장 시 각 분류별 매핑된 상품 개수가 4개 미만이거나 48개를 초과할 경우, 데이터 정합성 Validation 오류 메시지와 함께 저장이 강제 반려됩니다. 옵션 구간은 최소 2개에서 최대 10개까지 설정 가능하며, 상품 자동 분류 실행 시에는 브랜드/카테고리 정보를 기준으로 서버단에서 자동 분류 탭 매핑이 연산 처리됩니다. 엑셀 업로드 시 파일의 1열에는 반드시 13자리의 상품코드만 존재해야 합니다."
  }
};
