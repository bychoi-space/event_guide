// LFmall Exhibition Guide: RANDOM_NO
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["RANDOM_NO"] = {
  "cardKey": "RANDOM_NO",
  "name": "난수입력",
  "category": "NAV",
  "sourceFile": "frmPlanCardRandomNumber.xfdl (어드민) / RandomNo.tsx (프론트)",
  "moduleCode": "MD13",
  "desc": "배포된 전용 시리얼 쿠폰이나 1회용 프로모션 난수코드를 사용자 화면에서 입력하여 실시간 검증을 거쳐 매핑된 쿠폰 혜택을 즉시 발급받을 수 있는 시리얼/난수 프로모션 연동 컴포넌트입니다.",
  "layoutDescription": "Hex 배경색상 위에 상단 설명 문구, 메인 타이틀(최대 2줄)이 렌더링되며, 설정에 따라 사용자가 시리얼 번호를 입력할 수 있는 직각 인풋 박스와 인증/혜택 지급 완료를 처리하는 가로형 버튼이 정밀 정렬되어 표출됩니다. 난수 사용 여부가 미사용(N)일 때는 인풋 박스가 숨겨지고 혜택 받기 버튼만 원드랍 형태로 나타납니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "String (최대 7자)",
      "desc": "Hex Color Code 입력 (예: #757575). 입력 시 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 톤업하여 배경으로 자동 표현됩니다."
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
      "field": "난수 사용여부",
      "id": "RNNO_USE_YN",
      "type": "Radio (Y/N, 필수)",
      "desc": "난수 입력 박스 노출 여부입니다. Y 설정 시 인풋 박스가 렌더링되며, N 설정 시 버튼만 노출됩니다."
    },
    {
      "field": "프롬프트",
      "id": "EXCU_TEXT_VAL",
      "type": "String (30byte 한도, 필수)",
      "desc": "사용자가 난수 코드를 입력하는 인풋 박스의 placeholder 문구입니다."
    },
    {
      "field": "버튼 색상",
      "id": "BTN_CLR_VAL",
      "type": "Radio (BK/WH, 필수)",
      "desc": "인증/등록 버튼의 색상을 설정합니다. BK: 블랙, WH: 화이트."
    },
    {
      "field": "버튼 텍스트",
      "id": "BTN_TEXT_VAL",
      "type": "String (24byte 한도, 필수)",
      "desc": "인증/등록 버튼에 노출될 텍스트입니다."
    }
  ],
  "codeSnippet": "// RandomNo.tsx 프론트엔드 연동 핵심 로직\nconst checkRnnoNo = () => {\n  if (isPreview) return;\n\n  if (!loginInfo.isLoginSuccess) {\n    LFAlert.alert(\"로그인이 필요한 서비스입니다.\").then(() => {\n      navigate(ROUTE_PATH.LOGIN, {\n        state: { from: { pathname: location.pathname + location.search } },\n      });\n      return;\n    });\n  } else if (eventInfo?.body?.rnnoUseYn === \"Y\" && !rnnoNo) {\n    LFAlert.alert(\"코드를 입력해주세요.\");\n    return;\n  }\n\n  isLoading.current = true;\n\n  exbhRnnoNoJoin.mutate({\n    evntNo: Number(template?.exhbCardNo),\n    exhbNo: Number(template.exhbNo),\n    rnnoNo: String(rnnoNo)?.trim(),\n    rnnoUseYn: String(eventInfo?.body?.rnnoUseYn),\n    siteCd: \"03\",\n  });\n};",
  "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 형태(7~8자)여야 하며 정규식 만족 필수입니다. 공란이 아닐 경우 프론트에서는 설정된 색상의 8% 투명도로 연하게 배경 톤을 연출합니다.\n2. [설명문구 배타성] 상단 설명 문구(EVNT_HEDR_TEXT)와 하단 설명 문구(EVNT_SUB_TEXT)는 배타적 속성으로, 두 영역 모두에 값이 채워져 있으면 어드민에서 저장 시 에러가 노출되고 반려됩니다.\n3. [난수 사용 여부 및 프롬프트 필수] 난수 사용여부(RNNO_USE_YN)와 프롬프트(EXCU_TEXT_VAL) 항목은 어드민 저장 시 상시 필수값으로 체크되어 비어 있는 경우 에러가 발생합니다.\n4. [발급 대상 필수 및 VIP 조건] 등록하는 각 구좌별로 최소 1개 이상의 발급 대상 회원 구분(기존/신규/윈백)이 체크되어야 합니다. VIP 승급 혜택 활성화 시 사전 협의된 제휴 기획전이 아닌 경우 사용을 지양해 주십시오.\n5. [발급 대상 합산 유효성 검사 (★매우 중요)] 어드민 저장 시, 난수 사용(Y) 상태인 경우 연결한 난수 코드별로, 난수 미사용(N) 상태인 경우 전체 구좌 대상으로 회원 구분 컬럼값 합산 시 기존회원(E), 신규회원(N), 윈백회원(W)이 모두 최소 1회 이상 다중 조합 매핑되어 커버되어야 저장이 정상 완결됩니다. 이를 누락할 시 '난수코드와 발급대상을 확인해주세요' 등의 에러가 발생합니다.",
  "qtyGuidelines": {
    "tabMin": "최소 1개 난수 구좌 설정 필요",
    "tabMax": "최대 6개 난수 구좌까지 추가 지원",
    "prodMin": "구좌당 연결 난수/쿠폰 각각 최대 5개 매핑 가능",
    "prodMax": "프롬프트 최대 30byte, 버튼 텍스트 최대 24byte 제한",
    "adminValidation": "난수 구좌의 개수는 어드민 Plus/Minus 버튼을 통해 1~6 범위 내로 제어됩니다. 텍스트 바이트 한도 (설명 문구 각 50byte, 타이틀 22byte, 프롬프트 30byte, 버튼명 24byte)는 입력 시 실시간으로 계산되어 한도 초과 시 자동 컷오프 처리됩니다."
  }
};
