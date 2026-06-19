// LFmall Exhibition Guide: PAYBACK
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["PAYBACK"] = {
  "cardKey": "PAYBACK",
  "name": "페이백",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardPayBack.xfdl (어드민) / Payback.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "구매 완료 시 결제 금액의 일정 비율 또는 일정 금액을 적립금으로 페이백해주는 특화 프로모션 카드입니다.",
  "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 페이백 행사 안내 이미지와 함께 FckEditor로 입력된 상세 안내문구(evntDscr)가 노출됩니다. 로그인한 사용자에 대해 실시간 누적 주문 금액이 표시되며, 진행바 표시 여부(prgsLineYn)를 활성화하면 결제 완료 금액과 구간별 페이백 도달도가 진행바(Progress Bar) 상에 시각적으로 가시화됩니다. 구간 도달 시에는 말풍선(Speech Bubble) 애니메이션과 함께 페이백 혜택(정액 마일리지 M 또는 정율 %)이 강조 노출되고, 하단에는 다음 구간 페이백을 받기 위한 잔여 구매금액이 실시간으로 동적 출력됩니다(예: 'N원 더 구매 시 M 페이백 가능'). 신청 전/완료 상태 및 행사 대상 여부에 따라 버튼 텍스트가 분기되며 중복 클릭 방지 처리 및 백엔드 API 연동이 수행됩니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "String (최대 7자)",
      "desc": "Hex Color Code 입력 (예: #757575). 어드민의 editBtnText 인풋에 값을 지정하며, 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 유효성이 검증됩니다."
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
      "field": "결제금액 텍스트",
      "id": "EVNT_NTOR_MAIN_TEXT",
      "type": "String (22byte 한도)",
      "desc": "나의 주문 금액 영역 좌측에 표시되는 사용자 개인 맞춤형 레이블 텍스트입니다. (예: '나의 주문 금액')"
    },
    {
      "field": "페이백 유형",
      "id": "PGSS_LINE_TYPE_VAL",
      "type": "Combo (S/P)",
      "desc": "S: 단일 지급 (1단계만 지정 가능), P: 단계별 지급 (2~5단계만 지정 가능)."
    },
    {
      "field": "진행바 표시여부",
      "id": "PRGS_LINE_YN",
      "type": "Combo (Y/N)",
      "desc": "구매금액 진행바(Progress Bar) 노출 여부를 제어합니다."
    },
    {
      "field": "페이백 형태",
      "id": "PYBC_TYPE_VAL",
      "type": "Combo (R/A)",
      "desc": "R: 정율 (%, 최대 99% 제한), A: 정액 (원, 마일리지 지급)으로 페이백 지급 형식을 선택합니다."
    },
    {
      "field": "버튼명",
      "id": "BTN_TEXT_VAL",
      "type": "String (30byte 한도)",
      "desc": "신청 전 또는 신청 가능 상태일 때 노출되는 버튼 텍스트입니다."
    },
    {
      "field": "완료버튼명",
      "id": "BTN_CMPE_TEXT_VAL",
      "type": "String (30byte 한도)",
      "desc": "페이백 참여 완료 또는 마감 상태일 때 노출되는 버튼 텍스트입니다."
    },
    {
      "field": "페이백 설명 문구",
      "id": "EVNT_DSCR",
      "type": "RichText (HTML)",
      "desc": "에디터를 통해 작성하는 페이백 유의사항 및 상세 안내 가이드 본문입니다."
    },
    {
      "field": "하단 안내 문구",
      "id": "EXCU_TEXT_VAL",
      "type": "String (60byte 한도)",
      "desc": "로그인 후 누적 구매 금액이 0원일 때 하단에 표시되는 기본 안내 메시지입니다."
    }
  ],
  "warnings": "1. [배경색상 검증] 배경색상은 '#'을 반드시 기재한 7자 또는 8자 Hex Code 형태(예: #FFFFFF)여야 하며, 정규식을 벗어나면 저장이 반려됩니다.\n2. [설명문구 상호 배타성] 상단 설명 문구와 하단 설명 문구는 어드민 검증에 의해 동시에 입력할 수 없습니다. 하나는 공백이어야 유효성 에러를 피할 수 있습니다.\n3. [텍스트 바이트 한도] 타이틀 및 결제금액 텍스트는 최대 22byte 이내, 버튼명 및 완료버튼명은 최대 30byte 이내, 하단 안내 문구는 최대 60byte 이내여야 합니다. 타이틀 줄바꿈은 2줄까지만 허용됩니다.\n4. [지급 유형 및 단계 검증] 단일 지급일 경우 1단계만, 단계별 지급일 경우 2~5단계만 조건 적용이 허용됩니다. 어긋날 시 유효성 메시지와 함께 저장이 반려됩니다.\n5. [조건값 검증] 설정한 조건 단계마다 구매금액 조건과 페이백 금액/비율이 반드시 모두 채워져야 하며, 구매금액에 0원은 입력할 수 없습니다.\n6. [상품조건 필수값] 전관행사대상일 때는 전관행사 ID가, 뱃지상품대상일 때는 이벤트 번호가 비어 있을 시 저장이 불가능합니다. 수기상품대상의 경우 카드가 먼저 저장되어 있어야 상품 등록 팝업을 열 수 있으므로 사전 '전체상품대상' 저장이 필수적입니다.\n7. [이미지 제한] 개별 업로드 이미지 용량이 200KB를 초과할 시 파일 정보 체크 단계에서 에러가 발생하며 업로드가 취소됩니다.",
  "qtyGuidelines": {
    "tabMin": "단일 지급은 1단계 필수 구성, 단계별 지급은 최소 2단계 구성 필요",
    "tabMax": "최대 5단계까지 조건 설정 제공",
    "prodMin": "구매금액 조건 최소 1원 이상 지정 (0원 지정 불가)",
    "prodMax": "정율 페이백 시 비율 최대 99% 제한",
    "adminValidation": "어드민 저장 시 단일 지급은 1단계만, 단계별 지급은 2~5단계만 지정 가능하도록 강제하며, 각 단계별로 구매 금액 조건과 페이백 비율(정율) 또는 페이백 금액(정액)이 모두 채워져 있어야 유효성 검사를 통과합니다. 비율 설정 시 2자리 한도(최대 99%)로 제한되며, 업로드하는 이미지 용량이 200KB를 초과하면 업로드가 즉시 반려됩니다."
  }
};
