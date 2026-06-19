// LFmall Exhibition Guide: SHARE
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["SHARE"] = {
  "cardKey": "SHARE",
  "name": "공유하기",
  "category": "NAV",
  "sourceFile": "frmPlanCardShare.xfdl (어드민) / SnsShare.tsx (프론트)",
  "moduleCode": "SHARE",
  "desc": "기획전 전용 SNS 공유(카카오톡) 및 URL 복사 버튼 구좌를 배치하여 바이럴 효과를 극대화하는 컴포넌트입니다.",
  "layoutDescription": "사용자 화면(PC/MO)에서는 배경색상 및 여백 옵션이 적용된 컨테이너 내부에 타이틀과 설명 문구가 노출되며, 하단에는 카카오톡 공유 및 URL 복사하기 버튼이 가로 배치됩니다. 카카오톡 공유는 카카오톡 피드 메시지를 전송하고, URL 복사하기는 기획전 고유 URL(제휴 코드 파라미터가 연동된 주소)을 클립보드에 복사합니다. 로그인 여부 검증 및 ETag 로그 전송이 연동되어 작동합니다.",
  "backendSettings": [
    {
      "field": "배경색상",
      "id": "BKGD_CLR_VAL",
      "type": "String (Hex Color)",
      "desc": "기획전 카드의 배경색상 Hex Code 입력 (예: #757575). 정규식 /^#[0-9A-Fa-f]{6,8}$/ 유효성 패턴 체크가 실행됩니다. 프론트엔드 렌더링 시 입력한 색상의 8% 투명도로 연하게 배경색이 적용됩니다."
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
      "id": "SHRG_HEDR_TEXT",
      "type": "String (50byte 한도)",
      "desc": "타이틀 영역 윗부분에 표시되는 설명 텍스트 문구입니다. 하단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "타이틀",
      "id": "SHRG_MAIN_TEXT",
      "type": "String (22byte 한도)",
      "desc": "중앙에 크게 배치되는 메인 헤드라인 텍스트입니다. 줄바꿈(\\n) 기준 최대 2줄까지만 입력 가능합니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "SHRG_SUB_TEXT",
      "type": "String (50byte 한도)",
      "desc": "메인 타이틀 아래 노출되는 보조 설명 텍스트입니다. 상단 설명 문구와 동시에 입력할 수 없습니다."
    },
    {
      "field": "공유 이미지 구분",
      "id": "SHRG_IMG_TYPE_VAL",
      "type": "Radio (E/C)",
      "desc": "E: 기획전 배너 자동 대체 / C: 수기 이미지 개별 등록"
    },
    {
      "field": "AF코드 사용",
      "id": "AFLN_CD",
      "type": "Combo",
      "desc": "공유 링크 내 제휴 코드 주입 종류를 지정합니다. (미사용 / SH002 주문적재 / SH003 방문적재)"
    },
    {
      "field": "연관카드번호",
      "id": "RLTS_CARD_MSTR_NO",
      "type": "String (숫자)",
      "desc": "AF코드를 사용(SH002, SH003)할 때 필수 매핑되는 기획전 내 마스터 카드 번호(MSTR_NO)입니다. 연관 코드가 없을 시 연관카드번호가 비활성화됩니다."
    }
  ],
  "codeSnippet": "// SnsShare.tsx - 제휴코드 조회 후 공유 처리 핵심 코드\nconst { refetch } = useFetchExhbShrgAfCodeGET({\n  exhbNo: Number(exhbNo),\n  evntNo: Number(evntNo),\n  handleSuccess: (data) => {\n    const afCode = data.body ?? \"\";\n    let shareUrl = window.location.href;\n\n    if (!!afCode) {\n      if (searchParams.get(\"af\")) {\n        const url = new URL(shareUrl);\n        const paramsToDelete = [\"af\", \"sc\", \"sp\"];\n        paramsToDelete.forEach((param) => url.searchParams.delete(param));\n        shareUrl = url.toString();\n      }\n      shareUrl += shareUrl.indexOf(\"?\") > 0 ? \"&\" : \"?\";\n      shareUrl += `af=${afCode}&sc=${loginInfo.customerId}&sp=${exhbNo}`;\n    }\n    afterCheckAfCode(shareUrl);\n  }\n});\n\nfunction afterCheckAfCode(shareUrl: string) {\n  if (shareType === \"URL\") {\n    copyClipboard({\n      value: shareUrl,\n      onSuccess: () =>\n        LFAlert.alert(\"클립보드에 복사되었습니다.\").then(() => {\n          handleEventMutation(shareType);\n        }),\n    });\n  } else if (shareType === \"KAKAO\") {\n    sns.KakaoTalk({\n      installTalk: true,\n      objectType: \"feed\",\n      content: {\n        title: `[LF mall]\\n${planNm}`,\n        imageWidth: 300,\n        imageHeight: 300,\n        imageUrl: `${IMAGE_ROOT_PATH}/${thumbImg}`,\n        link: { mobileWebUrl: shareUrl, webUrl: shareUrl }\n      },\n      buttons: [\n        { title: \"웹으로 보기\", link: { mobileWebUrl: shareUrl, webUrl: shareUrl } },\n        { title: \"앱으로 보기\", link: { androidExecParams: \"url=\" + encodeUrl_android, iosExecParams: \"url=\" + encodeUrl_ios } }\n      ]\n    });\n    handleEventMutation(shareType);\n  }\n}",
  "warnings": "1. [설명문구 배타성] 상단 설명 문구(SHRG_HEDR_TEXT)와 하단 설명 문구(SHRG_SUB_TEXT)는 어드민 시스템 제약 상 절대 동시에 입력하여 저장할 수 없습니다. 둘 다 값이 있을 경우 유효성 에러와 함께 저장이 반려됩니다.\n2. [채널 선택 제한] 카카오톡 공유와 URL 복사 라디오 버튼이 둘 다 'N(사용안함)'으로 세팅될 수 없으며, 저장을 위해선 최소 1개 이상 사용하도록 유효성이 검사됩니다.\n3. [이미지 등록 필수성] 공유 이미지 구분을 'C(이미지 등록)'로 선택했음에도 모바일 공유 이미지(MOBI_IMG_PATH_NM)가 업로드되어 있지 않으면 에러가 노출됩니다.\n4. [비로그인 차단 및 이동] 프론트 화면에서 로그인하지 않은 세션의 사용자가 버튼을 클릭하면 '로그인 후 참여해주세요.' 얼럿이 작동하고 로그인 화면으로 자동 이동합니다.\n5. [제휴 파라미터 조립 규칙] 로그인 상태인 경우, 제휴코드 조회 API를 통해 획득한 afCode를 반영하여 'https://.../planning.shtml?af={afCode}&sc={customerId}&sp={exhbNo}' 주소 파라미터를 조립합니다. 만약 기존 주소에 이미 af, sc, sp가 존재하면 해당 파라미터들을 지우고 덮어씁니다.\n6. [이벤트 로그 및 참여 이력] 공유 동작이 완료되면 ETag 이벤트 로그('5_카카오톡' 또는 '4_URL복사')를 발생시키고, 기획전 공유 참여 이력 API를 호출해 참가 이력을 갱신합니다.",
  "imageGuidelines": {
    "pcSize": "제한 없음 (기본 이미지 썸네일 사용)",
    "moSize": "기본 이미지 사이즈 000px × (제한없음) (정비율 1:1 권장)",
    "allowTypes": "JPG, JPEG, GIF, PNG, BMP",
    "maxSize": "파일당 최대 200KB 이하",
    "adminValidation": "공유 이미지를 수기 등록할 때, 모바일 이미지 파일 용량이 200KB를 초과할 경우 넥사크로 UI 및 서버의 파일 용량 체크 로직에 의해 즉시 차단 및 파일 초기화가 이뤄집니다."
  },
  "qtyGuidelines": {
    "tabMin": "최소 1개 채널 선택 필수",
    "tabMax": "최대 2개 채널 선택 가능 (카카오톡, URL)",
    "prodMin": "해당 없음",
    "prodMax": "해당 없음",
    "adminValidation": "어드민 저장 시 카카오톡과 URL 복사 채널이 둘 다 미사용 처리되어 있는 경우 저장이 차단됩니다. 또한, AF코드 선택 콤보가 '미사용'이 아닐 경우에만 연관카드번호(RLTS_CARD_MSTR_NO) 입력 필드가 비활성화 상태에서 활성화 상태로 전환됩니다."
  }
};
