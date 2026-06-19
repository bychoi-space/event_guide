// LFmall Exhibition Guide: COMMENT
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["COMMENT"] = {
  "cardKey": "COMMENT",
  "name": "댓글",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardComment.xfdl (어드민) / Comment.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "사용자들의 실시간 댓글 작성 및 소통 참여가 이루어지는 대화형 영역입니다.",
  "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 배경 톤 위에 작성한 상단/하단 설명 문구 및 타이틀이 노출됩니다. 중앙에는 텍스트 및 대댓글을 입력할 수 있는 댓글 입력창(등록 버튼 포함)이 배치되며, 하단에는 전체 댓글 개수 표시와 정렬 필터(최신순/추천순/내글보기) 및 댓글 리스트가 렌더링됩니다. 대댓글 허용(LWRN_CMNT_PMSN_YN='Y') 시 답글 형태의 대댓글 목록이 활성화되며, 하단 중앙의 '댓글 더보기' 버튼을 통해 추가적인 페이지 목록을 불러옵니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "String (최대 7자)",
      "desc": "Hex Color Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 패턴으로 색상 포맷 유효성이 검증되며, 프론트 렌더링 시 지정한 배경색의 8% 수준으로 연하게 딤드 처리되어 배경으로 자동 표현됩니다."
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
      "id": "CMNT_HEDR_TEXT",
      "type": "String (50byte 한도)",
      "desc": "컴포넌트 상단 영역에 노출되는 한글 약 25자 내외의 설명입니다. 하단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "타이틀",
      "id": "CMNT_MAIN_TEXT",
      "type": "String (22byte 한도)",
      "desc": "컴포넌트 메인 타이틀입니다. 한글 약 11자 이내로 입력 가능하며, 줄바꿈(\\n)은 최대 2줄까지만 등록할 수 있습니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "CMNT_SUB_TEXT",
      "type": "String (50byte 한도)",
      "desc": "메인 타이틀 아래 노출되는 한글 약 25자 내외의 보조 설명입니다. 상단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "대댓글 허용 여부",
      "id": "LWRN_CMNT_PMSN_YN",
      "type": "Radio (Y/N, 필수)",
      "desc": "Y: 대댓글 작성 허용, N: 대댓글 작성 차단. 미지정 시 유효성 검사에서 오류가 발생합니다."
    },
    {
      "field": "대댓글 레벨",
      "id": "LWRN_CMNT_MAX_LVL_VAL",
      "type": "Integer (기본값 1)",
      "desc": "대댓글이 허용될 때의 최대 깊이 레벨 수준을 지정합니다."
    }
  ],
  "warnings": "1. [배경색상 검증] 배경색상 Hex 코드는 '#'을 포함한 7자 또는 8자 Hex Code 포맷 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 만족해야 하며, 어긋나면 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구(CMNT_HEDR_TEXT)와 하단 설명 문구(CMNT_SUB_TEXT)는 어드민 검증에 의해 동시에 입력할 수 없습니다. 하나는 공백이어야 유효성 에러를 피할 수 있습니다.\n3. [대댓글 허용 필수] 대댓글 허용 여부(LWRN_CMNT_PMSN_YN)는 필수 선택 항목이며, 미지정 시 '대댓글 허용여부를 선택해 주세요.' 경고가 작동합니다.\n4. [바이트 및 줄바꿈 제한] 타이틀(CMNT_MAIN_TEXT)은 최대 22byte(한글 11자) 이내여야 하고, 줄바꿈은 최대 2줄까지만 허용됩니다. 2줄 초과 시 경고와 함께 뒤 내용이 잘립니다. 상/하단 설명 문구는 각각 최대 50byte(한글 25자) 이내로만 등록이 승인됩니다.\n5. [댓글 내용 제한] 프론트엔드 댓글 입력창에서 작성 가능한 글 길이는 한글 기준 최대 200자(400byte) 이내로 통제됩니다.",
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "해당 없음",
    "prodMax": "해당 없음",
    "adminValidation": "어드민 저장 시 대댓글 허용 여부 필수 체크 및 상/하단 설명의 배타적 중복 입력 밸리데이션 검사, 타이틀의 22byte 및 2줄 제한 유효성 체크가 트랜잭션 전에 동작하여 어긋날 경우 경고 메시지와 함께 저장이 원천 차단됩니다."
  }
};
