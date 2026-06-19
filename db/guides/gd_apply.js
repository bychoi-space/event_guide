// LFmall Exhibition Guide: APPLY
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["APPLY"] = {
  "cardKey": "APPLY",
  "name": "응모하기",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardEnter.xfdl (어드민) / EventApply.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "럭키 드로우나 사은 행사 등에 실시간 원클릭으로 응모 및 접수하는 버튼 영역입니다.",
  "layoutDescription": "사용자 프론트 영역에서 이벤트 타이틀, 응모 대상 및 기간 설명과 함께 실시간 원클릭 '응모하기' 버튼을 노출합니다. 중복 참여 제한 옵션에 따라 로그인한 사용자가 이미 응모한 경우 '응모 완료'로 동적 변경됩니다.",
  "backendSettings": [
    {
      "field": "버튼 텍스트",
      "id": "BTN_TEXT_VAL",
      "type": "String (20자 한도)",
      "desc": "응모 버튼에 노출될 액션 문구 (기본값: 응모하기)"
    },
    {
      "field": "배너 타입",
      "id": "BNR_TYPE_VAL",
      "type": "Radio (B1/S1)",
      "desc": "B1: 기본형 배너 / S1: Swiper 회전 슬라이드 배너 타입을 정의합니다."
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
      "field": "이미지 표현 형식",
      "id": "IMG_WIDE_TYPE_VAL",
      "type": "Combo (S/W)",
      "desc": "S: 기본형 (1240px 중앙 정렬) / W: 와이드형 (1920px 화면 가득 채움)을 선택합니다."
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
      "field": "서브 타이틀(상)",
      "id": "TOP_DSCR_TEXT",
      "type": "String (50byte)",
      "desc": "메인 타이틀 상단에 배치되는 보조 설명 문구입니다."
    },
    {
      "field": "타이틀 메인",
      "id": "HEDR_TEXT_VAL",
      "type": "String (22byte)",
      "desc": "카드의 중앙 메인 타이틀 제목입니다."
    },
    {
      "field": "서브 타이틀(하)",
      "id": "BTM_DSCR_TEXT_VAL",
      "type": "String (50byte)",
      "desc": "메인 타이틀 하단에 배치되는 상세 보조 설명 문구입니다."
    },
    {
      "field": "진행 기간",
      "id": "EXHB_PERD_TEXT_VAL",
      "type": "String",
      "desc": "이벤트의 상시 진행 여부 또는 특정 시작/종료 일시 텍스트 설정입니다."
    },
    {
      "field": "버튼 형태",
      "id": "BTN_STYL_VAL",
      "type": "Radio (N/S/R)",
      "desc": "N: 미노출 / S: 직사각형 / R: 둥근 알약형 라운드 버튼 스타일을 선택합니다."
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
    },
    {
      "field": "버튼 링크 URL",
      "id": "BTN_MVMN_URL_VAL",
      "type": "String",
      "desc": "버튼 클릭 또는 탭 클릭 시 랜딩될 타겟 페이지의 PC 기준 URL 주소입니다."
    },
    {
      "field": "버튼 유형",
      "id": "BTN_TYPE_VAL",
      "type": "Radio (O/S)",
      "desc": "O: 아웃라인만 그리는 고스트 버튼 / S: 채우기 단색 버튼 스타일을 지정합니다."
    }
  ],
  "warnings": "1. 연동된 백엔드 이벤트 번호가 종료되었거나 실존하지 않는 경우, 응모 시 에러 얼럿이 발생하므로 백엔드 이벤트 생성을 반드시 선행해야 합니다.\n2. 로그인 체크가 필수이므로 비로그인 사용자는 로그인 페이지로 자동 이동됩니다.",
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "최소 1자 (버튼명)",
    "prodMax": "최대 20자 (버튼명)",
    "adminValidation": "연동할 이벤트 번호(EVENT_NO)는 필수 숫자 타입으로 입력되어야 하며, 유효하지 않은 포맷인 경우 어드민 단에서 저장이 반려됩니다."
  }
};
