// LFmall Exhibition Guide: GAME_CARD1
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["GAME_CARD1"] = {
  "cardKey": "GAME_CARD1",
  "name": "게임카드1",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardGameTypeA.xfdl (어드민) / GameCard1.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "고객 참여 활성화를 위해 탑재된 룰렛 회전형 즉석 경품 당첨 미니 게임 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 Hex 배경색의 8% 불투명도 배경 톤 위에 작성한 상단/하단 설명 문구 및 타이틀이 노출됩니다. 중앙에는 5칸 또는 8칸으로 구성된 룰렛 회전판과 시작 핀(START PIN) 버튼이 배치되며, 고객이 클릭하여 룰렛을 작동하면 3D 회전 애니메이션 연출 후 당첨 결과 팝업(LfModal)을 노출하여 경품(쿠폰/사은품/꽝)을 즉시 지급 및 안내합니다. 하단부에는 HTML 에디터를 통해 작성한 게임 참여 방법 및 법적 유의사항(EVNT_DSCR)이 표출됩니다.",
  "backendSettings": [
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
      "field": "시작 전 유형",
      "id": "BFR_CNTN_TYPE_VAL",
      "type": "Radio (I/M, 필수)",
      "desc": "게임 시작 전 노출할 콘텐츠 유형을 결정합니다. I: 이미지, M: 동영상."
    },
    {
      "field": "시작 후 유형",
      "id": "AFTR_CNTN_TYPE_VAL",
      "type": "Radio (I/M, 필수)",
      "desc": "게임 참여 후 노출할 콘텐츠 유형을 결정합니다. I: 이미지, M: 동영상."
    },
    {
      "field": "게임 참여 제한수",
      "id": "APPC_LMTT_CNT",
      "type": "Integer (필수)",
      "desc": "고객 ID당 최대 참여 가능한 횟수를 지정합니다."
    },
    {
      "field": "유의사항 본문",
      "id": "EVNT_DSCR",
      "type": "RichText (HTML)",
      "desc": "게임판 하단에 표출될 게임 규칙, 당첨 안내 및 법적 유의사항 내용입니다."
    }
  ],
  "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 양식(예: #FFFFFF)으로 입력해야 하며 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 벗어나면 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구(EVNT_HEDR_TEXT)와 하단 설명 문구(EVNT_SUB_TEXT)는 동시에 입력할 수 없으며 하나는 비어있어야 합니다.\n3. [당첨확률 100% 검증 규칙] 설정된 모든 혜택 영역(1~5회차 또는 1~8회차)의 개별 당첨 확률(editProbability) 합계는 **반드시 정확히 100%**여야 하며, 100%를 초과하거나 미달하면 '당첨확률 합계 100% 맞춰주세요.' 메시지와 함께 서버 저장이 전면 차단됩니다.\n4. [시작 전/후 리소스 필수] 게임 시작 전 및 시작 후의 이미지 또는 동영상 URL 정보가 누락될 경우 '게임시작 전/후 이미지를 등록해주세요.' 혹은 '동영상URL을 등록해주세요.' Validation 오류로 저장이 거부됩니다.\n5. [혜택별 결합 규칙]:\n   - 쿠폰(C): 연결된 쿠폰이 최소 1개 이상 필수이고 이미지 표현 시 쿠폰 이미지 필수.\n   - 사은품(F): 사은품 이미지 필수 및 사은품 명칭 필수, 선착순 체크 시 선착순 인원 필수.\n   - 꽝(X): 당첨 실패 시 안내할 실패 이미지가 반드시 업로드되어야 합니다.\n6. [시작 후 수정 불가] 기획전 상태가 시작(`START`)인 경우에는 혜택 조각 개수 조절 및 개별 혜택 데이터 변경이 안전을 위해 비활성화 및 차단됩니다.",
  "imageGuidelines": {
    "pcSize": "480px × 가변 높이 (룰렛판 및 혜택 이미지 1:1 PNG 권장)",
    "moSize": "480px × 가변 높이 (1:1 비율 권장)",
    "allowTypes": "PNG, JPG, JPEG, GIF",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "넥사크로 UI 이미지 등록 시 200KB를 초과할 경우 용량 한도 초과 오류와 함께 업로드가 취소되며, 투명도가 가미된 룰렛판 및 실패 이미지는 PNG 포맷으로 디자인할 것을 권장합니다."
  },
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "룰렛 타입(5 또는 8)에 맞추어 최소 5개 또는 8개의 혜택 행 세팅 필수",
    "prodMax": "최대 8개 혜택 영역(조각) 설정 제한",
    "adminValidation": "룰렛 타입이 5일 때는 5개의 혜택만 등록되어야 하고, 8일 때는 8개의 혜택이 정상 매핑되어야 합니다. 또한, 각 쿠폰 혜롯 슬롯마다 최대 5개까지의 쿠폰 ID가 다중 바인딩 가능(maxBenefitCnt: '5')합니다."
  }
};
