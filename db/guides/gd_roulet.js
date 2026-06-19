// LFmall Exhibition Guide: ROULET
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["ROULET"] = {
  "cardKey": "ROULET",
  "name": "룰렛",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardRoulet.xfdl (어드민) / RouletteGame.tsx (프론트)",
  "moduleCode": "MD9",
  "desc": "기획전 본문 내에 화려하고 유려한 100% 당첨형 룰렛 게임 그래픽을 연출하여, 고객들의 매일 반복적인 참여를 유도함으로써 브랜드 리텐션을 격상시키고 실시간으로 마일리지/시크릿 쿠폰 등의 당첨 혜택을 즉석 지급하는 고기능 마케팅 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 원형의 우아한 회전판 그래픽과 정중앙의 시작(START) 버튼, 상단의 대칭형 삼각 지침 핀이 렌더링됩니다. 어드민 설정에 따라 6칸 또는 8칸 룰렛판으로 분기되며, 사용자가 START 클릭 시 기동되는 5초간의 부드러운 가감속 회전 애니메이션이 탑재되어 극도의 몰입감과 기획전 긴장감을 증폭시킵니다. (PC 및 모바일 환경에서 정비율 1:1 박스 구조를 유지하여 회전 시 찌그러짐 현상이 유도되지 않도록 반응형 랩 처리가 완벽히 적용되어 있습니다. 하단에는 카카오톡 공유 및 링크 복사 SNS 버튼이 함께 배치됩니다.)",
  "backendSettings": [
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
  "codeSnippet": "// RouletteGame.tsx - Front-end React 룰렛 회전판 인터랙션 및 애니메이션 제어 로직 일부\nconst RouletteGame = React.memo(({ rouletteInfo, isPreview }) => {\n  const [isSpinning, setIsSpinning] = useState(false);\n  const [prizeDeg, setPrizeDeg] = useState(0);\n  const { mutate: claimReward } = useMutationExhbRouletClaimPOST({\n    onSuccess: (data) => {\n      // 1. 당첨 결과에 따른 각도 계산 (전체 360도 중 당첨 구간 타겟팅 + 5회 이상 강제 롤링 보정)\n      const targetSector = data.winIndex; // 예: 0 ~ 5 (6칸 기준)\n      const sectorDeg = 360 / (rouletteInfo.rouletType === '6' ? 6 : 8);\n      const randomOffset = sectorDeg * 0.1 + Math.random() * (sectorDeg * 0.8);\n      const stopDeg = 3600 + (360 - (targetSector * sectorDeg + randomOffset));\n      setPrizeDeg(stopDeg);\n      setIsSpinning(true);\n      \n      setTimeout(() => {\n        setIsSpinning(false);\n        LFAlert.alert(`${data.rewardName}에 당첨되셨습니다! 🎁`);\n      }, 5000); // 5초간 회전 애니메이션 진행\n    },\n    onError: (err) => {\n      LFAlert.alert(err.message || \"이미 오늘 참여하셨거나 룰렛 참여 대상이 아닙니다.\");\n    }\n  });\n  \n  const handleStartSpin = () => {\n    if (isPreview) return LFAlert.alert(\"미리보기 화면에서는 룰렛을 돌릴 수 없습니다.\");\n    if (isSpinning) return;\n    claimReward({ campaignNo: rouletteInfo.rouletCampaignNo });\n  };\n  // ...\n});",
  "warnings": "1. [프로모션 연동 유효기간] 룰렛 캠페인의 운영 기간은 반드시 기획전 전시 기간을 완벽히 포함해야 합니다. 기획전 오픈 시점에 룰렛 캠페인이 비활성 상태거나 조기 종료되면 프론트 룰렛판 렌더링 시 빈 화면이 노출되어 대형 장애로 이어질 수 있습니다.\n2. [클라이언트 프론트 조작 어뷰징 방지] 룰렛의 회전 연출 및 결과 표시는 프론트 CSS/JS 모션으로 처리되지만, 실제 당첨 결과 데이터(경품 정보, 지급 여부)는 백엔드 API에서 암호화 검증된 토큰으로 처리되어야 합니다. 로컬 JS 난수로 당첨을 결정할 경우 심각한 보안 어뷰징 위험이 있으므로 절대 금지합니다.\n3. [6칸/8칸 리워드 매핑 일치성] 어드민 저장 시 룰렛 유형(6칸/8칸)과 등록한 리워드 수(dsRouletReward)가 정확히 일치하지 않는 경우 프론트에서 룰렛 판 그래픽 각도가 어긋나 텍스트와 보상이 꼬이게 되므로 저장 전 반드시 사전 체크를 진행해 주십시오.",
  "imageGuidelines": {
    "pcSize": "가로 600px × 세로 600px 권장 (원형 룰렛판 백그라운드 이미지 스펙)",
    "moSize": "가로 450px × 세로 450px 권장 (1:1 비율 정비율 원형)",
    "allowTypes": "PNG, JPG, JPEG (백그라운드 투명 PNG 강력 권장)",
    "maxSize": "파일당 최대 150KB 이하",
    "adminValidation": "룰렛 회전판의 우아한 렌더링을 위해 **원형의 투명 PNG 포맷 사용을 강력 가이드**합니다. 어드민 등록 시 파일 사이즈가 150KB를 1바이트라도 초과하면 넥사크로 UI 파일 검증 단에서 차단됩니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 6칸 구성 (6칸형 선택 시)",
    "tabMax": "최대 8칸 구성 (8칸형 선택 시)",
    "prodMin": "최소 1개 이상 구간에 꽝 이외의 당첨 리워드 매핑 필수",
    "prodMax": "최대 8개 구간 이하 (룰렛 타입 설정에 종속)",
    "adminValidation": "어드민(NBOS) 저장 시 6칸 또는 8칸 룰렛판 유형에 정확히 일치하는 리워드 데이터셋(dsRouletReward) 행 개수가 아닐 시, 논리적 정렬 불일치 에러와 함께 저장이 거부됩니다. 즉, 6칸형 룰렛면 반드시 리워드도 6개, 8칸형이면 반드시 8개가 1대1 완벽 매핑되어야 합니다."
  }
};
