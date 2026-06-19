// LFmall Exhibition Guide: GAME_CARD2
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["GAME_CARD2"] = {
  "cardKey": "GAME_CARD2",
  "name": "게임카드2",
  "category": "PROMOTION",
  "sourceFile": "frmPlanCardGameTypeB.xfdl (어드민) / casualGameTypeB.tsx (프론트)",
  "moduleCode": "MD3",
  "desc": "고객 참여 활성화를 위해 탑재된 카드 뒤집기(Flap) 즉석 경품 당첨 미니 게임 컴포넌트입니다.",
  "layoutDescription": "사용자 프론트 영역(PC/모바일 기획전 상세페이지)에서는 어드민에서 입력한 상단/하단 설명 문구 및 타이틀이 전시되며, 그 하단에 HSL 브랜드 색상 기반의 뒤집기 카드 세트(기본 3장 또는 6장 배치)가 노출됩니다. 고객이 한 장의 카드를 클릭하여 뒤집으면 smooth한 3D 회전 플랩(Flap) 애니메이션 효과와 함께 뒷면에 배치된 개별 옵션 모션(GIF)이 재생된 후 즉석 당첨 결과 팝업(LfModal)이 노출되어 혜택(쿠폰/사은품/꽝)을 지급합니다. 최하단부에는 유의사항 본문(EVNT_DSCR)이 표출됩니다.",
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
      "field": "게임 참여 제한수",
      "id": "APPC_LMTT_CNT",
      "type": "Integer (필수)",
      "desc": "고객 ID당 최대 참여 가능한 횟수를 지정합니다. 기본값 1."
    },
    {
      "field": "유의사항 본문",
      "id": "EVNT_DSCR",
      "type": "RichText (HTML)",
      "desc": "게임판 하단에 표출될 게임 규칙, 당첨 안내 및 법적 유의사항 내용입니다. 최대 50자 제한(staNotice)."
    }
  ],
  "warnings": "1. [배경색상 검증] 배경색상은 '#'을 포함한 Hex Code 양식(예: #FFFFFF)으로 입력해야 하며 정규식 /^#[0-9A-Fa-f]{6,8}$/ 을 벗어나면 저장이 반려됩니다.\n2. [설명문구 배타성] 상단 설명 문구(EVNT_HEDR_TEXT)와 하단 설명 문구(EVNT_SUB_TEXT)는 동시에 입력할 수 없으며 하나는 비어있어야 합니다.\n3. [타이틀 및 줄바꿈] 타이틀 문구는 최대 30자 한글 제한이 적용되며 엔터 키를 활용한 줄바꿈은 최대 2줄까지만 허용되고 초과 시 반려됩니다.\n4. [당첨확률 100% 검증 규칙] 설정된 모든 혜택의 개별 당첨 확률(editProbability) 합계는 **반드시 정확히 100%**여야 하며, 100%를 초과하거나 미달하면 '당첨확률 합계 100% 맞춰주세요.' 메시지와 함께 서버 저장이 전면 차단됩니다.\n5. [옵션 설정 검증] 각 카드 옵션의 명칭은 필수이며 최대 10자 제한입니다. 또한 선택 모션 이미지는 **반드시 GIF 포맷**이어야 하며, 200KB 용량 제한을 초과하면 저장이 원천 차단됩니다.\n6. [혜택별 결합 규칙]:\n   - 쿠폰(C): 연결된 쿠폰이 최소 1개 이상 필수이고 다중 쿠폰(2개 이상) 또는 이미지표현(I) 설정 시 쿠폰 이미지 필수.\n   - 사은품(F): 사은품 이미지 필수 및 사은품 명칭(최대 20자) 필수, 선착순 체크 시 선착순 인원 필수.\n   - 꽝(X): 당첨 실패 시 안내할 실패 이미지가 반드시 업로드되어야 합니다.\n7. [시작 후 수정 불가] 기획전 상태가 시작(\"START\")인 경우에는 혜택 조각 개수, 옵션 설정 조절 및 상세 데이터 변경이 안전을 위해 비활성화 및 차단됩니다.",
  "imageGuidelines": {
    "pcSize": "개별 카드 기본 이미지: 1240px × 350px / 모션 GIF: 400px × 400px 권장",
    "moSize": "개별 카드 기본 이미지: 335px × 200px / 모션 GIF: 400px × 400px 권장",
    "allowTypes": "JPG, JPEG, PNG (기본 이미지) / GIF (선택 모션 이미지 전용)",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "어드민 이미지 파일 업로드 시 200KB를 초과할 경우 경고 메시지와 함께 업로드가 차단되며, 모션 이미지 슬롯에는 GIF 확장자 파일만 업로드 가능하도록 확장자 2차 유효성 체크가 작동합니다."
  },
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "최소 3개 이상의 카드 옵션 행 및 혜택 매핑 구성 권장",
    "prodMax": "최대 10개 카드 옵션 및 10개 혜택 설정 제한",
    "adminValidation": "카드 옵션 개수(editOptionCount)와 혜택 개수(editBenefitCount)는 스피너를 통해 최소 1개에서 최대 10개까지 설정 가능하며, 각각 매핑된 개수만큼의 옵션 명칭/이미지 및 혜택 데이터가 입력되지 않을 경우 저장 유효성 검사 단계에서 에러 알림과 함께 저장이 차단됩니다."
  }
};
