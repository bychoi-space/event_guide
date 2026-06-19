// LFmall Exhibition Guide: M_BENEFIT
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["M_BENEFIT"] = {
  "cardKey": "M_BENEFIT",
  "name": "마케팅혜택",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardBenefitM.xfdl (어드민) / MarketingBenefitCard.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "기획전 본문 내에서 앱 푸시 수신, 야간 마케팅 알림 동의, 소셜 계정 연동 로그인 등 다양한 마케팅성 고객 액션을 장려하고 조건 충족 시 실시간 쿠폰 또는 포인트를 자동 발급하는 혜택 유도 전용 프로모션 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 은은한 그라데이션이 감도는 와이드 띠 배너와 혜택 수령용 바로가기 버튼(CTA)이 가로 플렉스로 배치됩니다. 사용자가 '동의하고 쿠폰받기' 클릭 시 브라우저 푸시 알림 권한 체크 또는 소셜 계정 동의 창이 팝업되며, 성공 처리에 따라 버튼 상태가 실시간 '동의 완료' 회색 비활성형으로 유려하게 토글 전환되어 동시성 중복 발급을 차단합니다.",
  "backendSettings": [
    {
      "field": "컴포넌트 배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "마케팅 혜택 영역의 배경색상입니다. 기본값은 투명(Transparent)이며 HSL 테마 매칭 컬러를 추천합니다."
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
      "field": "버튼 형태",
      "id": "BTN_STYL_VAL",
      "type": "Radio (N/S/R)",
      "desc": "N: 미노출 / S: 직사각형 / R: 둥근 알약형 라운드 버튼 스타일을 선택합니다."
    },
    {
      "field": "버튼 명칭",
      "id": "BTN_TEXT_VAL",
      "type": "String (30byte)",
      "desc": "노출할 버튼의 텍스트 이름입니다."
    }
  ],
  "codeSnippet": "// MarketingBenefitCard.tsx - Front-end React 앱 푸시 및 야간 알림 동의 인터랙션 일부\nconst MarketingBenefitCard = React.memo(({ mktgInfo, isPreview }) => {\n  const [isAgreed, setIsAgreed] = useState(mktgInfo.isPushConsented || false);\n  const { mutate: requestPushConsent } = useMutationExhbPushConsentPOST({\n    onSuccess: (data) => {\n      setIsAgreed(true);\n      LFAlert.alert(\"동의 완료! 마케팅 수신동의 무료배송 쿠폰 발급이 완료되었습니다. 🎁\");\n    },\n    onError: (err) => {\n      LFAlert.alert(err.message || \"이미 혜택을 받으셨거나 참여 대상 고객이 아닙니다.\");\n    }\n  });\n  // ...\n});",
  "warnings": "1. [유형별 디바이스 종속성] 앱 푸시(PUSH) 및 야간 알림(NIGHT) 동의는 모바일 모바일 웹뷰(WebView) 또는 모바일 네이티브 앱(App) 환경에서만 정상 작동합니다. PC 및 모바일 일반 브라우저(Safari, Chrome 등) 진입 시에는 브라우저 API 환경의 제약으로 동의 팝업이 무조건 에러 차단되므로, 프론트에서는 PC/웹 환경에 대응해 'LFmall 모바일 앱 전용 혜택' 문구와 함께 스토어 다운로드 랜딩 또는 QR코드 레이어를 띄우도록 가드 코딩이 필수 적용되어야 합니다.\n2. [리워드 공백 반려] 마케팅 캠페인 저장 시 발급 대상 쿠폰이나 마일리지 데이터셋(dsMktgReward)이 완전 비어있을 시 넥사크로 유효성 스크립트에 의해 저장이 원천 반려됩니다.\n3. [개인정보 처리 동기화] 동의 철회 또는 푸시 권한 수동 변경 시의 싱크 상태를 백엔드 배치 데몬이 주기적으로 동기화하여야 부정 중복 발급 시도를 제어할 수 있습니다.",
  "imageGuidelines": {
    "pcSize": "가로 800px × 세로 200px 권장 (와이드형 띠 배너)",
    "moSize": "가로 710px × 세로 280px 권장 (1단 띠 배너)",
    "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
    "maxSize": "파일당 최대 150KB 이하",
    "adminValidation": "커스텀 홍보 이미지 띠 배너를 등록하는 경우 파일 용량이 150KB를 초과하게 되면 업로드가 즉시 차단되므로, 업로드 전에 무손실 경량화를 사전에 권장합니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 1개 마케팅 구좌 등록 필수",
    "tabMax": "최대 2개 마케팅 구좌 등록 가능 (수직 스택형 배열 한도)",
    "prodMin": "해당 사항 없음 (상품 비연합 독립형)",
    "prodMax": "최대 1개 리워드 코드 매핑 제한",
    "adminValidation": "마케팅 구좌 저장 시 연동 가능한 리워드 혜택(dsMktgReward)은 논리 정합성 유지를 위해 최대 1개로 제약됩니다. 리워드 코드가 존재하지 않거나 2개 이상 과도하게 매핑되어 저장 시도할 경우, 어드민 검증에 의해 저장이 반려됩니다."
  }
};
