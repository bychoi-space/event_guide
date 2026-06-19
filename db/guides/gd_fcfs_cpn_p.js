// LFmall Exhibition Guide: FCFS_CPN_P
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["FCFS_CPN_P"] = {
  "cardKey": "FCFS_CPN_P",
  "name": "선착순쿠폰상품",
  "category": "PROD",
  "sourceFile": "frmPlanCardFCFSCouponFrod.xfdl (어드민) / CouponProduct.tsx (프론트)",
  "moduleCode": "MD6",
  "desc": "선착순 쿠폰 혜택 대상 상품 목록을 탭 및 듀얼 레이아웃 구조로 렌더링하고, 실시간 쿠폰 남은 수량 상태에 맞춰 마감/마감임박 비주얼 뱃지를 노출하는 특화형 상품 카드입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상하단 여백 및 배경 색상이 지정에 따라 가변 렌더링됩니다. PC 미리보기는 4열 와이드 그리드(SW4_1, SW4_2, LS4) 구조로 시원하게 배치되며, Mobile 미리보기는 Swiper 슬라이더(3x2, 3x1 등) 또는 2열 리스트(LS2) 구조로 렌더링됩니다. 각 상품 썸네일에는 쿠폰의 실시간 잔여량에 따른 배지 및 딤드 오버레이가 작동합니다.",
  "backendSettings": [
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
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "배경색을 Hex 코드형태(예: #757575)로 입력합니다. 해당 값은 프론트에서 8% 투명도로 연하게 표현됩니다."
    },
    {
      "field": "상단 설명 문구",
      "id": "EVNT_HEDR_TEXT",
      "type": "String (50byte 한도)",
      "desc": "타이틀 위에 배치할 상단 설명 문구입니다. 하단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "타이틀",
      "id": "EVNT_MAIN_TEXT",
      "type": "String (22byte 한도)",
      "desc": "메인 타이틀 제목입니다. 한글 기준 11자 내외 작성이 권장되며, 줄바꿈(\\n)으로 최대 2줄까지 등록 가능합니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "EVNT_SUB_TEXT",
      "type": "String (50byte 한도)",
      "desc": "타이틀 아래에 노출될 하단 설명 문구입니다. 상단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "특가 마감 문구",
      "id": "SPPR_CLSN_PHRS_VAL",
      "type": "String (20byte 한도, 필수)",
      "desc": "쿠폰 수량이 전체 소진(0개 이하)되었을 때 썸네일 오버레이에 노출할 문구입니다. (예: 쿠폰소진 / 지원마감)"
    },
    {
      "field": "상품 정렬 순서",
      "id": "PROD_SORT_TYPE_VAL",
      "type": "Combo (A/M)",
      "desc": "상품 노출 정렬 순서(A: 등록순, M: 랜덤정렬)를 지정합니다."
    },
    {
      "field": "탭 형태",
      "id": "TAB_TYPE_VAL",
      "type": "Radio (0/1/2)",
      "desc": "0: 사용안함, 1: 1단 탭, 2: 2단 탭 사용 여부 및 형태를 결정합니다."
    },
    {
      "field": "상품 표현 (MO)",
      "id": "PROD_EPSR_TYPE_VAL",
      "type": "Radio (SW3_2/SW3_1/SW2_2/SW2_1/SW1_2/SW1_3/LS2)",
      "desc": "모바일(MO) 사용자 화면에서의 상품 격자 배치 및 슬라이드 형태를 지정합니다."
    },
    {
      "field": "상품 표현 (PC)",
      "id": "PC_PROD_EPSR_TYPE_VAL",
      "type": "Radio (SW4_1/SW4_2/LS4)",
      "desc": "PC 사용자 화면에서의 상품 격자 배치 및 슬라이드 형태를 지정합니다."
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
  "codeSnippet": "// CouponProductItem.tsx - 잔여수량(cpnRemainQty) 상태별 렌더링 분기\n<Link\n  to={\"\"}\n  className={`${styles.productItem} ${Number(props?.cpnRemainQty) <= 0 && styles.dimmed}`}\n  onClick={(e) => handleOnClickProduct(e, props?.prodCd || \"\")}\n>\n  <div className={`${styles.prdThumb} ${Number(props?.cpnRemainQty) <= 0 && styles.dimmed}`}>\n    <img src={`${IMAGE_WEB_HOST_URL_PRODUCT_PREFIX}/${props?.imgPath}`} alt=\"상품이미지\" />\n    {Number(props?.cpnRemainQty) <= 0 && <span className={styles.soldout}>{spprClsnPhrs}</span>}\n    {Number(props?.cpnRemainQty) > 0 && Number(props?.cpnRemainQty) < 10 && (\n      <button className={styles.deadline_badge} type=\"button\">\n        <span>마감임박</span>\n      </button>\n    )}\n  </div>\n  <div className={`${styles.prdInfo} ${Number(props?.cpnRemainQty) <= 0 && styles.dimmed}`}>\n    <p className={styles.brand}>{props?.brandEngNm}</p>\n    <p className={styles.name}>{props?.prodNm}</p>\n    {/* 남은수량 배지 */}\n    <button className={`${styles.deal_badge} ${Number(props?.cpnRemainQty) <= 0 ? styles.zero : Number(props?.cpnRemainQty) < 10 ? styles.red : styles.black}`} type=\"button\">\n      <span className={styles.deal_badge__label}>남은수량</span>\n      <span className={styles.deal_badge__right}>{props?.cpnRemainQty}</span>\n    </button>\n  </div>\n</Link>",
  "warnings": "1. [설명문구 상호 배타성] 상단 설명 문구와 하단 설명 문구는 동시에 입력할 수 없으며, 동시에 값이 존재할 경우 어드민 검증에 의해 저장이 반려됩니다.\n2. [특가 마감 문구 필수] 특가 마감 문구(SPPR_CLSN_PHRS_VAL)는 필수 입력 필드이며, 입력하지 않는 경우 어드민에서 경고창과 함께 저장이 차단됩니다.\n3. [배경색상 정규식] 배경색상 필드는 '#'을 포함한 유효한 Hex 코드 형식이어야 합니다.",
  "imageGuidelines": {
    "pcSize": "가로 1240px × 세로 높이 제한 없음 (탭 배너 이미지 사용 시)",
    "moSize": "가로 750px × 세로 높이 제한 없음 (탭 배너 이미지 사용 시)",
    "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "넥사크로 어드민에서 탭별 PC/MO 배너 이미지 업로드 시 파일당 200KB를 초과할 경우 업로드가 반려 및 초기화됩니다."
  },
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "1단 탭 최대 15개, 2단 탭 최대 8개까지 설정 가능",
    "prodMin": "최소 4개 상품 필수 등록",
    "prodMax": "최대 48개 (스와이프형) / 120개 (리스트형)",
    "adminValidation": "각 탭 및 구좌별 등록된 상품 개수가 최소 4개 미만이거나 최대 등록 가능 개수(스와이프 48개, 리스트 120개)를 초과할 경우, 어드민 저장 검증 스크립트단에서 에러 알럿과 함께 저장이 반려됩니다."
  }
};
