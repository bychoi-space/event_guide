// LFmall Exhibition Guide: FCFS_CPN
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["FCFS_CPN"] = {
  "cardKey": "FCFS_CPN",
  "name": "선착순쿠폰",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardFCFSCoupon.xfdl (어드민) / Coupon.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "지정된 선착순 수량 동안 다운로드 가능한 고기능 프로모션 쿠폰입니다. 쿠폰 형태(일반, e-기프트마일리지, 무료배송)에 따라 전용 UI 테마가 자동 분기되며, 실시간 다운로드 버튼과 함께 다운로드 달성도 프로그레스 바를 노출하여 구매 긴박감을 증폭시킵니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상하단 여백에 반응하며, 혜택 유형(일반쿠폰/기프트마일리지/배송비쿠폰)에 맞춰 테마 스타일이 동적으로 다르게 연출됩니다. 2단 또는 다단 쿠폰을 나열할 경우 설정된 쿠폰 개수(1~5개)만큼 혜택 카드들이 차례로 세로 배열됩니다. 각 쿠폰 카드 내부에는 혜택 타이틀(최대 22byte), 설명(최대 100byte), 남은 수량 비주얼 프로그레스 바(블랙/레드 등 색상 분기), 그리고 다운로드 버튼이 포함됩니다.",
  "backendSettings": [
    {
      "field": "배경 색상 코드",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "선착순쿠폰 영역 뒷배경을 채울 Hex 컬러 코드 값입니다. 기본값은 투명(Transparent)입니다."
    },
    {
      "field": "여백 상단외부",
      "id": "CARD_THTP_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 상단 외부 여백(Margin) 여부를 설정합니다."
    },
    {
      "field": "여백 상단내부",
      "id": "CARD_THTP_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 상단 내부 여백(Padding) 여부를 설정합니다. 기본값 Y."
    },
    {
      "field": "여백 하단외부",
      "id": "CARD_BTM_EXTR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 하단 외부 여백(Margin) 여부를 설정합니다."
    },
    {
      "field": "여백 하단내부",
      "id": "CARD_BTM_INNR_MRGI_USE_YN",
      "type": "Boolean (Y/N)",
      "desc": "컴포넌트 하단 내부 여백(Padding) 여부를 설정합니다."
    },
    {
      "field": "상단 설명 문구",
      "id": "BNFT_HEDR_TEXT_VAL",
      "type": "String (100byte 한도)",
      "desc": "컴포넌트 상단에 노출할 설명 텍스트입니다. 하단 설명 문구와 중복 등록이 불가능합니다."
    },
    {
      "field": "타이틀",
      "id": "BNFT_TITL",
      "type": "String (22byte 한도)",
      "desc": "컴포넌트 메인 타이틀입니다. 최대 2줄까지만 입력 허용됩니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "BNFT_DSCR",
      "type": "String (100byte 한도)",
      "desc": "컴포넌트 하단에 노출할 설명 텍스트입니다. 상단 설명 문구와 중복 등록이 불가능합니다."
    },
    {
      "field": "[개별] 혜택 타이틀",
      "id": "BNFT_DETL_TITL",
      "type": "String (22byte 한도, 필수)",
      "desc": "개별 쿠폰의 대표 명칭(예: 10% 쿠폰)입니다."
    },
    {
      "field": "[개별] 혜택 설명 문구",
      "id": "BNFT_DETL_SUB_VAL",
      "type": "String (100byte 한도, 필수)",
      "desc": "개별 쿠폰의 할인 한도나 보완 혜택 정보입니다."
    },
    {
      "field": "[개별] 선착순 쿠폰",
      "id": "CPN_ID_VAL",
      "type": "String (10자리 숫자, 필수)",
      "desc": "실제 다운로드와 연계할 10자리 마스터 쿠폰 고유 ID 번호입니다. 우측 쿠폰 연결 팝업을 통해 매핑합니다."
    },
    {
      "field": "[개별] 수량 바 색상",
      "id": "PGSS_CLR_VAL",
      "type": "Radio (선택)",
      "desc": "잔여 수량을 표현할 프로그레스 바의 테마 컬러(예: BLACK/RED 등)입니다."
    },
    {
      "field": "[개별] 하단 유의사항",
      "id": "BNFT_DETL_DSCR",
      "type": "String (100byte 한도)",
      "desc": "쿠폰 사용 시의 개별 하단 유의사항 문구입니다."
    },
    {
      "field": "버튼 형태",
      "id": "BTN_STYL_VAL",
      "type": "Radio (N/S/R)",
      "desc": "N: 미노출 / S: 직사각형 / R: 둥근 알약형 라운드 버튼 스타일을 선택합니다."
    }
  ],
  "codeSnippet": "// frmPlanCardFCFSCoupon.xfdl.js - 어드민 선착순 쿠폰 Validation 로직 일부\nthis.fnCheckValidation = function ()\n{\n\tvar colorCodePattern = /^#[0-9A-Fa-f]{6,8}$/;\n\tif(this.editBgColor.value && !colorCodePattern.test(this.editBgColor.value)){\n\t\tthis.gfnAlert(\"msg.err.validator\", [\"배경색상 코드 항목을 체크해주세요.\"]);\n\t\treturn false;\n\t}\n\tif (this.textTopDesc.value && this.textBottomDesc.value)\n\t{\n\t\tthis.gfnAlert(\"msg.err.validator\", [\"상단 설명 문구, 하단 설명 문구 중 하나만 입력하세요.\"]);\n\t\treturn false;\n\t}\n\tvar pcImg = this.editPCImg.value;\n\tvar moImg = this.editMOImg.value;\n\tvar isCheckImgFlag = (pcImg != null && pcImg != \"\") != (moImg != null && moImg != \"\");\n\tif(isCheckImgFlag){\n\t\tthis.gfnAlert(\"msg.err.validator\", [\"PC이미지와 MO이미지 모두 입력해주세요.\"]);\n\t\treturn false;\n\t}\n\tfor(var i=1; i<=this.editCouponCount.value; i++){\n\t\tvar nDiv = this[\"divBenefit\"+i];\n\t\tif(!nDiv.form.editCouponID.value){\n\t\t\tthis.gfnAlert(\"msg.err.validator\", [\"쿠폰을 연결해 주세요.\"]);\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n};",
  "warnings": "1. [텍스트 상호 배타성 규칙] 상단 설명 문구와 하단 설명 문구는 어드민 시스템 제약 상 절대 동시에 입력하여 저장할 수 없으며 하나는 무조건 공백이어야 합니다.\n2. [이미지 세트 매핑 규정] PC용 배너 이미지와 모바일(MO)용 배너 이미지는 반드시 동시에 둘 다 존재하거나 둘 다 비워두어야 하며, 하나만 등록하고 저장을 시도할 경우 Validation 에러가 작동해 저장이 반려됩니다.\n3. [글자 수 바이트 엄격 제한] 어드민 저장 검증 시 설명 문구류는 최대 100byte(한글 기준 50자), 타이틀류는 최대 22byte(한글 기준 11자)로 제한되며 초과분은 즉각 잘림 처리되므로 등록 시 문구 길이를 필히 확인해야 합니다. 또한 메인 타이틀의 라인수(개행)가 2줄을 초과할 시에도 저장이 즉각 차단됩니다.",
  "imageGuidelines": {
    "pcSize": "가로 1240px × 세로 제한 없음 (와이드형 중앙 정렬)",
    "moSize": "가로 750px × 세로 제한 없음 (상단 마진 기본 탑재)",
    "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "어드민 넥사크로 UI 파일 바인더에서 이미지당 200KB를 1바이트라도 초과하는 경우 업로드가 원천 차단됩니다. 핫스팟 링크를 활성화하는 경우 상품 데이터 무결성을 위해 실존하는 정상 판매 상태의 13자리 상품 코드를 정확히 기재해야 Validation을 통과합니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 1개 혜택 카드 노출",
    "tabMax": "최대 5개 혜택 카드 노출 (세로 정렬 한도)",
    "prodMin": "혜택당 10자리 쿠폰 마스터 ID 필수 연계",
    "prodMax": "해당 없음",
    "adminValidation": "선착순 쿠폰 개수는 최소 1개에서 최대 5개까지 세팅 가능하며, 개별 혜택 카드마다 실존하는 10자리 정상 쿠폰 고유 코드가 연결되어 있지 않으면 저장 검증 단계에서 반려 처리됩니다."
  }
};
