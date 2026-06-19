// LFmall Exhibition Guide: G_PURCHASE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["G_PURCHASE"] = {
  "cardKey": "G_PURCHASE",
  "name": "공동구매",
  "category": "PROD",
  "sourceFile": "frmPlanCardGroupPurchase.xfdl (어드민) / GroupPurchaseCard.tsx (프론트)",
  "moduleCode": "MD6",
  "desc": "기획전 상품에 대하여 실시간으로 구매 및 참여 신청 인원이 누적될수록 단계별 목표(Milestone)를 달성하여 할인 혜택율이 점점 올라가도록 유도하는 마케팅 특화형 소셜 커머스 상품 카드입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상품의 고화질 이미지와 함께 실시간 신청 인원 현황, 그리고 목표 단계별(1단계 / 2단계 / 3단계 최종) 달성 진척도 게이지 바(Progress Bar)를 세련되게 묘사합니다. 사용자가 '공동구매 참여하기' 클릭 시 실시간 API 통신으로 누적 수치가 올라가며, 게이지가 역동적으로 확장하여 고객의 공동 참여 심리와 구매 바이럴을 유도합니다. (PC에서는 가로형 그리드 배열, 모바일에서는 세로 적층형의 유연한 반응형 뷰를 제공합니다.)",
  "backendSettings": [
    {
      "field": "배경 색상 코드",
      "id": "BKGD_CLR_VAL",
      "type": "Color Hex (선택)",
      "desc": "공동구매 컴포넌트 전체의 테마 배경색을 지정합니다. 기본값은 투명(Transparent)입니다."
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
    }
  ],
  "codeSnippet": "// GroupPurchaseCard.tsx - Front-end React 공동구매 실시간 인원 신청 및 게이지 렌더링 일부\nconst GroupPurchaseCard = React.memo(({ gpurInfo, isPreview }) => {\n  const [currentQty, setCurrentQty] = useState(gpurInfo.totalAppliedQty || 0);\n  const { mutate: applyGroupPurchase } = useMutationExhbGpurApplyPOST({\n    onSuccess: (data) => {\n      setCurrentQty(prev => prev + 1);\n      LFAlert.alert(\"공동구매 신청이 완료되었습니다! 목표 달성 시 특가 혜택이 적용됩니다. 🎉\");\n    },\n    onError: (err) => {\n      LFAlert.alert(err.message || \"이미 신청하셨거나 신청 불가능한 상품입니다.\");\n    }\n  });\n  // ...\n});",
  "warnings": "1. [인원수 논리 오류 방지] 각 할인 단계(1단계 ~ 3단계)의 목표 인원수(dsGpurScale.TARGET_QTY)는 이전 단계보다 무조건 순차적으로 큰 값이어야 하며, 위반 시 넥사크로 어드민 폼 저장 스크립트단에서 저장이 차단됩니다.\n2. [실시간 동시성 락] 대량의 신청자가 동시에 공구 참여 버튼을 누르는 핫딜/선착순 형태의 폭주 상황을 방어하기 위해, 프론트 단에서는 트랜잭션 신청 중(isSubmitting 락) 버튼 재클릭을 강제 비활성화해야 합니다.\n3. [취소/환불 보정 규칙] 공동구매 행사 중 결제 취소 또는 환불건 발생 시 누적 참여 인원수의 실시간 감산 처리를 백엔드 스케줄러가 보정 동기화해야 최종 단계 도달 및 가격 정산 오류를 막을 수 있습니다.",
  "imageGuidelines": {
    "pcSize": "가로 500px × 세로 500px 권장 (1:1 비율 정비율)",
    "moSize": "가로 500px × 세로 500px 권장 (1:1 비율 정비율)",
    "allowTypes": "JPG, JPEG, PNG, GIF, BMP",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "공동구매 대표 상품 썸네일 이미지는 넥사크로 UI 파일업로드 핸들러에서 200KB를 초과할 시 업로드를 차단합니다. 업로드 전 사전에 이미지를 리사이징하고 경량화하는 것이 필수입니다."
  },
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "최소 1개 (단일 상품)",
    "prodMax": "최대 1개 (단일 상품)",
    "adminValidation": "공동구매 카드는 단일 상품(1개)만 연동하여 혜택을 제공하는 컴포넌트입니다. 어드민(NBOS) 저장 시 등록된 상품 개수가 1개가 아니거나, 목표 할인 단계(dsGpurScale)가 최소 2단계 미만 또는 5단계를 초과하는 경우 저장 시 에러가 호출되며 기획전 저장이 반려됩니다."
  }
};
