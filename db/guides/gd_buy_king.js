// LFmall Exhibition Guide: BUY_KING
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["BUY_KING"] = {
  "cardKey": "BUY_KING",
  "name": "구매왕",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardTopBuyer.xfdl (어드민) / TopBuyerLeaderboard.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "기획전 기간 동안 실시간 최고 구매액 결제 순위(1~10위) 리더보드와 함께 증정 사은품 정보를 전시하여 구매를 유도하는 마케팅 특화 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 톤이 배경으로 깔린 세련된 보드가 노출됩니다. 상단 설명 문구와 2줄 이내의 메인 타이틀이 배치되며, 좌측 또는 상단에는 지정된 사은품 이미지(PC/MO 공통 1:1 정비율), 사은품명, 브랜드 및 상당 가치 텍스트가 박스 형태로 매력적으로 렌더링됩니다. 우측 또는 하단에는 마스킹된 고객명(예: 김*우)과 총 누적 구매 금액이 포함된 실시간 랭킹 리더보드 테이블이 구매 현황 표시 여부(PRHS_PNCN_SIGN_YN)에 따라 동적으로 로딩됩니다. 최하단에는 당첨자 발표 여부(PRWN_ANNO_DD_SIGN_YN)에 따라 지정된 당첨자 발표일이 깔끔하게 표시됩니다.",
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
      "field": "사은품 브랜드",
      "id": "PRSN_BRAND_NM",
      "type": "String (30byte 한도)",
      "desc": "사은품 증정 대상 브랜드명입니다. (예: 'HAZZYS LADIES')"
    },
    {
      "field": "사은품명",
      "id": "PRSN_NM",
      "type": "String (50byte 한도)",
      "desc": "사은품 증정 상품명입니다. (예: '서머 린넨 숄더백')"
    },
    {
      "field": "사은품가격(가치)",
      "id": "PRSN_PRC_TEXT",
      "type": "String (30byte 한도)",
      "desc": "사은품의 가치 설명 텍스트입니다. (예: '15만원 상당' 또는 '99,000원 상당')"
    },
    {
      "field": "구매 현황 표시여부",
      "id": "PRHS_PNCN_SIGN_YN",
      "type": "Radio (Y/N)",
      "desc": "실시간 랭킹 리더보드 테이블의 노출 여부를 제어합니다."
    },
    {
      "field": "당첨자 발표 표시여부",
      "id": "PRWN_ANNO_DD_SIGN_YN",
      "type": "Radio (Y/N)",
      "desc": "당첨자 발표 일시 노출 여부를 제어합니다."
    },
    {
      "field": "당첨자 발표일",
      "id": "PRWN_ANNO_DD",
      "type": "DateTime (YYYYMMDD hhmmss)",
      "desc": "당첨자를 공식 발표할 년월일 및 시간입니다. (예: '20260630 180000'). Y 표시 상태에서만 활성화됩니다."
    },
    {
      "field": "버튼 유형",
      "id": "BTN_TYPE_VAL",
      "type": "Radio (O/S)",
      "desc": "O: 아웃라인만 그리는 고스트 버튼 / S: 채우기 단색 버튼 스타일을 지정합니다."
    },
    {
      "field": "버튼 색상",
      "id": "BTN_CLR_VAL",
      "type": "Radio (B/W)",
      "desc": "B: 블랙 버튼 / W: 화이트 버튼 색상을 선택합니다."
    }
  ],
  "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 형태(7~8자)여야 하며 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 만족하지 않을 시 저장이 반려됩니다. 프론트 렌더링 시에는 이 색상의 8% 농도로 연하게 배경색이 적용됩니다.\n2. [설명문구 배타성] 상단 설명 문구와 하단 설명 문구는 동시에 기입할 수 없으며, 유효성 검사에서 둘 다 값이 채워져 있으면 에러 얼럿이 노출됩니다.\n3. [당첨일시 검증] 당첨자 발표일 표시여부를 'Y'로 할 경우, 발표일(Calendar)과 시간(Edit)이 둘 다 필수로 입력되어야 하며, 시간 포맷은 24시간 형식의 6자리 숫자(hhmmss)여야 합니다. 이를 위반하면 저장 시 유효성 에러가 발생합니다.\n4. [상품조건 필수값 및 수기 제한] 전관행사대상 시 전관행사 ID, 뱃지상품대상 시 이벤트 번호가 반드시 입력되어야 합니다. 수기상품의 경우 카드가 데이터베이스에 최소 1회 저장되어 고유 이벤트 번호(EVNT_NO)를 획득하기 전에는 상품 등록 팝업을 열 수 없으므로 신규 작성 시에는 '전체상품대상' 등으로 선저장 후 수정 모드에서 등록해야 합니다.\n5. [이미지 용량 제한] 업로드하는 PC 및 모바일 사은품 이미지 파일 크기는 각각 최대 200KB를 넘을 수 없으며, 초과 시 업로드가 즉시 에러 얼럿과 함께 취소됩니다.",
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "최소 1자 (텍스트 입력 항목)",
    "prodMax": "브랜드명 30byte, 사은품명 50byte, 사은품가격 30byte 제한",
    "adminValidation": "사은품 텍스트 규격(브랜드 최대 30byte, 사은품명 최대 50byte, 사은품가격 최대 30byte) 및 타이틀 규격(최대 22byte), 설명문구(각 최대 50byte) 바이트 한도가 입력 단에서 실시간(oninput, onkeyup)으로 감시 및 자동 잘림 처리됩니다. 사은품 이미지는 200KB 이하의 가로세로 640x640px 1:1 이미지를 필수 업로드해야 저장이 승인됩니다."
  }
};
