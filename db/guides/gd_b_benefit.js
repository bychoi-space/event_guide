// LFmall Exhibition Guide: B_BENEFIT
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["B_BENEFIT"] = {
  "cardKey": "B_BENEFIT",
  "name": "구매혜택",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardBenefitB.xfdl (어드민) / BuyBenefit.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "기획전 구매 금액대별 할인쿠폰 다운로드, 사은품 증정, 무료 선물포장 혜택, 추가 마일리지 적립 등 총 5가지 슬롯으로 다양한 고객 리워드를 구성하는 복합 프로모션 카드입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 최대 5개의 혜택 섹션을 질서정연하게 배열합니다. 개별 혜택은 유형에 따라 쿠폰 자동표현/이미지표현, 선물포장 단계별 안내 롤링, 사은품/웰컴팩 안내 배너 및 전용 버튼(액션 유형: CPN/FCF 다운로드, NOT 적립팝업, GFT/WEL/PRE 이동)으로 구성됩니다. PC에서는 인접한 쿠폰 혜택들이 2단 그리드로 자동 병렬 정렬되며, 선물포장(PRE) 영역 또한 비주얼과 이용 스텝 가이드가 좌우 분할 배치됩니다. 모바일에서는 모든 요소가 1열의 세로 카드 레이아웃으로 미려하게 단일 정렬되어 렌더링됩니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "배경색을 Hex 코드형태(예: #757575)로 입력합니다. 해당 값은 프론트에서 8% 투명도로 연하게 표현됩니다."
    },
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 외부 마진(margin) 적용 여부를 설정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 내부 패딩(padding) 적용 여부를 설정합니다. 기본값 Y."
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "하단 외부 마진(margin) 적용 여부를 설정합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "하단 내부 패딩(padding) 적용 여부를 설정합니다."
    },
    {
      "field": "상단 설명 문구",
      "id": "BNFT_HEDR_TEXT_VAL",
      "type": "String (100byte 한도)",
      "desc": "타이틀 상단에 노출할 보조 문구입니다. 하단 설명 문구와 중복 등록이 불가합니다."
    },
    {
      "field": "타이틀",
      "id": "BNFT_TITL",
      "type": "String (22byte 한도)",
      "desc": "메인 타이틀 제목입니다. 한글 기준 11자 제한이 적용되며, 줄바꿈(\\n)으로 최대 2줄까지 등록 가능합니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "BNFT_DSCR",
      "type": "String (100byte 한도)",
      "desc": "타이틀 하단에 노출할 설명 문구입니다. 상단 설명 문구와 중복 등록이 불가합니다."
    },
    {
      "field": "혜택 분류 구분",
      "id": "BNFT_TYPE_VAL",
      "type": "Combo (CPN/PRC/FCF/NOT/GFT/PRE/WEL/XXX)",
      "desc": "혜택을 부여할 유형(CPN: 할인쿠폰, PRC: 쿠폰표현, FCF: 선착순쿠폰, NOT: 추가적립, GFT: 사은품, PRE: 선물포장, WEL: 웰컴쿠폰팩, XXX: 사용안함)을 매핑합니다."
    },
    {
      "field": "쿠폰 표현 방식",
      "id": "CPN_DISP_TYPE_VAL",
      "type": "Radio (A/I)",
      "desc": "A: 자동표현 (DB에 매핑된 쿠폰 정보를 기반으로 템플릿화) / I: 이미지 표현 (PC/MO용 제작 이미지를 직접 업로드하여 노출) 중 선택합니다."
    },
    {
      "field": "버튼 형태",
      "id": "BTN_STYL_VAL",
      "type": "Radio (XX/OS/SS)",
      "desc": "XX: 사용안함, OS: 화이트(아웃라인 고스트), SS: 블랙(단색 채우기) 중 노출할 버튼 스타일을 설정합니다."
    },
    {
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (40byte 한도)",
      "desc": "버튼의 텍스트명입니다. 한글 약 20자 제한이 적용됩니다."
    },
    {
      "field": "버튼 액션 유형",
      "id": "BTN_ACTN_TYPE_VAL",
      "type": "Combo (B/P/M)",
      "desc": "B: 쿠폰 다운로드, P: 적립안내 팝업 노출, M: URL 이동(랜딩 처리)을 설정합니다."
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
  "codeSnippet": "// BuyBenefit.tsx - PC 2단 쿠폰 정렬 및 선물하기 분기 렌더링 일부\nconst CouponImg = ({ cardType, benefit, order }) => {\n  return (\n    <section className={styles.wrapBenefit}>\n      {/* 1:1 이미지 표현 및 자동표현 Swiper */}\n    </section>\n  );\n};\n\n// 혜택 리스트 순회 중 CPN/PRC/FCF/NOT 인접 항목 2단 flex 렌더링\nreturn (\n  <section className={styles.wrapFlex} key={`bnft_${idx}`}>\n    <CouponImg benefit={benefitList[idx - 1]} order={idx} />\n    <CouponImg benefit={benefit} order={idx + 1} />\n  </section>\n);",
  "warnings": "1. [어드민 필수/유효성 16대 검증]\n   - **chkVal=0**: 혜택 상세 항목 최소 1개 이상 필수 등록.\n   - **chkVal=2**: 서브 타이틀 필수 입력.\n   - **chkVal=3**: 혜택 쿠폰 연결 필수 (CPN/PRC/FCF).\n   - **chkVal=4**: 추가적립(NOT) 시 추가 적립율(editAccVal) 입력 필수.\n   - **chkVal=5**: 사은품(GFT) 이미지 등록 필수.\n   - **chkVal=6**: 선물포장(PRE) 이미지 등록 필수.\n   - **chkVal=7/8**: 버튼 액션이 URL이동(M)일 경우 URL 주소 및 eTAG 랜딩코드 선택 필수.\n   - **chkVal=9**: 버튼 형태(rdoBtnType)가 사용안함(XX)이 아닐 때 버튼 명칭 필수.\n   - **chkVal=10**: 복수 쿠폰 설정 시 쿠폰받기 버튼 필수.\n   - **chkVal=11**: 쿠폰 이미지 표현(I) 사용 시 쿠폰받기 버튼 필수.\n   - **chkVal=12**: 쿠폰 자동표현(A) 시 단일 쿠폰에 버튼 사용 차단 (버튼 사용 시 저장 거부).\n   - **chkVal=13**: 혜택은 1번부터 빈자리 없이 순서대로 채워야 저장 가능.\n   - **chkVal=16**: 이미지 표현(I) 시 쿠폰 이미지 필수 등록.\n2. [텍스트 배타 등록 규칙] 상단 설명 문구와 하단 설명 문구는 동시에 채울 수 없으며, 중복 기재 시 어드민 저장이 반려됩니다.",
  "imageGuidelines": {
    "pcSize": "가로 1240px × 세로 높이 제한 없음 (쿠폰 이미지 표현 및 사은품 PC 배너)",
    "moSize": "가로 750px × 세로 높이 제한 없음 (1:1 비율 권장)",
    "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "사은품(GFT) 및 선물포장(PRE) 등록 시 PC/MO 규격 파일 사이즈가 200KB를 1바이트라도 초과하면 넥사크로 UI 업로드가 강제 반려됩니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 1개 이상의 혜택 등록 필수",
    "tabMax": "최대 5개 (1st ~ 5th 혜택 슬롯 제한)",
    "prodMin": "최소 1개 쿠폰/사은품 매핑",
    "prodMax": "혜택당 최대 150개 쿠폰 등록 제한 (maxBenefitCnt)",
    "adminValidation": "어드민 저장 시 활성화된 혜택 슬롯 개수는 최소 1개에서 최대 5개 범위 내여야 하며, 개별 혜택당 연결할 수 있는 쿠폰 코드는 최대 150개로 제한됩니다. 서브타이틀 50byte, 버튼명 40byte, 하단설명 100byte 한계 초과 시 저장이 불가합니다."
  }
};
