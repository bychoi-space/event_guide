// LFmall Exhibition Guide: TEXT
// Auto-generated from db_guides.js split.
// Do NOT edit the header. Edit the guide object properties only.

window.ExhibitionGuides = window.ExhibitionGuides || {};
window.ExhibitionGuides["TEXT"] = {
  "cardKey": "TEXT",
  "name": "텍스트",
  "category": "BANNER",
  "sourceFile": "frmPlanCardText.xfdl (어드민) / Intro.tsx (프론트)",
  "moduleCode": "MD2",
  "desc": "자유롭고 감각적인 대/소단 타이틀과 설명 문구를 배치할 수 있는 공용 텍스트 영역입니다. 이미지 업로드 기능 없이 순수 텍스트와 레이아웃 조작을 지원합니다.",
  "layoutDescription": "사용자 프론트 영역(PC 및 모바일 화면)에서 상하단 여백 및 배경 색상 지정에 따라 텍스트가 정렬되어 렌더링됩니다. PC는 기본 중앙 정렬이며, 모바일은 좌측 정렬 레이아웃이 적용됩니다. 컴포넌트는 상단 설명 문구, 메인 타이틀, 하단 설명 문구, 본문 내용, 진행기간 순으로 수직 배열하여 브랜드의 아이덴티티와 가치를 감각적으로 전달합니다.",
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
      "id": "TEXT_HDR_TITL",
      "type": "String (50자 한도)",
      "desc": "타이틀 최상단에 작게 배치되는 강조형 보조 문구입니다."
    },
    {
      "field": "타이틀",
      "id": "TEXT_TITL",
      "type": "String (30자 한도)",
      "desc": "텍스트 카드의 메인 헤드라인 제목입니다."
    },
    {
      "field": "하단 설명 문구",
      "id": "TEXT_SUB_TITL",
      "type": "String (50자 한도)",
      "desc": "타이틀 바로 하단에 배치되는 서브 설명 텍스트입니다."
    },
    {
      "field": "내용",
      "id": "TEXT_CONTENTS_VAL",
      "type": "String (120자 한도, 필수)",
      "desc": "기획전 상세 내용 문구 본문입니다."
    },
    {
      "field": "진행기간",
      "id": "PGSS_PERD_TEXT",
      "type": "String (선택)",
      "desc": "진행하는 이벤트 기간 또는 날짜 표시 텍스트입니다."
    }
  ],
  "codeSnippet": "// Intro.tsx - Front-end React 텍스트(Intro) 컴포넌트 핵심 분석 소스\nexport const Intro = ({ template }) => {\n  const { data } = useFetchPlanIntroModuleGET({ param: { moduleType: template?.moduleType } });\n  if (data?.body?.exhibitionYn === \"N\") return <></>;\n  return (\n    <div className={styles.intro}>\n      {data?.body?.content?.split(\"\\n\").map((title, idx) =>\n        title === \"\" ? <br key={idx} /> : <p key={idx}>{title}</p>\n      )}\n      <p className={styles.date}>{data?.body?.moduleTitle}</p>\n    </div>\n  );\n};",
  "warnings": "1. [이미지 미지원] 텍스트 카드는 이미지를 직접 업로드하거나 배경 이미지로 사용할 수 있는 기능이 아예 존재하지 않습니다. 따라서 오직 단색 배경(White 등)과 텍스트 레이아웃으로만 가이드를 기획해야 합니다.\n2. [정렬 차이 주의] PC 버전은 text-align: center(중앙 정렬) 스펙이 강제 적용되나, 모바일 버전은 text-align: left(좌측 정렬)이 기본 탑재되므로 듀얼 레이아웃 설계 시 시각적 정렬 차이를 감안해야 합니다.\n3. [글자 제한 규격] 타이틀 최대 30자, 상단/하단 설명 문구 각 최대 50자, 본문 내용은 최대 120자 제한이 넥사크로 UI 및 DB 단에서 강력히 규제되므로, 텍스트 입력 시 바이트 한계를 준수해야 합니다.",
  "imageGuidelines": {
    "pcSize": "해당 없음 (이미지 업로드 미지원)",
    "moSize": "해당 없음 (이미지 업로드 미지원)",
    "allowTypes": "해당 없음",
    "maxSize": "해당 없음",
    "adminValidation": "텍스트 카드는 이미지를 업로드할 수 있는 데이터 구조나 파일 핸들러가 구성되어 있지 않습니다. 순수 텍스트 필드로만 데이터를 저장하고 조회합니다."
  },
  "qtyGuidelines": {
    "tabMin": "해당 없음",
    "tabMax": "해당 없음",
    "prodMin": "해당 없음",
    "prodMax": "해당 없음",
    "adminValidation": "상품 매핑 기능이 없는 순수 텍스트 카드입니다. 어드민(NBOS) 저장 시 내용(TEXT_CONTENTS_VAL)은 필수 입력 사항이며 빈 값으로 저장할 경우 반려됩니다."
  }
};
