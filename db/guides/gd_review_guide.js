// LFmall Exhibition Guide: REVIEW_GUIDE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["REVIEW_GUIDE"] = {
  "cardKey": "REVIEW_GUIDE",
  "name": "리뷰 작성",
  "category": "NAV",
  "sourceFile": "frmPlanCardReviewGuide.xfdl (어드민)",
  "moduleCode": "RG",
  "desc": "구매자들에게 적극적인 평점 및 리뷰 작성을 유도하고 보상 혜택을 알려주는 위젯입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서는 기획전 내에서 로그인된 사용자의 최근 구매 확정 내역을 비동기 조회하여 노출합니다. 구매 이력이 존재할 경우, 최근 구매한 상품 정보(이미지, 브랜드, 상품명)와 함께 [리뷰 작성] 버튼이 1:1로 매핑되어 표시되며, 클릭 시 해당 상품의 리뷰 작성 팝업 또는 페이지로 즉시 연동됩니다. 만약 구매 이력이 없는 사용자일 경우, 어드민에서 업로드한 이미지 배너(PC/MO)와 함께 대체 신청 버튼(사용 여부 및 명칭 설정 가능)을 제공하여 일반 참여를 유도합니다. 상단 설명 문구, 메인 타이틀, 하단 설명 문구를 자유롭게 설정할 수 있으며, 리뷰 혜택 안내의 노출 여부도 제어할 수 있습니다.",
  "backendSettings": [
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 외부 마진(Margin) 사용 여부를 결정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "상단 내부 패딩(Padding) 사용 여부를 결정합니다. 기본값 Y."
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "하단 외부 마진(Margin) 사용 여부를 결정합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "하단 내부 패딩(Padding) 사용 여부를 결정합니다."
    },
    {
      "field": "상단 설명 문구",
      "id": "EVNT_HEDR_TEXT",
      "type": "String (50자 한도)",
      "desc": "타이틀 상단에 노출되는 서브 설명 문구입니다. 하단 설명 문구와 동시에 등록할 수 없습니다."
    },
    {
      "field": "타이틀",
      "id": "EVNT_MAIN_TEXT",
      "type": "String (30자 한도)",
      "desc": "리뷰 작성 영역의 메인 타이틀입니다. 최대 2줄(줄바꿈 \\n)까지 입력할 수 있습니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "EVNT_SUB_TEXT",
      "type": "String (50자 한도)",
      "desc": "타이틀 하단에 노출되는 보조 설명 문구입니다. 상단 설명 문구와 동시에 등록할 수 없습니다."
    },
    {
      "field": "리뷰 혜택 안내",
      "id": "GD_USE_YN",
      "type": "Combo (Y/N)",
      "desc": "Y: 표현 / N: 표현안함. 리뷰 작성 시 획득할 수 있는 혜택 안내 배너의 노출 여부를 설정합니다."
    },
    {
      "field": "리뷰 버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (20자 한도, 필수)",
      "desc": "최근 구매 상품 옆에 표시될 리뷰 작성 버튼의 텍스트명입니다."
    },
    {
      "field": "서브 타이틀",
      "id": "MID_TITE_VAL",
      "type": "String (30자 한도)",
      "desc": "구매 이력이 없는 사용자에게 노출되는 대체 안내 구좌의 서브 타이틀입니다."
    },
    {
      "field": "서브 설명 문구",
      "id": "EVNT_DSCR",
      "type": "String (50자 한도)",
      "desc": "구매 이력이 없는 사용자용 대체 안내 구좌의 서브 설명 문구입니다."
    },
    {
      "field": "신청 버튼 형태",
      "id": "BTN_TYPE_VAL",
      "type": "Radio (Y/N)",
      "desc": "Y: 사용 / N: 사용안함. 대체 안내 구좌 내 신청 버튼의 노출 여부를 설정합니다."
    },
    {
      "field": "신청 버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (20자 한도)",
      "desc": "대체 안내 구좌 내 신청 버튼에 노출될 텍스트 명칭입니다. 신청 버튼 형태가 Y일 때 필수입니다."
    }
  ],
  "codeSnippet": "// frmPlanCardReviewGuide.xfdl.js - 리뷰작성 어드민 유효성 검증 및 입력 제한 스크립트\nthis.fnCheckValidation = function ()\n{\n    // 1. 상단 설명 문구와 하단 설명 문구의 상호 배타성 검증\n    if (this.textTopDesc.value && this.textBottomDesc.value)\n    {        this.gfnAlert(\"msg.err.validator\", [\"상단 설명 문구, 하단 설명 문구 중 하나만 입력하세요.\"]);\n        return false;\n    }\n    // 2. 리뷰 버튼 명칭 필수 입력 검증\n    if (!this.editReviewBtnText.value){\n        this.gfnMessage(\"리뷰 버튼 명칭을 입력해주세요.\", \"A\");\n        return false;\n    }\n    // 3. 대체 신청 버튼 사용 시 신청 버튼 명칭 필수 검증\n    if(this.radioJoinBtnYn.value==\"Y\" && !this.editJoinBtnText.value){\n        this.gfnMessage(\"참여 버튼 명칭을 입력해주세요.\", \"A\");\n        return false;\n    }\n    return true;\n};",
  "warnings": "1. [텍스트 배타 규정] 상단 설명 문구(EVNT_HEDR_TEXT)와 하단 설명 문구(EVNT_SUB_TEXT)는 시스템 제약 상 **절대 동시에 입력하여 등록할 수 없습니다.** 동시에 두 값을 저장하려 할 시 검증 오류로 저장이 반려됩니다.\n2. [리뷰 버튼 필수] 리뷰 버튼 명칭(BTN_TEXT_VAL)은 카드 렌더링에 필요한 핵심 요소이므로 생략 불가능한 필수 입력 사항입니다.\n3. [신청 버튼 필수 검증] 대체 구좌의 신청 버튼 형태를 '사용(Y)'으로 지정할 경우, 신청 버튼 명칭(BTN_TEXT_VAL) 역시 필수로 기입해야 하며 누락 시 검증 단계에서 저장 실패 처리가 납니다.\n4. [배너 이미지 제약] PC/MO 대체 배너 이미지는 확장자 검증 및 용량 검증(최대 200KB 이하)이 수반되며, 업로드 용량을 초과하는 경우 넥사크로 UI 핸들러단에서 즉각 반려 및 차단됩니다.",
  "imageGuidelines": {
    "pcSize": "가로 640px × 세로 높이 제한 없음 (대체 배너 영역용)",
    "moSize": "가로 750px × 세로 높이 제한 없음 (대체 배너 영역용)",
    "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "파일 업로드 시 200KB를 1바이트라도 초과하면 넥사크로 UI 내부 파일사이즈 검증 스크립트단에서 경고 메시지와 함께 업로드를 차단합니다."
  },
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "해당 없음 (로그인 사용자의 최근 구매 확정 내역을 API 서버로부터 비동기로 자동 연동하여 호출)",
    "prodMax": "해당 없음",
    "adminValidation": "수동으로 상품을 등록 및 관리하지 않기 때문에 상품 수량 등록 제한이 존재하지 않습니다. 최근 구매 확정 이력을 비동기적으로 조회하여 노출하는 동적 바인딩 컴포넌트입니다."
  }
};
