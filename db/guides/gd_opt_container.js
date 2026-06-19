// LFmall Exhibition Guide: OPT_CONTAINER
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["OPT_CONTAINER"] = {
  "cardKey": "OPT_CONTAINER",
  "name": "옵션컨테이너",
  "category": "NAV",
  "sourceFile": "frmPlanCardOptionContainer.xfdl (어드민) / OptContainer.tsx (프론트)",
  "moduleCode": "MD13",
  "desc": "지정된 상품 목록 내에서 1단/2단 분류 탭을 통해 카테고리를 제공하고, 할인율, 가격대, 사이즈 등의 필터 옵션 칩을 통해 사용자가 원하는 조건의 상품들만 목록에서 실시간 필터링하여 감상할 수 있는 다기능 탭-옵션 필터 결합형 상품 전시 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(모바일 기획전 상세)에서 상하단 여백 및 배경색 설정에 반응하며, 상단/하단 설명 문구와 최대 2줄의 타이틀이 배치됩니다. 그 아래 1단 및 2단 탭 구조 of 분류 탭 메뉴바가 노출되어 카테고리나 브랜드 분류를 탐색할 수 있고, 할인율/가격대/사이즈 기준의 필터 칩들이 노출되어 필터링을 제공합니다. 필터링된 상품들은 모바일 Swiper 그리드 레이아웃(SW3_2, SW3_1, SW2_2, SW2_1, SW1_2, SW1_3) 또는 PC Swiper 그리드 레이아웃(SW4_1, SW4_2) 형태로 유연하게 반응형 렌더링 전환되어 전시됩니다. 뒤로가기 시 이전 탐색 상태를 복구할 수 있도록 세션 스토리지(con, tab, depth1NtorNo, depth2NtorNo, prevOption, optionIdx)에 탭 정보, 선택된 옵션 필터 및 스크롤 위치를 캐싱합니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "String (최대 7자)",
      "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 유효성이 검증되며, 프론트 렌더링 시 연하게 자동 딤드 처리되어 배경으로 표현됩니다."
    },
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 외부 마진 적용 여부를 설정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 내부 패딩 적용 여부를 설정합니다. 기본값 Y."
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "하단 외부 마진 적용 여부를 설정합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "하단 내부 패딩 적용 여부를 설정합니다."
    },
    {
      "field": "상단 설명 문구",
      "id": "EVNT_HEDR_TEXT",
      "type": "String (50byte 한도)",
      "desc": "컴포넌트 헤더 영역에 노출되는 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "타이틀",
      "id": "EVNT_MAIN_TEXT",
      "type": "String (22byte 한도)",
      "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈은 최대 2줄까지만 등록할 수 있습니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "EVNT_SUB_TEXT",
      "type": "String (50byte 한도)",
      "desc": "메인 타이틀 아래 노출되는 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "탭 형태",
      "id": "TAB_TYPE_VAL",
      "type": "Radio (1/2)",
      "desc": "1: 1단 탭, 2: 2단 탭으로 탭 단수를 결정합니다. 탭형태 수정 시 기존에 입력한 탭 세팅이 강제 초기화되므로 유의하십시오."
    },
    {
      "field": "상품 정렬 순서",
      "id": "PROD_SORT_TYPE_VAL",
      "type": "Combo (A/R/S/V/C/M)",
      "desc": "A: 등록순, R: 추천순, S: 할인순, V: 조회순, C: 리뷰순, M: 랜덤정렬순 중 기획전 내 상품 정렬 기준을 결정합니다."
    },
    {
      "field": "전체탭 사용",
      "id": "ALL_TAB_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "필터 옵션을 미선택한 기본 상태의 '전체' 보기 탭을 노출할지 여부를 결정합니다. 기본값 Y."
    },
    {
      "field": "상품 표현 (MO)",
      "id": "PROD_EPSR_TYPE_VAL",
      "type": "Radio (SW3_2/SW3_1/SW2_2/SW2_1/SW1_2/SW1_3)",
      "desc": "모바일에서 노출될 Swiper 그리드 레이아웃 형식을 설정합니다."
    },
    {
      "field": "상품 표현 (PC)",
      "id": "PC_PROD_EPSR_TYPE_VAL",
      "type": "Radio (SW4_1/SW4_2)",
      "desc": "PC에서 노출될 Swiper 그리드 레이아웃 형식을 설정합니다."
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
  "codeSnippet": "// OptContainer.tsx - Front-end React 옵션 필터링 및 Swiper 데이터 바인딩 로직 일부\nconst swiperSlideList = useMemo(() => {\n  let productList = data?.pages[0].eventDealProductList ?? [];\n  let filterList: ExhbEventDealProductDTO[] = [];\n  const optionType = tabInfo.optnType; // SR(할인율), PR(가격대), SZ(사이즈)\n\n  if (selectOption) {\n    if (optionType === \"PR\") {\n      filterList = productList.filter(item => \n        Number(item.dcPrice) >= Number(selectOption.optnStrtVal) &&\n        Number(item.dcPrice) <= Number(selectOption.optnEndVal)\n      );\n    } else if (optionType === \"SR\") {\n      filterList = productList.filter(item => \n        Number(item.dcRate) >= Number(selectOption.optnStrtVal) &&\n        Number(item.dcRate) <= Number(selectOption.optnEndVal)\n      );\n    }\n  } else {\n    filterList = productList;\n  }\n  \n  if (tabInfo.prodSortType === \"M\") {\n    shuffleArray(filterList);\n  }\n  \n  return filterList.map((product, idx) => (\n    <SwiperSlide key={idx}>\n      <OptContItem props={product} template={template} ... />\n    </SwiperSlide>\n  ));\n}, [data, selectOption, tabInfo]);",
  "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 7자 또는 8자 Hex Code 형태(예: #FFFFFF)여야 하며, 정규식을 벗어나거나 포맷이 불일치할 시 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구와 하단 설명 문구는 어드민 검증에 의해 동시에 입력할 수 없습니다. 하나는 공백이어야 유효성 에러를 피할 수 있습니다.\n3. [타이틀 및 글자 수 한도] 타이틀은 최대 22byte 이내, 상/하단 설명 문구는 각각 최대 50byte 이내여야 합니다. 타이틀 줄바꿈은 2줄까지만 허용됩니다.\n4. [옵션 구간 규칙] 할인율/가격대 옵션 설정 시 각 구간의 시작값은 종료값보다 작아야 하며, (i-1)번째 옵션의 종료값이 i번째 옵션의 시작값 이상으로 겹쳐서 기입될 경우 중복 에러로 반려됩니다.\n5. [상품 등록 제한] 개별 탭마다 전시할 상품 개수가 최소 4개 미만이거나 40개를 초과할 시 저장 전 유효성 검사 단계에서 에러 발생해 저장이 반려됩니다.\n6. [탭 수정 초기화 경고] 탭 형태를 수정하여 적용할 경우, 기존에 입력해 둔 탭 명칭 및 상품 바인딩 데이터셋이 강제 리셋되므로 사전에 신중히 확인한 뒤 적용하여야 합니다.",
  "imageGuidelines": {
    "pcSize": "해당 없음 (이미지 업로드가 존재하지 않음)",
    "moSize": "해당 없음",
    "allowTypes": "해당 없음",
    "maxSize": "해당 없음",
    "adminValidation": "옵션컨테이너는 이미지 등록 기능이 없으며, 연동된 상품 정보의 대표 이미지를 프론트엔드에서 자동 참조하여 출력합니다."
  },
  "qtyGuidelines": {
    "tabMin": "1단 탭 미사용 시 1개, 사용 시 최소 2개 이상의 분류 탭 구성 필요",
    "tabMax": "최대 8개 탭 구성 지원",
    "prodMin": "각 분류 탭별 최소 4개 이상의 상품 매핑 필수",
    "prodMax": "각 분류 탭별 최대 40개 상품 등록 한도 (옵션 설정은 최소 2개 ~ 최대 20개)",
    "adminValidation": "어드민 저장 시 탭별 상품 개수(4~40개) 유효성 체크, 옵션 설정 개수(2~20개) 체크 및 각 구간 범위 겹침 검증, 그리고 각 탭 명칭 필수 입력 검증이 저장 트랜잭션 전 단계에서 엄격히 통제됩니다. 사이즈 옵션 선택 시에는 옵션 개수 설정이 비활성화됩니다."
  }
};
