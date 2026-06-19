// LFmall Exhibition Guide: SALE_CODE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["SALE_CODE"] = {
  "cardKey": "SALE_CODE",
  "name": "할인코드",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardDiscountCode.xfdl (어드민) / DiscountCodeBlock.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "제휴 할인코드 복사 및 입력, 대상 회원 등급 필터링 및 팝업 안내를 복합 지원하며 하단 제휴 스토어 바로가기 버튼을 연계하는 기획전 제휴 전용 프로모션 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 배경 톤을 가진 보드가 노출됩니다. 상단 설명 문구와 2줄 이내의 메인 타이틀이 배치되고, 할인코드 개수(1~4개)에 맞춘 쿠폰 카드가 그리드(PC 2열, 모바일 1열) 레이아웃으로 동적 렌더링됩니다. 개별 쿠폰은 지정된 배경 이미지 및 로고 이미지(PC/MO 규격), 그리고 복사 대상 난수코드 텍스트 박스, 쿠폰 사용이 제한되는 대상 회원 등급 뱃지가 가시성 있게 표출됩니다. 난수 복사 시 지정된 팝업 안내 텍스트가 안내 얼럿 형태로 동작합니다. 최하단에는 바로가기 버튼 설정(BTN_ACTN_TYPE_VAL='Y')이 적용되었을 경우 제휴 스토어로 연결(현재창/새창, ETAG 랜딩)해 주는 가로 100% 라운드 버튼이 함께 출력됩니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "String (최대 7자)",
      "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 색상 포맷 유효성이 검증되며, 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 톤업하여 배경으로 자동 표현됩니다."
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
      "desc": "컴포넌트 헤더 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "타이틀",
      "id": "EVNT_MAIN_TEXT",
      "type": "String (22byte 한도)",
      "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "EVNT_SUB_TEXT",
      "type": "String (50byte 한도)",
      "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "난수 코드",
      "id": "RNNO_VAL",
      "type": "String (20byte 한도, 필수)",
      "desc": "쿠폰 카드로 노출되며 사용자가 복사/적용하여 쓸 실제 할인코드 문자열입니다."
    },
    {
      "field": "로고 PC 이미지",
      "id": "PC_LOGO_IMG_PATH_NM",
      "type": "File (295x24px 권장)",
      "desc": "쿠폰 카드 상단 브랜드 로고 영역에 표시될 PC 이미지 파일입니다. (최대 200KB 이하)"
    },
    {
      "field": "로고 모바일 이미지",
      "id": "MOBI_LOGO_IMG_PATH_NM",
      "type": "File (295x24px 권장)",
      "desc": "쿠폰 카드 상단 브랜드 로고 영역에 표시될 모바일 이미지 파일입니다. (최대 200KB 이하)"
    },
    {
      "field": "팝업 텍스트",
      "id": "EVNT_NTOR_MAIN_TEXT",
      "type": "String (30byte 한도)",
      "desc": "코드 복사 또는 적용 액션 시 브라우저 얼럿 안내창에 노출할 메시지입니다."
    },
    {
      "field": "버튼 사용여부",
      "id": "BTN_ACTN_TYPE_VAL",
      "type": "Radio (Y/N)",
      "desc": "하단 공통 바로가기 버튼의 노출 여부를 설정합니다. N일 시 하위 버튼 설정 항목은 disabled 및 null로 초기화됩니다."
    },
    {
      "field": "버튼 링크 타겟",
      "id": "LINK_TRGE_VAL",
      "type": "Combo (S/N)",
      "desc": "S: 현재창 (_self), N: 새창 (_blank)으로 이동 타겟을 정의합니다."
    },
    {
      "field": "버튼 링크 URL",
      "id": "LINK_URL_VAL",
      "type": "String",
      "desc": "버튼 클릭 시 연결될 PC용 바로가기 웹페이지 주소입니다. (필수)"
    },
    {
      "field": "ETAG 여부",
      "id": "LINK_DIV_VAL",
      "type": "Combo (Y/N)",
      "desc": "바로가기 이동 시 eTAG 랜딩 추적 방식을 활성화할지 여부입니다. Y 선택 필수."
    },
    {
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (필수)",
      "desc": "바로가기 버튼 상에 표시될 텍스트 명칭입니다."
    }
  ],
  "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 형태(7~8자)여야 하며 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 만족하지 않을 시 저장이 반려됩니다. 프론트 렌더링 시에는 이 색상의 8% 농도로 연하게 배경색이 적용됩니다.\n2. [설명문구 배타성] 상단 설명 문구와 하단 설명 문구는 동시에 기입할 수 없으며, 유효성 검사에서 둘 다 값이 채워져 있으면 에러 얼럿이 노출됩니다.\n3. [할인코드 구좌 필수 기입] 적용한 개수(1~4개)만큼 생성되는 모든 코드 영역에서 '난수 코드(RNNO_VAL)', '대상 회원 등급(최소 1개 이상)', 'PC/MO 쿠폰 이미지(필수)'가 입력되지 않으면 저장 유효성 검사 단계에서 반려 에러가 발생합니다.\n4. [하단 버튼 검증] 버튼 사용여부를 'Y'로 활성화한 경우, 링크 타겟, 링크 URL, ETAG 여부, 버튼 명칭이 전부 비어 있지 않고 모두 적법한 데이터 포맷으로 채워져야 저장이 완결됩니다.\n5. [이미지 용량 제한] 업로드하는 쿠폰 이미지 및 브랜드 로고 이미지 파일 크기는 각각 최대 200KB를 넘을 수 없으며, 초과 시 업로드가 즉시 에러 얼럿과 함께 취소됩니다.",
  "qtyGuidelines": {
    "tabMin": "최소 1개 할인코드 구좌 구성 필요",
    "tabMax": "최대 4개 할인코드 구좌까지 추가 지원",
    "prodMin": "개별 할인코드 난수 최대 20byte, 팝업 텍스트 최대 30byte 제한",
    "prodMax": "대상 회원 등급은 최대 7개 등급 중 중복 및 다중 매핑 가능",
    "adminValidation": "할인코드 문자열 바이트 한도(20byte) 및 팝업 안내 텍스트 바이트 한도(30byte)는 입력 단에서 실시간(oninput, onkeyup)으로 감시되어 초과 기입 시 자동 컷오프 처리됩니다. 쿠폰 이미지(권장 480x222px)와 브랜드 로고 이미지(권장 295x24px)는 파일 당 200KB 이하 규격에 맞추어 필수 업로드해야 저장이 승인됩니다."
  }
};
