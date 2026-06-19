// LFmall Exhibition Guide: REVIEW
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["REVIEW"] = {
  "cardKey": "REVIEW",
  "name": "상품리뷰",
  "category": "PROD",
  "sourceFile": "frmPlanCardReview.xfdl (어드민) / Review.tsx (프론트)",
  "moduleCode": "MD7",
  "desc": "기획전 본문 내에 브랜드 리뷰 또는 스태프들의 실착 후기를 이미지 및 텍스트와 함께 노출하여, 실구매자의 생생한 피드백을 통해 기획전의 쇼핑 신뢰감과 구매 전환율을 격상시키는 수동 등록형 상품리뷰 카드입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 최신 V2 레이아웃 기준, 지정된 카드 가로배열에 맞춰 렌더링됩니다. PC 화면에서는 회색 백그라운드 박스(#f2f2f2) 위에 한 화면에 2열(2개) 병렬 격자 형태로 노출되며, 모바일 화면에서는 1열(1개) 수직 카드 흐름으로 노출됩니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "String (Hex Color)",
      "desc": "리뷰 카드의 배경색을 Hex 코드 형태로 입력합니다. 입력한 배경색의 8% 투명도로 연하게 표현됩니다."
    },
    {
      "field": "레이아웃",
      "id": "BLBR_LYOT_VAL",
      "type": "Radio (S/L)",
      "desc": "S: 스와이프 (Swiper 슬라이드 회전형), L: 리스트 (격자 나열형) 형태로 리뷰 노출 방식을 선택합니다."
    },
    {
      "field": "인스타 디자인",
      "id": "ISTG_DSGN_YN",
      "type": "Radio (Y/N)",
      "desc": "Y 설정 시 인스타그램 피드 형태의 둥근 라운드 그리드 이미지 스타일로 렌더링을 전환합니다."
    },
    {
      "field": "별점 표현",
      "id": "LIKE_POINT_YN",
      "type": "Radio (Y/N)",
      "desc": "Y 설정 시 개별 리뷰 영역에 5점 만점의 별점이 표시되며, 어드민 개별 리뷰 등록 시에도 별점 점수 입력이 필수가 됩니다."
    },
    {
      "field": "타이틀",
      "id": "BLBR_MAIN_TEXT",
      "type": "String (22byte 한도)",
      "desc": "상품리뷰 컴포넌트의 메인 타이틀입니다. 최대 2줄(줄바꿈 \\n)까지 입력할 수 있습니다."
    },
    {
      "field": "[개별] 브랜드/상품",
      "id": "BRAND_NM",
      "type": "String (40byte 한도, 필수)",
      "desc": "개별 리뷰 대상 상품의 브랜드명 또는 상품 식별 명칭입니다."
    },
    {
      "field": "[개별] 리뷰 제목",
      "id": "BLBR_DETL_TITL",
      "type": "String (50byte 한도)",
      "desc": "개별 리뷰의 한 줄 머리말 요약 제목입니다."
    },
    {
      "field": "[개별] 리뷰 내용",
      "id": "BLBR_DETL_CONTENTS_VAL",
      "type": "String (200byte 한도, 필수)",
      "desc": "상세한 실제 구매 및 착용 코멘트 본문입니다."
    },
    {
      "field": "[개별] 별점",
      "id": "LIKE_POINT_VAL",
      "type": "Integer (최대 5점)",
      "desc": "별점 표현을 활성화(Y)한 경우 필수 입력 사항이 되며, 5점 이하의 점수를 숫자로 입력합니다."
    },
    {
      "field": "[개별] 고객 정보",
      "id": "WRTR_IFRM_VAL",
      "type": "String (50byte 한도)",
      "desc": "리뷰어의 신체 정보(예: 175cm) 또는 작성자 닉네임 문자열입니다."
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
      "field": "링크 타겟",
      "id": "LINK_TRGE_VAL",
      "type": "Combo (S/B)",
      "desc": "S: 현재창(_self) / B: 새창(_blank)으로 링크 타겟 페이지를 띄우도록 설정합니다."
    }
  ],
  "codeSnippet": "// frmPlanCardReview.xfdl.js - 상품리뷰 어드민 저장 시 유효성 검증 로직 일부\nthis.fn_Validation = function(msgId,msgVal){\n    if (!msgVal) {\n        this.gfnMessage(\"취소되었습니다.\",\"A\",\"\",\"\");\n        return;\n    }\n    var colorCode = this.editBtnText.value;\n    var colorCodePattern = /^#[0-9A-Fa-f]{6,8}$/;\n    if(colorCode && !colorCodePattern.test(colorCode)){\n        this.gfnAlert(\"msg.err.validator\", [\"색상코드를 확인해주세요.\"]);\n        return false;\n    }\n    if(this.gfnIsNull(this.radioLayout.value)||this.gfnIsNull(this.radioInstar.value)||this.gfnIsNull(this.radioStarPoint.value)){\n        this.gfnMessage(\"리뷰 내용을 입력해주세요.\",\"A\",\"\",\"\");\n        return;\n    }\n    for(var i=0;i<this.editAttenCheckNum.value;i++){\n        if(this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.textHeadLine.value\"))\n        ||this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.textBottomDesc.value\"))\n        ||eval(\"this.divDay\"+(i+1)+\".form.textHeadLine.value\").trim()===\"\"\n        ||eval(\"this.divDay\"+(i+1)+\".form.textBottomDesc.value\").trim()===\"\"){\n            this.gfnMessage(\"리뷰 내용을 입력해주세요.\",\"A\",\"\",\"\");\n            return;\n        }\n        if(this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.editPCImg\"+(i+1)+\".value\"))\n        ||this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.editMOImg\"+(i+1)+\".value\"))){\n            this.gfnMessage(\"리뷰 이미지를 등록해주세요.\",\"A\",\"\",\"\");\n            return;\n        }\n        if(this.radioStarPoint.value==\"Y\"&&this.gfnIsNull(eval(\"this.divDay\"+(i+1)+\".form.texStarPoint.value\"))){\n            this.gfnMessage(\"별점을 입력해주세요.\",\"A\",\"\",\"\");\n            return;\n        }\n        if(eval(\"this.divDay\"+(i+1)+\".form.texStarPoint.value\")>5){\n            this.gfnMessage(\"별점의 값이 5를 초과했습니다.\",\"A\",\"\",\"\");\n            return;\n        }\n    }\n    if(this.textHeadDesc.value&&this.textBottomDesc.value){\n        this.gfnMessage(\"상단 설명 문구, 하단 설명 문구 중 하나만 입력하세요.\",\"A\",\"\",\"\");\n        return;\n    }\n    this.fn_Colset();\n};",
  "warnings": "1. [설명 문구 상호 배타성] 상단 설명 문구(BLBR_HEDR_TEXT)와 하단 설명 문구(BLBR_SUB_TEXT)는 시스템 제약 상 절대 동시에 입력하여 저장할 수 없으며, 하나가 채워지면 다른 하나는 무조건 빈 칸이어야 에러를 막을 수 있습니다.\n2. [용량 초과 차단 주의] 업로드하는 모든 이미지(개별 리뷰 이미지 및 카드 메인 배너 이미지)는 파일당 최대 200KB 이하 제한 규격이 적용되어 초과 시 넥사크로 UI 스크립트단에서 업로드가 원천 차단됩니다.\n3. [별점 연동 및 유효성] '별점 표현' 옵션을 사용함(Y)으로 체크한 경우, 등록하는 모든 리뷰 구좌(1~5번)의 별점 점수가 필수로 채워져야 하고 5점을 초과하는 점수를 입력하여 저장하면 에러 팝업과 함께 저장이 자동으로 반려됩니다.\n4. [글자 수 바이트 제한] 브랜드/상품명(최대 40byte), 리뷰 제목(최대 50byte), 리뷰 내용(최대 200byte), 고객 정보(최대 50byte), 타이틀(최대 22byte) 등 텍스트 컬럼들의 바이트 제한 한도가 엄격히 통제되며 초과 시 뒤 영역이 자동 컷오프 처리됩니다.",
  "imageGuidelines": {
    "pcSize": "가로 640px × 세로 640px 권장 (1:1 비율 정비율 착샷) *배경용 카드 배너는 1240px × 420px 권장",
    "moSize": "가로 640px × 세로 640px 권장 (1:1 비율 정비율 착샷) *배경용 카드 배너는 750px × 420px 권장",
    "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
    "maxSize": "파일당 최대 200KB 이하 (개별 리뷰 이미지 및 카드 배경 이미지 모두 해당)",
    "adminValidation": "넥사크로 어드민에서 업로드 시 파일별 200KB 초과인 경우 경고 메시지와 함께 업로드가 차단 및 초기화됩니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 2개 리뷰 등록 필수",
    "tabMax": "최대 5개 리뷰 등록 제한",
    "prodMin": "해당 없음 (상품 설정 기능 없음)",
    "prodMax": "해당 없음 (상품 설정 기능 없음)",
    "adminValidation": "어드민(NBOS) 저장 시 등록된 리뷰 개수가 최소 2개 미만이거나 최대 5개를 초과할 수 없도록 스피너 버튼을 통해 강제 제어됩니다. 또한 상품 매핑 기능이 존재하지 않아 수동으로 브랜드명, 별점, 고객 스펙, 착샷 이미지, 리뷰 내용 텍스트 정보를 1:1 기입하여 전시해야 합니다."
  }
};
